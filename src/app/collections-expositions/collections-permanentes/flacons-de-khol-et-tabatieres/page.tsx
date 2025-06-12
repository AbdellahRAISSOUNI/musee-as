"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const FlaconsDeKholEtTabatieresPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentImageData, setCurrentImageData] = useState<any>(null);

  const openModal = (imageSrc: string, imageData: any) => {
    setCurrentImage(imageSrc);
    setCurrentImageData(imageData);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Collection images
  const collectionImages = [
    {
      id: 1,
      src: '/images/collections-permanentes/flacons-de-khol-et-tabatieres/khol_et_tabatiere.png',
      alt: 'Flacons de khôl ornementés',
      title: 'Flacons de khôl ornementés',
      description: 'Flacons en argent finement ciselés avec ornements et pierres précieuses, utilisés traditionnellement pour contenir le khôl.',
      material: 'Argent ciselé, pierres précieuses',
      period: 'XIXe siècle',
      origin: 'Maroc'
    }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/collections-permanentes/flacons-de-khol-et-tabatieres/khol_et_tabatiere.png"
            alt="Flacons de khôl et tabatières"
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            priority
          />
        </motion.div>
        <div className="container mx-auto px-6 h-full flex items-center justify-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-bodoni text-4xl md:text-6xl lg:text-7xl mb-6 text-white">
              Flacons de khôl et tabatières
            </h1>
            <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="font-bodoni text-3xl md:text-4xl mb-8 text-center">L'art du khôl et du tabac</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  Les flacons de khôl et les tabatières constituent une part importante de l'art décoratif marocain. Ces objets précieux, souvent fabriqués en métaux nobles et ornés de pierres précieuses, témoignent du raffinement des artisans marocains et de l'importance des cosmétiques et du tabac dans la culture traditionnelle.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  La collection présentée ici met en valeur la diversité des formes et des techniques décoratives employées dans la création de ces objets d'art utilitaires, révélant la richesse du patrimoine artisanal marocain.
                </p>
              </div>
            </motion.div>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              {collectionImages.map((image) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="group"
                >
                  <div 
                    className="relative aspect-square cursor-pointer overflow-hidden bg-gray-100 rounded-lg shadow-lg"
                    onClick={() => openModal(image.src, image)}
                  >
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                    
                    {/* Border effect */}
                    <div className="absolute inset-0 border-0 group-hover:border-2 border-accent-gold transition-all duration-300 z-20"></div>
                    
                    {/* Image */}
                    <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain p-6"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    
                    {/* View button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                      <span className="bg-accent-gold text-white px-4 py-2 rounded-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Voir en détail
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-50 border-l-2 border-accent-gold">
                    <h3 className="font-bodoni text-2xl mb-3">{image.title}</h3>
                    <p className="text-gray-700 mb-4">{image.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Matériaux:</span>
                        <p className="font-medium">{image.material}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Période:</span>
                        <p className="font-medium">{image.period}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Origine:</span>
                        <p className="font-medium">{image.origin}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Return Button */}
            <div className="mt-20">
              <ReturnButton href="/collections-expositions/collections-permanentes" />
            </div>
          </div>
        </div>
      </section>

      {/* Modal for enlarged image */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl z-10 hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={closeModal}
                aria-label="Fermer"
              >
                ×
              </button>
              
              <div className="flex flex-row gap-8 max-h-[90vh] overflow-y-auto bg-white">
                {/* Image */}
                <div className="relative w-2/3 h-[50vh] md:h-[70vh] bg-gray-100">
                  <Image
                    src={currentImage}
                    alt="Image agrandie"
                    fill
                    className="object-contain"
                    sizes="66vw"
                  />
                </div>
                
                {/* Details */}
                {currentImageData && (
                  <div className="w-1/3 p-6 md:p-8 text-gray-800 border-l border-gray-200 flex flex-col justify-center">
                    <h3 className="font-bodoni text-xl md:text-3xl mb-4">{currentImageData.title}</h3>
                    <div className="w-12 h-0.5 bg-accent-gold mb-6"></div>
                    <p className="text-gray-700 mb-8 text-sm md:text-base">{currentImageData.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-1">Matériaux</h4>
                        <p className="font-medium text-sm md:text-base">{currentImageData.material}</p>
                      </div>
                      <div>
                        <h4 className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-1">Période</h4>
                        <p className="font-medium text-sm md:text-base">{currentImageData.period}</p>
                      </div>
                      <div>
                        <h4 className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-1">Origine</h4>
                        <p className="font-medium text-sm md:text-base">{currentImageData.origin}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default FlaconsDeKholEtTabatieresPage; 