"use client";

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiX } from 'react-icons/fi';
import { searchContent, SearchItem } from '@/data/searchData';

const gold = '#bfa76a';

// Loading component for Suspense fallback
const SearchLoading = () => (
  <main className="min-h-screen bg-white text-gray-900">
    <section className="relative h-[60vh] flex items-center justify-center bg-black mt-16 md:mt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/visites-ateliers-activites/rencontres/nostalgie/WhatsApp_Image_2023-07-25_at_15.50.21_1.jpeg"
          alt="Recherche dans le musée"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-6">
            Recherche
          </h1>
          <div className="w-24 h-[2px] mx-auto mb-8" style={{ backgroundColor: gold }} />
          <p className="text-xl md:text-2xl text-white/90 font-light font-bodoni italic">
            Explorez nos collections, expositions et actualités
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block animate-spin h-8 w-8 border-b-2 border-accent-gold"></div>
          <p className="mt-6 text-gray-600 font-bodoni text-lg uppercase tracking-wide">Chargement...</p>
        </div>
      </div>
    </section>
  </main>
);

// Search content component that uses useSearchParams
const SearchContent = () => {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsLoading(true);
    
    // Simulate loading for better UX
    setTimeout(() => {
      if (query.trim()) {
        const results = searchContent(query);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
      setIsLoading(false);
    }, 300);
  };

  // Initial search on page load
  useEffect(() => {
    if (initialQuery) {
      handleSearch(initialQuery);
    }
  }, [initialQuery]);

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    searchInputRef.current?.focus();
    // Update URL
    window.history.replaceState({}, '', '/search');
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      handleSearch(searchQuery);
      // Update URL
      window.history.replaceState({}, '', `/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black mt-16 md:mt-20">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/visites-ateliers-activites/rencontres/nostalgie/WhatsApp_Image_2023-07-25_at_15.50.21_1.jpeg"
            alt="Recherche dans le musée"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center px-6"
          >
            <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-6">
              Recherche
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-8" style={{ backgroundColor: gold }} />
            <p className="text-xl md:text-2xl text-white/90 font-light font-bodoni italic">
              Explorez nos collections, expositions et actualités
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-16"
            >
              <form onSubmit={handleSubmit} className="relative">
                <div className="relative bg-gray-50 border-b-2 border-gray-200 focus-within:border-accent-gold transition-colors">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher dans le musée..."
                    className="w-full bg-transparent py-6 px-8 pr-24 text-gray-900 focus:outline-none placeholder-gray-500 font-bodoni text-xl"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-3">
                    {searchQuery && (
                      <motion.button
                        type="button"
                        onClick={clearSearch}
                        className="text-gray-400 hover:text-gray-600 cursor-pointer p-2"
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <FiX size={22} />
                      </motion.button>
                    )}
                    <motion.button
                      type="submit"
                      className="bg-accent-gold text-white px-4 py-2 hover:bg-accent-gold/90 transition-colors"
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <FiSearch size={20} />
                    </motion.button>
                  </div>
                </div>
              </form>

              {/* Search Suggestions */}
              {!searchQuery && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-8 text-center"
                >
                  <div className="w-full h-[1px] mb-8" style={{ backgroundColor: '#f85c54' }} />
                  <p className="text-gray-700 font-bodoni text-lg mb-6 uppercase tracking-wide">Recherches populaires</p>
                  <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                    {['Affiches orientalistes', 'Bijoux marocains', 'Casa Drawing', 'Céramique Fès', 'Tempus Fugit', 'AJAMMAR', 'Collections permanentes'].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => {
                          setSearchQuery(suggestion);
                          handleSearch(suggestion);
                          window.history.replaceState({}, '', `/search?q=${encodeURIComponent(suggestion)}`);
                        }}
                        className="px-3 md:px-6 py-2 md:py-3 bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white transition-colors font-bodoni border-b-2 border-transparent hover:border-accent-gold text-sm md:text-base"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                  <div className="w-full h-[1px] mt-8" style={{ backgroundColor: '#f85c54' }} />
                </motion.div>
              )}
            </motion.div>

            {/* Loading State */}
            {isLoading && (
              <div className="text-center py-16">
                <div className="w-full h-[1px] mb-8" style={{ backgroundColor: '#f85c54' }} />
                <div className="inline-block animate-spin h-8 w-8 border-b-2 border-accent-gold"></div>
                <p className="mt-6 text-gray-600 font-bodoni text-lg uppercase tracking-wide">Recherche en cours</p>
                <div className="w-full h-[1px] mt-8" style={{ backgroundColor: '#f85c54' }} />
              </div>
            )}

            {/* Search Results */}
            {!isLoading && searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {searchResults.length > 0 ? (
                  <div>
                    {/* Results Header */}
                    <div className="mb-12">
                      <div className="w-full h-[1px] mb-6" style={{ backgroundColor: '#f85c54' }} />
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-2 md:space-y-0">
                        <h2 className="font-bodoni text-2xl md:text-3xl text-gray-900 uppercase tracking-wide break-words">
                          {searchResults.length} résultat{searchResults.length > 1 ? 's' : ''} pour "{searchQuery}"
                        </h2>
                        <div className="text-xs md:text-sm text-gray-500 font-bodoni uppercase tracking-wide">
                          {searchQuery.split(' ').length > 1 ? 'Recherche avec tous les mots' : ''}
                        </div>
                      </div>
                      <div className="w-full h-[1px]" style={{ backgroundColor: '#f85c54' }} />
                    </div>

                    {/* Results Grid */}
                    <div className="space-y-8">
                      {searchResults.map((result, index) => (
                        <motion.article
                          key={result.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          className="group"
                        >
                          <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 py-6 md:py-8 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            {/* Image */}
                            {result.image && (
                              <div className="flex-shrink-0 w-full md:w-32 lg:w-40 h-48 md:h-24 lg:h-32 bg-gray-200 overflow-hidden">
                                <Image
                                  src={result.image}
                                  alt={result.title}
                                  width={160}
                                  height={128}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            )}

                            {/* Content */}
                            <div className="flex-grow min-w-0">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-2 sm:space-y-0">
                                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                                  <span className="px-3 py-1 bg-gray-900 text-white text-xs sm:text-sm font-medium font-bodoni uppercase tracking-wide whitespace-nowrap">
                                    {result.type === 'actualite' ? 'Actualité' :
                                     result.type === 'collection' ? 'Collection' :
                                     result.type === 'exposition' ? 'Exposition' :
                                     result.type === 'activity' ? 'Activité' : 'Page'}
                                  </span>
                                  {result.date && (
                                    <span className="text-xs sm:text-sm text-gray-500 font-bodoni uppercase tracking-wide">{result.date}</span>
                                  )}
                                </div>
                              </div>

                              <h3 className="font-bodoni text-xl md:text-2xl text-gray-900 group-hover:text-accent-gold transition-colors mb-3 md:mb-4 uppercase tracking-wide break-words">
                                <Link href={result.url}>
                                  {result.title}
                                </Link>
                              </h3>

                              <p className="text-gray-600 mb-4 md:mb-6 line-clamp-3 leading-relaxed text-sm md:text-base">
                                {result.excerpt}
                              </p>

                              <Link
                                href={result.url}
                                className="inline-flex items-center text-accent-gold group-hover:text-gray-900 transition-colors font-bodoni font-medium uppercase tracking-wide border-b border-accent-gold hover:border-gray-900 text-sm md:text-base"
                              >
                                <span className="mr-2">En savoir plus</span>
                                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                              </Link>
                            </div>
                          </div>
                          
                          {/* Red separator line */}
                          {index < searchResults.length - 1 && (
                            <div className="w-full h-[1px] mt-4" style={{ backgroundColor: '#f85c54' }} />
                          )}
                        </motion.article>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <div className="w-full h-[1px] mb-12" style={{ backgroundColor: '#f85c54' }} />
                    <div className="text-gray-400 mb-8">
                      <FiSearch size={64} className="mx-auto opacity-30" />
                    </div>
                    <h3 className="font-bodoni text-3xl text-gray-700 mb-6 uppercase tracking-wide">
                      Aucun résultat trouvé
                    </h3>
                    <p className="text-gray-600 mb-12 max-w-lg mx-auto text-lg leading-relaxed">
                      Nous n'avons trouvé aucun contenu correspondant à votre recherche "{searchQuery}".
                    </p>
                    <div className="space-y-8">
                      <div className="w-full h-[1px]" style={{ backgroundColor: '#f85c54' }} />
                      <p className="text-gray-700 font-bodoni text-lg uppercase tracking-wide">Suggestions</p>
                      <div className="w-full h-[1px]" style={{ backgroundColor: '#f85c54' }} />
                      <ul className="text-gray-600 space-y-3 max-w-md mx-auto font-bodoni">
                        <li>Vérifiez l'orthographe des mots-clés</li>
                        <li>Essayez des termes plus généraux</li>
                        <li>Utilisez moins de mots-clés</li>
                        <li>Explorez nos collections et actualités</li>
                      </ul>
                      <div className="w-full h-[1px]" style={{ backgroundColor: '#f85c54' }} />
                      <div className="mt-12">
                        <Link 
                          href="/collections-expositions"
                          className="inline-block bg-accent-gold text-white px-8 py-4 hover:bg-accent-gold/90 transition-colors font-bodoni uppercase tracking-wide border-b-2 border-gray-900 hover:border-accent-gold"
                        >
                          Découvrir nos collections
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

// Main search page component with Suspense boundary
const SearchPage = () => {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchContent />
    </Suspense>
  );
};

export default SearchPage; 