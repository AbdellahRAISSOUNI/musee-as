"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

// Define types for our collection items
interface DetailItem {
  label: string;
  value: string;
}

interface CollectionItem {
  title: string;
  images: string[];
  category: string;
  period: string;
  origin: string;
  description: string;
  details: DetailItem[];
}

interface CollectionItemsDatabase {
  [key: string]: CollectionItem;
}

// Example collection items database - in a real implementation, these would come from a CMS or database
const collectionItems: CollectionItemsDatabase = {
  'bijoux-anciens': {
    title: 'Bijoux Anciens',
    images: ['/images/hero-background.jpg', '/images/hero-background.jpg', '/images/hero-background.jpg'],
    category: 'Orfèvrerie',
    period: 'XIXe siècle',
    origin: 'Fès, Maroc',
    description: `
      <p>Cette collection exceptionnelle comprend une série de bijoux traditionnels marocains datant du XIXe siècle, principalement originaires de la région de Fès.</p>
      <p>Ces pièces d'orfèvrerie sont caractérisées par leur travail minutieux en filigrane d'argent et d'or, ornées de pierres précieuses et semi-précieuses comme le corail, l'ambre, et la turquoise.</p>
      <p>Parmi les pièces les plus remarquables figurent des fibules (tizerzaï), des diadèmes (taj), des bracelets (dmelij), et des colliers (lqfal) qui étaient traditionnellement portés lors de cérémonies importantes comme les mariages.</p>
      <p>Ces bijoux ne sont pas seulement des objets décoratifs, mais aussi des symboles de statut social et de richesse. Ils reflètent les influences berbères, arabes et andalouses qui ont façonné l'art de l'orfèvrerie au Maroc.</p>
    `,
    details: [
      { label: 'Matériaux', value: 'Argent, or, corail, ambre, turquoise' },
      { label: 'Techniques', value: 'Filigrane, niellage, gravure' },
      { label: 'Acquisition', value: 'Collection Abderrahman Slaoui, 1953' },
      { label: 'État de conservation', value: 'Excellent' }
    ]
  },
  'affiches-anciennes': {
    title: 'Affiches Anciennes',
    images: ['/images/hero-background.jpg', '/images/hero-background.jpg', '/images/hero-background.jpg'],
    category: 'Documents',
    period: 'XXe siècle',
    origin: 'Maroc',
    description: `
      <p>Cette collection unique rassemble des affiches publicitaires et touristiques représentant le Maroc durant la période du Protectorat français (1912-1956).</p>
      <p>Ces affiches, conçues principalement par des artistes européens, constituent un témoignage visuel précieux sur la représentation du Maroc à l'étranger et l'esthétique Art Déco qui dominait cette époque.</p>
      <p>Parmi les plus emblématiques figurent les affiches des compagnies maritimes et ferroviaires qui encourageaient le tourisme au Maroc, ainsi que celles promouvant les produits marocains comme les agrumes, le thé et l'artisanat.</p>
      <p>Au-delà de leur valeur esthétique, ces documents offrent un aperçu fascinant des relations interculturelles et de la construction d'un imaginaire oriental qui a profondément influencé la perception du Maroc en Occident.</p>
    `,
    details: [
      { label: 'Artistes', value: 'Divers (Jacques Majorelle, Mattéo Brondy, etc.)' },
      { label: 'Techniques', value: 'Lithographie, chromolithographie' },
      { label: 'Dimensions', value: 'Variables (principalement 100 x 70 cm)' },
      { label: 'Acquisition', value: 'Achats successifs, 1980-2010' }
    ]
  },
  // Add other items as needed
};

const CollectionItemPage = () => {
  const params = useParams();
  const itemId = params.itemId as string;
  const item = collectionItems[itemId];
  
  // Fallback if item doesn't exist
  if (!item) {
    return (
      <main className="min-h-screen bg-black text-premium-white pt-12">
        <div className="container mx-auto px-6 py-16">
          <Link 
            href="/collections-expositions/collections-permanentes" 
            className="inline-block mb-8 text-soft-white hover:text-accent-gold transition-colors"
          >
            ← Retour aux Collections Permanentes
          </Link>
          <h1 className="font-bodoni-regular text-4xl mb-8">Objet non trouvé</h1>
          <p className="text-soft-white">L'objet de collection que vous recherchez n'existe pas ou a été déplacé.</p>
        </div>
      </main>
    );
  }

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
            href="/collections-expositions/collections-permanentes" 
            className="inline-block mb-8 text-soft-white hover:text-accent-gold transition-colors"
          >
            ← Retour aux Collections Permanentes
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left column - Images */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="overflow-hidden rounded-lg mb-6 aspect-square relative bg-graphite"
              >
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              <div className="grid grid-cols-3 gap-4">
                {item.images.slice(1).map((image: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="overflow-hidden rounded-lg aspect-square relative bg-graphite"
                  >
                    <Image
                      src={image}
                      alt={`${item.title} - Vue ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Right column - Information */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h1 className="font-bodoni-regular text-4xl md:text-5xl text-premium-white mb-4">
                  {item.title}
                </h1>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="inline-block bg-accent-gold/20 text-accent-gold px-3 py-1 rounded-sm text-sm">
                    {item.category}
                  </span>
                  <span className="inline-block bg-graphite/50 text-soft-white px-3 py-1 rounded-sm text-sm">
                    {item.period}
                  </span>
                  <span className="inline-block bg-graphite/50 text-soft-white px-3 py-1 rounded-sm text-sm">
                    {item.origin}
                  </span>
                </div>
                
                <div className="prose prose-invert prose-sm max-w-none mb-8"
                     dangerouslySetInnerHTML={{ __html: item.description }} />
                
                <div className="border-t border-graphite/50 pt-6 mt-8">
                  <h3 className="font-bodoni-regular text-2xl text-premium-white mb-4">
                    Détails techniques
                  </h3>
                  
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {item.details.map((detail: DetailItem, index: number) => (
                      <div key={index} className="border-b border-graphite/30 pb-3">
                        <dt className="text-accent-gold text-sm mb-1">{detail.label}</dt>
                        <dd className="text-soft-white">{detail.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default CollectionItemPage; 