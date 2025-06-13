"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaClock, FaCoffee, FaShoppingBag, FaEnvelope } from 'react-icons/fa';

const gold = '#bfa76a';

const InfosPratiquesPage = () => {
  const sections = [
    {
      id: 'horaires-tarifs-acces',
      title: 'Horaires, Tarifs et Accès',
      description: 'Toutes les informations pratiques pour préparer votre visite au musée.',
      icon: <FaClock className="text-accent-gold text-3xl" />,
      link: '/infos-pratiques/horaires-tarifs-acces',
      image: '/images/hero-background.jpg'
    },
    {
      id: 'cafe-musee',
      title: 'Le Café du Musée',
      description: 'Un espace de détente où vous pourrez déguster des spécialités marocaines dans un cadre unique.',
      icon: <FaCoffee className="text-accent-gold text-3xl" />,
      link: '/infos-pratiques/cafe-musee',
      image: '/images/infos-pratiques/cafe-musee/cafe-terasse1.jpg'
    },
    {
      id: 'comptoir-vente',
      title: 'Le Comptoir de Vente',
      description: 'Notre boutique propose une sélection d\'objets d\'art, de livres et de souvenirs inspirés par nos collections.',
      icon: <FaShoppingBag className="text-accent-gold text-3xl" />,
      link: '/infos-pratiques/comptoir-vente',
      image: '/images/infos-pratiques/comptoir-vente/le-comptoir-des-ventes-.jpg'
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Contactez-nous pour toute question ou pour organiser votre visite.',
      icon: <FaEnvelope className="text-accent-gold text-3xl" />,
      link: '/infos-pratiques/contact',
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
            src="/images/hero-background.jpg"
            alt="Informations Pratiques"
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
            Informations Pratiques
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
            Découvrez toutes les informations nécessaires pour préparer et profiter pleinement 
            de votre visite au Musée Abderrahman Slaoui. Des horaires d'ouverture aux services 
            proposés, nous vous accompagnons dans l'organisation de votre venue.
          </p>
            </div>
          
            {/* Sections Showcase */}
            <div className="space-y-24">
              {sections.map((section, index) => (
              <motion.div
                key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.8 }}
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
                      <Link href={section.link} className="block">
                        <div className="flex items-center mb-4">
                      {section.icon}
                          <h2 className="font-bodoni text-3xl md:text-4xl font-medium text-gray-900 ml-4 hover:text-accent-gold transition-colors duration-300">
                        {section.title}
                      </h2>
                        </div>
                        <p className="text-gray-700 text-lg mb-6">
                        {section.description}
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
          
          {/* Extra Information Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
              className="mt-24 bg-gray-50 p-8 rounded-lg border border-gray-200 text-center"
          >
              <h2 className="font-bodoni text-2xl text-gray-900 mb-4">
              Besoin d'informations supplémentaires ?
            </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions et vous aider à préparer votre visite.
            </p>
              <Link 
                href="/infos-pratiques/contact" 
                className="inline-block bg-transparent border border-accent-gold text-accent-gold hover:bg-accent-gold/10 transition-colors px-6 py-3 font-bodoni"
              >
                Contactez-nous
              </Link>
            </motion.div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default InfosPratiquesPage; 