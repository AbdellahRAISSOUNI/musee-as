import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Musée Abderrahman Slaoui",
  description: "Fondation Abderrahman Slaoui - Musée d'art et de culture marocaine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
