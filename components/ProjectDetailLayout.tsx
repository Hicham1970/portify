import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectDetailLayoutProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  children: React.ReactNode;
}

export default function ProjectDetailLayout({ title, imageUrl, imageAlt, children }: ProjectDetailLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="w-full max-w-4xl">
        <Link href="/projects" className="text-primary hover:underline mb-8 block">
          &larr; Retour aux projets
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">{title}</h1>
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="text-lg text-content/80 space-y-4">{children}</div>
      </div>
    </main>
  );
}