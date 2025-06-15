import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import HydrationErrorSuppressor from "@/components/HydrationErrorSuppressor";
import ClientErrorBoundary from "@/components/ClientErrorBoundary";
import Footer from '@/components/Footer';
import ThemeProvider from "@/components/ThemeProvider";

// Add a timestamp to force cache refresh
const faviconVersion = Date.now();

export const metadata: Metadata = {
  title: "Musée Abderrahman Slaoui",
  description: "Fondation Abderrahman Slaoui - Musée d'art et de culture marocaine",
  icons: {
    icon: `/favicon-new.ico?v=${faviconVersion}`,
    shortcut: `/favicon-new.ico?v=${faviconVersion}`,
    apple: `/favicon-new.ico?v=${faviconVersion}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="icon" href={`/favicon-new.ico?v=${faviconVersion}`} sizes="any" />
      </head>
      <body className="antialiased">
        <HydrationErrorSuppressor />
        <ClientErrorBoundary>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        </ClientErrorBoundary>
      </body>
    </html>
  );
}
