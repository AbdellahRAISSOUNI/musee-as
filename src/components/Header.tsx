"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';
import { RiMenu3Line } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import { searchContent, SearchItem } from '@/data/searchData';

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

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Scroll tracking for header transformation
  const { scrollY } = useScroll();
  
  // Check when hero section is no longer visible (at viewport height)
  const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;
  
  // Transform values for scroll animations - only start transitioning when hero is almost gone
  const headerBackground = useTransform(
    scrollY,
    [heroHeight * 0.7, heroHeight * 0.9, heroHeight],
    ["rgba(0, 0, 0, 0)", "rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 1)"]
  );
  
  const textColor = useTransform(
    scrollY,
    [heroHeight * 0.7, heroHeight * 0.9, heroHeight],
    ["rgb(255, 255, 255)", "rgb(0, 0, 0)", "rgb(0, 0, 0)"]
  );
  
  // Logo positioning - start from hero center, move to header top
  const logoScale = useTransform(
    scrollY,
    [0, heroHeight * 0.3, heroHeight * 0.7],
    [1.5, 1.0, 0.7]
  );
  
  const logoY = useTransform(
    scrollY,
    [0, heroHeight * 0.5, heroHeight],
    [heroHeight * 0.4, heroHeight * 0.1, 20] // Start in hero center, move to header top with more space
  );

  const titleOpacity = useTransform(
    scrollY,
    [0, heroHeight * 0.2, heroHeight * 0.4],
    [1, 0.5, 0]
  );

  // Navigation positioning - Minimal movement to keep sections close
  const navLeftX = useTransform(
    scrollY,
    [0, heroHeight * 0.5, heroHeight],
    [0, -5, -10] // Much smaller movement to keep sections closer
  );

  const navRightX = useTransform(
    scrollY,
    [0, heroHeight * 0.5, heroHeight],
    [0, 5, 10] // Much smaller movement to keep sections closer
  );

  // Header height adjustment
  const headerHeight = useTransform(
    scrollY,
    [heroHeight * 0.7, heroHeight],
    [100, 70] // Reduce height when scrolled
  );

  // Determine if header is in scrolled state and logo should be clickable
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoClickable, setLogoClickable] = useState(!isHomePage); // Start as true for non-home pages
  
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      const scrolledState = latest > heroHeight * 0.8;
      setIsScrolled(scrolledState);
      
      if (isHomePage) {
        // On home page: logo becomes clickable when header turns white (after scroll)
        setLogoClickable(scrolledState);
      } else {
        // On other pages: logo is always clickable
        setLogoClickable(true);
      }
    });
    return () => unsubscribe();
  }, [scrollY, heroHeight, isHomePage]);

  // Initialize logo clickability for non-home pages
  useEffect(() => {
    if (!isHomePage) {
      setLogoClickable(true);
    }
  }, [isHomePage]);

  // Toggle functions
  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
    if (!isSearchActive) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      // Reset search when closing
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchContent(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    searchInputRef.current?.focus();
  };

  // Close search on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isSearchActive && !searchInputRef.current?.contains(event.target as Node)) {
        const searchContainer = document.querySelector('.search-container');
        if (!searchContainer?.contains(event.target as Node)) {
          setIsSearchActive(false);
          setSearchQuery('');
          setSearchResults([]);
        }
      }
    };

    if (isSearchActive) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchActive]);

  // Close search when hovering over nav sections
  useEffect(() => {
    if (hoveredSection && isSearchActive) {
      setIsSearchActive(false);
      setSearchQuery('');
      setSearchResults([]);
    }
  }, [hoveredSection, isSearchActive]);

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
    setIsSearchActive(false);
    setSearchQuery('');
    setSearchResults([]);
  }, [pathname]);

  // Navigation items for the new layout
  const leftNavItems = ["fondation", "collections", "visites"];
  const rightNavItems = ["jeune", "infos", "tempus"];

  return (
    <>
      {/* Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-lg backdrop-blur-sm' : ''
        }`}
        style={{
          backgroundColor: isHomePage ? headerBackground : "rgba(255, 255, 255, 1)",
          height: isHomePage ? headerHeight : 70
        }}
      >
        {/* Desktop Header - Only show on screens 1050px and wider */}
        <div className="hidden lg:block relative h-full">
          {/* Navigation Layout - Three columns: Left, Center (Logo), Right */}
          <div className="grid grid-cols-3 items-center h-full px-12 relative z-30">
            {/* Left Navigation */}
            <motion.nav 
              className="flex items-center justify-start space-x-6"
              style={{
                x: isHomePage ? navLeftX : 0,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {leftNavItems.map((key) => {
                const section = navSections[key as keyof typeof navSections];
                const isActive = isSectionActive(key);
                
                return (
                  <div
                    key={key}
                    className="relative z-30"
                    onMouseEnter={() => setHoveredSection(key)}
                    onMouseLeave={() => setHoveredSection(null)}
                  >
                    {section.items.length > 0 ? (
                      <motion.button
                        className={`font-bodoni text-sm uppercase tracking-widest whitespace-nowrap transition-colors duration-300 hover:text-accent-gold ${
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
                          className={`font-bodoni text-sm uppercase tracking-widest whitespace-nowrap transition-colors duration-300 hover:text-accent-gold ${
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

            {/* Center Logo Space - Reserved but logo is positioned absolutely */}
            <div className="flex justify-center">
              {/* This space is reserved for the logo */}
            </div>

            {/* Right Navigation */}
            <motion.nav 
              className="flex items-center justify-end space-x-6"
              style={{
                x: isHomePage ? navRightX : 0,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {rightNavItems.map((key) => {
                const section = navSections[key as keyof typeof navSections];
                const isActive = isSectionActive(key);
                
                return (
                  <div
                    key={key}
                    className="relative z-30"
                    onMouseEnter={() => setHoveredSection(key)}
                    onMouseLeave={() => setHoveredSection(null)}
                  >
                    {section.items.length > 0 ? (
                      <motion.button
                        className={`font-bodoni text-sm uppercase tracking-widest whitespace-nowrap transition-colors duration-300 hover:text-accent-gold ${
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
                          className={`font-bodoni text-sm uppercase tracking-widest whitespace-nowrap transition-colors duration-300 hover:text-accent-gold ${
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
                className="ml-4 cursor-pointer transition-colors duration-300 hover:text-accent-gold z-30"
                onClick={toggleSearch}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.1 }}
                style={{ color: isHomePage ? textColor : "rgb(0, 0, 0)" }}
              >
                {isSearchActive ? <FiX size={20} /> : <FiSearch size={20} />}
              </motion.button>
            </motion.nav>
          </div>

          {/* Center Logo Section - Absolutely positioned and centered */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <motion.div 
              className="flex flex-col items-center text-center"
              style={{
                scale: isHomePage ? logoScale : 0.7,
                y: isHomePage ? logoY : 0,
                paddingTop: !isHomePage ? 12 : (isScrolled ? 12 : 0),
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Logo Image - No click functionality here */}
              <div className="relative w-24 h-24 mb-3">
                <Image
                  src="/images/projet-musee/pxjg8psj.png"
                  alt="Logo Musée Abderrahman Slaoui"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Museum Title - Only show on home page */}
              {isHomePage && (
                <motion.div 
                  className="text-center max-w-md"
                  style={{ 
                    color: textColor,
                    opacity: titleOpacity
                  }}
                >
                  <h1 className="font-bodoni text-2xl tracking-wide mb-2 leading-tight drop-shadow-lg">
                    MUSÉE ABDERRAHMAN SLAOUI
                  </h1>
                  <p className="font-bodoni-italic text-base tracking-wider leading-relaxed drop-shadow-md" 
                     style={{ 
                       textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8), 0px 0px 8px rgba(0, 0, 0, 0.6)"
                     }}>
                    Un patrimoine artistique et culturel marocain d'exception
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Invisible Clickable Button Over Logo Area - HIGHEST Z-INDEX */}
          {logoClickable && (
            <Link 
              href="/" 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-[100]"
              style={{
                width: isHomePage ? '120px' : '84px', // Adjust size based on logo scale
                height: isHomePage ? '120px' : '84px',
                paddingTop: !isHomePage ? '8px' : (isScrolled ? '8px' : '0'),
              }}
            >
              <span className="sr-only">Retour à l'accueil</span>
            </Link>
          )}
        </div>

        {/* Mobile Header - Show on screens smaller than 1050px */}
        <div className="lg:hidden">
          {/* Mobile Navigation Bar */}
          <div className="flex items-center justify-between px-6 py-4">
            {/* Mobile Menu Button */}
            <motion.button 
              className="text-current cursor-pointer"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
              style={{ color: isHomePage ? textColor : "rgb(0, 0, 0)" }}
            >
              <RiMenu3Line size={24} />
            </motion.button>

            {/* Mobile Logo - Always clickable */}
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


        </div>
        
        {/* Search Bar */}
        <AnimatePresence>
          {isSearchActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="search-container absolute top-full left-0 right-0 border-t border-gray-200 max-h-[80vh] overflow-hidden shadow-lg z-40"
              style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.98)",
                backdropFilter: "blur(10px)"
              }}
            >
              <div className="max-w-7xl mx-auto px-6 py-3">
                {/* Search Input */}
                <div className="relative">
                  <input 
                    ref={searchInputRef}
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && searchQuery.trim()) {
                        window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
                      }
                    }}
                    placeholder="Rechercher dans le musée..."
                    className="w-full bg-transparent border-b border-gray-300 focus:border-accent-gold py-2 px-0 text-gray-900 focus:outline-none placeholder-gray-500 font-bodoni"
                  />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center space-x-3">
                    {searchQuery && (
                      <motion.button 
                        onClick={clearSearch}
                        className="text-gray-400 hover:text-gray-600 cursor-pointer p-1"
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <FiX size={22} />
                      </motion.button>
                    )}
                    <motion.button 
                      onClick={() => {
                        if (searchQuery.trim()) {
                          window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
                        }
                      }}
                      className="text-gray-600 hover:text-accent-gold cursor-pointer p-1"
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <FiSearch size={20} />
                    </motion.button>
                  </div>
                </div>

                {/* Search Results */}
                {searchQuery && (
                  <div className="max-h-[50vh] overflow-y-auto mt-3 border-t border-gray-100 pt-3">
                    {searchResults.length > 0 ? (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs text-gray-600 font-bodoni">
                            {searchResults.length} résultat{searchResults.length > 1 ? 's' : ''}
                          </p>
                          <Link 
                            href={`/search?q=${encodeURIComponent(searchQuery)}`}
                            className="text-xs text-accent-gold hover:underline font-bodoni"
                            onClick={() => setIsSearchActive(false)}
                          >
                            Voir tous les résultats
                          </Link>
                        </div>
                        {searchResults.slice(0, 5).map((result, index) => (
                          <motion.div
                            key={result.id}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.03, duration: 0.2 }}
                            className="group"
                          >
                            <Link 
                              href={result.url}
                              onClick={() => setIsSearchActive(false)}
                              className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50 transition-colors"
                            >
                              {/* Image */}
                              {result.image && (
                                <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded overflow-hidden">
                                  <Image
                                    src={result.image}
                                    alt={result.title}
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                              )}
                              
                              {/* Content */}
                              <div className="flex-grow min-w-0">
                                <h3 className="font-bodoni text-sm text-gray-900 group-hover:text-accent-gold transition-colors line-clamp-1 mb-1">
                                  {result.title}
                                </h3>
                                <p className="text-xs text-gray-600 line-clamp-2">
                                  {result.excerpt}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-gray-600 font-bodoni text-sm mb-1">
                          Aucun résultat trouvé
                        </p>
                        <p className="text-gray-500 text-xs">
                          Essayez avec d'autres mots-clés
                        </p>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Search Tips */}
                {!searchQuery && (
                  <div className="text-center py-4 mt-3 border-t border-gray-100 pt-3">
                    <p className="text-gray-700 font-bodoni text-sm mb-2">
                      Recherches populaires
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 text-xs">
                      {['Affiches orientalistes', 'Bijoux marocains', 'Casa Drawing', 'Céramique Fès', 'Tempus Fugit'].map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => {
                            handleSearch(suggestion);
                            searchInputRef.current?.focus();
                          }}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-accent-gold hover:text-white transition-colors font-bodoni"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
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
              className="absolute left-0 right-0 w-full border-t border-gray-200 shadow-lg z-50"
              style={{ 
                backgroundColor: isHomePage ? headerBackground : "rgba(255, 255, 255, 1)",
                backdropFilter: isHomePage && !isScrolled ? "blur(8px)" : "none"
              }}
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
                            className="block hover:text-accent-gold transition-colors duration-200 font-bodoni text-lg py-2"
                            style={{
                              color: isHomePage && !isScrolled ? "white" : "#111827" // White in transparent mode, dark gray otherwise
                            }}
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
                      className="p-6 rounded-lg"
                      style={{
                        backgroundColor: isHomePage && !isScrolled ? "rgba(255, 255, 255, 0.1)" : "#f9fafb" // Semi-transparent in transparent mode
                      }}
                    >
                      <Link href={navSections[hoveredSection as keyof typeof navSections].featured.link}>
                        <h3 
                          className="font-bodoni text-xl mb-3"
                          style={{
                            color: isHomePage && !isScrolled ? "#D4AF37" : "#D4AF37" // Always gold
                          }}
                        >
                          {navSections[hoveredSection as keyof typeof navSections].featured.title}
                        </h3>
                        <div className="aspect-video bg-gray-200 mb-3 overflow-hidden rounded">
                          <img 
                            src={navSections[hoveredSection as keyof typeof navSections].featured.image}
                            alt={navSections[hoveredSection as keyof typeof navSections].featured.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm line-clamp-3"
                           style={{
                             color: isHomePage && !isScrolled ? "rgba(255, 255, 255, 0.9)" : "#374151" // White text in transparent mode, darker text when header is white
                           }}>
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
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200"
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

export default Header;