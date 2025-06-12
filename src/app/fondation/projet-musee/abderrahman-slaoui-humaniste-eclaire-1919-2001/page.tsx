"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const AbderrahmanSlaouiPage = () => {
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
              Abderrahman Slaoui
            </h1>
            <p className="text-soft-white text-lg md:text-xl">
              Humaniste éclairé (1919-2001)
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Left Column - Image */}
              <div className="md:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="sticky top-32"
                >
                  <div className="relative h-[400px] overflow-hidden rounded-lg mb-6">
                    <Image
                      src="/images/projet-musee/abderrahman-slaoui/abderrahman-slaoui_9MciH0M.jpg"
                      alt="Abderrahman Slaoui"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  
                  <div className="text-center">
                    <p className="text-gray-500 italic">
                      Abderrahman Slaoui (1919-2001)
                    </p>
                  </div>
                </motion.div>
              </div>
              
              {/* Right Column - Content */}
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h2 className="font-bodoni text-3xl text-gray-900 mb-6">
                    Abderrahman Slaoui, humaniste éclairé (1919-2001)
                  </h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-6">
                      Né à Fès en 1919, Abderrahman Slaoui est un homme d'affaires et industriel, à la fois esthète et humaniste : derrière le professionnel avisé, apparaît, comme une seconde nature, la sensibilité du collectionneur.
                    </p>
                    
                    <p className="text-gray-700 mb-6">
                      Dès l'enfance, le souvenir de l'ambiance arabo-andalouse de la maison familiale, de ses éléments architecturaux et de ses ornements, de ses coffres remplis de trésors (diadèmes, colliers, bracelets, etc) que les femmes de la maison mettaient à l'occasion de fêtes religieuses ou familiales n'ont cessé de hanter ses choix artistiques. Devenu adulte, il se mariera avec la fille d'un des plus grands joaillers de Fès, Haj Abdessalam Benchekroun qui deviendra son meilleur guide et conseiller dans la constitution de sa collection de bijoux marocains.
                    </p>
                    
                    <p className="text-gray-700 mb-6">
                      A travers ses collections, Abderrahman Slaoui a essayé de reconstituer son passé où la vie s'écoulait dans une aimable aisance, au rythme d'un bonheur tranquille. Dans sa quête du beau, il a également révélé des talents, à l'instar de Mohammed Ben Ali R'bati, premier peintre figuratif marocain, qui a immortalisé des scènes de la vie quotidienne de Tanger du début du siècle. Décédé en 2001, Abderrahman Slaoui restera d'un apport considérable dans la préservation du patrimoine culturel du monde arabo-musulman.
                    </p>
                    
                    <h3 className="font-bodoni text-2xl text-gray-900 my-6">
                      La naissance d'un musée
                    </h3>
                    
                    <p className="text-gray-700 mb-6">
                      Afin d'honorer la vision de son créateur, la Fondation Abderrahman Slaoui lance son musée éponyme. Une entreprise que Feu Abderrahman Slaoui, le collectionneur, aura imaginée, menée et révélée avec une détermination passionnée.
                    </p>
                    
                    <p className="text-gray-700 mb-6">
                      Dans une demeure des années 40, au cœur du quartier historique de Casablanca, le Musée de la Fondation Abderrahman Slaoui accueille des collections uniques de bijoux anciens, affiches anciennes, enluminures et coffrets en cristal de Bohême. À travers la quête de toute une vie, Abderrahman Slaoui, voyageur, esthète et humaniste, fut un « découvreur de trésors » sur plus de 50 ans. Ses collections d'une grande qualité artistique et ethnographique sont le fruit d'une "vivifiante obstination" et d'une immense passion.
                    </p>
                    
                    <p className="text-gray-700 mb-6">
                      Pour transmettre ce patrimoine collectionné avec goût, le collectionneur commence par publier des ouvrages sur les affiches orientalistes et les bijoux de maître-joaillers marocains. Au vu du succès des expositions itinérantes des affiches anciennes et de l'exposition « Maroc, Trésors du Royaume » où il a présenté des bijoux, Abderrahman Slaoui prend conscience de la qualité de ses collections et de la pertinence de ses choix. C'est ainsi que née l'idée d'ouvrir un musée à Casablanca pour partager et ouvrir ses collections au public.
                    </p>
                    
                    <p className="text-gray-700 mb-6">
                      Décédé en 2001, il ne verra jamais la concrétisation de son projet. Sa famille, reprendra le flambeau et le Musée de la Fondation Abderrahman Slaoui ouvrira ses portes en 2012.
                    </p>
                    
                    <blockquote className="bg-gray-50 p-6 italic border-l-4 border-accent-gold my-8">
                      <p className="text-gray-700 mb-2">
                        "L'art est le témoin indélébile de l'histoire d'un peuple."
                      </p>
                      <footer className="text-gray-500">
                        — Abderrahman Slaoui
                      </footer>
                    </blockquote>
                  </div>
                </motion.div>
              </div>
            </div>
            
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

export default AbderrahmanSlaouiPage; 