"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  imageUrl: string;
  delay?: number; // Optionnel pour décaler les animations
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.3 } } // Nouvel état pour le survol
};

export default function ProjectCard({ title, description, technologies, imageUrl, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white/5 rounded-lg shadow-lg border border-white/10 overflow-hidden" // overflow-hidden pour les coins arrondis de l'image
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover" // Applique le variant "hover" au survol
      viewport={{ once: true, amount: 0.3 }} // Anime une seule fois quand 30% de l'élément est visible
      transition={{ delay }} // Applique le délai passé en prop
    >
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={`Image du projet ${title}`}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-content mb-2">{title}</h3>
        <p className="text-content/70">{description} Technologies utilisées : {technologies}</p>
      </div>
    </motion.div>
  );
}