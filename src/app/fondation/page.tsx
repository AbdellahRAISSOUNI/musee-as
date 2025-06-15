"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaQuoteLeft, FaBook, FaNewspaper } from 'react-icons/fa';

const gold = '#bfa76a';

const FondationPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const carouselImages = [
    {
      src: "/images/fondation/entree_musee.jpg",
      alt: "Entrée du Musée",
      caption: "Façade du Musée Abderrahman Slaoui"
    },
    {
      src: "/images/fondation/interieur_musee.jpg",
      alt: "Intérieur du Musée",
      caption: "Espace d'exposition intérieur"
    },
    {
      src: "/images/fondation/ceramiques_slide.jpg",
      alt: "Céramiques",
      caption: "Collection de céramiques marocaines"
    },
    {
      src: "/images/fondation/boites_en_cristal.jpg",
      alt: "Boîtes en Cristal",
      caption: "Collection de boîtes en cristal"
    },
    {
      src: "/images/fondation/rbati_slide.jpg",
      alt: "Art Rbati",
      caption: "Art traditionnel Rbati"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselImages.length]);

  // Pause auto-play when not in view
  useEffect(() => {
    if (!inView) {
      setIsAutoPlaying(false);
    } else {
      setIsAutoPlaying(true);
    }
  }, [inView]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/fondation/entree_musee.jpg"
            alt="Musée Abderrahman Slaoui"
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
              Fondation Abderrahman Slaoui
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto font-light">
              Un écrin pour le patrimoine artistique et culturel marocain d'exception
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Carousel Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                  Explorez le Musée
                </h2>
                <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }}></div>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Découvrez les espaces et collections du Musée Abderrahman Slaoui à travers cette galerie d'images
                </p>
              </motion.div>
            </div>
            
            {/* Carousel */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-16"
            >
              <div className="relative overflow-hidden h-[70vh] max-h-[600px] bg-white shadow-xl border border-gray-100">
                {/* Images */}
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      currentSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <p className="font-bodoni text-2xl">{image.caption}</p>
                    </div>
                  </div>
                ))}
                
                {/* Controls */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/70 backdrop-blur-sm text-gray-900 flex items-center justify-center hover:bg-white transition-colors z-10 shadow-lg"
                  aria-label="Image précédente"
                >
                  <IoIosArrowBack size={28} />
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/70 backdrop-blur-sm text-gray-900 flex items-center justify-center hover:bg-white transition-colors z-10 shadow-lg"
                  aria-label="Image suivante"
                >
                  <IoIosArrowForward size={28} />
                </button>
                
                {/* Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 transition-all ${
                        currentSlide === index 
                          ? "bg-accent-gold w-10" 
                          : "bg-white/70 w-2 hover:bg-white"
                      }`}
                      aria-label={`Aller à l'image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Introduction Section - Moved under carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Introduction Text with Logo */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex flex-col md:flex-row items-center gap-12"
              >
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative w-64 h-64">
                    <Image
                      src="/images/projet-musee/espace-museographique/pxjg8psj.png"
                      alt="Logo Fondation Abderrahman Slaoui"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                    Notre Vision
                  </h2>
                  <div className="w-24 h-[2px] mb-6" style={{ backgroundColor: gold }}></div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    La Fondation Abderrahman Slaoui est dédiée à la préservation et à la promotion du patrimoine artistique marocain. 
                    Depuis sa création, elle s'engage à faire découvrir au public la richesse culturelle du Maroc à travers des collections 
                    permanentes, des expositions temporaires et des activités culturelles diverses.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-moroccan-pattern"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute top-0 left-0 text-accent-gold opacity-30">
                <FaQuoteLeft size={100} />
              </div>
              <blockquote className="relative z-10 pl-20 pt-12">
                <p className="font-bodoni-italic text-3xl md:text-4xl text-white mb-8 leading-relaxed">
                  "L'art est le témoin indélébile de l'histoire d'un peuple."
                </p>
                <footer className="text-right">
                  <cite className="text-accent-gold font-bodoni text-2xl not-italic">
                    — Abderrahman Slaoui
                  </cite>
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Explorer la Fondation Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                  Explorer la Fondation
                </h2>
                <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }}></div>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
                  Découvrez l'histoire de la fondation, son créateur et les actualités liées à nos activités
                </p>
              </motion.div>
            </div>
            
            <div className="space-y-24">
              {/* Le Projet de Musée */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.8 }}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
              >
                {/* Image Container */}
                <div className="w-full md:w-1/2 h-[400px] relative group">
                  <Link href="/fondation/projet-musee" className="block w-full h-full">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                    <motion.div 
                      className="absolute inset-0 border-2 border-transparent group-hover:border-accent-gold z-20"
                      initial={false}
                      whileHover={{ 
                        scale: 0.97,
                        transition: { duration: 0.4 }
                      }}
                    >
                      <Image
                        src="/images/projet-musee/espace-museographique/pxjg8psj.png"
                        alt="Le Projet de Musée"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  </Link>
                </div>
                
                {/* Content Container */}
                <div className="w-full md:w-1/2 p-6">
                  <motion.div
                    initial={false}
                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  >
                    <div className="flex items-center mb-4">
                      <FaBook className="text-gray-900 group-hover:text-accent-gold text-2xl mr-3 transition-colors duration-300" />
                      <h2 className="font-bodoni text-3xl md:text-4xl font-medium text-gray-900">
                        Le Projet de Musée
                      </h2>
                    </div>
                    
                    <p className="text-gray-700 text-lg mb-6">
                      Découvrez l'histoire et la vision derrière le Musée Abderrahman Slaoui, 
                      un espace dédié à la préservation et à la promotion du patrimoine artistique marocain.
                    </p>
                    
                    <div className="bg-gray-50 p-6 mb-6 border border-gray-100">
                      <h3 className="font-medium text-gray-900 mb-3">À découvrir :</h3>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Abderrahman Slaoui, humaniste éclairé (1919-2001)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>L'espace muséographique</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>La mission de la fondation</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Link href="/fondation/projet-musee" className="inline-flex items-center text-gray-900 font-medium group">
                      <span className="mr-2">Explorer le Projet</span>
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-accent-gold">→</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Ils Parlent de Nous */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 group"
              >
                {/* Image Container */}
                <div className="w-full md:w-1/2 h-[400px] relative group">
                  <Link href="/fondation/presse" className="block w-full h-full">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                    <motion.div 
                      className="absolute inset-0 border-2 border-transparent group-hover:border-accent-gold z-20"
                      initial={false}
                      whileHover={{ 
                        scale: 0.97,
                        transition: { duration: 0.4 }
                      }}
                    >
                      <Image
                        src="/images/projet-musee/abderrahman-slaoui/abderrahman-slaoui_9MciH0M.jpg"
                        alt="Ils Parlent de Nous"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  </Link>
                </div>
                
                {/* Content Container */}
                <div className="w-full md:w-1/2 p-6">
                  <motion.div
                    initial={false}
                    whileHover={{ x: -10, transition: { duration: 0.3 } }}
                  >
                    <div className="flex items-center mb-4">
                      <FaNewspaper className="text-gray-900 group-hover:text-accent-gold text-2xl mr-3 transition-colors duration-300" />
                      <h2 className="font-bodoni text-3xl md:text-4xl font-medium text-gray-900">
                        Ils Parlent de Nous
                      </h2>
                    </div>
                    
                    <p className="text-gray-700 text-lg mb-6">
                      Retrouvez les articles et mentions du Musée dans la presse nationale et internationale.
                      Découvrez comment notre fondation rayonne à travers les médias.
                    </p>
                    
                    <div className="bg-gray-50 p-6 mb-6 border border-gray-100">
                      <h3 className="font-medium text-gray-900 mb-3">Articles récents :</h3>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>H24 info avec Le Figaro</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Madame Lifeguide Maroc</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Les Eco Maroc</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Link href="/fondation/presse" className="inline-flex items-center text-gray-900 font-medium group">
                      <span className="mr-2">Voir les Articles</span>
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-accent-gold">→</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                  Contactez la Fondation
                </h2>
                <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }}></div>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                  Pour toute question concernant la Fondation Abderrahman Slaoui, nos collections ou nos événements,
                  n'hésitez pas à nous contacter.
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white shadow-md border border-gray-100 overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image 
                    src="/images/fondation/entree_musee.jpg"
                    alt="Entrée du Musée Abderrahman Slaoui"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-6">
                      <h3 className="font-bodoni text-3xl text-white mb-2">Venez nous rencontrer</h3>
                      <div className="w-16 h-[1px] mx-auto mb-4 bg-white"></div>
                      <p className="text-white text-lg">12 rue du Parc, Casablanca</p>
                    </div>
                  </div>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <h3 className="font-bodoni text-2xl text-gray-900 mb-6">Comment nous joindre</h3>
                  
                  <div className="space-y-6">
                    <Link 
                      href="/infos-pratiques/contact" 
                      className="flex items-center group"
                    >
                      <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mr-4 group-hover:bg-accent-gold transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 group-hover:text-white transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-lg font-medium text-gray-900 group-hover:text-accent-gold transition-colors duration-300">Contact</span>
                        <span className="text-gray-600">Envoyez-nous un message</span>
                      </div>
                    </Link>
                    
                    <Link 
                      href="/infos-pratiques/horaires-tarifs-acces" 
                      className="flex items-center group"
                    >
                      <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mr-4 group-hover:bg-accent-gold transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 group-hover:text-white transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-lg font-medium text-gray-900 group-hover:text-accent-gold transition-colors duration-300">Informations pratiques</span>
                        <span className="text-gray-600">Horaires, tarifs et accès</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FondationPage; 