import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar"; // Importez votre Navbar
import "@/app/globals.css"; // Importez votre fichier CSS global
import Footer from "@/components/footer"; // Importez votre Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hicham Garoum - Portfolio",
  description: "Découvrez le portfolio de Hicham Garoum, développeur web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {/* Ajout de bg-gray-900 pour un fond unifié */}
      <body className={`${inter.className} bg-gray-900 text-content`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}