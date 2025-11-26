import React from 'react';

export default function ProjectsPage() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-primary mb-8">Mes Projets</h1>
        <p className="text-lg text-content/80 mb-12">
          Découvrez quelques-uns de mes travaux récents. Chaque projet reflète ma passion pour le développement et ma capacité à résoudre des problèmes complexes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ici, vous ajouterez vos composants de carte de projet */}
          <div className="bg-white/5 p-6 rounded-lg shadow-lg border border-white/10">
            <h3 className="text-xl font-semibold text-content mb-2">Nom du Projet 1</h3>
            <p className="text-content/70">Description courte du projet 1. Technologies utilisées : React, Next.js, Tailwind CSS.</p>
          </div>
          {/* Répétez pour d'autres projets */}
          <div className="bg-white/5 p-6 rounded-lg shadow-lg border border-white/10">
            <h3 className="text-xl font-semibold text-content mb-2">Nom du Projet 1</h3>
            <p className="text-content/70">Description courte du projet 1. Technologies utilisées : React, Next.js, Tailwind CSS.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg shadow-lg border border-white/10">
            <h3 className="text-xl font-semibold text-content mb-2">Nom du Projet 1</h3>
            <p className="text-content/70">Description courte du projet 1. Technologies utilisées : React, Next.js, Tailwind CSS.</p>
          </div>
        </div>
      </section>
    </main>
  );
}