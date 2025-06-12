"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Example collection items - in a real implementation, these would come from a database or CMS
const collectionItems = [
  {
    id: 'bijoux-anciens',
    title: 'Bijoux Anciens',
    image: '/images/hero-background.jpg',
    category: 'Orfèvrerie',
    period: 'XIXe siècle',
    description: 'Collection de bijoux traditionnels marocains en argent et en or, ornés de pierres précieuses et semi-précieuses.'
  },
  {
    id: 'affiches-anciennes',
    title: 'Affiches Anciennes',
    image: '/images/hero-background.jpg',
    category: 'Documents',
    period: 'XXe siècle',
    description: 'Affiches publicitaires et touristiques représentant le Maroc durant la période du Protectorat.'
  },
  {
    id: 'ceramiques-marocaines',
    title: 'Céramiques Marocaines',
    image: '/images/hero-background.jpg',
    category: 'Poterie',
    period: 'XVIIIe-XXe siècle',
    description: 'Collection de céramiques et poteries traditionnelles provenant de différentes régions du Maroc.'
  },
  {
    id: 'mobilier-traditionnel',
    title: 'Mobilier Traditionnel',
    image: '/images/hero-background.jpg',
    category: 'Mobilier',
    period: 'XIXe-XXe siècle',
    description: 'Pièces de mobilier marocain traditionnel, témoignant du savoir-faire artisanal.'
  },
  {
    id: 'manuscrits-enlumines',
    title: 'Manuscrits Enluminés',
    image: '/images/hero-background.jpg',
    category: 'Documents',
    period: 'XVIIe-XIXe siècle',
    description: 'Manuscrits et documents historiques enluminés, incluant des textes religieux et littéraires.'
  },
  {
    id: 'peintures-orientalistes',
    title: 'Peintures Orientalistes',
    image: '/images/hero-background.jpg',
    category: 'Peinture',
    period: 'XIXe-XXe siècle',
    description: 'Collection de tableaux orientalistes représentant des scènes et paysages du Maroc.'
  }
];

// Categories for filtering
const categories = ['Tous', 'Orfèvrerie', 'Documents', 'Poterie', 'Mobilier', 'Peinture'];

const CollectionsPermanentesPage = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  
  const filteredItems = activeCategory === 'Tous' 
    ? collectionItems 
    : collectionItems.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-black text-premium-white pt-12">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 py-16"
      >
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/collections-expositions" 
            className="inline-block mb-8 text-soft-white hover:text-accent-gold transition-colors"
          >
            ← Retour aux Collections & Expositions
          </Link>
          
          <h1 className="font-bodoni-regular text-4xl md:text-5xl lg:text-6xl mb-8">
            Collections Permanentes
          </h1>
          
          <p className="text-soft-white text-lg mb-12 leading-relaxed max-w-4xl">
            Le Musée Abderrahman Slaoui abrite une collection permanente riche et diversifiée
            d'objets d'art marocain, témoignant de la richesse du patrimoine culturel du pays.
            Explorez nos différentes catégories d'objets et découvrez l'histoire fascinante
            derrière chaque pièce.
          </p>
          
          {/* Filter categories */}
          <div className="mb-12 border-b border-graphite/50 pb-4">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 font-bodoni-regular text-sm uppercase tracking-wider transition-colors
                            ${activeCategory === category 
                              ? 'bg-accent-gold/20 text-accent-gold border border-accent-gold' 
                              : 'text-soft-white hover:text-premium-white border border-graphite/50'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Collection items grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <Link href={`/collections-expositions/collections-permanentes/${item.id}`}>
                  <div className="overflow-hidden rounded-lg mb-4 aspect-square relative bg-graphite">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-bodoni-regular text-2xl text-premium-white group-hover:text-accent-gold transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center mt-2 mb-3">
                    <span className="text-accent-gold text-sm mr-3">{item.category}</span>
                    <span className="text-soft-white text-sm">{item.period}</span>
                  </div>
                  
                  <p className="text-soft-white text-sm line-clamp-2">
                    {item.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default CollectionsPermanentesPage; 