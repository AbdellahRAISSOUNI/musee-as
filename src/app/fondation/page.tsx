"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const FondationPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-black text-white py-20"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl mb-6">
              Fondation Abderrahman Slaoui
            </h1>
            <p className="text-soft-white text-lg md:text-xl">
              Préserver et partager le patrimoine artistique marocain
            </p>
          </div>
        </div>
      </motion.section>
      
      {/* Main Content */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              La Fondation Abderrahman Slaoui est dédiée à la préservation et à la promotion du patrimoine artistique marocain. Depuis sa création, elle s'engage à faire découvrir au public la richesse culturelle du Maroc à travers des collections permanentes, des expositions temporaires et des activités culturelles diverses.
            </p>

            <div className="relative h-[40vh] rounded-lg overflow-hidden mb-12">
              <Image
                src="/images/hero-background.jpg"
                alt="Fondation Abderrahman Slaoui"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          
          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-16 bg-gray-50 p-8 rounded-lg"
          >
            <h2 className="font-bodoni text-3xl text-gray-900 mb-6 text-center">
              Notre Mission
            </h2>
            <p className="text-gray-700 mb-6 text-center">
              Préserver, valoriser et transmettre le patrimoine artistique marocain aux générations actuelles et futures. La Fondation Abderrahman Slaoui œuvre pour la reconnaissance de l'excellence artisanale et artistique du Maroc à travers ses collections, expositions et activités.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-gold rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-bodoni text-xl text-gray-900 mb-2">Préserver</h3>
                <p className="text-gray-700">Conservation et restauration des œuvres d'art et objets du patrimoine</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-gold rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="font-bodoni text-xl text-gray-900 mb-2">Exposer</h3>
                <p className="text-gray-700">Présentation des collections et organisation d'expositions temporaires</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-gold rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bodoni text-xl text-gray-900 mb-2">Éduquer</h3>
                <p className="text-gray-700">Sensibilisation du public à l'art et au patrimoine culturel marocain</p>
              </div>
            </div>
          </motion.div>
          
          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="my-16 bg-charcoal text-white p-10 rounded-lg text-center"
          >
            <blockquote className="italic text-2xl font-bodoni-italic text-soft-white mb-4">
              "L'art est le témoin indélébile de l'histoire d'un peuple."
            </blockquote>
            <p className="text-accent-gold">- Abderrahman Slaoui</p>
          </motion.div>
          
          {/* Sections Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12"
          >
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 className="font-bodoni text-2xl mb-4 text-gray-900">Le Projet de Musée</h2>
              <p className="text-gray-700 mb-4">
                Découvrez l'histoire et la vision derrière le Musée Abderrahman Slaoui, son architecture, et les valeurs qui guident cette institution culturelle.
              </p>
              <Link 
                href="/fondation/projet-musee" 
                className="inline-block text-accent-gold hover:text-accent-gold/80 transition-colors font-bodoni border-b border-accent-gold pb-1"
              >
                En savoir plus
              </Link>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 className="font-bodoni text-2xl mb-4 text-gray-900">Ils Parlent de Nous</h2>
              <p className="text-gray-700 mb-4">
                Retrouvez les articles, interviews et mentions du Musée Abderrahman Slaoui dans la presse nationale et internationale.
              </p>
              <Link 
                href="/fondation/presse" 
                className="inline-block text-accent-gold hover:text-accent-gold/80 transition-colors font-bodoni border-b border-accent-gold pb-1"
              >
                Découvrir
              </Link>
            </div>
          </motion.div>
          
          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-lg mt-16"
          >
            <h2 className="font-bodoni text-3xl text-gray-900 mb-6 text-center">
              Contactez la Fondation
            </h2>
            <p className="text-gray-700 mb-8 text-center">
              Pour toute question concernant la Fondation Abderrahman Slaoui, n'hésitez pas à nous contacter.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/infos-pratiques/contact" 
                className="bg-accent-gold text-white hover:bg-accent-gold/90 transition-colors px-6 py-3 rounded text-center"
              >
                Nous contacter
              </Link>
              <Link 
                href="/infos-pratiques/horaires-tarifs-acces" 
                className="bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors px-6 py-3 rounded text-center"
              >
                Informations pratiques
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default FondationPage; 