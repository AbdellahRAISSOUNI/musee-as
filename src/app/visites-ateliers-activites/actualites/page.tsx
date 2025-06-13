"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const gold = '#bfa76a';

// Articles data
const articles = [
  {
    id: 'ambassador-us-visit',
    title: 'Ambassador of the United States visit',
    image: '/images/actualites/ambassador-us-visit.jpg',
    date: '15 juillet 2023',
    excerpt: 'We had the absolute honor to welcome his Excellency the Ambassador of the United States and his wife to the "Abderrahman Slaoui Museum"! During the visit, we had the opportunity to showcase the fascinating exhibits that highlight the life and legacy of Abderrahman Slaoui, a remarkable Moroccan art collector and philanthropist, we also discussed the importance and unique learning experience that museums provide to children. The...',
    href: '/visites-ateliers-activites/actualites/ambassador-us-visit'
  },
  {
    id: 'memoire-des-cactus',
    title: 'Mémoire des cactus et mystères des cochenilles',
    image: '/images/actualites/memoire-des-cactus.jpg',
    date: '30 juin 2021',
    excerpt: 'Du 30 juin au 30 septembre, l\'Atelier de l\'Observatoire et le Musée de la Fondation Abderrahman Slaoui présentent une exposition saisissante intitulée "Mémoire des Cactus et Mystère des Cochenilles". Sous l\'angle artistique, les visiteurs pourront découvrir l\'effet dévastateur de la cochenille sur le figuier de barbarie. Cette exposition collective, dirigée par les...',
    href: '/collections-expositions/expositions-temporaires/memoire-des-cactus'
  },
  {
    id: 'atelier-calligraphie',
    title: 'Atelier de calligraphie arabe',
    image: '/images/visites-ateliers-activites/ateliers-artistiques/calligraphie/atelier-calligraphie.jpg',
    date: '5 mai 2023',
    excerpt: 'Le Musée de la Fondation Abderrahman Slaoui organise un atelier de calligraphie arabe animé par le maître calligraphe Mohammed Qarmad. Cet atelier permettra aux participants de découvrir les bases de cet art ancestral et de s\'initier aux techniques traditionnelles de la calligraphie marocaine. Ouvert aux débutants comme aux initiés, cet atelier...',
    href: '/visites-ateliers-activites/ateliers-artistiques/calligraphie'
  },
  {
    id: 'conference-art-contemporain',
    title: 'Conférence: L\'art contemporain marocain',
    image: '/images/actualites/conference-art-contemporain.jpg',
    date: '12 avril 2023',
    excerpt: 'Le Musée de la Fondation Abderrahman Slaoui a le plaisir de vous convier à une conférence exceptionnelle sur l\'évolution de l\'art contemporain marocain, animée par le critique d\'art et commissaire d\'exposition Abdellah Karroum. Cette conférence explorera les tendances actuelles de la scène artistique marocaine et les défis auxquels font face les artistes contemporains...',
    href: '/visites-ateliers-activites/actualites/conference-art-contemporain'
  },
  {
    id: 'exposition-orient-fantasme',
    title: 'Exposition: Orient Fantasmé',
    image: '/images/expositions-temporaires/orient-fantasme/cover.jpg',
    date: '20 mars 2023',
    excerpt: 'Orient Fantasmé met en regard affiches orientalistes de la collection du Musée de la Fondation Slaoui et œuvres des artistes contemporaines Héla Ammar, Meriem Bouderbala, Yasmina Bouziane et Lalla Essaydi. En imaginant un dialogue entre affiches d\'époque coloniale et création contemporaine, l\'exposition dessine une analyse des codes de représentation utilisés...',
    href: '/collections-expositions/expositions-temporaires/orient-fantasme'
  },
  {
    id: 'journee-portes-ouvertes',
    title: 'Journée portes ouvertes au Musée',
    image: '/images/actualites/journee-portes-ouvertes.jpg',
    date: '8 février 2023',
    excerpt: 'À l\'occasion de la Journée Internationale des Musées, la Fondation Abderrahman Slaoui organise une journée portes ouvertes avec entrée gratuite pour tous les visiteurs. Au programme: visites guidées, ateliers pour enfants, démonstrations d\'artisanat traditionnel et rencontres avec des artistes locaux. Une occasion unique de découvrir ou redécouvrir les trésors de notre musée...',
    href: '/visites-ateliers-activites/actualites/journee-portes-ouvertes'
  }
];

const ActualitesPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/actualites/ambassador-us-visit.jpg"
            alt="Actualités du Musée"
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
              Actualités
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              Découvrez les dernières nouvelles, événements et expositions du Musée de la Fondation Abderrahman Slaoui
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-premium-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                  className="flex flex-col h-full"
                >
                  {/* Article Image */}
                  <Link href={article.href} className="block group">
                    <div className="overflow-hidden rounded-lg mb-6 aspect-[16/10] relative bg-graphite">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full relative">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                  
                  {/* Article Content */}
                  <div className="flex-grow">
                    {/* Date */}
                    <p className="text-accent-gold text-sm mb-2 font-medium">
                      {article.date}
                    </p>
                    
                    {/* Title */}
                    <h2 className="font-bodoni text-2xl md:text-3xl text-premium-black mb-3 hover:text-accent-gold transition-colors">
                      <Link href={article.href}>
                        {article.title}
                      </Link>
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-graphite mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    {/* Read More Link */}
                    <Link 
                      href={article.href}
                      className="inline-flex items-center text-accent-gold group mt-2"
                    >
                      <span className="mr-2 font-medium">Lire la suite</span>
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ActualitesPage; 