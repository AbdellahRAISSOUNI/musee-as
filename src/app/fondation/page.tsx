"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaQuoteLeft } from 'react-icons/fa';

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
    <main className="min-h-screen bg-premium-white">
      {/* Hero Section with Premium Title */}
      <section className="relative h-[50vh] flex items-center justify-center bg-off-white overflow-hidden border-b border-accent-gold/20">
        {/* Background subtle pattern */}
        <div className="absolute inset-0 opacity-5 bg-moroccan-pattern"></div>
        
        {/* Gold accent line top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            <span className="inline-block text-accent-gold uppercase tracking-widest font-bodoni-regular text-sm md:text-base mb-4">
              Découvrir
            </span>
            
            <h1 className="font-bodoni text-4xl md:text-5xl lg:text-7xl text-premium-black mb-6 leading-tight">
              Fondation Abderrahman Slaoui
            </h1>
            
            <div className="w-24 h-[1px] mx-auto mb-6 bg-gradient-to-r from-transparent via-accent-gold to-transparent"></div>
            
            <p className="text-graphite text-lg md:text-xl max-w-3xl mx-auto font-light">
              Un écrin pour le patrimoine artistique et culturel marocain d'exception
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Carousel Section - Light Background */}
      <section className="py-20 bg-premium-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Premium Carousel */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-20"
            >
              <div className="relative overflow-hidden rounded-lg h-[60vh] max-h-[500px] bg-premium-white shadow-lg">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="font-bodoni text-xl">{image.caption}</p>
                    </div>
                  </div>
                ))}
                
                {/* Controls */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm text-premium-black flex items-center justify-center hover:bg-white/90 transition-colors z-10 shadow-md"
                  aria-label="Image précédente"
                >
                  <IoIosArrowBack size={24} />
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm text-premium-black flex items-center justify-center hover:bg-white/90 transition-colors z-10 shadow-md"
                  aria-label="Image suivante"
                >
                  <IoIosArrowForward size={24} />
                </button>
                
                {/* Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentSlide === index 
                          ? "bg-accent-gold w-8" 
                          : "bg-white/50 hover:bg-white"
                      }`}
                      aria-label={`Aller à l'image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Introduction with Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center gap-12 mb-20 bg-warm-white p-10 rounded-lg shadow-sm"
            >
              {/* Logo */}
              <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                <div className="relative w-48 h-48 bg-transparent">
                  <Image
                    src="/images/projet-musee/pxjg8psj.png"
                    alt="Logo Fondation Abderrahman Slaoui"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Text */}
              <div className="w-full md:w-2/3">
                <h2 className="font-bodoni text-3xl text-premium-black mb-6">
                  Notre Vision
                </h2>
                <p className="text-graphite text-lg leading-relaxed mb-6">
                  La Fondation Abderrahman Slaoui est dédiée à la préservation et à la promotion du patrimoine artistique marocain. Depuis sa création, elle s'engage à faire découvrir au public la richesse culturelle du Maroc à travers des collections permanentes, des expositions temporaires et des activités culturelles diverses.
                </p>
                <p className="text-graphite text-lg leading-relaxed">
                  Notre mission est de valoriser et transmettre le patrimoine artistique marocain aux générations actuelles et futures, tout en œuvrant pour la reconnaissance de l'excellence artisanale et artistique du Maroc.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Quote Section - Elegant Light Background */}
      <section className="py-16 bg-soft-white border-y border-accent-gold/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute top-0 left-0 text-accent-gold opacity-20">
                <FaQuoteLeft size={80} />
              </div>
              <blockquote className="relative z-10 pl-16 pt-10">
                <p className="font-bodoni-italic text-2xl md:text-3xl text-premium-black mb-6 leading-relaxed">
                  "L'art est le témoin indélébile de l'histoire d'un peuple."
                </p>
                <footer className="text-right">
                  <cite className="text-accent-gold font-bodoni text-xl not-italic">
                    — Abderrahman Slaoui
                  </cite>
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Three Pillars Section - White Background */}
      <section className="py-20 bg-premium-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mb-20"
            >
              <h2 className="font-bodoni text-3xl text-premium-black mb-12 text-center">
                Les Piliers de Notre Mission
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-warm-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all group border-t-2 border-accent-gold/80">
                  <div className="w-16 h-16 mb-6 bg-accent-gold rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-bodoni text-2xl text-premium-black mb-4 group-hover:text-accent-gold transition-colors">
                    Préserver
                  </h3>
                  <p className="text-graphite">
                    Conservation et restauration des œuvres d'art et objets du patrimoine culturel marocain pour les générations futures.
                  </p>
                </div>
                
                <div className="bg-warm-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all group border-t-2 border-accent-gold/80">
                  <div className="w-16 h-16 mb-6 bg-accent-gold rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <h3 className="font-bodoni text-2xl text-premium-black mb-4 group-hover:text-accent-gold transition-colors">
                    Exposer
                  </h3>
                  <p className="text-graphite">
                    Présentation des collections et organisation d'expositions temporaires mettant en valeur l'art marocain.
                  </p>
                </div>
                
                <div className="bg-warm-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all group border-t-2 border-accent-gold/80">
                  <div className="w-16 h-16 mb-6 bg-accent-gold rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bodoni text-2xl text-premium-black mb-4 group-hover:text-accent-gold transition-colors">
                    Éduquer
                  </h3>
                  <p className="text-graphite">
                    Sensibilisation du public à l'art et au patrimoine culturel marocain à travers des programmes éducatifs.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Explore More Sections - Light Gray Background */}
      <section className="py-20 bg-soft-white border-y border-accent-gold/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-20"
            >
              <h2 className="font-bodoni text-3xl text-premium-black mb-12 text-center">
                Explorer la Fondation
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/fondation/projet-musee" className="group">
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/images/projet-musee/espace-museographique/pxjg8psj.png"
                      alt="Le Projet de Musée"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-bodoni text-2xl text-white mb-2">Le Projet de Musée</h3>
                      <p className="text-soft-white text-sm">
                        Découvrez l'histoire et la vision derrière le Musée Abderrahman Slaoui
                      </p>
                      <div className="mt-4 w-12 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-24"></div>
                    </div>
                  </div>
                </Link>
                
                <Link href="/fondation/presse" className="group">
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/images/projet-musee/abderrahman-slaoui/abderrahman-slaoui_9MciH0M.jpg"
                      alt="Ils Parlent de Nous"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-bodoni text-2xl text-white mb-2">Ils Parlent de Nous</h3>
                      <p className="text-soft-white text-sm">
                        Retrouvez les articles et mentions du Musée dans la presse nationale et internationale
                      </p>
                      <div className="mt-4 w-12 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-24"></div>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Section - Elegant White Background */}
      <section className="py-20 bg-premium-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="p-12 rounded-lg text-center relative overflow-hidden bg-warm-white shadow-sm border border-accent-gold/20"
            >
              {/* Background subtle pattern */}
              <div className="absolute inset-0 opacity-5 bg-moroccan-pattern"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h2 className="font-bodoni text-3xl text-premium-black mb-6">
                  Contactez la Fondation
                </h2>
                <p className="text-graphite mb-8 max-w-2xl mx-auto">
                  Pour toute question concernant la Fondation Abderrahman Slaoui, nos collections ou nos événements, n'hésitez pas à nous contacter.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    href="/infos-pratiques/contact" 
                    className="bg-accent-gold text-premium-white hover:bg-accent-gold/90 transition-colors px-8 py-3 rounded-sm font-bodoni tracking-wider"
                  >
                    Nous contacter
                  </Link>
                  <Link 
                    href="/infos-pratiques/horaires-tarifs-acces" 
                    className="bg-transparent border border-accent-gold text-accent-gold hover:bg-accent-gold/10 transition-colors px-8 py-3 rounded-sm font-bodoni tracking-wider"
                  >
                    Informations pratiques
                  </Link>
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