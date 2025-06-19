"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';
import { RiMenu3Line } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import { usePathname } from 'next/navigation';

// Navigation sections definition
const navSections = {
  fondation: {
    title: "FONDATION",
    items: [
      { label: "Fondation Abderrahman Slaoui", href: "/fondation" },
      { label: "Le Projet de Musée", href: "/fondation/projet-musee" },
      { label: "Ils Parlent de Nous", href: "/fondation/presse" }
    ],
    featured: {
      title: "Fondation Abderrahman Slaoui",
      image: "/images/projet-musee/pxjg8psj.png",
      description: "Découvrez l'histoire et la mission de la Fondation Abderrahman Slaoui.",
      link: "/fondation"
    }
  },
  collections: {
    title: "COLLECTIONS & EXPOSITIONS",
    items: [
      { label: "Collections Permanentes", href: "/collections-expositions/collections-permanentes" },
      { label: "Expositions Temporaires", href: "/collections-expositions/expositions-temporaires" }
    ],
    featured: {
      title: "Collections Actuelles",
      image: "/images/collections-permanentes/flacons-de-khol-et-tabatieres/khol_et_tabatiere.png",
      description: "Explorez nos collections d'art marocain et nos expositions temporaires.",
      link: "/collections-expositions"
    }
  },
  visites: {
    title: "VISITES & ATELIERS",
    items: [
      { label: "Actualités", href: "/visites-ateliers-activites/actualites" },
      { label: "Ateliers Artistiques", href: "/visites-ateliers-activites/ateliers-artistiques" },
      { label: "Rencontres", href: "/visites-ateliers-activites/rencontres" },
      { label: "Visites Guidées", href: "/visites-ateliers-activites/visites-guidees" },
      { label: "Privatisation", href: "/visites-ateliers-activites/privatisation" }
    ],
    featured: {
      title: "Découvrez Nos Activités",
      image: "/images/hero-background.jpg",
      description: "Participez à nos ateliers, visites guidées et événements culturels.",
      link: "/visites-ateliers-activites"
    }
  },
  jeune: {
    title: "JEUNE PUBLIC",
    items: [
      { label: "Visites Scolaires Guidées", href: "/jeune-public/visites-scolaires" },
      { label: "Ateliers Pédagogiques", href: "/jeune-public/ateliers-pedagogiques" }
    ],
    featured: {
      title: "Espace Jeune Public",
      image: "/images/jeune-public/visites-scolaires/visites-scolaires-guidees2.png",
      description: "Des programmes éducatifs et créatifs pour les enfants et les groupes scolaires.",
      link: "/jeune-public"
    }
  },
  infos: {
    title: "INFOS PRATIQUES",
    items: [
      { label: "Horaires, Tarifs et Accès", href: "/infos-pratiques/horaires-tarifs-acces" },
      { label: "Le Café du Musée", href: "/infos-pratiques/cafe-musee" },
      { label: "Le Comptoir de Vente", href: "/infos-pratiques/comptoir-vente" },
      { label: "Contact", href: "/infos-pratiques/contact" }
    ],
    featured: {
      title: "Planifiez Votre Visite",
      image: "/images/infos-pratiques/cafe-musee/cafe-terasse1.jpg",
      description: "Tout ce que vous devez savoir pour préparer votre visite au musée.",
      link: "/infos-pratiques/horaires-tarifs-acces"
    }
  },
  tempus: {
    title: "TEMPUS FUGIT",
    items: [],
    featured: {
      title: "Tempus Fugit",
      image: "/images/hero-background.jpg",
      description: "Une exploration artistique du temps et de la mémoire.",
      link: "/tempus-fugit"
    }
  }
};

const NewHeader = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Scroll tracking for header transformation
  const { scrollY } = useScroll();
  
  // Transform values for scroll animations
  const headerBackground = useTransform(
    scrollY,
    [0, 100, 200],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)", "rgba(255, 255, 255, 1)"]
  );
  
  const textColor = useTransform(
    scrollY,
    [0, 100, 200],
    ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(0, 0, 0)"]
  );
  
  const logoScale = useTransform(
    scrollY,
    [0, 100, 300],
    [1, 0.8, 0.6]
  );
  
  const logoY = useTransform(
    scrollY,
    [0, 100, 300],
    [0, -20, -40]
  );

  // Determine if header is in scrolled state
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 150);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Toggle functions
  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
    if (!isSearchActive) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveSection(null);
  };

  // Helper to check if section matches current path
  const isSectionActive = (key: string) => {
    if (!pathname) return false;
    const sectionPath = navSections[key as keyof typeof navSections].featured.link.split('/')[1];
    return pathname.startsWith(`/${sectionPath}`);
  };

  // Close menus on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSection(null);
    setHoveredSection(null);
  }, [pathname]);

  // Navigation items for the new layout
  const leftNavItems = ["fondation", "collections", "visites"];
  const rightNavItems = ["jeune", "infos", "tempus"];

  return (
    <>
      {/* Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
        style={{
          backgroundColor: isHomePage ? headerBackground : "rgba(255, 255, 255, 1)"
        }}
      >
        {/* Main Header Content */}
        <div className="relative">
          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between px-6 py-4">
            {/* Mobile Menu Button */}
            <motion.button 
              className="text-current cursor-pointer"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
              style={{ color: isHomePage ? textColor : "rgb(0, 0, 0)" }}
            >
              <RiMenu3Line size={24} />
            </motion.button>

            {/* Mobile Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/projet-musee/pxjg8psj.png"
                  alt="Logo Musée Abderrahman Slaoui"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Mobile Search */}
            <motion.button 
              className="text-current cursor-pointer"
              onClick={toggleSearch}
              whileTap={{ scale: 0.95 }}
              style={{ color: isHomePage ? textColor : "rgb(0, 0, 0)" }}
            >
              {isSearchActive ? <FiX size={20} /> : <FiSearch size={20} />}
            </motion.button>
          </div>

          {/* Desktop Header */}
          <div className="hidden md:block">
            {/* Top Navigation Bar */}
            <div className="flex items-center justify-between px-8 py-6">
              {/* Left Navigation */}
              <motion.nav 
                className="flex items-center space-x-8"
                animate={{
                  x: isScrolled ? -50 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {leftNavItems.map((key) => {
                  const section = navSections[key as keyof typeof navSections];
                  const isActive = isSectionActive(key);
                  
                  return (
                    <div
                      key={key}
                      className="relative"
                      onMouseEnter={() => setHoveredSection(key)}
                      onMouseLeave={() => setHoveredSection(null)}
                    >
                      {section.items.length > 0 ? (
                        <motion.button
                          className={`font-bodoni text-sm uppercase tracking-widest whitespace-nowrap transition-colors duration-300 ${
                            isActive ? 'text-accent-gold' : ''
                          }`}
                          style={{ 
                            color: isActive ? '#D4AF37' : (isHomePage ? textColor : "rgb(0, 0, 0)")
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {section.title}
                        </motion.button>
                      ) : (
                        <Link href={section.featured.link}>
                          <motion.span
                            className={`font-bodoni text-sm uppercase tracking-widest whitespace-nowrap transition-colors duration-300 ${
                              isActive ? 'text-accent-gold' : ''
                            }`}
                            style={{ 
                              color: isActive ? '#D4AF37' : (isHomePage ? textColor : "rgb(0, 0, 0)")
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {section.title}
                          </motion.span>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </motion.nav>

              {/* Center Logo */}
              <Link href="/" className="flex-shrink-0">
                <motion.div 
                  className="relative flex flex-col items-center"
                  style={{
                    scale: isHomePage ? logoScale : 0.6,
                    y: isHomePage ? logoY : -40,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {/* Logo Image */}
                  <div className="relative w-24 h-24 mb-2">
                    <Image
                      src="/images/projet-musee/pxjg8psj.png"
                      alt="Logo Musée Abderrahman Slaoui"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  
                  {/* Museum Title */}
                  <motion.div 
                    className="text-center"
                    style={{ color: isHomePage ? textColor : "rgb(0, 0, 0)" }}
                  >
                    <h1 className="font-bodoni text-lg tracking-wide">
                      MUSÉE ABDERRAHMAN SLAOUI
                    </h1>
                    <p className="font-bodoni-italic text-sm mt-1 tracking-wider">
                      une casa da raccontare
                    </p>
                  </motion.div>
                </motion.div>
              </Link>

              {/* Right Navigation */}
              <motion.nav 
                className="flex items-center space-x-8"
                animate={{
                  x: isScrolled ? 50 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {rightNavItems.map((key) => {
                  const section = navSections[key as keyof typeof navSections];
                  const isActive = isSectionActive(key);
                  
                  return (
                    <div
                      key={key}
                      className="relative"
                      onMouseEnter={() => setHoveredSection(key)}
                      onMouseLeave={() => setHoveredSection(null)}
                    >
                      {section.items.length > 0 ? (
                        <motion.button
                          className={`font-bodoni text-sm uppercase tracking-widest whitespace-nowrap transition-colors duration-300 ${
                            isActive ? 'text-accent-gold' : ''
                          }`}
                          style={{ 
                            color: isActive ? '#D4AF37' : (isHomePage ? textColor : "rgb(0, 0, 0)")
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {section.title}
                        </motion.button>
                      ) : (
                        <Link href={section.featured.link}>
                          <motion.span
                            className={`font-bodoni text-sm uppercase tracking-widest whitespace-nowrap transition-colors duration-300 ${
                              isActive ? 'text-accent-gold' : ''
                            }`}
                            style={{ 
                              color: isActive ? '#D4AF37' : (isHomePage ? textColor : "rgb(0, 0, 0)")
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {section.title}
                          </motion.span>
                        </Link>
                      )}
                    </div>
                  );
                })}
                
                {/* Search Button */}
                <motion.button 
                  className="ml-4 cursor-pointer"
                  onClick={toggleSearch}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.1 }}
                  style={{ color: isHomePage ? textColor : "rgb(0, 0, 0)" }}
                >
                  {isSearchActive ? <FiX size={20} /> : <FiSearch size={20} />}
                </motion.button>
              </motion.nav>
            </div>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {isSearchActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-200"
                style={{ 
                  backgroundColor: isHomePage && !isScrolled ? "rgba(255, 255, 255, 0.95)" : "white"
                }}
              >
                <div className="max-w-7xl mx-auto px-6 py-4">
                  <div className="relative">
                    <input 
                      ref={searchInputRef}
                      type="text" 
                      placeholder="Rechercher dans le musée..."
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-accent-gold py-3 px-0 text-gray-900 focus:outline-none placeholder-gray-500"
                    />
                    <motion.button 
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-accent-gold cursor-pointer"
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiSearch size={20} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Dropdown Menus */}
          <AnimatePresence>
            {hoveredSection && navSections[hoveredSection as keyof typeof navSections].items.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 right-0 w-full bg-white border-t border-gray-200 shadow-lg z-40"
                onMouseEnter={() => setHoveredSection(hoveredSection)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div className="max-w-7xl mx-auto px-8 py-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Links */}
                    <div className="md:col-span-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {navSections[hoveredSection as keyof typeof navSections].items.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                          >
                            <Link 
                              href={item.href}
                              className="block text-gray-900 hover:text-accent-gold transition-colors duration-200 font-bodoni text-lg py-2"
                            >
                              {item.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Featured Content */}
                    <div className="md:col-span-1">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-50 p-6 rounded-lg"
                      >
                        <Link href={navSections[hoveredSection as keyof typeof navSections].featured.link}>
                          <h3 className="text-accent-gold font-bodoni text-xl mb-3">
                            {navSections[hoveredSection as keyof typeof navSections].featured.title}
                          </h3>
                          <div className="aspect-video bg-gray-200 mb-3 overflow-hidden rounded">
                            <img 
                              src={navSections[hoveredSection as keyof typeof navSections].featured.image}
                              alt={navSections[hoveredSection as keyof typeof navSections].featured.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-gray-600 text-sm line-clamp-3">
                            {navSections[hoveredSection as keyof typeof navSections].featured.description}
                          </p>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-6 py-4">
                {Object.entries(navSections).map(([key, section]) => (
                  <div key={key} className="mb-4">
                    {section.items.length > 0 ? (
                      <div>
                        <button
                          className="w-full text-left font-bodoni text-lg text-gray-900 py-2"
                          onClick={() => setActiveSection(activeSection === key ? null : key)}
                        >
                          <div className="flex items-center justify-between">
                            {section.title}
                            <motion.span
                              animate={{ rotate: activeSection === key ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <IoIosArrowDown size={16} />
                            </motion.span>
                          </div>
                        </button>
                        <AnimatePresence>
                          {activeSection === key && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pl-4 mt-2"
                            >
                              {section.items.map((item, index) => (
                                <Link
                                  key={index}
                                  href={item.href}
                                  className="block text-gray-600 hover:text-accent-gold py-2 font-bodoni"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={section.featured.link}
                        className="block font-bodoni text-lg text-gray-900 py-2"
                      >
                        {section.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default NewHeader; 