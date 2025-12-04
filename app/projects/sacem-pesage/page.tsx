import React from 'react';
import ProjectDetailLayout from '@/components/ProjectDetailLayout';

export default function SacemPesagePage() {
  return (
    <ProjectDetailLayout
      title="Sacem Pesage App"
      imageUrl="/projects/sacem_pesage.jpg"
      imageAlt="Image du projet Sacem Pesage App"
    >
      <p>
        L&apos;application Sacem Pesage est une solution web et mobile conçue pour optimiser la gestion des pesages des conteneurs dans les
        environnements portuaires et au sein des dépôts de conteneurs. Elle vise à simplifier la logistique et à garantir la conformité avec les réglementations en vigueur. L&apos;application offre une interface conviviale permettant aux utilisateurs de s&apos;enregistrer, de saisir, suivre et gérer les données de pesage des conteneurs de manière efficace. Elle intègre des fonctionnalités telles que la génération de rapports en xlsx et en csv, la gestion des utilisateurs et la sécurité des données, assurant ainsi une expérience utilisateur fluide et sécurisée.
      </p>
    </ProjectDetailLayout>
  );
}