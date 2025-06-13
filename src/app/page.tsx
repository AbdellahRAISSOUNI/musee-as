"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import HeroSection from '@/components/HeroSection';
import CreativeGrid, { GridItem } from '@/components/CreativeGrid';

const HomePage = () => {
  // Featured exhibitions and events for the creative grid
  const featuredItems: GridItem[] = [
    {
      id: "mamlouks",
      title: "MAMLOUKS, 1250-1517",
      description: "Puissance guerrière, politique et culturelle... Partez à la rencontre des Mamlouks, un empire glorieux et pourtant méconnu qui marqua l'histoire du Proche-Orient islamique. Du 20 avril au 28 juillet",
      image: "/images/collections-permanentes/affiches-orientalistes/Affiches_orientalistes.jpg",
      link: "/collections-expositions/collections-permanentes/affiches-orientalistes",
      category: "Exposition",
      width: 800,
      height: 600,
      priority: true,
      featured: true
    },
    {
      id: "etes-louvre",
      title: "LES ÉTÉS DU LOUVRE",
      description: "En juillet, redécouvrez la beauté des cours et des jardins du Louvre à travers une programmation de plus de 30 concerts, spectacles, performances et projections.",
      image: "/images/expositions-temporaires/noise-on-paper/photo_rognee.jpg",
      link: "/collections-expositions/expositions-temporaires/noise-on-paper",
      category: "Événement",
      width: 500,
      height: 500
    },
    {
      id: "passion-chinoise",
      title: "UNE PASSION CHINOISE: LA COLLECTION DE MONSIEUR THIERS",
      description: "Fruit de 120 ans d'art et de collections du Louvre enrichies par la lumière la passion d'Adolphe Thiers pour la Chine, son histoire, sa culture et son contexte diplomatique. Du 14 mai au 25 août",
      image: "/images/collections-permanentes/affiches-orientalistes/majorelle_ok2.jpg",
      link: "/collections-expositions/collections-permanentes/affiches-orientalistes",
      category: "Exposition",
      width: 400,
      height: 600
    },
    {
      id: "nature-prague",
      title: "L'EXPÉRIENCE DE LA NATURE: LES ARTS À PRAGUE À LA COUR DE RODOLPHE II",
      description: "Découvrez comment l'empereur Rodolphe II (1552-1612), grand protecteur des arts et des sciences, a fait de Prague un véritable laboratoire dédié à l'étude de la nature. Du 19 mars au 30 juin",
      image: "/images/collections-permanentes/affiches-orientalistes/orient_express2.jpg",
      link: "/collections-expositions/collections-permanentes/affiches-orientalistes",
      category: "Exposition",
      width: 600,
      height: 400
    },
    {
      id: "ete-tuileries",
      title: "BIENTÔT L'ÉTÉ AUX TUILERIES",
      description: "Ateliers, visites, pauses gourmandes... En famille ou entre amis, venez profiter d'un bol d'air frais au cœur de Paris",
      image: "/images/expositions-temporaires/orient-fantasme/Exposition-Orient-Fantasme.jpg",
      link: "/collections-expositions/expositions-temporaires/orient-fantasme",
      category: "Jardin des Tuileries",
      width: 600,
      height: 400
    }
  ];

  return (
    <main className="min-h-screen bg-black text-premium-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* À LA UNE - Creative Grid Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <CreativeGrid 
          title="À LA UNE" 
          items={featuredItems} 
        />
      </motion.div>
      
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
                  className="bg-charcoal border-1 py-4 px-4 text-premium-white focus:outline-none focus:ring-1 focus:ring-accent-gold rounded-sm flex-grow"
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
                    12, rue du Parc<br />
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
                   

                    <ul className="mt-3">
  <li className="flex items-center">
    <div className="bg-stone h-10 w-10 rounded-full flex items-center justify-center shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='white'
        viewBox="0 0 479.058 479.058"
        
        className="hover:scale-110 transition-transform">
        <path
          d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
          data-original="#000000" />
      </svg>
    </div>
    <a target="blank" href="mailto:fas.musee@gmail.com" className="text-white text-sm ml-3">
      <small className="block text-xl">Email</small>
      <strong>fas.musee@gmail.com</strong>
    </a>
  </li>
                    </ul>
                    <ul className="mt-3">
  <li className="flex items-center">
    <div className="bg-stone h-10 w-10 rounded-full flex items-center justify-center shrink-0">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        fill="white"
        viewBox="0 0 24 24"
        className="hover:scale-110 transition-transform"
      >
        <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-1.622.845-2.298 2.627-2.289 4.843.022 6.412 5.596 16.239 12.207 16.251 1.75.002 3.528-.655 4.379-1.776l1.021-2.043z"/>
      </svg>
    </div>
    <a  href="#" className="text-white text-sm ml-3">
      <small className="block text-xl">Téléphone</small>
      <strong>+212 (0)5 22 20 62 17</strong>
    </a>
  </li>
                    </ul>






                  </p>
                </div>
                
               <div className="flex space-x-6">
            {/* Instagram Icon */}
            <a 
              href="#" 
              className="text-soft-white hover:text-accent-gold transition-colors duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            {/* Twitter/X Icon */}
            <a 
              href="#" 
              className="text-soft-white hover:text-accent-gold transition-colors duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* Facebook Icon */}
            <a 
              href="#" 
              className="text-soft-white hover:text-accent-gold transition-colors duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-graphite/30 text-center">
            <p className="text-soft-white text-sm">
              © 2025 Fondation Abderrahman Slaoui. Tous droits réservés.
            </p>
          </div>
    </div>
      </section>
    </main>
  );
};

export default HomePage;
