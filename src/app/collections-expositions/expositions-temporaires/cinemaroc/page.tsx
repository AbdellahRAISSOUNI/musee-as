"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageLayout from '../../../../components/PageLayout';
import ReturnButton from '../../../../components/ReturnButton';

const CinemarocPage = () => {
  return (
    <PageLayout title="CinéMaroc de Stephan Zaubitzer">
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
            <Image
              src="/images/expositions-temporaires/zaubitzer/CineMaroc-de-Stephan-Zaubitzer.png"
              alt="CinéMaroc"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
                  CINÉMAROC
                </h1>
                <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-white/90 font-light">
                  de Stephan Zaubitzer
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/expositions-temporaires/zaubitzer/CineMaroc-de-Stephan-Zaubitzer.png"
                    alt="CinéMaroc de Stephan Zaubitzer"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                <div className="text-lg leading-relaxed space-y-6 text-gray-700">
                  <div className="bg-accent-gold/10 p-6 rounded-lg border-l-4 border-accent-gold">
                    <p className="font-medium text-gray-900 mb-2">Le Musée</p>
                    <p className="text-gray-700">
                      accueille l'exposition CinéMaroc du 16 avril au 16 mai.
                    </p>
                  </div>

                  <p>
                    CinéMaroc a été réalisé en mars 2014 dans six villes marocaines, Casablanca, Meknès, Marrakech, Tanger, Tétouan et Oujda. C'est l'étape marocaine du projet Grands Écrans entrepris depuis plus d'une dizaine d'années.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">Le projet Grands Écrans</h3>
                    <p className="text-gray-700">
                      Depuis 2003, Stephan Zaubitzer photographie les salles de cinéma dans le monde entier. Photo-trotteur passionné, ce travail a commencé au Burkina Faso sur les salles plein-air de Ouagadougou, et s'est poursuivi au Brésil, Madagascar, Roumanie, Londres et ses cinémas transformés, Inde, Égypte, République Dominicaine, Cuba, République Tchèque, Californie...
                    </p>
                  </div>

                  <div className="bg-white p-6 border border-gray-200 rounded-lg">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">La technique</h3>
                    <p className="text-gray-700 mb-4">
                      Stephan Zaubitzer travaille à la chambre photographique Linhof. La prise de vue est faite d'étapes comme autant de rituels d'une cérémonie précise :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>installer la chambre sur pied</li>
                      <li>choisir avec méticulosité le cadre</li>
                      <li>passer la tête sous le borniol</li>
                      <li>régler la mise au point sur le dépoli</li>
                      <li>insérer les châssis qui contiennent les négatifs 4 par 5 inches dans le corps arrière de la chambre Linhof</li>
                    </ul>
                  </div>

                  <p>
                    Ce cérémonial renforce l'hommage rendu à la salle de cinéma. Une salle, c'est un écran, une cabine de projection et aussi une architecture particulière régie par les lois de l'optique. Les bâtiments doivent également être remarquables, visibles de loin et attirants à force de néons et d'affiches alléchantes.
                  </p>

                  <p>
                    C'est aussi un temple dans lequel officient un rite, une magie devant des fidèles en proie à une sorte de fascination presque hypnotique. La salle incarne un mystère ; les architectes se sont ingéniés avec le goût de chaque époque, de mettre en scène cette illusion.
                  </p>
                </div>
              </motion.div>

              <div className="mt-16 flex justify-end">
                <ReturnButton href="/collections-expositions/expositions-temporaires" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default CinemarocPage; 