"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const LesBijouxMarocainsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentImageData, setCurrentImageData] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (imageSrc: string, imageData: any, index: number) => {
    setCurrentImage(imageSrc);
    setCurrentImageData(imageData);
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    let newIndex = currentIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? collectionImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === collectionImages.length - 1 ? 0 : currentIndex + 1;
    }
    setCurrentIndex(newIndex);
    setCurrentImage(collectionImages[newIndex].src);
    setCurrentImageData(collectionImages[newIndex]);
  };

  // Collection images
  const collectionImages = [
    {
      id: 1,
      src: '/images/collections-permanentes/les-bijoux-marocains/Les_bijoux_marocains_1_1.jpg',
      alt: 'Bijou marocain orné de pierres précieuses',
      title: 'Bijou marocain traditionnel',
      description: 'Cette pièce exceptionnelle de joaillerie marocaine témoigne du savoir-faire ancestral des artisans du pays. Finement ciselée en or et ornée de pierres précieuses aux couleurs vives (émeraudes, saphirs et rubis), elle illustre la richesse des techniques d\'orfèvrerie traditionnelle du Maroc.',
      material: 'Or, pierres précieuses (émeraudes, saphirs, rubis)',
      period: 'XIXème siècle',
      origin: 'Fès, Maroc',
      technique: 'Ciselure, sertissage, filigrane'
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
            src="/images/collections-permanentes/les-bijoux-marocains/Les_bijoux_marocains_1_1.jpg"
            alt="Les bijoux marocains"
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
              Les bijoux marocains
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
              <h2 className="font-bodoni text-3xl md:text-4xl mb-8 text-center">L'art de la joaillerie marocaine</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  Les bijoux marocains sont le reflet d'un patrimoine culturel riche et diversifié. Véritables œuvres d'art, ils témoignent du savoir-faire exceptionnel des artisans joailliers qui perpétuent des techniques ancestrales transmises de génération en génération.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Cette collection présente des pièces remarquables qui illustrent la diversité des styles régionaux, des matériaux précieux et des techniques d'orfèvrerie qui font la renommée de la joaillerie marocaine à travers le monde.
                </p>
              </div>
            </motion.div>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                    onClick={() => openModal(image.src, image, collectionImages.indexOf(image))}
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
                      <div>
                        <span className="text-gray-500">Technique:</span>
                        <p className="font-medium">{image.technique}</p>
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
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-hidden"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl z-10 hover:bg-gray-800 transition-colors cursor-pointer shadow-md"
                onClick={closeModal}
                aria-label="Fermer"
              >
                ×
              </button>
              
              <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                {/* Image Container */}
                <div className="relative w-full md:w-2/3 h-[40vh] md:h-auto bg-gray-100 flex-shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={currentImage}
                      alt="Image agrandie"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl z-10 transition-colors shadow-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('prev');
                    }}
                    aria-label="Image précédente"
                  >
                    ←
                  </button>
                  <button 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl z-10 transition-colors shadow-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('next');
                    }}
                    aria-label="Image suivante"
                  >
                    →
                  </button>
                </div>
                
                {/* Details Container with its own scrolling */}
                {currentImageData && (
                  <div className="w-full md:w-1/3 p-6 md:p-8 text-gray-800 border-t md:border-l md:border-t-0 border-gray-200 overflow-y-auto max-h-[50vh] md:max-h-[90vh] bg-white">
                    <div className="mb-8 border-b border-accent-gold/30 pb-6">
                      <h3 className="font-bodoni text-2xl md:text-3xl mb-4">{currentImageData.title}</h3>
                      <div className="w-16 h-0.5 bg-accent-gold mb-6"></div>
                      <div className="text-gray-700 text-base md:text-lg space-y-4">
                        {currentImageData.description}
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {currentImageData.material && (
                        <div>
                          <h4 className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-1 font-medium">Matériaux</h4>
                          <p className="font-bodoni text-lg md:text-xl">{currentImageData.material}</p>
                        </div>
                      )}
                      {currentImageData.period && (
                        <div>
                          <h4 className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-1 font-medium">Période</h4>
                          <p className="font-bodoni text-lg md:text-xl">{currentImageData.period}</p>
                        </div>
                      )}
                      {currentImageData.origin && (
                        <div>
                          <h4 className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-1 font-medium">Origine</h4>
                          <p className="font-bodoni text-lg md:text-xl">{currentImageData.origin}</p>
                        </div>
                      )}
                      {currentImageData.technique && (
                        <div>
                          <h4 className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-1 font-medium">Technique</h4>
                          <p className="font-bodoni text-lg md:text-xl">{currentImageData.technique}</p>
                        </div>
                      )}
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

export default LesBijouxMarocainsPage; 