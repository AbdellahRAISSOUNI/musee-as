"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const PressePage = () => {
  // Mock press articles data
  const pressArticles = [
    {
      id: 1,
      title: "Le Musée Abderrahman Slaoui: Un écrin pour l'art marocain",
      source: "Le Matin",
      date: "15 Mars 2023",
      excerpt: "Une visite au Musée Abderrahman Slaoui est une plongée dans l'histoire de l'art marocain, à travers une collection exceptionnelle rassemblée avec passion...",
      link: "#",
      image: "/images/hero-background.jpg"
    },
    {
      id: 2,
      title: "Exposition temporaire: succès retentissant pour 'Mémoires de Casablanca'",
      source: "Aujourd'hui Le Maroc",
      date: "7 Juin 2022",
      excerpt: "L'exposition 'Mémoires de Casablanca' au Musée Abderrahman Slaoui attire les foules. Une rétrospective saisissante sur l'évolution de la ville blanche...",
      link: "#",
      image: "/images/hero-background.jpg"
    },
    {
      id: 3,
      title: "Interview: La directrice du Musée Abderrahman Slaoui nous parle de sa vision",
      source: "TelQuel",
      date: "22 Septembre 2022",
      excerpt: "Rencontre avec la directrice du musée qui nous dévoile les coulisses de cette institution et les projets à venir pour faire rayonner la culture marocaine...",
      link: "#",
      image: "/images/hero-background.jpg"
    },
    {
      id: 4,
      title: "Le Musée Abderrahman Slaoui lance son programme éducatif pour les écoles",
      source: "L'Économiste",
      date: "5 Octobre 2022",
      excerpt: "Une initiative saluée par les enseignants et les parents, qui offre aux élèves une immersion dans l'art et l'histoire du Maroc à travers des ateliers ludiques et éducatifs...",
      link: "#",
      image: "/images/hero-background.jpg"
    },
    {
      id: 5,
      title: "Les trésors cachés du Musée Abderrahman Slaoui",
      source: "Maroc Hebdo",
      date: "12 Janvier 2023",
      excerpt: "Découverte des pièces rares et moins connues de la collection permanente du musée, qui témoignent de la richesse du patrimoine culturel marocain...",
      link: "#",
      image: "/images/hero-background.jpg"
    }
  ];

  // International press coverage
  const internationalPress = [
    {
      id: 1,
      title: "Casablanca's Hidden Gem: The Abderrahman Slaoui Museum",
      source: "The Art Newspaper",
      date: "March 2023",
      excerpt: "A small but exquisite museum showcasing the finest of Moroccan decorative arts and visual culture...",
      link: "#"
    },
    {
      id: 2,
      title: "Morocco's Cultural Renaissance Through Private Museums",
      source: "The New York Times",
      date: "November 2022",
      excerpt: "The Abderrahman Slaoui Museum represents a growing trend of private collections becoming public cultural institutions in Morocco...",
      link: "#"
    },
    {
      id: 3,
      title: "Five Must-Visit Museums in Morocco",
      source: "Condé Nast Traveler",
      date: "June 2022",
      excerpt: "Among our top picks is the Abderrahman Slaoui Museum in Casablanca, offering visitors a glimpse into Morocco's rich artistic heritage...",
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 pt-12">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-bodoni-regular text-4xl md:text-5xl lg:text-6xl mb-6">
              Ils Parlent de Nous
            </h1>
            <p className="text-soft-white text-lg md:text-xl">
              Revue de presse et couverture médiatique du Musée Abderrahman Slaoui
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb Navigation */}
            <div className="mb-10">
              <Link 
                href="/fondation" 
                className="text-gray-600 hover:text-accent-gold transition-colors"
              >
                ← Retour à la Fondation
              </Link>
            </div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="font-bodoni-regular text-3xl text-gray-900 mb-6">
                Dans la Presse Nationale
              </h2>
              <p className="text-gray-700 mb-8">
                Le Musée Abderrahman Slaoui est régulièrement mentionné dans la presse marocaine pour ses expositions, événements et initiatives culturelles. Découvrez une sélection d'articles qui parlent de nous.
              </p>
            </motion.div>

            {/* Press Articles */}
            <div className="mb-20">
              {pressArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className={`mb-12 p-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} rounded-lg shadow-sm`}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="relative h-48 md:h-full rounded-lg overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <span className="inline-block bg-accent-gold/10 text-accent-gold text-sm px-3 py-1 rounded-full mb-3">
                        {article.source} • {article.date}
                      </span>
                      <h3 className="font-bodoni-regular text-2xl text-gray-900 mb-3">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {article.excerpt}
                      </p>
                      <a 
                        href={article.link} 
                        className="inline-block text-accent-gold hover:text-accent-gold/80 font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lire l'article complet →
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* International Press */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="font-bodoni-regular text-3xl text-gray-900 mb-6">
                Rayonnement International
              </h2>
              <p className="text-gray-700 mb-8">
                Le Musée Abderrahman Slaoui est également reconnu au-delà des frontières, comme en témoignent ces mentions dans la presse internationale.
              </p>
              
              <div className="bg-charcoal text-white rounded-lg p-8 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {internationalPress.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                      className="border-l-2 border-accent-gold pl-4"
                    >
                      <span className="text-accent-gold text-sm">
                        {article.source} • {article.date}
                      </span>
                      <h3 className="font-bodoni-regular text-xl text-premium-white mt-2 mb-3">
                        {article.title}
                      </h3>
                      <p className="text-soft-white text-sm mb-3">
                        {article.excerpt}
                      </p>
                      <a 
                        href={article.link} 
                        className="text-accent-gold hover:text-premium-white text-sm transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read more →
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Press Kit Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-gray-50 rounded-lg p-10 mb-16"
            >
              <div className="text-center">
                <h2 className="font-bodoni-regular text-3xl text-gray-900 mb-6">
                  Espace Presse
                </h2>
                <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
                  Vous êtes journaliste et souhaitez écrire sur le Musée Abderrahman Slaoui ? Nous mettons à votre disposition des ressources et des informations pour faciliter votre travail.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#" 
                    className="inline-block bg-accent-gold text-white hover:bg-accent-gold/90 transition-colors px-6 py-3 font-bodoni-regular rounded"
                  >
                    Télécharger le dossier de presse
                  </a>
                  <a 
                    href="#" 
                    className="inline-block bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors px-6 py-3 font-bodoni-regular rounded"
                  >
                    Banque d'images
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact for Press */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="font-bodoni-regular text-3xl text-gray-900 mb-6">
                Contact Presse
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-sm">
                  <h3 className="font-bodoni-regular text-xl text-gray-900 mb-4">
                    Relations Presse
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> presse@musee-slaoui.ma
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Téléphone:</strong> +212 5 22 XX XX XX
                  </p>
                  <p className="text-gray-700">
                    Pour toute demande d'interview, de reportage ou d'information, notre équipe de communication se tient à votre disposition.
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-sm">
                  <h3 className="font-bodoni-regular text-xl text-gray-900 mb-4">
                    Accréditation Presse
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Les journalistes souhaitant visiter le musée pour un reportage peuvent demander une accréditation presse en remplissant le formulaire en ligne.
                  </p>
                  <a 
                    href="#" 
                    className="inline-block text-accent-gold hover:text-accent-gold/80 font-medium transition-colors"
                  >
                    Demander une accréditation →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bodoni-regular text-3xl text-gray-900 mb-6">
              Restez Informé
            </h2>
            <p className="text-gray-700 mb-8">
              Abonnez-vous à notre newsletter pour recevoir nos communiqués de presse et être informé de nos actualités.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Votre adresse e-mail" 
                  className="flex-grow px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent-gold"
                />
                <button className="bg-black text-white hover:bg-black/90 transition-colors px-6 py-3 font-bodoni-regular rounded">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PressePage; 