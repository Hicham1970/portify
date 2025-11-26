import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar"; // Importez votre Navbar
import "./globals.css"; // Importation relative directe
import Footer from "@/components/footer";


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
      <body className={`${inter.className} bg-gray-900 text-content`}>
        {/* Conteneur pour l'animation de fond globale */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#8080806a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        <Navbar />
        {children}
          <Footer />
      </body>
    </html>
  );
}