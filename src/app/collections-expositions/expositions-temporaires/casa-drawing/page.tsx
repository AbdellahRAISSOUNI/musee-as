"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const CasaDrawingPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        {/* Background Poster with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/expositions-temporaires/casa-drawing/Casa_Drawing_2_visuel_1.jpg"
            alt="Casa Drawing II Poster"
            fill
            className="object-cover opacity-60"
            style={{ objectPosition: 'center 30%' }}
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
              Casa Drawing II
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              Du 11 octobre au 31 décembre 2017
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-center mb-12"
            >
              <h2 className="font-bodoni text-2xl md:text-3xl uppercase tracking-wide mb-2" style={{ color: gold }}>
                Exposition
              </h2>
              <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: gold }} />
              <h3 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                Casa Drawing II
              </h3>
            </motion.div>

            {/* Poster again, centered, not too large */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="mb-10 flex justify-center"
            >
              <div className="relative w-full max-w-xl h-[340px] md:h-[420px]">
                <Image
                  src="/images/expositions-temporaires/casa-drawing/Casa_Drawing_2_visuel_1.jpg"
                  alt="Casa Drawing II Poster"
                  fill
                  className="object-contain"
                  style={{ objectPosition: 'center 30%' }}
                  priority
                />
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="prose prose-lg max-w-none mx-auto text-gray-800 font-light mb-10"
              style={{ fontFamily: 'var(--font-sans, Inter, Arial, sans-serif)' }}
            >
              <p><strong>Le dessin comme prétexte</strong></p>
              <p>
                La place accordée au dessin dans le champ de l'art contemporain international et sa popularité grandissante sur le marché de l'art, notamment grâce à la multiplication de salons et de foires dédiés à cette discipline, nous pousse à croire que le dessin mérite toute sa place dans le paysage culturel marocain. Forts de cette conviction nous avons conçu une manifestation culturelle annuelle dédiée au dessin contemporain qui tend à faire connaître au public marocain la diversité des techniques et des univers graphiques des artistes dessinateurs contemporains. CASA DRAWING est cette manifestation. La première édition de CASA DRAWING a pris place du 12 Octobre au 10 Décembre 2016 au sein du musée de la Fondation Abderrahman Slaoui à Casablanca. Sous la forme d'une exposition, le travail de six artistes marocains ou étrangers résidants au Maroc a été mis en lumière et présenté au public. Pour la seconde édition de CASA DRAWING, qui se tiend du 11 octobre au 31 décembre au musée de la Fondation Abderrahman Slaoui, nous souhaitons élargir le champ des possibles. Cette édition 2017 présentera le travail de deux générations d'artistes. Parmi eux : les marocains Badr El Hammami, Amina Benbouchta, Nafie Ben Krich, Mounat Charrat, Simmohamed Fettaka, Jamila Lamrani, les françaises Catherine Ponçin et Julie Bernet-Rollande, et le tunisien Othmane Taleb. Installations, superpositions, natures mortes détournées… à l'occasion de cette seconde édition, le dessin se fait avant tout prétexte pour interroger sans cesse les contours de sa propre discipline.
              </p>
              <p>
                Un commissariat signé Yassine Balbzioui et Bechar El Mahfoudi.
              </p>
            </motion.div>

            {/* Vernissage and event info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="text-center mt-12 mb-4 space-y-4"
            >
              <div className="inline-block bg-[#fffbe6] border border-[#bfa76a] px-6 py-3 rounded-none font-bodoni text-lg text-gray-900 tracking-wide">
                <span className="font-semibold" style={{ color: gold }}>Vernissage le mercredi 11 octobre 2017 à 19h au Musée de la Fondation Abderrahman Slaoui, 12, rue du Parc, Casablanca.</span>
              </div>
              <div className="inline-block bg-[#f8f8f8] border border-[#bfa76a] px-6 py-3 rounded-none font-bodoni text-base text-gray-900 tracking-wide">
                <span className="font-semibold" style={{ color: gold }}>Visite guidée en présence des artistes le samedi 14 octobre 2017 au musée.</span>
              </div>
              <div className="inline-block bg-[#f8f8f8] border border-[#bfa76a] px-6 py-3 rounded-none font-bodoni text-base text-gray-900 tracking-wide">
                <span className="font-semibold" style={{ color: gold }}>En marge de l'exposition, le dimanche 15 octobre, un atelier animé par Yassine Balbzioui sera organisé à l'uZine, espace culturel de la Fondation Touria et Abdelaziz Tazi, 19, Bd Ibnou Al Abbad, Aïn Sebaâ.</span>
              </div>
            </motion.div>

            <div className="mt-16 flex justify-end">
              <ReturnButton href="/collections-expositions/expositions-temporaires" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CasaDrawingPage; 