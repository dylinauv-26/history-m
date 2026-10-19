import type { Metadata } from "next";
import { Cormorant_Garamond, PT_Serif } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = PT_Serif({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Виртуальный музей «Летопись Руси» — Средневековая Русь в XIII–XV вв",
  description: "Виртуальный музей о деятелях Руси XIII–XV веков: Даниил Московский, Иван Калита, Феофан Грек, Афанасий Никитин, Дионисий.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}