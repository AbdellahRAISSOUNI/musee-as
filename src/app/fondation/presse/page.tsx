 "use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const PressePage = () => {
  // Press articles data from the screenshots
  const pressArticles = [
    {
      id: "h24-info",
      title: "H24 info avec Le Figaro",
      source: "Le Figaro",
      author: "Emilie Taillandier",
      date: "23 février 2019",
      content: "Atelier d'initiation au zellige traditionnel. Le musée Slaoui a fait appel à un maître passionné pour proposer une série d'ateliers de découverte de l'art de la mosaïque marocaine et de création de motifs personnels. L'occasion d'en apprendre davantage sur l'histoire et les geste...",
      link: "/fondation/presse/h24-info",
      image: "/images/presse/h24-info/zellige.jpg"
    },
    {
      id: "madame-lifeguide",
      title: "Madame Lifeguide Maroc",
      source: "Madame Lifeguide",
      author: "Charlotte CORTES",
      date: "juillet 2018",
      content: "CASABLANCA \"Orient Fantasmé\" au Musée de la Fondation Abderrahman Slaoui Quel rapport existe-t-il entre les réclames de l'époque coloniale et l'art contemporain ? Le fantasme oriental. Autour d'une sélection vintage d'affiches orientalistes issue de la collection du Musée de la Fondation Slaoui, l&...",
      link: "/fondation/presse/madame-lifeguide",
      image: "/images/presse/madame-lifeguide/Logo_wp_MAM_QVkFnE8.jpg"
    },
    {
      id: "les-eco-maroc",
      title: "Les Eco Maroc",
      source: "Les Eco",
      author: "Jihane BOUGRINE",
      date: "22 janvier 2018",
      content: "MUSÉE DE LA FONDATION SALOUI LES MYSTÈRES DE L'ÎLE SIDI ABDERRAHMAN DÉVOILÉS Le Musée de la Fondation Abderrahman Slaoui présente depuis le 17 janvier jusqu'au 28 février 2018, le second accrochage de l'exposition AJAMMAR, projet de résidences, de recherche et de création ...",
      link: "/fondation/presse/les-eco-maroc",
      image: "/images/presse/les-eco-maroc/les_eco_Pr54zxo.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 pt-12">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl mb-6">
              Ils Parlent de Nous
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Return Button */}
            <ReturnButton href="/fondation" />

            {/* Articles Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* First Article */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white"
            >
                <h2 className="font-bodoni text-3xl text-accent-gold mb-6">
                  {pressArticles[0].title}
              </h2>
                
                <div className="mb-6 relative h-[300px] overflow-hidden">
                        <Image
                    src={pressArticles[0].image}
                    alt={pressArticles[0].title}
                          fill
                    className="object-cover object-center"
                  />
            </div>

                <p className="text-gray-700 mb-6">
                  {pressArticles[0].content}
              </p>
              
                <Link 
                  href={pressArticles[0].link}
                  className="inline-block text-accent-gold hover:text-accent-gold/80 transition-colors font-bodoni"
                      >
                  Lire la suite
                </Link>
            </motion.div>

              {/* Second Article */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white"
            >
                <h2 className="font-bodoni text-3xl text-accent-gold mb-6">
                  {pressArticles[1].title}
                </h2>
                
                <div className="mb-6 relative h-[300px] overflow-hidden">
                  <Image
                    src={pressArticles[1].image}
                    alt={pressArticles[1].title}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <p className="text-gray-700 mb-6">
                  {pressArticles[1].content}
                </p>
                
                <Link 
                  href={pressArticles[1].link}
                  className="inline-block text-accent-gold hover:text-accent-gold/80 transition-colors font-bodoni"
                  >
                  Lire la suite
                </Link>
            </motion.div>

              {/* Third Article - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-white lg:col-span-2"
            >
                <h2 className="font-bodoni text-3xl text-accent-gold mb-6">
                  {pressArticles[2].title}
              </h2>
                
                <div className="mb-6 relative h-[300px] overflow-hidden">
                  <Image
                    src={pressArticles[2].image}
                    alt={pressArticles[2].title}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <p className="text-gray-700 mb-6">
                  {pressArticles[2].content}
                </p>
                
                <Link 
                  href={pressArticles[2].link}
                  className="inline-block text-accent-gold hover:text-accent-gold/80 transition-colors font-bodoni"
                  >
                  Lire la suite
                </Link>
            </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PressePage; 