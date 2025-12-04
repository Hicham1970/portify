import React from 'react';
import ProjectDetailLayout from '@/components/ProjectDetailLayout';

export default function BlogDjangoPage() {
  return (
    <ProjectDetailLayout
      title="Blog App (Django)"
      imageUrl="/projects/django_blog.jpg"
      imageAlt="Image du projet Blog App avec Django"
    >
      <p>
        Mon blog personnel développé dans le cadre de ma formation en développement web, en utilisant Python, Django et une base de données SQLite3.
      </p>
    </ProjectDetailLayout>
  );
}