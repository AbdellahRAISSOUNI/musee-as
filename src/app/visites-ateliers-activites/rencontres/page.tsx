"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const gold = '#bfa76a';

// Rencontres items based on the screenshots
const rencontresItems = [
  {
    id: 'hicham-benohoud',
    title: 'TCHAT PHOTO / Hicham Benohoud',
    subtitle: '25 ans de réflexion',
    image: '/images/visites-ateliers-activites/rencontres/hicham-benohoud/TCHAT-PHOTO-Hicham-Benohoud-25-ans-de-reflexion.png',
    description: 'Le grand photographe Hicham Benohoud fête ses 25 ans de carrière au Maroc. En présence de l\'artiste et de Marie Moignard spécialiste de la photographie marocaine contemporaine, venez découvrir le parcours d\'Hicham Benohoud et échanger avec lui devant ses œuvres à l\'occasion de cette visite commentée. Visite commentée au Musée le 16 avril 2016.',
    href: '/visites-ateliers-activites/rencontres/hicham-benohoud'
  },
  {
    id: 'nostalgie-du-futur',
    title: 'TCHAT PHOTO / "Nostalgie du futur"',
    subtitle: '',
    image: '/images/visites-ateliers-activites/rencontres/nostalgie/TCHAT-PHOTO-Nostalgie-du-futur.png',
    description: 'Rencontre autour de la photographie marocaine avec Hicham Gardaf et Marie Moignard À l\'occasion de son exposition organisée par le Musée de la Fondation Abderrahman Slaoui et l\'Institut Français, Hicham Gardaf fera exceptionnellement une visite commentée de sa série "Excursion" au Musée de la Fondation Abderrahman Slaoui. Ce jeune photographe Tangérois, dont la carrière est prometteuse.',
    href: '/visites-ateliers-activites/rencontres/nostalgie-du-futur'
  },
  {
    id: 'spiritualite-en-islam',
    title: 'CONFÉRENCE - La spiritualité en Islam: une quête de sens',
    subtitle: '',
    image: '/images/visites-ateliers-activites/rencontres/islam/visuel_conf_FB_1.jpg',
    description: 'Le "matérialisme religieux" des salafistes et autre islamistes promeut la pensée unique, l\'uniformité dans la tête et dans l\'habit, ignorant la profusion de sens qu\'offre le Coran (tanjim) et le pluralisme assumé de l\'Islam classique. Cette sclérose a suscité le djihadisme, fer de lance du nihilisme contemporain. La spiritualité - le Soufisme en l\'occurrence.',
    href: '/visites-ateliers-activites/rencontres/spiritualite-en-islam'
  },
  {
    id: 'casablanca-courts-circuits',
    title: 'Lancement du guide CASABLANCA COURTS-CIRCUITS',
    subtitle: '',
    image: '/images/visites-ateliers-activites/rencontres/courts-circuits/Invitation_public.png',
    description: 'Casablanca Courts-circuits est un guide de tourisme culturel sur la ville blanche. Entre témoignages, histoires, architecture et culture, découvrez 10 parcours pour se (re)connecter avec la ville ! Les deux auteures, Mathilde Blondeau et Kenza Joundy Ouazzani, feront une présentation de ce guide riche et illustré et n\'hésiteront pas à dédicacer votre exemplaire. Au Musée de la Fondation Abderrahman Slaoui.',
    href: '/visites-ateliers-activites/rencontres/casablanca-courts-circuits'
  }
];

const RencontresPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/visites-ateliers-activites/rencontres/hicham-benohoud/TCHAT-PHOTO-Hicham-Benohoud-25-ans-de-reflexion.png"
            alt="Rencontres"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto text-center px-4"
          >
            <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
              Rencontres
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
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
                Le Musée de la Fondation Abderrahman Slaoui organise régulièrement des rencontres, conférences et échanges avec des artistes, des spécialistes et des personnalités du monde culturel. Ces événements offrent au public l'opportunité de découvrir et d'approfondir différentes thématiques artistiques et culturelles.
              </p>
            </div>
          
            {/* Rencontres Showcase */}
            <div className="space-y-16">
              {rencontresItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.8 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
                >
                  {/* Image Container */}
                  <div className="w-full md:w-1/2 h-[350px] relative group">
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
                        <h2 className="font-bodoni text-2xl md:text-3xl font-medium text-accent-gold mb-2 hover:text-accent-gold/80 transition-colors duration-300">
                          {item.title}
                        </h2>
                        {item.subtitle && (
                          <h3 className="font-bodoni text-xl text-gray-700 mb-4">
                            {item.subtitle}
                          </h3>
                        )}
                        <p className="text-gray-700 text-base mb-6">
                          {item.description}
                        </p>
                        <div className="inline-flex items-center text-accent-gold group">
                          <span className="mr-2 font-medium">Lire la suite</span>
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

export default RencontresPage; 