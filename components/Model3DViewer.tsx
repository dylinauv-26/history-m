'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Model3DViewerProps {
  modelPath: string;
  autoRotate?: boolean;
}

const frameClass =
  'w-full h-[400px] md:h-[600px] lg:h-[700px] ultrawide:h-[800px] bg-parchment-dark border border-ink/20 relative';

export const Model3DViewer: React.FC<Model3DViewerProps> = ({ modelPath, autoRotate = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState<string>('Инициализация...');
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    let mounted = true;
    let renderer: any;
    let controls: any;
    let animationId: number;
    let handleResize: (() => void) | undefined;

    const initScene = async () => {
      try {
        setLoadingStatus('Загрузка библиотек...');

        const THREE = await import('three');
        const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');
        const isGltf = /\.(glb|gltf)$/i.test(modelPath);

        if (!mounted || !containerRef.current) return;

        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;
        if (width === 0 || height === 0) {
          setLoadingStatus('Ошибка: контейнер имеет размер 0');
          return;
        }

        // Сцена
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xe8dbc0);

        // Камера
        const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
        camera.position.set(0, 2, 6);
        camera.lookAt(0, 0, 0);

        // Рендерер
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.domElement.style.display = 'block';
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
        container.innerHTML = '';
        container.appendChild(renderer.domElement);

        // Освещение: тёплый ключевой свет и мягкая заливка
        scene.add(new THREE.HemisphereLight(0xfff4e0, 0x8a6a50, 0.9));
        const keyLight = new THREE.DirectionalLight(0xffe8c8, 1.4);
        keyLight.position.set(5, 10, 7);
        scene.add(keyLight);
        const rimLight = new THREE.DirectionalLight(0xffffff, 0.5);
        rimLight.position.set(-5, 5, -5);
        scene.add(rimLight);

        // Контролы
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.autoRotate = autoRotate;
        controls.autoRotateSpeed = 0.5;

        setLoadingStatus('Загрузка модели...');

        const onLoaded = (obj: any, keepMaterials: boolean) => {
          if (!mounted) return;

          // Центрируем и нормализуем размер
          const box = new THREE.Box3().setFromObject(obj);
          const size = box.getSize(new THREE.Vector3());
          const center = box.getCenter(new THREE.Vector3());
          const scaleFactor = 4 / Math.max(size.x, size.y, size.z);
          obj.scale.setScalar(scaleFactor);
          obj.position.copy(center.multiplyScalar(-scaleFactor));

          if (!keepMaterials) {
            // У OBJ нет своих материалов — красим «под бронзу»
            obj.traverse((child: any) => {
              if (!child.isMesh) return;
              if (child.geometry && !child.geometry.attributes.normal) {
                child.geometry.computeVertexNormals();
              }
              child.material = new THREE.MeshStandardMaterial({
                color: 0xa07a52,
                metalness: 0.35,
                roughness: 0.55,
                side: THREE.DoubleSide,
              });
            });
          }

          scene.add(obj);
          controls.target.set(0, 0, 0);
          controls.update();
          setLoadingStatus('');
        };

        const onProgress = (progress: ProgressEvent) => {
          if (progress.total > 0) {
            setLoadingStatus(`Загрузка: ${Math.round((progress.loaded / progress.total) * 100)}%`);
          } else {
            setLoadingStatus(`Загружено: ${Math.round(progress.loaded / 1024)} KB`);
          }
        };

        const onError = () => {
          if (!mounted) return;
          setMissing(true);
          setLoadingStatus('Модель не найдена');
        };

        if (isGltf) {
          const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
          new GLTFLoader().load(modelPath, (gltf) => onLoaded(gltf.scene, true), onProgress, onError);
        } else {
          const { OBJLoader } = await import('three/examples/jsm/loaders/OBJLoader.js');
          new OBJLoader().load(modelPath, (obj) => onLoaded(obj, false), onProgress, onError);
        }

        const animate = () => {
          if (!mounted) return;
          animationId = requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        animate();

        handleResize = () => {
          if (!containerRef.current) return;
          const w = containerRef.current.clientWidth;
          const h = containerRef.current.clientHeight;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        };
        window.addEventListener('resize', handleResize);
      } catch (error: unknown) {
        setLoadingStatus('Ошибка инициализации 3D');
      }
    };

    initScene();

    return () => {
      mounted = false;
      if (animationId) cancelAnimationFrame(animationId);
      if (handleResize) window.removeEventListener('resize', handleResize);
      if (controls) controls.dispose();
      if (renderer) {
        renderer.domElement.remove();
        renderer.dispose();
      }
    };
  }, [isClient, modelPath, autoRotate]);

  if (!isClient) {
    return (
      <div className={`${frameClass} flex items-center justify-center`}>
        <span className="text-ink-muted text-lg italic">Инициализация...</span>
      </div>
    );
  }

  return (
    <div className={frameClass}>
      <div ref={containerRef} className="w-full h-full absolute inset-0" />

      {loadingStatus && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-parchment-dark/95 text-center px-6">
          <span className="text-ink-muted text-lg italic">{loadingStatus}</span>
          {missing && <code className="text-sm text-bordo">public{modelPath}</code>}
        </div>
      )}

      {!loadingStatus && (
        <div className="absolute bottom-4 right-4 bg-parchment-light/90 border border-ink/15 px-4 py-2 text-xs uppercase tracking-widest text-ink-muted pointer-events-none">
          Вращайте мышью • Приближайте колесиком
        </div>
      )}
    </div>
  );
};

export default Model3DViewer;
