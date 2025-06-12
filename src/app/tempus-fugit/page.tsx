"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const TempusFugitPage = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, -50, -100]);
  
  const image1Scale = useTransform(scrollYProgress, [0.1, 0.3], [0.8, 1.1]);
  const image1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.4, 0.5], [0, 1, 1, 0]);
  
  const image2Scale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1.1]);
  const image2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  
  const image3Scale = useTransform(scrollYProgress, [0.5, 0.7], [0.8, 1.1]);
  const image3Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  
  const textOpacity = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);
  const textY = useTransform(scrollYProgress, [0.7, 0.8, 1], [100, 0, 0]);

  // Images preloading for smooth animation
  useEffect(() => {
    const imageUrls = [
      '/images/hero-background.jpg',
      '/images/hero-background.jpg',
      '/images/hero-background.jpg',
    ];
    
    const preloadImages = async () => {
      const promises = imageUrls.map((url) => {
        return new Promise((resolve) => {
          const img = new globalThis.Image();
          img.src = url;
          img.onload = resolve;
        });
      });
      
      await Promise.all(promises);
      setImagesLoaded(true);
    };
    
    preloadImages();
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-accent-gold font-bodoni-italic text-3xl"
        >
          Tempus Fugit
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-premium-white">
      {/* Intro Section with Parallax Title */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <motion.div 
          className="text-center z-10"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="block text-accent-gold uppercase tracking-widest font-bodoni-regular text-sm md:text-base mb-4"
          >
            Musée Abderrahman Slaoui présente
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-bodoni-italic text-6xl md:text-7xl lg:text-8xl text-premium-white mb-8"
          >
            Tempus Fugit
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-soft-white text-lg md:text-xl max-w-xl mx-auto"
          >
            Une réflexion artistique sur le temps, la mémoire et l'éphémère
          </motion.p>
        </motion.div>
        
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-transparent"></div>
      </section>
      
      {/* Scrolling Image Sections */}
      <section className="relative min-h-[300vh]">
        {/* Image 1 */}
        <motion.div 
          className="h-screen sticky top-0 flex items-center justify-center overflow-hidden"
          style={{ opacity: image1Opacity }}
        >
          <motion.div 
            className="relative w-full h-full"
            style={{ scale: image1Scale }}
          >
            <Image 
              src="/images/hero-background.jpg"
              alt="Tempus Fugit - Image 1"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-2xl px-6">
                <h2 className="font-bodoni-regular text-4xl md:text-5xl text-premium-white mb-6">
                  Le Passé
                </h2>
                <p className="text-soft-white text-lg">
                  L'héritage artistique marocain résonne à travers les siècles, témoin silencieux du passage du temps.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Image 2 */}
        <motion.div 
          className="h-screen sticky top-0 flex items-center justify-center overflow-hidden"
          style={{ opacity: image2Opacity }}
        >
          <motion.div 
            className="relative w-full h-full"
            style={{ scale: image2Scale }}
          >
            <Image 
              src="/images/hero-background.jpg"
              alt="Tempus Fugit - Image 2"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-2xl px-6">
                <h2 className="font-bodoni-regular text-4xl md:text-5xl text-premium-white mb-6">
                  Le Présent
                </h2>
                <p className="text-soft-white text-lg">
                  Dans le moment présent, l'art devient le miroir de notre époque, reflétant nos questionnements et nos aspirations.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Image 3 */}
        <motion.div 
          className="h-screen sticky top-0 flex items-center justify-center overflow-hidden"
          style={{ opacity: image3Opacity }}
        >
          <motion.div 
            className="relative w-full h-full"
            style={{ scale: image3Scale }}
          >
            <Image 
              src="/images/hero-background.jpg"
              alt="Tempus Fugit - Image 3"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-2xl px-6">
                <h2 className="font-bodoni-regular text-4xl md:text-5xl text-premium-white mb-6">
                  Le Futur
                </h2>
                <p className="text-soft-white text-lg">
                  L'avenir de l'art marocain s'écrit aujourd'hui, entre tradition et innovation, mémoire et vision.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Final Text Section */}
      <section className="min-h-screen relative flex items-center justify-center py-24 px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          style={{ opacity: textOpacity, y: textY }}
        >
          <h2 className="font-bodoni-italic text-4xl md:text-5xl text-premium-white mb-8">
            L'exposition
          </h2>
          
          <p className="text-soft-white text-lg mb-8 leading-relaxed">
            "Tempus Fugit" est une exposition unique qui explore la relation complexe entre l'art, le temps et la mémoire. À travers une sélection d'œuvres d'artistes marocains contemporains, l'exposition invite à réfléchir sur la nature éphémère de l'existence et la permanence de l'expression artistique.
          </p>
          
          <p className="text-soft-white text-lg mb-12 leading-relaxed">
            Du 15 octobre au 30 décembre 2023, le Musée Abderrahman Slaoui vous invite à une expérience immersive où le passé, le présent et le futur se rencontrent dans un dialogue poétique et philosophique.
          </p>
          
          <div className="space-x-4">
            <Link 
              href="/visites-ateliers-activites/visites-guidees" 
              className="inline-block bg-transparent border border-accent-gold text-accent-gold hover:bg-accent-gold/10 transition-colors px-6 py-3 font-bodoni-regular"
            >
              Réserver une visite guidée
            </Link>
            
            <Link 
              href="/collections-expositions/expositions-temporaires" 
              className="inline-block bg-transparent border border-soft-white text-soft-white hover:bg-white/10 transition-colors px-6 py-3 font-bodoni-regular"
            >
              Autres expositions
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default TempusFugitPage; 