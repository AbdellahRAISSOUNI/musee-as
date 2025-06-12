"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Exhibition items based on the screenshots
const exhibitionItems = [
  {
    id: 'of-voice-and-stone',
    title: 'Of voice and stone',
    image: '/images/expositions-temporaires/of-voice-and-stone/Exhibit_poster_600.jpeg',
    description: "L'exposition \"Of voice and stone\", qui célèbre le 200e anniversaire de la légation américaine à Tanger et plus de deux siècles d'amitié entre les peuples marocain et américain, a fait escale au musée de la Fondation Abderrahman Slaoui à Casablanca, après avoir été présentée du 10 juin au 15 septembre à la Bibliothèque...",
    href: '/collections-expositions/expositions-temporaires/of-voice-and-stone'
  },
  {
    id: 'orient-fantasme',
    title: 'Exposition Orient Fantasmé',
    image: '/images/expositions-temporaires/orient-fantasme/Exposition-Orient-Fantasme.jpg',
    description: "Orient Fantasmé met en regard affiches orientalistes de la collection du Musée de la Fondation Slaoui et œuvres des artistes contemporaines Héla Ammar, Meriem Bouderbala, Yasmina Bouziane et Lalla Essaydi. En imaginant un dialogue entre affiches d'époque coloniale et création contemporaine, l'exposition dessine une analyse des codes de représentation utilisés dans la construction par l'image d'un certain Orient.",
    href: '/collections-expositions/expositions-temporaires/orient-fantasme'
  },
  {
    id: 'casa-drawing',
    title: 'Casa Drawing #2 - Du 11 octobre au 31 décembre 2017',
    image: '/images/expositions-temporaires/casa-drawing/Casa_Drawing_2_visuel_1.jpg',
    description: "Le dessin comme prétexte La place accordée au dessin dans le champ de l'art contemporain international et sa popularité grandissante sur le marché de l'art, notamment grâce à la multiplication de salons et de foires dédiés à cette discipline, nous pousse à croire que le dessin mérite toute sa place dans le paysage culturel marocain. Forts de cette convicti...",
    href: '/collections-expositions/expositions-temporaires/casa-drawing'
  },
  {
    id: 'noise-on-paper',
    title: 'Expositions NOISE ON PAPER et DRUNKEN MASTERS - Du 9 mai 2017',
    image: '/images/expositions-temporaires/noise-on-paper/photo_rognee.jpg',
    description: "Les deux expositions Noise on paper et Drunken Masters réunissent au Musée de la Fondation Abderrahman Slaoui deux artistes emblématiques de la scène expérimentale et contemporaine de Beyrouth : Hatem Imam et Mazen Kerbaj. Tenant pour l'une de l'exposition d'archives, pour l'autre du cabinet de curiosités, elles ont été pensées p...",
    href: '/collections-expositions/expositions-temporaires/noise-on-paper'
  },
  {
    id: 'nilwood-melody',
    title: 'Exposition NILWOOD MELODY - Qu\'avons-nous fait de nos rêves...',
    image: '/images/expositions-temporaires/nilwood-melody/cover.jpg',
    description: "Le Musée de la Fondation Abderrahman Slaoui vous invite à explorer la mémoire d'un temps fort du 7èmeart que fut l'« âge d'or » du cinéma égyptien, à travers les travaux de six artistes contemporains : Mariam Abouzid Souali (Maroc), Zoulikha Bouabdellah (Algérie-France), Nabil Boutros (Egypte), Mouna Jemal Siala (Tunisie), Khalil Nemmao...",
    href: '/collections-expositions/expositions-temporaires/nilwood-melody'
  },
  {
    id: 'hicham-benohoud',
    title: 'Exposition HICHAM BENOHOUD: 25 ANS DE PHOTOGRAPHIE',
    image: '/images/expositions-temporaires/hicham-benohoud/cover.jpg',
    description: "Les photographies d'Hicham Benohoud ne cessent d'interroger sur l'identité. La sienne bien sûr, mais dans un processus de création plus large que la seule expérience du récit autobiographique, son travail questionne aussi l'identité de ceux qui l'entourent.La prédestination sociale comme source d'enfermement, mise en scène dans des situatio...",
    href: '/collections-expositions/expositions-temporaires/hicham-benohoud'
  },
  {
    id: 'affiches-orientalistes',
    title: 'Exposition d\'affiches orientalistes - VOYAGES ET DECOUVERTES',
    image: '/images/expositions-temporaires/affiches-orientalistes/cover.jpg',
    description: "A l'occasion des Journées du Patrimoine, le Musée de la Fondation Abderrahman Slaoui présente l'exposition d'affiches anciennes et orientalistes sur le thème: Voyages et découvertes \"Les premières affiches orientalistes sont touristiques et datent du début des années 1890, quand le réseau P.L.M (Paris, Lyon, Méditerranée), prolongé par l...",
    href: '/collections-expositions/expositions-temporaires/affiches-orientalistes'
  },
  {
    id: 'hicham-gardaf',
    title: 'EXCURSION - exposition photographique de HICHAM GARDAF',
    image: '/images/expositions-temporaires/hicham-gardaf/cover.jpg',
    description: "En partenariat avec l'Institut français de Casablanca, le Musée de la Fondation Abderrahman Slaoui présente la première exposition monographique d'Hicham Gardaf au Maroc. Après avoir été montrée à l'Institut français de Rabat, puis à la Galerie 127 à Marrakech, les œuvres du photographe arrive enfin à Casablanca. \"Hicham Garda...",
    href: '/collections-expositions/expositions-temporaires/hicham-gardaf'
  },
  {
    id: 'mil-caras',
    title: 'Mil Caras',
    image: '/images/expositions-temporaires/mil-caras/cover.jpg',
    description: "Le Musée de la Fondation Abderrahman Slaoui accueille du 29 mai au 29 juillet 2014, une nouvelle exposition : Mil Caras Avec la participation de : Amina Benbouchta, Zoulikha Bouabdellah, Clara Carvajal, Safaa Erruas, María Gimeno et Marina Vargas. Mil Caras est un projet promu par l'Agence espagnole de coopération internationale pour le développement (AECID), en collaboration avec l'Ambassade d&rsquo...",
    href: '/collections-expositions/expositions-temporaires/mil-caras'
  },
  {
    id: 'poesie',
    title: 'Quand la poésie sort des murs des lycées pour s\'écrire sur ...',
    image: '/images/expositions-temporaires/poesie/cover.jpg',
    description: "12e Journée des Francophonies A l'occasion des Francophonies, le musée de la Fondation Slaoui accueillera les oeuvres des étudiants ayant été sélectionnés lors du Concours. Le thème est lancé, il s'agira cette année de célébrer les mots voyageurs et à travers eux les rapports étroits qu'entretiennent la langue franç...",
    href: '/collections-expositions/expositions-temporaires/poesie'
  }
];

const ExpositionsTemporairesPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-bodoni text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight uppercase">
              Expositions temporaires
            </h1>
            <div className="w-24 h-[2px] bg-[#bfa76a] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-white/80">
              Une fenêtre sur l'art et l'histoire
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Introduction Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <p className="text-gray-800 text-xl leading-relaxed max-w-3xl mx-auto text-center font-light">
                Découvrez les expositions temporaires passées et actuelles du Musée de la Fondation Abderrahman Slaoui. Notre programme d'expositions met en valeur des artistes contemporains et des thématiques variées en dialogue avec notre collection permanente.
              </p>
            </motion.div>

            {/* Exhibitions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
              {exhibitionItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="flex flex-col h-full"
                >
                  <div className="group flex flex-col h-full">
                    {/* Title on top */}
                    <Link href={item.href} className="block text-center">
                      <h2 className="font-bodoni text-2xl md:text-3xl lg:text-4xl text-gray-900 group-hover:text-[#bfa76a] transition-colors duration-300 tracking-wide uppercase mb-2">
                        {item.title}
                      </h2>
                    </Link>
                    <div className="w-16 h-[2px] bg-[#bfa76a] mx-auto mb-6"></div>
                    {/* Image */}
                    <Link href={item.href} className="block overflow-hidden">
                      <motion.div
                        className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-8 shadow-lg"
                        whileHover={{ scale: 1.03, boxShadow: "0 12px 32px 0 rgba(191,167,106,0.15)" }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10"></div>
                      </motion.div>
                    </Link>
                    {/* Description and link */}
                    <div className="space-y-4 flex-1 flex flex-col justify-between">
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg text-center mb-4">
                        {item.description}
                      </p>
                      <div className="flex justify-center">
                        <Link 
                          href={item.href} 
                          className="inline-flex items-center text-[#bfa76a] border-b-2 border-transparent hover:border-[#bfa76a] transition-all duration-300 pb-1 font-semibold tracking-wide group"
                        >
                          <span className="mr-2">Lire la suite</span>
                          <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExpositionsTemporairesPage; 