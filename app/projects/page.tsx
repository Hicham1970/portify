import React from 'react';
import ProjectCard from '@/components/project-card'; // Importez le nouveau composant

export default function ProjectsPage() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-primary mb-8">Mes Projets</h1>
        <p className="text-lg text-content/80 mb-12">
          Découvrez quelques-uns de mes travaux récents. Chaque projet reflète ma passion pour le développement et ma capacité à résoudre des problèmes complexes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Remplacez les divs par le composant ProjectCard */}
          <ProjectCard
            title="Sacem Pesage App"
            description="Une application web et mobile pour la gestion des pesages des conteneurs."
            technologies="React, Vite,Javascript et Tailwind CSS"
            imageUrl="/projects/sacem_pesage.jpg"
            delay={0}
          />
          <ProjectCard
            title="Draft Survey App"
            description="Application Desktop pour le draft survey."
            technologies="Python, Tkinter"
            imageUrl="/projects/Draft_Survey_App.jpg"
            delay={0.2} // Délai pour l'animation
          />
          <ProjectCard
            title="Blog App"
            description="Mon Blog personnel dans le cadre de ma formation en développement web."
            technologies="React, Mdx"
            imageUrl="/projects/hugoblog-picture.jpg"
            delay={0.4} // Délai pour l'animation
          />
          <ProjectCard
            title="Blog App"
            description="Mon Blog personnel dans le cadre de ma formation en développement web."
            technologies="Python , Django & sqlite3"
            imageUrl="/projects/django_blog.jpg"
            delay={0.4} // Délai pour l'animation
          />
        </div>
      </section>
    </main>
  );
}