"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const EspaceMuseographiquePage = () => {
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
              L'espace muséographique
            </h1>
            <p className="text-soft-white text-lg md:text-xl">
              Une scénographie pensée comme une maison de collectionneur
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
                href="/fondation/projet-musee" 
                className="text-gray-600 hover:text-accent-gold transition-colors"
              >
                ← Retour au Projet de Musée
              </Link>
            </div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-12"
            >
              <div className="relative h-[400px] overflow-hidden rounded-lg mb-8">
                <Image
                  src="/images/projet-musee/espace-museographique/facade.jpg"
                  alt="Façade du Musée Abderrahman Slaoui"
                  fill
                  className="object-cover object-center"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Les collections du Musée de la Fondation Abderrahman Slaoui se développent sur 600 m² en 3 étages. La scénographie, pensée par le scénographe Philippe Délis, a été conçue dans l'esprit d'une maison de collectionneur : elle conserve la chaleur, l'invitation et la convivialité pour en faire un musée qui est bien plus large qu'un simple lieu d'exposition.
                </p>
              </div>
            </motion.div>

            {/* Architecture and Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-bodoni text-3xl text-gray-900 mb-6">
                Une villa art déco transformée
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Le musée est hébergé dans une villa art déco des années 1940, typique de l'architecture casablancaise de cette époque. Sa restauration a respecté l'esprit original du bâtiment tout en l'adaptant aux exigences muséographiques modernes.
                </p>
                
                <p className="text-gray-700 mb-6">
                  L'architecture intérieure a été repensée pour créer des espaces d'exposition fluides et harmonieux, où les visiteurs peuvent déambuler librement entre les différentes collections. Les éléments architecturaux d'origine, comme les moulures et les escaliers, ont été préservés et mis en valeur pour témoigner de l'histoire du lieu.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="relative h-[250px] overflow-hidden rounded-lg">
                    <Image
                      src="/images/projet-musee/espace-museographique/interieur-1.jpg"
                      alt="Intérieur du musée"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="relative h-[250px] overflow-hidden rounded-lg">
                    <Image
                      src="/images/projet-musee/espace-museographique/interieur-2.jpg"
                      alt="Espace d'exposition"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Exhibition Spaces */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-bodoni text-3xl text-gray-900 mb-6">
                Les espaces d'exposition
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Les espaces d'exposition ont été conçus pour mettre en valeur les collections dans les meilleures conditions de conservation et de présentation. L'éclairage, la température et l'humidité sont contrôlés pour assurer la préservation des œuvres.
                </p>
                
                <h3 className="font-bodoni text-2xl text-gray-900 my-6">
                  Rez-de-chaussée
                </h3>
                
                <p className="text-gray-700 mb-6">
                  Le rez-de-chaussée accueille les expositions temporaires et les événements culturels. Cet espace modulable permet de présenter des œuvres variées et d'accueillir différentes manifestations artistiques tout au long de l'année.
                </p>
                
                <h3 className="font-bodoni text-2xl text-gray-900 my-6">
                  Premier étage
                </h3>
                
                <p className="text-gray-700 mb-6">
                  Le premier étage est consacré aux collections permanentes de bijoux berbères et d'affiches orientalistes. Les vitrines, spécialement conçues pour ces objets délicats, permettent aux visiteurs d'admirer les détails de ces pièces exceptionnelles tout en assurant leur protection.
                </p>
                
                <div className="relative h-[300px] overflow-hidden rounded-lg my-8">
                  <Image
                    src="/images/projet-musee/espace-museographique/collection-bijoux.jpg"
                    alt="Collection de bijoux"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                
                <h3 className="font-bodoni text-2xl text-gray-900 my-6">
                  Deuxième étage
                </h3>
                
                <p className="text-gray-700 mb-6">
                  Le deuxième étage abrite la collection d'art contemporain marocain et les objets d'art décoratif. L'aménagement de cet espace, plus intime, évoque l'atmosphère d'un salon privé, où les œuvres dialoguent entre elles dans un cadre chaleureux.
                </p>
              </div>
            </motion.div>

            {/* Museographic Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-bodoni text-3xl text-gray-900 mb-6">
                Une approche muséographique innovante
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  La muséographie du Musée Abderrahman Slaoui se distingue par son approche à la fois didactique et esthétique. Chaque objet est présenté dans son contexte historique et culturel, avec des cartels explicatifs qui permettent aux visiteurs de comprendre sa signification et sa valeur.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Des dispositifs multimédias discrets complètent la visite, offrant des informations supplémentaires sur les collections et leur histoire. Ces outils technologiques s'intègrent harmonieusement dans l'espace, sans jamais détourner l'attention des œuvres elles-mêmes.
                </p>
                
                <blockquote className="bg-gray-50 p-6 italic border-l-4 border-accent-gold my-8">
                  <p className="text-gray-700 mb-2">
                    "La scénographie du musée a été pensée pour créer un dialogue entre les œuvres et l'espace, entre le passé et le présent, entre l'art et le visiteur."
                  </p>
                  <footer className="text-gray-500">
                    — Philippe Délis, scénographe
                  </footer>
                </blockquote>
                
                <p className="text-gray-700 mb-6">
                  Cette approche muséographique innovante fait du Musée Abderrahman Slaoui un lieu unique à Casablanca, où la découverte du patrimoine artistique marocain devient une expérience immersive et enrichissante.
                </p>
              </div>
            </motion.div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/fondation/projet-musee" 
                className="inline-block bg-accent-gold text-white hover:bg-accent-gold/90 transition-colors px-6 py-3 font-bodoni rounded"
              >
                Retour au Projet de Musée
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EspaceMuseographiquePage; 