"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const AffichesOrientalistesPage = () => {
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
      src: '/images/collections-permanentes/affiches-orientalistes/orient_express2.jpg',
      alt: 'Affiche Orient-Express',
      title: 'Orient-Express',
      description: 'L\'Orient-Express, le train mythique de la compagnie Internationale des Wagons Lits, effectue son voyage inaugural en 1883. Symbole de luxe et de modernité, les départs réguliers voire quotidiens offrent un déplacement agréable à la découverte des capitales de Paris à Constantinople. Imprimée sans le texte, ce dernier étant rajouté par la suite, cette affiche a été reprise pour la couverture du Guide Continental de la Compagnie en décembre 1901 ainsi que dans une brochure de 1912.',
      artist: 'Rafaêl de Ochoa y Madrazo',
      period: '1891',
      origin: 'Imprimerie F. Champenois - Paris'
    },
    {
      id: 2,
      src: '/images/collections-permanentes/affiches-orientalistes/palmolive2.jpg',
      alt: 'Affiche Palmolive',
      title: 'Palmolive',
      description: 'Le savon Palmolive fait son apparition en 1898 avec la B.J. Johnson Compagny. Palmolive tire son nom des huiles de palme d\'olive qui le compose. Le teint pâle, considéré alors comme le canon de la beauté, et le contexte de stéréotypes raciaux ont conduit les spécialistes du marketing de l\'époque à revendiquer le pouvoir blachissant de leur savon. La sensualité et féménité de la femme maghrébine est ici associée au savon mais aussi aux huiles qu\'elle utilise pour ses soins.',
      artist: 'Anonyme',
      period: 'Début du XXème siècle',
      origin: 'États-Unis'
    },
    {
      id: 3,
      src: '/images/collections-permanentes/affiches-orientalistes/majorelle_ok2.jpg',
      alt: 'Affiche Tanger par Jacques Majorelle',
      title: 'Tanger, son site son climat',
      description: 'Jacques Majorelle qui réside dans sa célèbre villa de Marrakech, a produit plusieurs affiches sur le Maroc. Immédiatement identifiable par leur style. Jacques Majorelle associe des données ethnographiques, architecturales et urbanistiques. La composition de cette affiche restitue dans un langage iconographique synthétique des informations sur la ville de Tanger tant d\'un point de vue humain qu\'économique. Elle a connu un grand succès et sera rééditée lors de l\'inauguration du premier quai d\'accostage dans le port de Tanger en 1933.',
      artist: 'Jacques Majorelle',
      period: '1924',
      origin: 'Imprimerie Braconnier - Alger'
    },
    {
      id: 4,
      src: '/images/collections-permanentes/affiches-orientalistes/Affiches_orientalistes.jpg',
      alt: 'Affiche Syndicat d\'initiative de Meknès',
      title: 'Syndicat d\'initiative de Meknès et des environs',
      description: 'Cette affiche promotionnelle pour la ville de Meknès et ses environs présente une vue pittoresque de la ville sainte de Moulay Idriss. On y voit une scène animée de la vie quotidienne avec des marchands, des animaux et des habitants dans une composition colorée typique des affiches touristiques de l\'époque coloniale.',
      artist: 'Mattéo Brondy',
      period: 'Début du XXème siècle',
      origin: 'Maroc'
    },
    {
      id: 5,
      src: '/images/collections-permanentes/affiches-orientalistes/derche_1929_png_1.jpg',
      alt: 'Affiche L\'hiver le printemps au Maroc',
      title: 'L\'hiver le printemps au Maroc',
      description: 'Les femmes marocaines portant le haîk déambulent dans une cimetière. La Chahada, la profession de foi de l\'Islam est gravée en calligraphie Kufi sur la stèle du premier plan. Cette inscription se retrouve régulièrement dans les mosquées et les cimetières. A l\'arrière plan se dessinent la ville de Fès et la porte (bab) Mabrouk. Une version quasiment identique de cette affiche a été déclinée pour l\'aéropostale et le thème <l\'hiver le printemps au Maroc> se retrouve dans une affiche du même auteur pour les chemins de fer de Paris à Orléans et du Midi.',
      artist: 'Jules Henri Derche',
      period: '1929',
      origin: 'Paris-Lyon-Méditerranée (PLM)'
    },
    {
      id: 6,
      src: '/images/collections-permanentes/affiches-orientalistes/expo_univ_ok_1.jpg',
      alt: 'Affiche Exposition nationale coloniale de Marseille',
      title: 'Exposition nationale coloniale de Marseille',
      description: 'Tirée à 60 000 exemplaires et largement diffusée, cette affiche pour l\'exposition coloniale de Marseille a été rééditée en foulard de soie. Trois figures féminines se dressent devant le port de la cité Phocéenne en arrière-plan. Chacune représente une partie de l\'Empire Colonial : le Maghreb, l\'Indochine et l\'Afrique subsaharienne. L\'exposition coloniale de 1922. destinée à montrer l\'étendue et la diversité du Second Empire Colonial Français, a été vue par trois millions de visiteurs.',
      artist: 'David Dellpiane',
      period: '1922',
      origin: 'Imprimerie Moullot - Marseille'
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
            src="/images/collections-permanentes/affiches-orientalistes/expo_univ_ok_1.jpg"
            alt="Affiches orientalistes"
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
              Affiches orientalistes
            </h1>
            <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="font-bodoni text-3xl md:text-4xl mb-8 text-center">L'Orient fantasmé des affiches publicitaires</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  Les affiches orientalistes constituent un témoignage fascinant de la vision occidentale de l'Orient au tournant du XXe siècle. À la fois œuvres artistiques et supports publicitaires, elles ont contribué à forger un imaginaire collectif empreint d'exotisme et de fascination.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Cette collection présente des affiches exceptionnelles qui illustrent comment le Maroc et l'Orient ont été représentés dans l'art publicitaire européen, entre réalité ethnographique et fantasmes orientalistes, pour promouvoir le tourisme, les produits de consommation ou les expositions coloniales.
                </p>
              </div>
            </motion.div>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {collectionImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div 
                    className="relative aspect-[3/4] cursor-pointer overflow-hidden bg-gray-100 rounded-lg shadow-lg"
                    onClick={() => openModal(image.src, image, index)}
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
                        className="object-contain p-2"
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
                    <p className="text-gray-700 mb-4 line-clamp-3">{image.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Artiste:</span>
                        <p className="font-medium">{image.artist}</p>
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
                      {currentImageData.artist && (
                        <div>
                          <h4 className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-1 font-medium">Artiste</h4>
                          <p className="font-bodoni text-lg md:text-xl">{currentImageData.artist}</p>
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
                      {currentImageData.material && (
                        <div>
                          <h4 className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-1 font-medium">Matériaux</h4>
                          <p className="font-bodoni text-lg md:text-xl">{currentImageData.material}</p>
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

export default AffichesOrientalistesPage; 