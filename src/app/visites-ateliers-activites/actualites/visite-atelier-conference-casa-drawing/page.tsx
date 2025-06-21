"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const VisiteAtelierConferenceCasaDrawingPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black mt-20 md:mt-24">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/actualites/autour-casa-drawing/visuel_general_6_site_internettanya.jpg"
            alt="Visite, atelier et conférence autour de Casa Drawing"
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
              Visite, atelier et conférence autour de Casa Drawing
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-xl text-white/90 font-light font-bodoni italic">
              En partenariat avec Art Initiative
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-12"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Le Musée de la Fondation Abderrahman Slaoui présente, en partenariat avec Art Initiative, l'exposition de dessin contemporain CASA DRAWING jusqu'au 10 décembre inclus. Cette exposition collective d'artistes marocains est destinée à faire connaitre et reconnaitre le dessin comme une discipline artistique à part entière en présentant la diversité des techniques, des styles et des univers des dessinateurs au Maroc.
                </p>

                <div className="my-12 relative h-[500px] overflow-hidden">
                  <Image
                    src="/images/actualites/autour-casa-drawing/visuel_general_6_site_internettanya.jpg"
                    alt="Casa Drawing - Exposition"
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Pour aller plus loin, le Musée propose 3 activités autour de Casa Drawing :
                </p>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  1 – Visite commentée de l'exposition Casa Drawing par les artistes
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  Rencontre autour du dessin contemporain en présence des artistes de l'exposition et de Bechar El Mahfoudi, l'un des commissaires et initiateur du projet Casa Drawing.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  A l'occasion de l'exposition co-organisée par le Musée de la Fondation Abderrahman Slaoui et Art Initiative, quelques artistes feront exceptionnellement une visite commentée des œuvres qu'ils exposent au Musée. Une belle occasion de découvrir leurs univers graphiques et artistiques et d'échanger avec eux sur leurs travaux.
                </p>

                <div className="bg-amber-50 border-l-4 border-accent-gold p-6 mb-8">
                  <p className="mb-2">
                    <strong>Date :</strong> Samedi 12 novembre à 17h
                  </p>
                  <p className="mb-2">
                    <strong>Lieu :</strong> Au Musée de la Fondation Abderrahman Slaoui
                  </p>
                  <p className="text-accent-gold font-medium">
                    Entrée libre
                  </p>
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  2 – Atelier de dessin avec Julie Bernet-Rollande
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Vous êtes à la recherche d'un cours de dessin qui s'adapte à vos besoins et votre niveau tout en proposant des séances vivantes, basées sur l'échange et la bonne humeur, cet atelier de dessin est fait pour vous !
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Niché au cœur du Musée de la Fondation Abderrahman Slaoui, dans une ambiance intimiste et chaleureuse, cadre propice à la créativité, Julie Bernet-Rollande vous accompagnera dans l'apprentissage et le perfectionnement de plusieurs techniques en s'appuyant sur les riches collections du Musée avant de vous guider dans la création d'un projet personnel.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="font-bodoni text-xl mb-4" style={{ color: gold }}>
                    Informations pratiques
                  </h3>
                  <p className="mb-2">
                    <strong>Horaires :</strong> MARDI ou JEUDI de 19h à 20h30
                  </p>
                  <p className="mb-2">
                    <strong>Durée :</strong> du MARDI 22 Novembre au MARDI 21 FEVRIER et du JEUDI 1er décembre au JEUDI 2 mars
                  </p>
                  <p className="mb-2">
                    <strong>Tarif :</strong> 950 dh
                  </p>
                  <p className="mb-2">
                    <strong>Inscription :</strong> Au Musée ou par mail (fas.musee@gmail.com)
                  </p>
                  <p className="mb-2">
                    <strong>Places limitées :</strong> 15 personnes
                  </p>
                  <p className="text-sm text-gray-600">
                    Atelier intergénérationnel ouvert à partir de 12 ans
                  </p>
                </div>

                <h3 className="font-bodoni text-xl mb-4" style={{ color: gold }}>
                  Biographie de Julie Bernet-Rollande
                </h3>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Véritable révélation de l'exposition Casa Drawing, Julie Bernet-Rollande a suivi une formation d'Arts Appliqués à Besançon et Lyon (France), elle a ensuite poursuivi des études d'Arts Plastiques à l'Université d'Aix en Provence (France).
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Installée depuis 2002 à Casablanca, Julie Bernet-Rollande commence à travailler dans l'illustration de livres aux éditions Marsam et la décoration. Enseignante d'arts plastiques dans différents collèges et écoles supérieures de Casablanca et Rabat, elle se consacre en parallèle à son travail personnel.
                </p>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  3 – Conférence « la place du dessin dans l'Histoire de l'Art »
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Si le dessin existe depuis la préhistoire, il a été pendant longtemps assujetti à d'autres disciplines artistiques comme la peinture, la sculpture et l'architecture. Le dessin est alors considéré comme une technique préparatoire (croquis, esquisse et étude) à l'œuvre principale. Il deviendra un art autonome à la fin du XIXème siècle grâce à l'apparition de nouvelles techniques, support et outils.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Bechar El Mahfoudi, l'un des commissaires et initiateur de Casa Drawing ainsi que professeur de dessin et de couleur à Casa Moda Academy reviendra sur la place du dessin dans l'Histoire de l'Art et sur le champ de l'art contemporain au Maroc et à l'international.
                </p>

                <div className="bg-amber-50 border-l-4 border-accent-gold p-6 mb-8">
                  <p className="mb-2">
                    <strong>Date :</strong> Jeudi 8 décembre à 19h
                  </p>
                  <p className="mb-2">
                    <strong>Lieu :</strong> Au Musée de la Fondation Abderrahman Slaoui
                  </p>
                  <p className="text-accent-gold font-medium">
                    Entrée libre
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Return Button at Bottom */}
            <div className="mt-16">
              <ReturnButton href="/visites-ateliers-activites/actualites" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VisiteAtelierConferenceCasaDrawingPage; 