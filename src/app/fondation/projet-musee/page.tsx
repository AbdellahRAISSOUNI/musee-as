"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ProjetMuseePage = () => {
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
              Le Projet de Musée
            </h1>
            <p className="text-soft-white text-lg md:text-xl">
              Une vision culturelle pour préserver et promouvoir le patrimoine artistique marocain
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
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
                Naissance d'un Projet Culturel
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Le Musée Abderrahman Slaoui est né de la volonté de préserver et partager une collection exceptionnelle d'art marocain et d'arts décoratifs. Inauguré en 2012, ce projet est le fruit d'une réflexion approfondie sur la préservation du patrimoine culturel et artistique marocain.
                </p>
                <p className="text-gray-700 mb-6">
                  Situé au cœur de Casablanca, dans le quartier Racine, le musée occupe une villa art déco soigneusement restaurée pour accueillir les collections tout en préservant le charme architectural de ce bâtiment historique.
                </p>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative h-[40vh] md:h-[60vh] mb-16 overflow-hidden rounded-lg"
            >
              <Image
                src="/images/hero-background.jpg"
                alt="Le Musée Abderrahman Slaoui"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* History & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h3 className="font-bodoni-regular text-2xl text-gray-900 mb-4">
                  L'Histoire
                </h3>
                <p className="text-gray-700 mb-4">
                  Abderrahman Slaoui (1919-2001), homme d'affaires et grand collectionneur marocain, a rassemblé tout au long de sa vie des œuvres d'art reflétant la richesse du patrimoine culturel du Maroc et de son histoire.
                </p>
                <p className="text-gray-700">
                  Sa famille a décidé de partager cette collection exceptionnelle avec le public en créant une fondation qui porte son nom et en ouvrant un musée pour abriter et mettre en valeur ces trésors artistiques.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <h3 className="font-bodoni-regular text-2xl text-gray-900 mb-4">
                  Notre Mission
                </h3>
                <p className="text-gray-700 mb-4">
                  Le Musée Abderrahman Slaoui a pour mission de promouvoir l'art marocain sous toutes ses formes, de préserver le patrimoine culturel national et de le rendre accessible au plus grand nombre.
                </p>
                <p className="text-gray-700">
                  Nous nous engageons à créer un espace de dialogue culturel, d'éducation artistique et de rencontres où les visiteurs peuvent découvrir et apprécier la richesse et la diversité de l'art marocain.
                </p>
              </motion.div>
            </div>

            {/* Dark Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="bg-charcoal text-white p-10 rounded-lg mb-16"
            >
              <h3 className="font-bodoni-italic text-2xl text-premium-white mb-6 text-center">
                "Notre vision est de faire du Musée Abderrahman Slaoui un lieu incontournable de la scène culturelle marocaine, un pont entre le passé et le présent, entre la tradition et la modernité."
              </h3>
              <p className="text-soft-white text-center">
                - La Direction du Musée
              </p>
            </motion.div>

            {/* Collections Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="font-bodoni-regular text-3xl text-gray-900 mb-6">
                Les Collections
              </h2>
              <p className="text-gray-700 mb-6">
                Le musée abrite plusieurs collections thématiques qui illustrent la diversité et la richesse du patrimoine artistique marocain :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h4 className="font-bodoni-regular text-xl text-gray-900 mb-3">
                    Bijoux Anciens
                  </h4>
                  <p className="text-gray-700">
                    Une collection exceptionnelle de bijoux traditionnels marocains, principalement berbères, reflétant l'habileté des artisans locaux.
                  </p>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h4 className="font-bodoni-regular text-xl text-gray-900 mb-3">
                    Affiches Anciennes
                  </h4>
                  <p className="text-gray-700">
                    Des affiches publicitaires et touristiques du début du XXe siècle, témoignant de l'histoire du Maroc et de son ouverture au monde.
                  </p>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h4 className="font-bodoni-regular text-xl text-gray-900 mb-3">
                    Art Contemporain
                  </h4>
                  <p className="text-gray-700">
                    Œuvres d'artistes marocains contemporains, prolongeant la tradition artistique tout en explorant de nouvelles formes d'expression.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link 
                  href="/collections-expositions" 
                  className="inline-block bg-accent-gold text-white hover:bg-accent-gold/90 transition-colors px-6 py-3 font-bodoni-regular rounded"
                >
                  Découvrir nos collections
                </Link>
              </div>
            </motion.div>

            {/* Architecture Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="font-bodoni-regular text-3xl text-gray-900 mb-6">
                L'Architecture
              </h2>
              <p className="text-gray-700 mb-6">
                Le musée est hébergé dans une villa art déco des années 1940, typique de l'architecture casablancaise de cette époque. Sa restauration a respecté l'esprit original du bâtiment tout en l'adaptant aux exigences muséographiques modernes.
              </p>
              <p className="text-gray-700 mb-6">
                Les espaces d'exposition ont été conçus pour mettre en valeur les collections dans les meilleures conditions de conservation et de présentation. L'éclairage, la température et l'humidité sont contrôlés pour assurer la préservation des œuvres.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bodoni-regular text-3xl text-gray-900 mb-6">
              Visitez le Musée Abderrahman Slaoui
            </h2>
            <p className="text-gray-700 mb-8">
              Nous vous invitons à découvrir par vous-même les trésors de notre collection et à plonger dans l'histoire fascinante de l'art marocain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/infos-pratiques/horaires-tarifs-acces" 
                className="inline-block bg-charcoal text-white hover:bg-charcoal/90 transition-colors px-6 py-3 font-bodoni-regular rounded"
              >
                Informations pratiques
              </Link>
              <Link 
                href="/visites-ateliers-activites" 
                className="inline-block bg-white border border-charcoal text-charcoal hover:bg-gray-50 transition-colors px-6 py-3 font-bodoni-regular rounded"
              >
                Activités et événements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjetMuseePage; 