import React from 'react';
import ProjectDetailLayout from '@/components/ProjectDetailLayout';
import Image from 'next/image';

export default function DraftSurveyPage() {
  return (
    <ProjectDetailLayout
      title="Draft Survey App"
      imageUrl="/projects/Draft_Survey_App.jpg"
      imageAlt="Image du projet Draft Survey App"
    >
      <p>
        L&apos;application Draft Survey est un outil de bureau spécialisé qui calcule avec précision le poids de la cargaison maritime sans
        nécessiter de pesée directe. Cette méthode est cruciale dans l&apos;industrie du transport maritime pour le chargement/déchargement des produits solides, la sécurité et
              la conformité avec les normes en vigueur. 
              
      </p>
      <p>
              L&apos;application permet aux utilisateurs de saisir des données telles que les dimensions du navire, les niveaux de tirant d&apos;eau avant et arrière, ainsi que la densité du liquide environnant. En utilisant ces informations, elle applique des formules standardisées pour déterminer le poids total de la cargaison. Conçue avec une interface conviviale grâce à Tkinter, l&apos;application vise à simplifier le processus de draft survey, rendant cette tâche complexe accessible même aux utilisateurs ayant une expérience technique limitée.
              Le changement de theme (sombre/clair) est également disponible pour améliorer l&apos;expérience utilisateur en fonction des préférences individuelles.
      </p>

      {/* Galerie d'images responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden border border-white/10">
                      <Image src="/projects/LoadingInitialDS.jpg" alt="Explication de l'image 1" fill style={{ objectFit: 'cover' }} />
          </div>
          <p className="text-sm text-content/70">
            On peut choisir dés le début le type de chargement soit un chargement on un déchargement, et on fonction, après la saisie des données on passe directement au calcul. 
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden border border-white/10">
                      <Image src="/projects/FinalDS.jpg" alt="Explication de l'image 2" fill style={{ objectFit: 'cover' }} />
          </div>
          <p className="text-sm text-content/70">
            L&apos;application est munie d&apos;un menu de navigation pour faciliter la navigation, et d&apos;un guide d&apos;utilisation pour faciliter la navigation entre les onglets.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden border border-white/10">
                      <Image src="/projects/DSSummary.jpg" alt="Explication de l'image 3" fill style={{ objectFit: 'cover' }} />
          </div>
          <p className="text-sm text-content/70">
            Un sommaire est disponible pour consulter le résultat des calculs, et on peut le sauvegarder sous forme d&apos;un fichier JSON pour une utilisation ultérieur, ou l&apos;imprimer en PDF.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden border border-white/10">
                      <Image src="/projects/reportDS.jpg" alt="Explication de l'image 4" fill style={{ objectFit: 'cover' }} />
          </div>
          <p className="text-sm text-content/70">
            Le rapport est disponible en PDF, et contient toutes les informations depuis le time-sheet, les informations sur le navire, le client et la quantité finale chargée ou déchargée.
          </p>
        </div>
      </div>
    </ProjectDetailLayout>
  );
}