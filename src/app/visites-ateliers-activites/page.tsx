"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegCalendarAlt, FaPaintBrush, FaUsers, FaRoute, FaBuilding } from 'react-icons/fa';

const VisitesAteliersActivitesPage = () => {
  const sections = [
    {
      id: 'actualites',
      title: 'Actualités',
      description: 'Découvrez les dernières nouvelles et événements du Musée Abderrahman Slaoui.',
      icon: <FaRegCalendarAlt className="text-accent-gold text-4xl mb-4" />,
      link: '/visites-ateliers-activites/actualites',
      featured: true
    },
    {
      id: 'ateliers-artistiques',
      title: 'Ateliers Artistiques',
      description: 'Participez à nos ateliers de création artistique pour tous les âges et tous les niveaux.',
      icon: <FaPaintBrush className="text-accent-gold text-4xl mb-4" />,
      link: '/visites-ateliers-activites/ateliers-artistiques'
    },
    {
      id: 'rencontres',
      title: 'Rencontres',
      description: 'Assistez à nos conférences, discussions et rencontres avec des artistes et experts.',
      icon: <FaUsers className="text-accent-gold text-4xl mb-4" />,
      link: '/visites-ateliers-activites/rencontres'
    },
    {
      id: 'visites-guidees',
      title: 'Visites Guidées',
      description: 'Explorez le musée avec nos guides experts qui vous feront découvrir l\'histoire et les secrets de nos collections.',
      icon: <FaRoute className="text-accent-gold text-4xl mb-4" />,
      link: '/visites-ateliers-activites/visites-guidees',
      featured: true
    },
    {
      id: 'privatisation',
      title: 'Privatisation',
      description: 'Louez nos espaces pour vos événements privés, réceptions et réunions professionnelles.',
      icon: <FaBuilding className="text-accent-gold text-4xl mb-4" />,
      link: '/visites-ateliers-activites/privatisation'
    }
  ];

  // Featured event for the hero section
  const featuredEvent = {
    title: "Exposition Temporaire: Art Contemporain Marocain",
    date: "15 Juin - 30 Septembre 2023",
    image: "/images/hero-background.jpg",
    description: "Notre nouvelle exposition temporaire présente les œuvres de jeunes artistes marocains contemporains, explorant les thèmes de l'identité, de la tradition et de la modernité.",
    link: "/visites-ateliers-activites/actualites/exposition-art-contemporain"
  };

  return (
    <main className="min-h-screen bg-black text-premium-white pt-12">
      {/* Hero Section with Featured Event */}
      <section className="relative">
        <div className="h-[50vh] relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={featuredEvent.image}
              alt={featuredEvent.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <span className="text-accent-gold uppercase tracking-widest font-bodoni-regular text-sm md:text-base mb-2 inline-block">
                  Événement à la une
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bodoni-regular text-premium-white mb-4">
                  {featuredEvent.title}
                </h2>
                <p className="text-soft-white mb-6 text-lg">
                  {featuredEvent.date}
                </p>
                <p className="text-soft-white mb-8 text-lg max-w-2xl">
                  {featuredEvent.description}
                </p>
                <Link 
                  href={featuredEvent.link} 
                  className="inline-block bg-transparent border border-accent-gold text-accent-gold hover:bg-accent-gold/10 transition-colors px-6 py-3 font-bodoni-regular"
                >
                  En savoir plus
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-6 py-16"
      >
        <h1 className="font-bodoni-regular text-4xl md:text-5xl lg:text-6xl mb-8 text-center">
          Visites, Ateliers & Activités
        </h1>
        
        <p className="text-soft-white text-lg mb-16 leading-relaxed text-center max-w-4xl mx-auto">
          Découvrez les nombreuses façons d'explorer et de vivre le Musée Abderrahman Slaoui. 
          De nos visites guidées à nos ateliers créatifs, en passant par nos conférences et 
          événements spéciaux, nous vous offrons une expérience culturelle riche et immersive.
        </p>
        
        {/* Featured Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sections.filter(section => section.featured).map((section) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="group"
            >
              <Link href={section.link}>
                <div className="overflow-hidden rounded-lg aspect-[16/9] relative bg-graphite mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full relative">
                      <Image
                        src="/images/hero-background.jpg"
                        alt={section.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {section.icon}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="font-bodoni-regular text-3xl text-premium-white group-hover:text-accent-gold transition-colors">
                      {section.title}
                    </h2>
                  </div>
                </div>
                <p className="text-soft-white group-hover:text-premium-white transition-colors">
                  {section.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Other Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.filter(section => !section.featured).map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (index * 0.1) }}
              className="bg-charcoal p-6 rounded-lg group"
            >
              <Link href={section.link} className="block">
                <div className="text-center mb-4">
                  {section.icon}
                </div>
                <h2 className="font-bodoni-regular text-2xl text-premium-white text-center mb-4 group-hover:text-accent-gold transition-colors">
                  {section.title}
                </h2>
                <p className="text-soft-white text-center">
                  {section.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default VisitesAteliersActivitesPage; 