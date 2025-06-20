"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import HeroSection from '@/components/HeroSection';
import TicketSection from '@/components/TicketSection';
import CreativeGrid, { GridItem } from '@/components/CreativeGrid';
import QuoteSection from '@/components/QuoteSection';
import ExhibitionShowcase from '@/components/ExhibitionShowcase';
import ImageCarousel from '@/components/ImageCarousel';
import ParallaxSection from '@/components/ParallaxSection';

const HomePage = () => {
  // Featured exhibitions and events for the creative grid
  const featuredItems: GridItem[] = [
    {
      id: "affiches-orientalistes",
      title: "AFFICHES ORIENTALISTES",
      description: "Les affiches orientalistes constituent un témoignage fascinant de la vision occidentale de l'Orient au tournant du XXe siècle. À la fois œuvres artistiques et supports publicitaires, elles ont contribué à forger un imaginaire collectif empreint d'exotisme et de fascination.",
      image: "/images/collections-permanentes/affiches-orientalistes/Affiches_orientalistes.jpg",
      link: "/collections-expositions/collections-permanentes/affiches-orientalistes",
      category: "Collection Permanente",
      width: 800,
      height: 600,
      priority: true,
      featured: true,
      size: 'large'
    },
    {
      id: "noise-on-paper",
      title: "NOISE ON PAPER",
      description: "Les deux expositions \"Noise on paper\" et \"Drunken Masters\" réunissent au Musée de la Fondation Abderrahman Slaoui deux artistes emblématiques de la scène expérimentale et contemporaine de Beyrouth : Hatem Imam et Mazen Kerbaj.",
      image: "/images/expositions-temporaires/noise-on-paper/photo_rognee.jpg",
      link: "/collections-expositions/expositions-temporaires/noise-on-paper",
      category: "Exposition Temporaire",
      width: 500,
      height: 500,
      size: 'medium'
    },
    {
      id: "affiches-tanger",
      title: "TANGER, SON SITE SON CLIMAT",
      description: "Jacques Majorelle qui réside dans sa célèbre villa de Marrakech, a produit plusieurs affiches sur le Maroc. La composition de cette affiche restitue dans un langage iconographique synthétique des informations sur la ville de Tanger tant d'un point de vue humain qu'économique.",
      image: "/images/collections-permanentes/affiches-orientalistes/majorelle_ok2.jpg",
      link: "/collections-expositions/collections-permanentes/affiches-orientalistes",
      category: "Collection Permanente",
      width: 400,
      height: 600,
      size: 'tall',
      offset: true
    },
    {
      id: "bijoux-marocains",
      title: "LES BIJOUX MAROCAINS",
      description: "Les bijoux marocains sont le reflet d'un patrimoine culturel riche et diversifié. Véritables œuvres d'art, ils témoignent du savoir-faire exceptionnel des artisans joailliers qui perpétuent des techniques ancestrales transmises de génération en génération.",
      image: "/images/collections-permanentes/les-bijoux-marocains/Les_bijoux_marocains_1_1.jpg",
      link: "/collections-expositions/collections-permanentes/les-bijoux-marocains",
      category: "Collection Permanente",
      width: 500,
      height: 500,
      size: 'small',
      offset: true
    },
    {
      id: "ceramique-fes-bol",
      title: "BOL EN CÉRAMIQUE DE FÈS",
      description: "Ce bol est destiné à la consommation du lait ou la présentation de légumes qui accompagne la semoule. Ses motifs en de bandes horizontales inégales présentent des décors géométriques ainsi que végétaux et floraux.",
      image: "/images/collections-permanentes/la-ceramique-de-fes/bol_1.jpg",
      link: "/collections-expositions/collections-permanentes/la-ceramique-de-fes",
      category: "Collection Permanente",
      width: 500,
      height: 500,
      size: 'small'
    }
  ];

  // Oriental posters carousel images
  const orientalPostersImages = [
    {
      src: "/images/collections-permanentes/affiches-orientalistes/Affiches_orientalistes.jpg",
      alt: "Affiches Orientalistes"
    },
    {
      src: "/images/collections-permanentes/affiches-orientalistes/majorelle_ok2.jpg",
      alt: "Tanger, Son Site Son Climat par Jacques Majorelle"
    },
    {
      src: "/images/collections-permanentes/affiches-orientalistes/orient_express2.jpg",
      alt: "Orient Express"
    },
    {
      src: "/images/collections-permanentes/affiches-orientalistes/derche_1929_png_1.jpg",
      alt: "Affiche Orientaliste de 1929"
    },
    {
      src: "/images/collections-permanentes/affiches-orientalistes/expo_univ_ok_1.jpg",
      alt: "Exposition Universelle"
    },
    {
      src: "/images/collections-permanentes/affiches-orientalistes/palmolive2.jpg",
      alt: "Publicité Palmolive"
    },
    {
      src: "/images/collections-permanentes/affiches-orientalistes/cover.jpg",
      alt: "Couverture Collection Affiches Orientalistes"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-premium-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Ticket Section */}
      <TicketSection />
      
      {/* À LA UNE - Creative Grid Section */}
              <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <CreativeGrid 
          title="À LA UNE" 
          items={featuredItems}
          artistic={true}
        />
              </motion.div>
      
      {/* Quote Section */}
      <QuoteSection 
        quote="L'art est le témoin indélébile de l'histoire d'un peuple et le reflet de son âme."
        author="Abderrahman Slaoui"
      />
      
      {/* Exhibition Showcase */}
      <ExhibitionShowcase />
      
      {/* Oriental Posters Carousel */}
      <ImageCarousel
        title="Affiches Orientalistes"
        subtitle="Une collection unique témoignant de l'imaginaire occidental sur l'Orient au début du XXe siècle"
        images={orientalPostersImages}
        buttonLink="/collections-expositions/collections-permanentes/affiches-orientalistes"
        buttonText="Découvrir la Collection"
      />
      
      {/* Parallax Section with Museum Entrance */}
      <div className="mt-0">
        <ParallaxSection
          title="Bienvenue au Musée"
          subtitle="Un écrin d'art et d'histoire au cœur de Casablanca"
          description="Situé dans un hôtel particulier des années 40, le Musée de la Fondation Abderrahman Slaoui vous invite à découvrir des collections exceptionnelles dans un cadre élégant et intimiste."
          imagePath="/images/fondation/entree_musee.jpg"
          imageAlt="Entrée du Musée Abderrahman Slaoui"
          buttonText="Découvrir le Musée"
          buttonLink="/fondation/projet-musee/espace-museographique"
          height="medium"
          overlayOpacity={40}
          parallaxStrength={30}
        />
    </div>
    </main>
  );
};

export default HomePage;
