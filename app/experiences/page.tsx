"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const cardVariants: Variants = {
  hidden: (direction: 'left' | 'right') => ({ opacity: 0, x: direction === 'left' ? -50 : 50 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ExperiencesPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-8 sm:p-24 overflow-hidden">
      {/* Fond animé */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-secondary/20 opacity-20 blur-[100px]"></div>
      </div>

      <div className="w-full max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-primary mb-16 text-center"
        >
          Mon Parcours Professionnel
        </motion.h1>

        {/* Conteneur de la chronologie */}
        <div className="relative">
          {/* Ligne verticale de la chronologie */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-white/10"></div>

          {/* Élément de la chronologie 1 (Draft Survey) */}
          <div className="relative mb-12 flex w-full items-center justify-between md:justify-normal md:odd:flex-row-reverse">
            <div className="hidden h-0.5 w-5/12 bg-white/10 md:block"></div>
            <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
            <motion.div
              className="w-full rounded-lg border border-white/10 bg-white/5 p-6 shadow-lg md:w-5/12"
              custom="left" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="mb-2 text-2xl font-semibold text-content">26 Ans d&apos;Expertise en Draft Survey</h2>
              <p className="text-sm text-content/70">1998 - Présent</p>
              <p className="mt-4 text-content/80 leading-relaxed">
                Fort d&apos;une carrière de plus d&apos;un quart de siècle, j&apos;ai développé une expertise pointue en tant que Marine Surveyor, menant des centaines d&apos;inspections avec une rigueur et une précision sans faille. Mais le faite d&apos;avoir du temps libre entre mes missions d&apos;inspections, m&apos;a encouragé  à évoluer et m&apos;a poussé à me reconvertir dans le développement web.
              </p>
            </motion.div>
          </div>

          {/* Élément de la chronologie 2 (Développement) */}
          <div className="relative mb-12 flex w-full items-center justify-between md:justify-normal md:odd:flex-row-reverse">
            <div className="hidden h-0.5 w-5/12 bg-white/10 md:block"></div>
            <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
            <motion.div
              className="w-full rounded-lg border border-white/10 bg-white/5 p-6 shadow-lg md:w-5/12"
              custom="right" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="mb-2 text-2xl font-semibold text-content">4 Ans de Passion pour le Développement</h2>
              <p className="text-sm text-content/70">2020 - Présent</p>
              <p className="mt-4 text-content/80 leading-relaxed">
                J&apos;ai entamé une transition vers le développement web, appliquant ma logique et ma rigueur pour construire des applications robustes avec des technologies comme React, Next.js, et Python.
              </p>
            </motion.div>
          </div>

          {/* Élément de la chronologie 3 (Formation) */}
          <div className="relative mb-12 flex w-full items-center justify-between md:justify-normal md:odd:flex-row-reverse">
            <div className="hidden h-0.5 w-5/12 bg-white/10 md:block"></div>
            <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
            <motion.div
              className="w-full rounded-lg border border-white/10 bg-white/5 p-6 shadow-lg md:w-5/12"
              custom="left" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="mb-2 text-2xl font-semibold text-content">Formation & Certification</h2>
              <p className="text-sm text-content/70">2024</p>
              <p className="mt-4 text-content/80 leading-relaxed">
                Obtention de la certification &quot;Développeur Web&quot; après une formation intensive, validant mes compétences en conception, développement et déploiement d&apos;applications web modernes.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}