import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import HydrationErrorSuppressor from "@/components/HydrationErrorSuppressor";
import ClientErrorBoundary from "@/components/ClientErrorBoundary";

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
        <HydrationErrorSuppressor />
        <ClientErrorBoundary>
        <Header />
        {children}
        </ClientErrorBoundary>
      </body>
    </html>
  );
}
