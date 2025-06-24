"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Exhibition items based on the provided content
const exhibitionItems = [
  {
    id: 'of-voice-and-stone',
    title: 'Of voice and stone',
    image: '/images/expositions-temporaires/of-voice-and-stone/Exhibit_poster_600.jpeg',
    description: "L'exposition \"Of voice and stone\", qui célèbre le 200e anniversaire de la légation américaine à Tanger et plus de deux siècles d'amitié entre les peuples marocain et américain...",
    href: '/collections-expositions/expositions-temporaires/of-voice-and-stone',
    size: 'large'
  },
  {
    id: 'orient-fantasme',
    title: 'Exposition Orient Fantasmé',
    image: '/images/expositions-temporaires/orient-fantasme/Exposition-Orient-Fantasme.jpg',
    description: "Orient Fantasmé met en regard affiches orientalistes de la collection du Musée de la Fondation Slaoui et œuvres des artistes contemporaines...",
    href: '/collections-expositions/expositions-temporaires/orient-fantasme',
    size: 'medium'
  },
  {
    id: 'casa-drawing',
    title: 'Casa Drawing #2',
    image: '/images/expositions-temporaires/casa-drawing/Casa_Drawing_2_visuel_1.jpg',
    description: "Le dessin comme prétexte. La place accordée au dessin dans le champ de l'art contemporain international et sa popularité grandissante...",
    href: '/collections-expositions/expositions-temporaires/casa-drawing',
    size: 'small'
  },
  {
    id: 'noise-on-paper',
    title: 'Noise on Paper',
    image: '/images/expositions-temporaires/noise-on-paper/photo_rognee.jpg',
    description: "Les deux expositions Noise on paper et Drunken Masters réunissent au Musée deux artistes emblématiques de la scène expérimentale...",
    href: '/collections-expositions/expositions-temporaires/noise-on-paper',
    size: 'medium'
  },
  {
    id: 'nilwood-melody',
    title: 'NILWOOD MELODY',
    image: '/images/expositions-temporaires/nilwood-melody/visuel_site_internet_2_1.jpg',
    description: "Le Musée vous invite à explorer la mémoire d'un temps fort du 7ème art que fut l'« âge d'or » du cinéma égyptien...",
    href: '/collections-expositions/expositions-temporaires/nilwood-melody',
    size: 'large'
  },
  {
    id: 'hicham-benohoud',
    title: 'HICHAM BENOHOUD: 25 ANS DE PHOTOGRAPHIE',
    image: '/images/expositions-temporaires/hicham-benohoud/Exposition-HICHAM-BENOHOUD-25-ANS-DE-PHOTOGRAPHIE.png',
    description: "Les photographies d'Hicham Benohoud ne cessent d'interroger sur l'identité. La sienne bien sûr, mais dans un processus de création...",
    href: '/collections-expositions/expositions-temporaires/hicham-benohoud',
    size: 'small'
  },
  {
    id: 'voyages-decouvertes',
    title: 'VOYAGES ET DÉCOUVERTES',
    image: '/images/expositions-temporaires/voyages_decouertes/Exposition-daffiches-orientalistes.png',
    description: "A l'occasion des Journées du Patrimoine, exposition d'affiches anciennes et orientalistes sur le thème: Voyages et découvertes...",
    href: '/collections-expositions/expositions-temporaires/voyages-decouvertes',
    size: 'medium'
  },
  {
    id: 'mil-caras',
    title: 'Mil Caras',
    image: '/images/expositions-temporaires/mil_caras/Mil-Caras.png',
    description: "Le Musée accueille une nouvelle exposition avec la participation d'artistes marocaines et espagnoles, créant une passerelle entre deux cultures...",
    href: '/collections-expositions/expositions-temporaires/mil-caras',
    size: 'small'
  },
  {
    id: 'anes-situ',
    title: 'Ânes situ',
    image: '/images/expositions-temporaires/anes_situ/Expositionanes-situ.png',
    description: "Pour Hicham Benohoud, tous les moyens sont bons pour parler du statut de l'individu au Maroc. Cette série transcende le modèle...",
    href: '/collections-expositions/expositions-temporaires/anes-situ',
    size: 'medium'
  },
  {
    id: 'carnets-voyages',
    title: 'Carnets de voyages et croquis',
    image: '/images/expositions-temporaires/carnets_de_voyages/Exposition-Carnets-de-voyages-et-croquis.png',
    description: "Onze lunes au Maroc - Titouan LAMAZOU. En 1982, Titouan Lamazou sillonne à dos de mulet les vallées heureuses de Berbérie...",
    href: '/collections-expositions/expositions-temporaires/carnets-voyages',
    size: 'large'
  },
  {
    id: 'intimite-maroc',
    title: 'Dans l\'intimité du Maroc',
    image: '/images/expositions-temporaires/limite_maroc/Dans-lintimite-du-Maroc.png',
    description: "Photographies de Gabriel Veyre 1901-1936. Gabriel Veyre photographie sans relâche l'intimité du palais et des scènes de la vie quotidienne...",
    href: '/collections-expositions/expositions-temporaires/intimite-maroc',
    size: 'small'
  },
  {
    id: 'casa-drawing-pencil',
    title: 'CASA DRAWING',
    image: '/images/expositions-temporaires/casa_drawing_pencil/Said_afifi_dessin.jpg',
    description: "Si le dessin existe depuis la préhistoire, il deviendra un art autonome à la fin du XIXème siècle grâce à l'apparition de nouvelles techniques...",
    href: '/collections-expositions/expositions-temporaires/casa-drawing-pencil',
    size: 'medium'
  },
  {
    id: 'cinemaroc',
    title: 'CinéMaroc',
    image: '/images/expositions-temporaires/zaubitzer/CineMaroc-de-Stephan-Zaubitzer.png',
    description: "CinéMaroc de Stephan Zaubitzer. Depuis 2003, Stephan Zaubitzer photographie les salles de cinéma dans le monde entier...",
    href: '/collections-expositions/expositions-temporaires/cinemaroc',
    size: 'large'
  },
  {
    id: 'ben-ali-rbati',
    title: 'Mohamed Ben Ali R\'bati',
    image: '/images/expositions-temporaires/ben_ali/Exposition-Mohamed-Ben-Ali-Rbati_QS8fl8G.png',
    description: "R'Bati Fils de Tanger 1869-1939. Mohammed ben Ali R'bati, premier peintre de la longue histoire marocaine, ne manque pas ce rendez-vous...",
    href: '/collections-expositions/expositions-temporaires/ben-ali-rbati',
    size: 'small'
  },
  {
    id: 'bernard-plossu',
    title: 'Maroc et autres sites',
    image: '/images/expositions-temporaires/bernard_plossu/Maroc-et-autres-sites.png',
    description: "Exposition de photographies de Bernard Plossu. Cette exposition présente une sélection d'une série d'images réalisées au Maroc en 1975...",
    href: '/collections-expositions/expositions-temporaires/bernard-plossu',
    size: 'medium'
  },
  {
    id: 'portraits-croises',
    title: 'Portraits Croisés',
    image: '/images/expositions-temporaires/portraits_croises/Exposition-Portraits-Croises.png',
    description: "Du 26 juin au 10 juillet, exposition photographique au profit de l'association Enfance Maghreb Avenir...",
    href: '/collections-expositions/expositions-temporaires/portraits-croises',
    size: 'small'
  },
  {
    id: 'voyages-et-decouvertes',
    title: 'Voyages et Découvertes',
    image: '/images/expositions-temporaires/voyages_decouvertes/Voyages-et-Decouvertes.png',
    description: "À partir du mardi 25 mars, exposition d'affiches anciennes sur le thème Voyages et Découvertes...",
    href: '/collections-expositions/expositions-temporaires/voyages-decouvertes',
    size: 'large'
  },
  {
    id: 'un-orient-consommation',
    title: 'Un Orient de consommation',
    image: '/images/expositions-temporaires/un orient de consommation/Un-Orient-de-consommation.png',
    description: "Du mercredi 03 octobre au vendredi 30 novembre, exposition d'affiches orientalistes sur le thème de la réclame...",
    href: '/collections-expositions/expositions-temporaires/un-orient-consommation',
    size: 'medium'
  },
  {
    id: 'journees-patrimoine',
    title: 'Journées du Patrimoine',
    image: '/images/expositions-temporaires/journes-de-patrimoins/Journees-du-Patrimoine-les-6-et-7-avril.png',
    description: "Les 6 et 7 avril, exposition d'affiches orientalistes dans le cadre des Journées du Patrimoine...",
    href: '/collections-expositions/expositions-temporaires/journees-patrimoine',
    size: 'small'
  },
  {
    id: 'routes-transahariennes',
    title: 'Routes transahariennes',
    image: '/images/expositions-temporaires/routes-transahariennes/311589066_10159797637038153_2106760676544239899_n_1.jpg',
    description: "En partenariat avec African Arty, exposition captivante qui plonge le spectateur au cœur de l'Afrique...",
    href: '/collections-expositions/expositions-temporaires/routes-transahariennes',
    size: 'large'
  },
  {
    id: 'anaelle-myriam-chaaib',
    title: 'Anaëlle Myriam Chaaib',
    image: '/images/expositions-temporaires/mryiam_chaaib/AfficheSlaoui_10_1.jpg',
    description: "Première exposition de l'artiste franco-marocaine présentant une collection de toiles inspirées de références culturelles...",
    href: '/collections-expositions/expositions-temporaires/anaelle-myriam-chaaib',
    size: 'medium'
  }
];

const ExpositionsTemporairesPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20 pb-12 md:pt-24 md:pb-20 mt-16 md:mt-0">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[url('/images/hero-background.jpg')] bg-cover bg-center"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-bodoni text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-6 tracking-tight leading-tight">
              Expositions Temporaires
            </h1>
            <div className="w-16 md:w-24 h-[2px] bg-accent-gold mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Découvrez notre riche programmation d'expositions temporaires qui dialogue avec notre collection permanente
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {exhibitionItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  className={`break-inside-avoid mb-6 group ${
                    item.size === 'large' ? 'md:col-span-2' : 
                    item.size === 'medium' ? '' : 
                    'aspect-square'
                  }`}
                >
                  <Link href={item.href} className="block">
                    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-accent-gold/30">
                      {/* Image */}
                      <div className={`relative overflow-hidden ${
                        item.size === 'large' ? 'aspect-[4/3]' : 
                        item.size === 'medium' ? 'aspect-[3/2]' : 
                        'aspect-square'
                      }`}>
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-bodoni text-lg md:text-xl text-gray-900 group-hover:text-accent-gold transition-colors duration-300 mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-3">
                          {item.description}
                        </p>
                        <div className="flex items-center text-accent-gold text-sm font-medium">
                          <span className="mr-1">Découvrir</span>
                          <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center mt-16 p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg"
            >
              <h2 className="font-bodoni text-2xl md:text-3xl text-gray-900 mb-4">
                Restez informé de nos prochaines expositions
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Suivez notre programmation culturelle et ne manquez aucune de nos expositions temporaires qui enrichissent le dialogue entre tradition et modernité.
              </p>
              <Link href="/infos-pratiques/contact">
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden px-8 py-4 bg-transparent border-2 text-gray-900 font-bodoni text-lg font-medium transition-all duration-300 hover:text-white group cursor-pointer"
                  style={{ borderColor: '#bfa76a' }}
                >
                  <span className="relative z-10">Nous contacter</span>
                  <div 
                    className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: '#bfa76a' }}
                  ></div>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExpositionsTemporairesPage; 