import React from 'react';
import ProjectCard from '@/components/project-card';

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">Mes Projets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Sacem Pesage App"
            href="/projects/sacem-pesage"
            description="Une application web et mobile pour la gestion des pesages des conteneurs."
            technologies="React, Vite,Javascript et Tailwind CSS"
            imageUrl="/projects/sacem_pesage.jpg"
            delay={0}
          />
          <ProjectCard
            title="Draft Survey App"
            href="/projects/draft-survey"
            description="Application Desktop pour le draft survey."
            technologies="Python, Tkinter"
            imageUrl="/projects/Draft_Survey_App.jpg"
            delay={0.2}
          />
          <ProjectCard
            title="Blog App (Hugo)"
            href="/projects/blog-hugo"
            description="Mon Blog personnel dans le cadre de ma formation en développement web."
            technologies="React, Mdx"
            imageUrl="/projects/hugoblog-picture.jpg"
            delay={0.4}
          />
          <ProjectCard
            title="Blog App (Django)"
            href="/projects/blog-django"
            description="Mon Blog personnel dans le cadre de ma formation en développement web."
            technologies="Python , Django & sqlite3"
            imageUrl="/projects/django_blog.jpg"
            delay={0.6}
          />
        </div>
      </div>
    </main>
  );
}