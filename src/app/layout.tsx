import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beplauze",
  description:
    "Descubra as melhores peças, shows, festas e exposições do Brasil. Na Beplauze você encontra os melhores eventos da sua cidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo-icon.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
