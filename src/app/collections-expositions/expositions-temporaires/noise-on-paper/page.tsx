"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

function boldifyQuotes(text: string): React.ReactNode {
  return text.split(/("[^"]+")/g).map((part, i) =>
    part.startsWith('"') && part.endsWith('"')
      ? <strong key={i} className="font-semibold">{part.replace(/"/g, '')}</strong>
      : part
  );
}

const mainContent: string[] = [
  'Les deux expositions "Noise on paper" et  "Drunken Masters" réunissent au Musée de la Fondation Abderrahman Slaoui deux artistes emblématiques de la scène expérimentale et contemporaine de Beyrouth : "Hatem Imam et Mazen Kerbaj". Tenant pour l\'une de l\'exposition d\'archives, pour l\'autre du cabinet de curiosités, elles ont été pensées par rapport à la collection permanente du Musée, à la fois comme un écho et une distorsion. Toutes deux inédites et mises en scène par Maya Moumne et le Studio Safar de Beyrouth, elles ouvrent sur l\'ensemble de la "programmation de la 5° édition du festival Masnaâ, à l\'intersection du graphisme, de la musique, du dessin et de la bande dessinée. "',
  '"NOISE ON PAPER"',
  '17 years of designing the experimental music scene of Beirut',
  'Le premier festival de musique improvisée à Beyrouth (en version miniature) eut lieu le 13 août 2000 : une affiche en noir et blanc dessinée et conçue par Mazen Kerbaj annonçait les noms de trois musiciens (le sien inclus), marquant le début de ce qui allait devenir le « fameux » festival IRTIJAL. Dix-sept ans, trois labels de musique et une multitude d\'événements plus tard, cette exposition rassemble et présente pour la première fois la production graphique liée à cette scène, pochettes de disques, affiches et autres supports de communication.',
  '"DRUNKEN MASTERS"',
  'The Life and Work of Walter Ego',
  'Hatem Imam et Mazen Kerbaj n\'ont pas choisi de former un collectif. Le travail qu\'ils produisent ensemble depuis 5 ans a littéralement envahi leur vie personnelle et professionnelle. De manière compulsive et fiévreuse, ils ont accumulé un vaste ensemble de dessins, faits à quatre mains et dans les situations les plus diverses, la plupart du temps en état d\'ébriété. La plupart de ces dessins ont été réalisés sur du papier, mais certains sur des supports variés, quand il n\'y avait pas de papier. Ces œuvres, exposées pour la première fois, forment comme une conversation visuelle entre les deux artistes.',
  'Commissariat: Mazen Kerbaj et Hatem Imam',
  'Conception et scénographie : Studio Safar (Maya Moumne et Hatem Imam)',
  '"Mazen Kerbaj" est auteur de bandes dessinés, artiste et musicien. Ses peintures, dessins, vidéos, performances et installations ont été montrés dans de nombreuses expositions solos ou collectives, dans des galeries, des musées ou des foires d\'art dans le monde (Akademie der Künste, Berlin / Beirut Art Center / Abu Dhabi Art Fair / New Museum – NYC / etc.). Il est l\'auteur de plus de 15 livres et ses nouvelles et dessins ont été publiés dans des anthologies, des journaux et des magazines. Il est le co-fondateur du festival de musique Irtijal et a co-fondé en 2005 Al Maslakh, le premier label de musique expérimentale de la région.',
  '"Hatem Imam" est auteur de bandes dessinées et artiste. Il est l\'auteur de livres d\'artiste et de comics et a été exposé dans de nombreux pays dans le monde : Liban, Belgique, Etats-Unis, Japon, France, etc. Il est aussi co-fondateur et directeur artistique de l\'agence Studio Safar (Beyrouth), du label de musique Annihaya Records et co-fondateur du magazine libanais de bande-dessinée Samandal.',
  'Safar Studio est une agence de graphisme et de direction artistique dirigée par Maya Moumne et Hatem Imam à Beyrouth. Safar Studio a notamment conçu l\'exposition Past disquiet. Narratives and Ghosts from the International Art Exhibition in Palestine, 1978, commissionnée par Rasha Salti and Kristine Khouri pour le MACBA (Barcelone, 2015) et la Haus Der Kulturen der Welt (Berlin, 2016).'
];

const vernissageInfo: string[] = [
  '"VERNISSAGE LE MARDI 9 MAI A 19H"',
  '"VISITE COMMENTEE PAR LES ARTISTES, LE DIRECTEUR ARTISTIQUE ET LA SCENOGRAPHE LE SAMEDI 13 MAI A 14H30"'
];

const NoiseOnPaperPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        {/* Background Poster with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/expositions-temporaires/noise-on-paper/photo_rognee.jpg"
            alt="Noise on Paper Poster"
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
              Noise on Paper
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              Expositions temporaires – 9 mai 2017
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
                Noise on Paper & Drunken Masters
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
                  src="/images/expositions-temporaires/noise-on-paper/photo_rognee.jpg"
                  alt="Noise on Paper Poster"
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
              {mainContent.map((para, idx) => (
                <p key={idx}>{boldifyQuotes(para)}</p>
              ))}
            </motion.div>

            {/* Vernissage and event info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="text-center mt-12 mb-4 space-y-4"
            >
              {vernissageInfo.map((info, idx) => (
                <div key={idx} className="inline-block bg-[#fffbe6] border border-[#bfa76a] px-6 py-3 rounded-none font-bodoni text-lg text-gray-900 tracking-wide">
                  <span className="font-semibold" style={{ color: gold }}>{boldifyQuotes(info)}</span>
                </div>
              ))}
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

export default NoiseOnPaperPage; 