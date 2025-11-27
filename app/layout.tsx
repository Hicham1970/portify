import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar"; // Importez votre Navbar
import "./globals.css";
import Footer from "@/components/footer";
import ParticleCanvas from "@/components/ParticleCanvas";


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
      <body className={`${inter.className} bg-gray-800 text-content`}>
        <ParticleCanvas />
        {/* Conteneur pour l'animation de fond globale */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        </div>
        
        <Navbar />
        {children}
          <Footer />
      </body>
    </html>
  );
}