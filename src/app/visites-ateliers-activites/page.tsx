"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegCalendarAlt, FaPaintBrush, FaUsers, FaRoute, FaBuilding } from 'react-icons/fa';

const gold = '#bfa76a';

const VisitesAteliersActivitesPage = () => {
  const sections = [
    {
      id: 'actualites',
      title: 'Actualités',
      description: 'Découvrez les dernières nouvelles et événements du Musée Abderrahman Slaoui.',
      icon: <FaRegCalendarAlt className="text-accent-gold text-3xl mb-4" />,
      link: '/visites-ateliers-activites/actualites',
      featured: true,
      image: '/images/visites-ateliers-activites/rencontres/nostalgie/WhatsApp_Image_2023-07-25_at_15.50.21_1.jpeg'
    },
    {
      id: 'ateliers-artistiques',
      title: 'Ateliers Artistiques',
      description: 'Participez à nos ateliers de création artistique pour tous les âges et tous les niveaux.',
      icon: <FaPaintBrush className="text-accent-gold text-3xl mb-4" />,
      link: '/visites-ateliers-activites/ateliers-artistiques',
      image: '/images/visites-ateliers-activites/ateliers-artistiques/creation/Tour_de_monde_M_Azeroual_1.jpg'
    },
    {
      id: 'rencontres',
      title: 'Rencontres',
      description: 'Assistez à nos conférences, discussions et rencontres avec des artistes et experts.',
      icon: <FaUsers className="text-accent-gold text-3xl mb-4" />,
      link: '/visites-ateliers-activites/rencontres',
      image: '/images/visites-ateliers-activites/rencontres/nostalgie/WhatsApp_Image_2023-07-25_at_15.50.21_1.jpeg'
    },
    {
      id: 'visites-guidees',
      title: 'Visites Guidées',
      description: 'Explorez le musée avec nos guides experts qui vous feront découvrir l\'histoire et les secrets de nos collections.',
      icon: <FaRoute className="text-accent-gold text-3xl mb-4" />,
      link: '/visites-ateliers-activites/visites-guidees',
      featured: true,
      image: '/images/entree_musee.jpg'
    },
    {
      id: 'privatisation',
      title: 'Privatisation',
      description: 'Louez nos espaces pour vos événements privés, réceptions et réunions professionnelles.',
      icon: <FaBuilding className="text-accent-gold text-3xl mb-4" />,
      link: '/visites-ateliers-activites/privatisation',
      image: '/images/hero-background.jpg'
    }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/visites-ateliers-activites/rencontres/nostalgie/TCHAT-PHOTO-Nostalgie-du-futur.png"
            alt="Visites, Ateliers & Activités"
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
              Visites, Ateliers & Activités
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
                Découvrez les nombreuses façons d'explorer et de vivre le Musée Abderrahman Slaoui. 
                De nos visites guidées à nos ateliers créatifs, en passant par nos conférences et 
                événements spéciaux, nous vous offrons une expérience culturelle riche et immersive.
              </p>
            </div>
            
            {/* Featured Sections */}
            <div className="space-y-24 mb-24">
              {sections.filter(section => section.featured).map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * (index + 1), duration: 0.8 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
                >
                  {/* Image Container */}
                  <div className="w-full md:w-1/2 h-[400px] relative group">
                    <Link href={section.link} className="block w-full h-full">
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
                          src={section.image}
                          alt={section.title}
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
                      <div className="flex items-center mb-4">
                        <div className="text-accent-gold mr-3">
                          {section.icon}
                        </div>
                        <h2 className="font-bodoni text-3xl md:text-4xl font-medium text-gray-900">
                          {section.title}
                        </h2>
                      </div>
                      
                      <p className="text-gray-700 text-lg mb-6">
                        {section.description}
                      </p>
                      
                      <Link href={section.link} className="inline-flex items-center text-accent-gold group">
                        <span className="mr-2 font-medium">En savoir plus</span>
                        <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Other Sections Grid - Enhanced Sophisticated Design */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {sections.filter(section => !section.featured).map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.8 }}
                  className="group"
                >
                  <div className="relative overflow-hidden">
                    {/* Elegant frame effect */}
                    <div className="absolute inset-0 border border-accent-gold/30 z-20 pointer-events-none group-hover:border-accent-gold/70 transition-colors duration-500"></div>
                    
                    {/* Top decorative element */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-accent-gold transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 z-30"></div>
                    
                    <Link href={section.link} className="block">
                      <div className="h-72 relative overflow-hidden">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        
                        {/* Clean, elegant overlay with icon */}
                        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent flex items-center justify-end px-6">
                          <div className="text-accent-gold transform group-hover:scale-110 transition-transform duration-500 origin-right">
                            {section.icon}
                          </div>
                        </div>
                        
                        {/* Title overlay at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                          <h3 className="font-bodoni text-2xl text-white mb-2 tracking-wide">
                            {section.title}
                          </h3>
                          <div className="w-10 h-0.5 bg-accent-gold mb-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                          <p className="text-white/80 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {section.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Bottom decorative element */}
                      <div className="flex justify-center mt-4">
                        <span className="inline-flex items-center text-accent-gold text-sm font-bodoni tracking-wider">
                          <span className="transform group-hover:translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100">→</span>
                          <span className="mx-2 transform group-hover:translate-x-1 transition-all duration-300">DÉCOUVRIR</span>
                          <span className="transform group-hover:translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100">→</span>
                        </span>
                      </div>
                    </Link>
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

export default VisitesAteliersActivitesPage; 