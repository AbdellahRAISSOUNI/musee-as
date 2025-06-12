"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaClock, FaCoffee, FaShoppingBag, FaEnvelope } from 'react-icons/fa';

const InfosPratiquesPage = () => {
  const sections = [
    {
      id: 'horaires-tarifs-acces',
      title: 'Horaires, Tarifs et Accès',
      description: 'Toutes les informations pratiques pour préparer votre visite au musée.',
      icon: <FaClock className="text-accent-gold text-4xl mb-6" />,
      link: '/infos-pratiques/horaires-tarifs-acces',
      featured: true
    },
    {
      id: 'cafe-musee',
      title: 'Le Café du Musée',
      description: 'Un espace de détente où vous pourrez déguster des spécialités marocaines dans un cadre unique.',
      icon: <FaCoffee className="text-accent-gold text-4xl mb-6" />,
      link: '/infos-pratiques/cafe-musee',
      featured: true
    },
    {
      id: 'comptoir-vente',
      title: 'Le Comptoir de Vente',
      description: 'Notre boutique propose une sélection d\'objets d\'art, de livres et de souvenirs inspirés par nos collections.',
      icon: <FaShoppingBag className="text-accent-gold text-4xl mb-6" />,
      link: '/infos-pratiques/comptoir-vente'
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Contactez-nous pour toute question ou pour organiser votre visite.',
      icon: <FaEnvelope className="text-accent-gold text-4xl mb-6" />,
      link: '/infos-pratiques/contact'
    }
  ];

  return (
    <main className="min-h-screen bg-black text-premium-white pt-12">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 py-16"
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="font-bodoni-regular text-4xl md:text-5xl lg:text-6xl mb-8 text-center">
            Informations Pratiques
          </h1>
          
          <p className="text-soft-white text-lg mb-16 leading-relaxed text-center max-w-4xl mx-auto">
            Découvrez toutes les informations nécessaires pour préparer et profiter pleinement 
            de votre visite au Musée Abderrahman Slaoui. Des horaires d'ouverture aux services 
            proposés, nous vous accompagnons dans l'organisation de votre venue.
          </p>
          
          {/* Featured Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {sections.filter(section => section.featured).map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="group"
              >
                <Link href={section.link}>
                  <div className="overflow-hidden rounded-lg aspect-video relative bg-graphite mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full relative">
                        <Image
                          src="/images/hero-background.jpg"
                          alt={section.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors"></div>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      {section.icon}
                      <h2 className="font-bodoni-regular text-3xl text-premium-white text-center mb-2 group-hover:text-accent-gold transition-colors">
                        {section.title}
                      </h2>
                      <p className="text-soft-white text-center max-w-sm">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Other Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.filter(section => !section.featured).map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                className="bg-charcoal rounded-lg overflow-hidden group"
              >
                <Link href={section.link} className="block p-6">
                  <div className="flex flex-col items-center text-center">
                    {section.icon}
                    <h2 className="font-bodoni-regular text-2xl text-premium-white mb-3 group-hover:text-accent-gold transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-soft-white">
                      {section.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Extra Information Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 bg-charcoal p-8 rounded-lg border border-graphite/30"
          >
            <h2 className="font-bodoni-regular text-2xl text-premium-white mb-4 text-center">
              Besoin d'informations supplémentaires ?
            </h2>
            <p className="text-soft-white text-center mb-6">
              Notre équipe est à votre disposition pour répondre à toutes vos questions et vous aider à préparer votre visite.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/infos-pratiques/contact" 
                className="inline-block bg-transparent border border-accent-gold text-accent-gold hover:bg-accent-gold/10 transition-colors px-6 py-3 font-bodoni-regular"
              >
                Contactez-nous
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default InfosPratiquesPage; 