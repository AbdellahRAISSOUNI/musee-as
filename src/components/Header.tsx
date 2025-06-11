"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';
import { RiMenu3Line } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const lastScrollY = useRef(0);

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
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeSection]);

  // Navigation sections with their dropdown content
  const navSections = {
    exhibitions: {
      title: "EXPOSITIONS",
      items: [
        { label: "Expositions Actuelles", href: "#current" },
        { label: "Expositions Passées", href: "#past" },
        { label: "Expositions à Venir", href: "#upcoming" },
        { label: "Catalogue des Expositions", href: "#catalog" }
      ],
      featured: {
        title: "À ne pas manquer",
        image: "/images/hero-background.jpg",
        description: "Découvrez notre nouvelle exposition temporaire sur l'art contemporain marocain.",
        link: "#featured-exhibition"
      }
    },
    collections: {
      title: "COLLECTIONS",
      items: [
        { label: "Art Marocain", href: "#moroccan" },
        { label: "Art Contemporain", href: "#contemporary" },
        { label: "Objets Historiques", href: "#historical" },
        { label: "Archives et Manuscrits", href: "#archives" }
      ],
      featured: {
        title: "Collection en vedette",
        image: "/images/hero-background.jpg",
        description: "Explorez notre collection d'objets d'art marocain traditionnels datant du 19ème siècle.",
        link: "#featured-collection"
      }
    },
    visit: {
      title: "VISITE",
      items: [
        { label: "Heures et Admission", href: "#hours" },
        { label: "Visites Guidées", href: "#guided" },
        { label: "Plan du Musée", href: "#map" },
        { label: "Accessibilité", href: "#accessibility" }
      ],
      featured: {
        title: "Planifiez votre visite",
        image: "/images/hero-background.jpg",
        description: "Tout ce que vous devez savoir avant de visiter le musée Abderrahman Slaoui.",
        link: "#plan-visit"
      }
    },
    about: {
      title: "À PROPOS",
      items: [
        { label: "Notre Histoire", href: "#history" },
        { label: "Équipe et Direction", href: "#team" },
        { label: "Fondation", href: "#foundation" },
        { label: "Contactez-nous", href: "#contact" }
      ],
      featured: {
        title: "Notre mission",
        image: "/images/hero-background.jpg",
        description: "Découvrez l'histoire et la mission du Musée Abderrahman Slaoui et sa contribution à la culture marocaine.",
        link: "#mission"
      }
    }
  };

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
              className="md:hidden text-premium-white"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
            >
              <RiMenu3Line size={24} />
            </motion.button>
          </div>
          
          {/* Center - Museum Name */}
          <Link href="/" className="flex-grow text-center">
            <motion.h1 
              className="text-2xl md:text-3xl lg:text-4xl font-bodoni-italic text-premium-white tracking-wider"
              whileHover={{ color: '#D4AF37', transition: { duration: 0.3 } }}
            >
              Musée Abderrahman Slaoui
            </motion.h1>
          </Link>
          
          {/* Right side - Search Icon */}
          <div className="w-24 flex justify-end">
            <motion.button 
              className="text-premium-white hover:text-accent-gold transition-colors"
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
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-soft-white hover:text-accent-gold"
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
                className="container mx-auto hidden md:block bg-[#000000]"
              >
                <ul className="flex justify-center space-x-12 py-4">
                  {Object.entries(navSections).map(([key, section]) => (
                    <li key={key} className="relative nav-item">
                      <motion.button 
                        className={`font-bodoni-regular text-base uppercase tracking-widest py-2 flex items-center
                                  ${activeSection === key ? 'text-accent-gold' : 'text-soft-white hover:text-premium-white'}`}
                        onClick={() => toggleSection(key)}
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {section.title}
                        <motion.span
                          animate={{ rotate: activeSection === key ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-2"
                        >
                          <IoIosArrowDown size={16} />
                        </motion.span>
                      </motion.button>
                    </li>
                  ))}
                </ul>
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
                      {navSections[activeSection as keyof typeof navSections].items.map((item, index) => (
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
                            className="block text-soft-white hover:text-accent-gold transition-colors duration-200 font-bodoni-regular text-lg py-1"
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
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
                      <h3 className="text-accent-gold font-bodoni-regular text-xl mb-3">
                        {navSections[activeSection as keyof typeof navSections].featured.title}
                      </h3>
                      <div className="aspect-video bg-graphite/30 mb-3 overflow-hidden">
                        {/* Featured image */}
                        <img 
                          src={navSections[activeSection as keyof typeof navSections].featured.image}
                          alt={navSections[activeSection as keyof typeof navSections].featured.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-soft-white text-sm mb-3">
                        {navSections[activeSection as keyof typeof navSections].featured.description}
                      </p>
                      <Link 
                        href={navSections[activeSection as keyof typeof navSections].featured.link}
                        className="text-accent-gold hover:text-premium-white text-sm font-bodoni-regular underline"
                      >
                        En savoir plus
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
              className="md:hidden bg-[#000000] border-t border-graphite/30 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-4">
                <nav>
                  {Object.entries(navSections).map(([key, section]) => (
                    <div key={key} className="mb-4">
                      <motion.button 
                        className={`font-bodoni-regular text-base uppercase tracking-widest py-2 flex items-center justify-between w-full
                                  ${activeSection === key ? 'text-accent-gold' : 'text-soft-white'}`}
                        onClick={() => toggleSection(key)}
                        whileTap={{ scale: 0.98 }}
                      >
                        {section.title}
                        <motion.span
                          animate={{ rotate: activeSection === key ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IoIosArrowDown size={18} />
                        </motion.span>
                      </motion.button>
                      
                      <AnimatePresence>
                        {activeSection === key && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 border-l border-graphite/50 ml-2 mt-2 overflow-hidden"
                          >
                            {section.items.map((item, index) => (
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
                                  className="block py-3 text-soft-white hover:text-premium-white font-bodoni-regular"
                                >
                                  {item.label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
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
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-soft-white hover:text-accent-gold"
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
