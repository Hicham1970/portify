import React from 'react';
import ProjectDetailLayout from '@/components/ProjectDetailLayout';

export default function BlogHugoPage() {
  return (
    <ProjectDetailLayout
      title="Blog App (Hugo)"
      imageUrl="/projects/hugoblog-picture.jpg"
      imageAlt="Image du projet Blog App avec Hugo"
    >
      <p>
        Mon blog personnel créé dans le cadre de ma formation en développement web, utilisant React et MDX. J&apos;y traite de divers sujets
        tels que la blockchain, TypeScript, CSS, les React Hooks, et d&apos;autres articles techniques.
      </p>
    </ProjectDetailLayout>
  );
}