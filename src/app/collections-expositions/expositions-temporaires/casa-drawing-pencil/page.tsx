"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const CasaDrawingPencilPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/expositions-temporaires/casa_drawing_pencil/Said_afifi_dessin.jpg"
            alt="Casa Drawing Exhibition"
            fill
            className="object-cover object-center opacity-60"
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
              Casa Drawing
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              exposition de dessins contemporains
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
                Première édition
              </h2>
              <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: gold }} />
              <h3 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                Le dessin contemporain au Maroc
              </h3>
            </motion.div>

            {/* Exhibition Image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="mb-8 flex justify-center"
            >
              <div className="relative w-full max-w-2xl">
                <Image
                  src="/images/expositions-temporaires/casa_drawing_pencil/Said_afifi_dessin.jpg"
                  alt="Casa Drawing Pencil Exhibition"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
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
              <p>
                Si le dessin existe depuis la préhistoire, il a été pendant longtemps assujetti à d'autres disciplines artistiques comme la peinture, la sculpture et l'architecture. Le dessin est alors considéré comme une technique préparatoire (croquis, esquisse et étude) à l'œuvre principale. Il deviendra un art autonome à la fin du XIXème siècle grâce à l'apparition de nouvelles techniques, supports et outils.
              </p>
              <p>
                La place accordée au dessin sur le champ de l'art contemporain international et sa popularité sont grandissantes notamment grâce à la multiplication de salons et de foires dédiés à cette discipline. Le dessin mérite toute sa place dans le paysage artistique et CASA DRAWING tend à faire connaître au public la diversité des techniques et de ses artistes au Maroc.
              </p>
              <p>
                Pour cette première édition de CASA DRAWING, 6 artistes marocains et étrangers résidents au Maroc ouvrent la porte de leurs univers graphiques et artistiques : <strong>Amina Benbouchta</strong>, <strong>Julie Bernet-Rollande</strong>, <strong>Badr El Hammami</strong>, <strong>Said Afifi</strong>, <strong>Simohammed Fettaka</strong>, et <strong>Yassine Balbzioui</strong>.
              </p>
              <div className="mt-8 p-6 border-l-4 border-current" style={{ borderColor: gold, backgroundColor: '#fffbe6' }}>
                <p className="text-sm" style={{ color: gold }}>
                  <strong>Exposition organisée par</strong> le Musée de la Fondation Abderrahman Slaoui et Moroccan Contemporary Art Initiative<br/>
                  <strong>Commissariat :</strong> BECHAR EL MAHFOUDI et YASSINE BALBZIOUI<br/>
                  <strong>Vernissage</strong> le 12 octobre à 19h
                </p>
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

export default CasaDrawingPencilPage; 