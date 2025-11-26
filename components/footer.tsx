import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-background/90 backdrop-blur-2xl py-6 mt-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center text-content/60 text-sm">
        © {new Date().getFullYear()} Hicham Garoum. Tous droits réservés.
        <p className="mt-1">Développé avec ❤️ et Next.js</p>
      </div>
    </footer>
  );
}