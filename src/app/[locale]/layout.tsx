import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/index.scss";
import { ReactNode } from "react";
import { Header } from "../components/shared/Header";

const inter = Inter({ subsets: ["latin"], weight: ["700", "400", "500"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
