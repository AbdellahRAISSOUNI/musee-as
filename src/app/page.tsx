"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import HeroSection from '@/components/HeroSection';

const HomePage = () => {
  // Featured sections to display on homepage
  const featuredSections = [
    {
      title: "Fondation Abderrahman Slaoui",
      description: "Découvrez l'histoire et la mission de notre fondation dédiée à la préservation du patrimoine artistique marocain.",
      image: "/images/hero-background.jpg",
      link: "/fondation"
    },
    {
      title: "Collections & Expositions",
      description: "Explorez nos collections permanentes d'art marocain et nos expositions temporaires.",
      image: "/images/hero-background.jpg",
      link: "/collections-expositions"
    },
    {
      title: "Tempus Fugit",
      description: "Une exposition unique explorant la relation entre l'art, le temps et la mémoire.",
      image: "/images/hero-background.jpg",
      link: "/tempus-fugit",
      featured: true
    }
  ];

  // Current events and activities
  const currentEvents = [
    {
      title: "Atelier de Calligraphie",
      date: "24 Juin 2023",
      image: "/images/hero-background.jpg",
      link: "/visites-ateliers-activites/ateliers-artistiques"
    },
    {
      title: "Visite Guidée Thématique",
      date: "30 Juin 2023",
      image: "/images/hero-background.jpg",
      link: "/visites-ateliers-activites/visites-guidees"
    },
    {
      title: "Rencontre avec l'Artiste",
      date: "5 Juillet 2023",
      image: "/images/hero-background.jpg",
      link: "/visites-ateliers-activites/rencontres"
    }
  ];

  // Navigation sections for quick access
  const navSections = [
    { title: "Jeune Public", link: "/jeune-public", icon: "👨‍👩‍👧‍👦" },
    { title: "Horaires & Tarifs", link: "/infos-pratiques/horaires-tarifs-acces", icon: "🕒" },
    { title: "Contact", link: "/infos-pratiques/contact", icon: "✉️" },
    { title: "Plan du Site", link: "/site-map", icon: "🗺️" }
  ];

  return (
    <main className="min-h-screen bg-black text-premium-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Sections */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bodoni-regular text-center mb-16"
          >
            Découvrez le Musée Abderrahman Slaoui
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group ${section.featured ? 'lg:col-span-3 lg:row-span-2' : ''}`}
              >
                <Link href={section.link}>
                  <div className={`relative overflow-hidden rounded-lg mb-4 ${section.featured ? 'aspect-[21/9]' : 'aspect-square'}`}>
            <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="text-center">
                        <h3 className="font-bodoni-regular text-2xl md:text-3xl text-premium-white mb-3 group-hover:text-accent-gold transition-colors">
                          {section.title}
                        </h3>
                        <p className="text-soft-white max-w-lg mx-auto">
                          {section.description}
                        </p>
                        
                        <div className="mt-6 inline-block border-b border-accent-gold text-accent-gold">
                          En savoir plus
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-bodoni-italic text-3xl md:text-4xl lg:text-5xl text-premium-white mb-8 leading-relaxed">
              "L'art est le témoin indélébile de l'histoire d'un peuple et le reflet de son âme."
            </h2>
            <p className="text-accent-gold text-lg">
              — Abderrahman Slaoui
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Current Events Section */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bodoni-regular mb-4">
                Actualités & Événements
              </h2>
              <p className="text-soft-white max-w-2xl">
                Découvrez nos activités culturelles et nos événements à venir.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-6 md:mt-0"
            >
              <Link 
                href="/visites-ateliers-activites" 
                className="inline-block bg-transparent border border-accent-gold text-accent-gold hover:bg-accent-gold/10 transition-colors px-6 py-3 font-bodoni-regular"
              >
                Voir tous les événements
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link href={event.link}>
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
          <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>
                  
                  <p className="text-accent-gold text-sm mb-2">
                    {event.date}
                  </p>
                  
                  <h3 className="font-bodoni-regular text-xl text-premium-white group-hover:text-accent-gold transition-colors">
                    {event.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Quick Links Navigation */}
      <section className="py-16 px-6 bg-charcoal/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {navSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-charcoal p-6 rounded-lg text-center group"
              >
                <Link href={section.link} className="block">
                  <span className="text-4xl block mb-4">{section.icon}</span>
                  <h3 className="font-bodoni-regular text-xl text-premium-white group-hover:text-accent-gold transition-colors">
                    {section.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter & Footer Info */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bodoni-regular mb-6">
                Restons en contact
              </h2>
              <p className="text-soft-white mb-8 max-w-lg">
                Inscrivez-vous à notre newsletter pour recevoir les dernières actualités du musée, les invitations aux vernissages et les informations sur nos événements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="bg-charcoal border-none py-3 px-4 text-premium-white focus:outline-none focus:ring-1 focus:ring-accent-gold rounded-sm flex-grow"
                />
                <button className="bg-accent-gold hover:bg-accent-gold/90 text-black py-3 px-6 font-bodoni-regular transition-colors">
                  S'inscrire
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bodoni-regular mb-6">
                Informations
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-accent-gold text-lg mb-3">Adresse</h3>
                  <p className="text-soft-white">
                    Musée Abderrahman Slaoui<br />
                    12, rue du Caire<br />
                    Quartier Racine<br />
                    Casablanca, Maroc
                  </p>
                </div>
                
                <div>
                  <h3 className="text-accent-gold text-lg mb-3">Horaires</h3>
                  <p className="text-soft-white">
                    Mardi - Dimanche<br />
                    10h00 - 18h00<br />
                    Fermé le Lundi
                  </p>
                </div>
                
                <div>
                  <h3 className="text-accent-gold text-lg mb-3">Contact</h3>
                  <p className="text-soft-white">
                    Téléphone: +212 5 22 xx xx xx<br />
                    Email: contact@musee-as.ma
                  </p>
                </div>
                
                <div>
                  <h3 className="text-accent-gold text-lg mb-3">Suivez-nous</h3>
                  <p className="text-soft-white">
                    Instagram • Facebook • Twitter
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-graphite/30 text-center">
            <p className="text-soft-white text-sm">
              © 2023 Fondation Abderrahman Slaoui. Tous droits réservés.
            </p>
          </div>
    </div>
      </section>
    </main>
  );
};

export default HomePage;
