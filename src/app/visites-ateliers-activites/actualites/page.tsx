"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const gold = '#bfa76a';

// Articles data
const articles = [
  {
    id: 'ambassador-us-visit',
    title: 'Ambassador of the United States visit',
    image: '/images/actualites/ambassador-us-visit/WhatsApp_Image_2023-07-25_at_15.50.21_1.jpeg',
    date: '2023',
    excerpt: 'We had the absolute honor to welcome his Excellency the Ambassador of the United States and his wife to the "Abderrahman Slaoui Museum"! During the visit, we had the opportunity to showcase the fascinating exhibits that highlight the life and legacy of Abderrahman Slaoui, a remarkable Moroccan art collector and philanthropist, we also discussed the importance and unique learning experience that museums provide to children.',
    href: '/visites-ateliers-activites/actualites/ambassador-us-visit'
  },
  {
    id: 'memoire-des-cactus',
    title: 'Mémoire des cactus et mystères des cochenilles',
    image: '/images/actualites/cactus/58756870-43296925.jpg',
    date: '30 juin au 30 septembre',
    excerpt: 'Du 30 juin au 30 septembre, l\'Atelier de l\'Observatoire et le Musée de la Fondation Abderrahman Slaoui présentent une exposition saisissante intitulée "Mémoire des Cactus et Mystère des Cochenilles". Sous l\'angle artistique, les visiteurs pourront découvrir l\'effet dévastateur de la cochenille sur le figuier de barbarie.',
    href: '/visites-ateliers-activites/actualites/memoire-des-cactus'
  },
  {
    id: 'tempus-fugit',
    title: 'Tempus Fugit',
    image: '/images/tempus-fugit/Tempus-Fugit_1.jpg',
    date: '2020-2021',
    excerpt: 'L\'exposition "Tempus Fugit" rassemble les travaux de huit photographes marocains réalisés pendant les périodes de confinement et de déconfinement, témoignant ainsi d\'un espace-temps particulier. Chacun des photographes a eu la liberté d\'exprimer sa vision personnelle, offrant des portraits mélancoliques et poétiques, des explorations architecturales, des réorgan…',
    href: '/tempus-fugit'
  },
  {
    id: 'orient-fantasme',
    title: 'Exposition Orient Fantasmé',
    image: '/images/expositions-temporaires/orient-fantasme/Exposition-Orient-Fantasme.jpg',
    date: '2022',
    excerpt: 'Orient Fantasmé met en regard affiches orientalistes de la collection du Musée de la Fondation Slaoui et œuvres des artistes contemporaines Héla Ammar, Meriem Bouderbala, Yasmina Bouziane et Lalla Essaydi. En imaginant un dialogue entre affiches d\'époque coloniale et création contemporaine, l\'exposition dessine une analyse des codes de représentation utilisés dans la construction…',
    href: '/collections-expositions/expositions-temporaires/orient-fantasme'
  },
  {
    id: 'ajammar-second-accrochage',
    title: 'AJAMMAR, second accrochage*, du 17 janvier au 28 février 2018',
    image: '/images/actualites/ajammar/Clair_Obscur2_-_2_8Q863mE.jpg',
    date: '17 janvier au 28 février 2018',
    excerpt: 'Ymane Fakhir, Mohssin Harraki, Caroline Trucco et Khalil El Gherib AJAMMAR est un projet de résidences, de recherche et de création autour de l\'île de Sidi Abderrahman à Casablanca. Située au Sud Ouest de Casablanca, sur un rocher qui défie l\'océan, l\'île de Sidi Abderrahman est réputée pour être le temple des voyants, guérisseurs et sorciers.',
    href: '/visites-ateliers-activites/actualites/ajammar-second-accrochage'
  },
  {
    id: 'conversation-ymane-fakhir',
    title: 'Conversation(s) avec Ymane Fakhir, le jeudi 15 février 2018 à 19h au Musée',
    image: '/images/actualites/ymane-fakhir/4-_Ymane_Fakhir_Portrait_6_Fanida_2014_c_Courtesy_Ymane_Fakhir.jpg.5_h6VTsLG.jpg',
    date: '15 février 2018',
    excerpt: 'A l\'occasion de l\'exposition AJAMMAR, le Musée organise une rencontre avec Ymane Fakhir. L\'artiste nous parlera de la démarche artistique à travers laquelle elle explore les mutations de la société contemporaine marocaine. Elle abordera également le cheminement qui l\'a menée à entreprendre un travail de recherche sur l\'ile de Sidi Abderrahman et les questionnements que cela a éveillé...',
    href: '/visites-ateliers-activites/actualites/conversation-ymane-fakhir'
  },
  {
    id: 'visite-casa-drawing-2',
    title: 'Visite commentée de l\'exposition Casa Drawing #2 par les artistes',
    image: '/images/actualites/casa-drawing2/Casa_Drawing_2_visuel_3.jpg',
    date: '14 Octobre 2017',
    excerpt: 'Le 14 Octobre 2017 à 10h - Une visite exceptionnelle de l\'exposition Casa Drawing #2 en présence des artistes participants. Une occasion unique de découvrir les œuvres et d\'échanger directement avec leurs créateurs sur leurs démarches artistiques et leurs techniques.',
    href: '/visites-ateliers-activites/actualites/visite-casa-drawing-2'
  },
  {
    id: 'vernissage-nilwood-melody',
    title: 'Vernissage NILWOOD MELODY - Qu\'avons-nous fait de nos rêves ?',
    image: '/images/actualites/nilwood/visuel_site_internet_2.jpg',
    date: '15 février 2017',
    excerpt: 'Le Musée de la Fondation Abderrahman Slaoui vous invite à explorer la mémoire d\'un temps fort du 7ème art que fut l\'« âge d\'or » du cinéma égyptien, à travers les travaux de six artistes contemporains : Mariam Abouzid Souali (Maroc), Zoulikha Bouabdellah (Algérie-France), Nabil Boutros (Egypte), Mouna Jemal Siala (Tunisie), Khalil Nemmaoui (Maroc), Ghita Skali (Maroc).',
    href: '/visites-ateliers-activites/actualites/vernissage-nilwood-melody'
  },
  {
    id: 'journees-patrimoine',
    title: 'A la (re)découverte des collections - Journées du Patrimoine de Casablanca',
    image: '/images/actualites/redecouverte/A-la-redecouverte-des-collections.png',
    date: '2 et 3 avril',
    excerpt: 'Journées portes ouvertes Le samedi 2 et le dimanche 3 avril Au Musée de la Fondation Abderrahman Slaoui dans le cadre des Journées du Patrimoine de Casablanca. Au programme : - VISITES COMMENTEES à la (re)découverte des collections. Entre symbolique, comparaison, remise en contexte et petits détails, vous appréhenderez les collections d\'Abderrahman Slaoui différemment.',
    href: '/visites-ateliers-activites/actualites/journees-patrimoine'
  },
  {
    id: 'un-orient-consommation',
    title: 'Un orient de consommation',
    image: '/images/actualites/orient consommation/3.2_Bijoux_1.jpg',
    date: '10 juillet 2012',
    excerpt: 'Nouvelle exposition temporaire Un Orient de Consommation À partir de mardi 10 juillet 2012, le musée de la Fondation Abderrahman Slaoui accueille une nouvelle exposition d\'affiches orientalistes sur le thème de la réclame intitulée : « Un Orient de consommation ». Cette exposition a été conçue d\'après la collection privée de la Fondation Abderrahman Slaoui.',
    href: '/visites-ateliers-activites/actualites/un-orient-consommation'
  },
  {
    id: 'visite-atelier-conference-casa-drawing',
    title: 'Visite, atelier et conférence autour de Casa Drawing',
    image: '/images/actualites/autour-casa-drawing/visuel_general_6_site_internettanya.jpg',
    date: 'Décembre 2016',
    excerpt: 'En partenariat avec Art Initiative, 3 activités proposées autour de l\'exposition de dessin contemporain CASA DRAWING jusqu\'au 10 décembre inclus. Visite commentée par les artistes, atelier de dessin avec Julie Bernet-Rollande et conférence sur la place du dessin dans l\'Histoire de l\'Art.',
    href: '/visites-ateliers-activites/actualites/visite-atelier-conference-casa-drawing'
  },
  {
    id: 'vernissage-casa-drawing',
    title: 'VERNISSAGE CASA DRAWING',
    image: '/images/actualites/autour-casa-drawing/invit_site_internet_1.jpg',
    date: 'Octobre 2016',
    excerpt: 'Première édition de Casa Drawing - 6 artistes marocains et étrangers résidents au Maroc ouvrent la porte de leurs univers graphiques et artistiques. Commissariat : Bechar EL MAHFOUDI et Yassine BALBZIOUI. Vernissage le mercredi 12 octobre à 19h.',
    href: '/visites-ateliers-activites/actualites/vernissage-casa-drawing'
  },
  {
    id: 'bernard-plossu',
    title: '"Maroc et autres sites" Exposition de photographies de Bernard Plossu',
    image: '/images/expositions-temporaires/bernard_plossu/Maroc-et-autres-sites.png',
    date: '2020',
    excerpt: 'Cette exposition présente une sélection d\'une série d\'images réalisées au Maroc en 1975 et pour partie inédites. D\'autres photographies, extraites d\'autres séries de son travail, la complètent et donnent ainsi à voir un ensemble rétrospectif de l\'œuvre de cet artiste. Considéré comme l\'un des plus importants photograph…',
    href: '/collections-expositions/expositions-temporaires/bernard-plossu'
  },
  {
    id: 'anaelle-myriam-chaaib',
    title: 'Anaëlle Myriam Chaaib',
    image: '/images/expositions-temporaires/mryiam_chaaib/AfficheSlaoui_10_1.jpg',
    date: '2023',
    excerpt: 'Le musée de la Fondation Abderrahman Slaoui accueille avec enthousiasme la première exposition de l\'artiste franco-marocaine Anaëlle Myriam Chaaib, qui présente une collection de toiles inspirées de références culturelles marocaines et françaises. À travers l\'illustration, la peinture, le dessin et le film d\'animation, l\'artiste tisse des fabulations et des récit…',
    href: '/collections-expositions/expositions-temporaires/anaelle-myriam-chaaib'
  }
];

const ActualitesPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/actualites/ambassador-us-visit.jpg"
            alt="Actualités du Musée"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto text-center px-4"
          >
            <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
              Actualités
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              Découvrez les dernières nouvelles, événements et expositions du Musée de la Fondation Abderrahman Slaoui
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-premium-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                  className="flex flex-col h-full"
                >
                  {/* Article Image */}
                  <Link href={article.href} className="block group">
                    <div className="overflow-hidden rounded-lg mb-6 aspect-[16/10] relative bg-graphite">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full relative">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                  
                  {/* Article Content */}
                  <div className="flex-grow">
                    {/* Date */}
                    <p className="text-accent-gold text-sm mb-2 font-medium">
                      {article.date}
                    </p>
                    
                    {/* Title */}
                    <h2 className="font-bodoni text-2xl md:text-3xl text-premium-black mb-3 hover:text-accent-gold transition-colors">
                      <Link href={article.href}>
                        {article.title}
                      </Link>
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-graphite mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    {/* Read More Link */}
                    <Link 
                      href={article.href}
                      className="inline-flex items-center text-accent-gold group mt-2"
                    >
                      <span className="mr-2 font-medium">Lire la suite</span>
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ActualitesPage; 