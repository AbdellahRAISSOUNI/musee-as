"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectMap from '@/components/ProjectMap';

const SiteMapPage = () => {
  return (
    <main className="min-h-screen bg-black text-premium-white pt-12">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 py-16"
      >
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/" 
            className="inline-block mb-8 text-soft-white hover:text-accent-gold transition-colors"
          >
            ← Retour à l'accueil
          </Link>
          
          <h1 className="font-bodoni-regular text-4xl md:text-5xl lg:text-6xl mb-8">
            Plan du Site
          </h1>
          
          <p className="text-soft-white text-lg mb-12 leading-relaxed max-w-4xl">
            Explorez la structure complète du site du Musée Abderrahman Slaoui pour 
            naviguer facilement vers les sections qui vous intéressent.
          </p>
          
          <ProjectMap />
          
          <div className="mt-12 p-6 bg-charcoal rounded-lg">
            <h2 className="font-bodoni-regular text-2xl text-premium-white mb-4">
              Besoin d'aide pour trouver quelque chose ?
            </h2>
            <p className="text-soft-white mb-6">
              Si vous ne trouvez pas l'information que vous recherchez, n'hésitez pas à contacter 
              notre équipe qui sera ravie de vous aider.
            </p>
            <Link 
              href="/infos-pratiques/contact" 
              className="inline-block bg-transparent border border-accent-gold text-accent-gold hover:bg-accent-gold/10 transition-colors px-6 py-3 font-bodoni-regular"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default SiteMapPage; 