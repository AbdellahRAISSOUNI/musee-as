"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Collection items based on the screenshot
const collectionItems = [
  {
    id: 'flacons-de-khol-et-tabatieres',
    title: 'Flacons de khôl et tabatières',
    image: '/images/collections-permanentes/flacons-de-khol-et-tabatieres/khol_et_tabatiere.png',
    description: 'Objets précieux utilisés pour contenir le khôl, finement ciselés en métaux nobles.',
    href: '/collections-expositions/collections-permanentes/flacons-de-khol-et-tabatieres'
  },
  {
    id: 'famille-majorelle',
    title: 'Famille majorelle',
    image: '/images/collections-permanentes/famille-majorelle/Famille_Majorelle.jpg',
    description: 'Œuvres et objets d\'art liés à la célèbre famille d\'artistes et de créateurs.',
    href: '/collections-expositions/collections-permanentes/famille-majorelle'
  },
  {
    id: 'la-ceramique-de-fes',
    title: 'La céramique de Fès',
    image: '/images/collections-permanentes/la-ceramique-de-fes/cover.jpg',
    description: 'Pièces exceptionnelles de céramique illustrant le savoir-faire ancestral des artisans de Fès.',
    href: '/collections-expositions/collections-permanentes/la-ceramique-de-fes'
  },
  {
    id: 'les-cabinets-de-curiosite',
    title: 'Les cabinets de curiosité',
    image: '/images/collections-permanentes/les-cabinets-de-curiosite/cover.jpg',
    description: 'Collections éclectiques d\'objets rares et précieux rassemblés par des collectionneurs passionnés.',
    href: '/collections-expositions/collections-permanentes/les-cabinets-de-curiosite'
  },
  {
    id: 'les-bijoux-marocains',
    title: 'Les bijoux marocains',
    image: '/images/collections-permanentes/les-bijoux-marocains/cover.jpg',
    description: 'Parures et bijoux traditionnels marocains témoignant d\'un artisanat d\'exception.',
    href: '/collections-expositions/collections-permanentes/les-bijoux-marocains'
  },
  {
    id: 'affiches-orientalistes',
    title: 'Affiches orientalistes',
    image: '/images/collections-permanentes/affiches-orientalistes/cover.jpg',
    description: 'Affiches illustrant la fascination occidentale pour l\'Orient au début du XXe siècle.',
    href: '/collections-expositions/collections-permanentes/affiches-orientalistes'
  }
];

const CollectionsPermanentesPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl mb-6">
              Collections permanentes
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Introduction Text */}
            <div className="mb-16">
              <p className="text-gray-800 text-lg leading-relaxed max-w-3xl mx-auto text-center">
                Le Musée de la Fondation Abderrahman Slaoui ne peut se concevoir qu'à travers les yeux du collectionneur. Abderrahman Slaoui a collectionné une multitude d'objets de valeur artistique et ethnographique selon ses goûts. Le Musée ne présente donc pas une mais des collections divisées en chapitres, chacun subdivisé en séquences.
              </p>
            </div>

            {/* Collections Showcase */}
            <div className="space-y-24">
              {collectionItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.8 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
                >
                  {/* Image Container */}
                  <div className="w-full md:w-1/2 h-[400px] relative group">
                    <Link href={item.href} className="block w-full h-full">
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                      <motion.div 
                        className="absolute inset-0 border-2 border-transparent group-hover:border-accent-gold z-20"
                        initial={false}
                        whileHover={{ 
                          scale: 0.97,
                          transition: { duration: 0.4 }
                        }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </motion.div>
                    </Link>
                  </div>
                  
                  {/* Content Container */}
                  <div className="w-full md:w-1/2 p-6">
                    <motion.div
                      initial={false}
                      whileHover={{ x: index % 2 === 0 ? 10 : -10, transition: { duration: 0.3 } }}
                    >
                      <Link href={item.href} className="block">
                        <h2 className="font-bodoni text-3xl md:text-4xl font-medium text-gray-900 mb-4 hover:text-accent-gold transition-colors duration-300">
                          {item.title}
                        </h2>
                        <p className="text-gray-700 text-lg mb-6">
                          {item.description}
                        </p>
                        <div className="inline-flex items-center text-accent-gold group">
                          <span className="mr-2 font-medium">Découvrir</span>
                          <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CollectionsPermanentesPage; 