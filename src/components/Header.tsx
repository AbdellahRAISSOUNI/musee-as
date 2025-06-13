"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';
import { RiMenu3Line } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Detect scroll for styling and visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for styling
      setIsScrolled(currentScrollY > 10);
      
      // Control header visibility based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        // Scrolling down & past threshold - hide header
        setIsVisible(false);
      } else {
        // Scrolling up or at top - show header
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdowns on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSection(null);
  }, [pathname]);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
    if (!isSearchActive) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveSection(null);
  };

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeSection && !(event.target as Element).closest('.nav-item')) {
        setActiveSection(null);
      }
      
      // Close mobile menu when clicking outside
      if (isMobileMenuOpen && !(event.target as Element).closest('.mobile-menu') && 
          !(event.target as Element).closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeSection, isMobileMenuOpen]);

  // Navigation sections with their dropdown content
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

  // Helper to check if section matches current path
  const isSectionActive = (key: string) => {
    if (!pathname) return false;
    const sectionPath = navSections[key as keyof typeof navSections].featured.link.split('/')[1];
    return pathname.startsWith(`/${sectionPath}`);
  };

  // Determine active section from URL path
  useEffect(() => {
    if (pathname) {
      // Only highlight the section in the navigation without opening the dropdown
      // We're removing the code that sets activeSection based on URL
      setActiveSection(null); // Reset active section on navigation
    }
  }, [pathname]);

  return (
    <>
      {/* This div adds space below the fixed header */}
      <div className="h-[150px] w-full"></div>
      
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-50 bg-[#000000] text-premium-white shadow-md transition-transform duration-300 ease-in-out ${!isVisible ? '-translate-y-full' : 'translate-y-0'}`}
      >
        {/* Top Layer */}
        <div className="container mx-auto px-6 py-4 flex justify-between items-center border-b border-graphite/30 bg-[#000000]">
          {/* Left side - Menu button for mobile */}
          <div className="w-24 flex justify-start">
            <motion.button 
              className="md:hidden text-premium-white cursor-pointer mobile-menu-button"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
            >
              <RiMenu3Line size={24} />
            </motion.button>
          </div>
          
          {/* Center - Museum Name */}
          <Link href="/" className="flex-grow text-center group">
            <motion.h1 
              className="text-2xl md:text-3xl lg:text-4xl font-bodoni-italic text-premium-white tracking-wider relative inline-block cursor-pointer"
              whileHover={{ color: '#D4AF37', transition: { duration: 0.3 } }}
            >
              Musée Abderrahman Slaoui
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent-gold transform -translate-x-1/2 group-hover:w-1/4 transition-all duration-300 ease-out"></span>
            </motion.h1>
          </Link>
          
          {/* Right side - Search Icon */}
          <div className="w-24 flex justify-end">
            <motion.button 
              className="text-premium-white hover:text-accent-gold transition-colors cursor-pointer"
              onClick={toggleSearch}
              whileTap={{ scale: 0.95 }}
            >
              {isSearchActive ? <FiX size={24} /> : <FiSearch size={24} />}
            </motion.button>
          </div>
        </div>
        
        {/* Bottom Layer - Navigation or Search */}
        <div className="relative border-b border-graphite/30 bg-[#000000]">
          <AnimatePresence mode="wait">
            {isSearchActive ? (
              <motion.div
                key="search"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="container mx-auto px-6 py-4 bg-[#000000]"
              >
                <div className="relative">
                  <input 
                    ref={searchInputRef}
                    type="text" 
                    placeholder="Rechercher dans le musée..."
                    className="w-full bg-graphite border-none py-3 px-4 pr-12 text-premium-white focus:outline-none focus:ring-1 focus:ring-accent-gold"
                  />
                  <motion.button 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-soft-white hover:text-accent-gold cursor-pointer"
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiSearch size={20} />
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.nav
                key="nav"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="container mx-auto hidden md:block bg-[#000000] overflow-x-auto"
              >
                <div className="flex justify-center py-4 min-w-max">
                  <ul className="flex justify-center space-x-6 lg:space-x-8">
                    {Object.entries(navSections).map(([key, section]) => {
                      // Check if this section is active (either dropdown open or current page matches section)
                      const isActive = activeSection === key || isSectionActive(key);
                      
                      return (
                        <li key={key} className="relative nav-item">
                          {section.items.length > 0 ? (
                            <div className="relative group">
                              <motion.button 
                                className={`font-bodoni text-xs lg:text-sm uppercase tracking-widest py-2 flex items-center whitespace-nowrap cursor-pointer relative
                                          ${isActive ? 'text-accent-gold' : 'text-soft-white hover:text-premium-white'}`}
                                onClick={() => toggleSection(key)}
                                whileTap={{ scale: 0.97 }}
                              >
                                {section.title}
                                <motion.span
                                  animate={{ rotate: activeSection === key ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="ml-2"
                                >
                                  <IoIosArrowDown size={14} />
                                </motion.span>
                                
                                {/* Animated underline element */}
                                {isActive && (
                                  <div className="absolute h-[3px] bg-accent-gold bottom-[-4px] left-1/2 w-[60%] transform -translate-x-1/2" />
                                )}
                                
                                {/* Hover underline animation - grows from center */}
                                <motion.div 
                                  className="absolute bottom-[-4px] left-1/2 h-[3px] bg-accent-gold transform -translate-x-1/2 pointer-events-none"
                                  initial={{ width: "0%" }}
                                  whileHover={{ width: isActive ? "80%" : "30%" }}
                                  transition={{ duration: 0.3 }}
                                />
                              </motion.button>
                            </div>
                          ) : (
                            <div className="relative group">
                              <Link 
                                href={section.featured.link}
                                className={`font-bodoni text-xs lg:text-sm uppercase tracking-widest py-2 flex items-center whitespace-nowrap cursor-pointer relative
                                          ${isActive ? 'text-accent-gold' : 'text-soft-white hover:text-premium-white'} transition-colors duration-200`}
                              >
                                {section.title}
                                
                                {/* Animated underline element for active state */}
                                {isActive && (
                                  <div className="absolute h-[3px] bg-accent-gold bottom-[-4px] left-1/2 w-[60%] transform -translate-x-1/2" />
                                )}
                                
                                {/* Hover underline animation - grows from center */}
                                <motion.div 
                                  className="absolute bottom-[-4px] left-1/2 h-[3px] bg-accent-gold transform -translate-x-1/2 pointer-events-none"
                                  initial={{ width: "0%" }}
                                  whileHover={{ width: isActive ? "80%" : "30%" }}
                                  transition={{ duration: 0.3 }}
                                />
                              </Link>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>

        {/* Full-width Dropdown Menus */}
        <AnimatePresence>
          {activeSection && !isSearchActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-0 right-0 w-full bg-[#0A0A0A] border-t border-graphite/30 shadow-xl overflow-hidden z-20"
            >
              <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Left side - Links */}
                  <div className="md:col-span-2 lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {navSections[activeSection as keyof typeof navSections].items.map((item, index) => {
                        const isItemActive = pathname === item.href;
                        
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration: 0.3,
                              delay: index * 0.05
                            }}
                          >
                            <Link 
                              href={item.href}
                              className="group relative block text-soft-white hover:text-premium-white transition-colors duration-200 font-bodoni text-lg py-1 cursor-pointer"
                              onClick={() => setActiveSection(null)}
                            >
                              <span className={isItemActive ? "text-accent-gold" : ""}>
                                {item.label}
                              </span>
                              
                              {/* Active underline */}
                              {isItemActive && (
                                <span className="absolute -bottom-1 left-0 h-[2px] bg-accent-gold w-8" />
                              )}
                              
                              {/* Hover underline animation */}
                              <span className="absolute -bottom-1 left-0 h-[2px] bg-accent-gold w-0 group-hover:w-full transition-all duration-300 ease-out" />
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Right side - Featured content */}
                  <div className="md:col-span-2 lg:col-span-1">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-graphite/20 p-4 rounded"
                    >
                      <Link href={navSections[activeSection as keyof typeof navSections].featured.link} className="block">
                        <h3 className="text-accent-gold font-bodoni text-xl mb-3">
                          {navSections[activeSection as keyof typeof navSections].featured.title}
                        </h3>
                        <div className="aspect-video bg-graphite/30 mb-3 overflow-hidden">
                          {/* Featured image */}
                          <img 
                            src={navSections[activeSection as keyof typeof navSections].featured.image}
                            alt={navSections[activeSection as keyof typeof navSections].featured.title}
                            className={`w-full h-full ${activeSection === 'fondation' || activeSection === 'collections' ? 'object-contain' : 'object-cover'}`}
                          />
                        </div>
                        <p className="text-soft-white text-sm mb-3">
                          {navSections[activeSection as keyof typeof navSections].featured.description}
                        </p>
                        <span 
                          className="group relative inline-block text-accent-gold hover:text-premium-white text-sm font-bodoni cursor-pointer"
                        >
                          En savoir plus
                          <span className="absolute -bottom-1 left-0 h-[1px] bg-accent-gold w-0 group-hover:w-full transition-all duration-300 ease-out" />
                        </span>
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
              className="md:hidden bg-[#000000] border-t border-graphite/30 overflow-hidden mobile-menu"
            >
              <div className="container mx-auto px-6 py-4">
                <nav>
                  {Object.entries(navSections).map(([key, section]) => {
                    const isMobileActive = isSectionActive(key);
                    
                    return (
                      <div key={key} className="mb-4">
                        {section.items.length > 0 ? (
                          <>
                            <div className="relative">
                              <motion.button 
                                className={`font-bodoni text-base uppercase tracking-widest py-2 flex items-center justify-between w-full cursor-pointer
                                          ${activeSection === key ? 'text-accent-gold' : 'text-soft-white'}`}
                                onClick={() => toggleSection(key)}
                                whileTap={{ scale: 0.98 }}
                              >
                                <span className={isMobileActive ? "text-accent-gold" : ""}>
                                  {section.title}
                                </span>
                                <motion.span
                                  animate={{ rotate: activeSection === key ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <IoIosArrowDown size={18} />
                                </motion.span>
                              </motion.button>
                              
                              {/* Active underline */}
                              {isMobileActive && (
                                <span className="absolute bottom-0 left-0 h-[2px] bg-accent-gold w-20" />
                              )}
                            </div>
                            
                            <AnimatePresence>
                              {activeSection === key && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="pl-4 border-l border-graphite/50 ml-2 mt-2 overflow-hidden"
                                >
                                  {section.items.map((item, index) => {
                                    const isItemActive = pathname === item.href;
                                    
                                    return (
                                      <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ 
                                          duration: 0.2,
                                          delay: index * 0.05
                                        }}
                                      >
                                        <Link 
                                          href={item.href}
                                          className="group relative block py-3 text-soft-white hover:text-premium-white font-bodoni text-lg cursor-pointer transition-colors duration-200"
                                          onClick={() => setActiveSection(null)}
                                        >
                                          <span className={isItemActive ? "text-accent-gold" : ""}>
                                            {item.label}
                                          </span>
                                          
                                          {/* Active indicator */}
                                          {isItemActive && (
                                            <span className="absolute -left-4 top-1/2 h-2 w-2 bg-accent-gold rounded-full transform -translate-y-1/2" />
                                          )}
                                        </Link>
                                      </motion.div>
                                    );
                                  })}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <div className="relative">
                            <Link
                              href={section.featured.link}
                              className={`font-bodoni text-base uppercase tracking-widest py-2 block text-soft-white hover:text-premium-white cursor-pointer`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <span className={isMobileActive ? "text-accent-gold" : ""}>
                                {section.title}
                              </span>
                            </Link>
                            
                            {/* Active underline */}
                            {isMobileActive && (
                              <span className="absolute bottom-0 left-0 h-[2px] bg-accent-gold w-20" />
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>
                
                {/* Mobile Search */}
                <motion.div 
                  className="mt-6 border-t border-graphite/30 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Rechercher dans le musée..."
                      className="w-full bg-graphite border-none py-3 px-4 pr-12 text-premium-white focus:outline-none focus:ring-1 focus:ring-accent-gold"
                    />
                    <motion.button 
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-soft-white hover:text-accent-gold cursor-pointer"
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiSearch size={20} />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
 