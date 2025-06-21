"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageLayout from '../../../../components/PageLayout';
import ReturnButton from '../../../../components/ReturnButton';

const MilCarasPage = () => {
  return (
    <PageLayout title="Mil Caras">
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
            <Image
              src="/images/expositions-temporaires/mil_caras/Mil-Caras.png"
              alt="Mil Caras"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
                  MIL CARAS
                </h1>
                <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-white/90 font-light">
                  Du 29 mai au 29 juillet 2014
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/expositions-temporaires/mil_caras/Mil-Caras.png"
                    alt="Mil Caras"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                <div className="text-lg leading-relaxed space-y-6 text-gray-700">
                  <div className="bg-accent-gold/10 p-6 rounded-lg border-l-4 border-accent-gold">
                    <p className="font-medium text-gray-900 mb-2">Le Musée de la Fondation Abderrahman Slaoui</p>
                    <p className="text-gray-700">
                      accueille du 29 mai au 29 juillet 2014, une nouvelle exposition : <strong>Mil Caras</strong>
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="font-medium text-gray-900 mb-4">Avec la participation de :</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Amina Benbouchta</li>
                      <li>Zoulikha Bouabdellah</li>
                      <li>Clara Carvajal</li>
                      <li>Safâa Erruas</li>
                      <li>María Gimeno</li>
                      <li>Marina Vargas</li>
                    </ul>
                  </div>

                  <p>
                    Mil Caras est un projet promu par l'Agence espagnole de coopération internationale pour le développement (AECID), en collaboration avec l'Ambassade d'Espagne au Maroc et l'Institut Cervantès. Réunissant des artistes marocaines et espagnoles, il entend devenir une plateforme d'échange d'idées et d'expériences et, en définitive, créer une nouvelle passerelle entre deux cultures si proches.
                  </p>

                  <p>
                    Le Musée de la Fondation Abderrahman Slaoui accueille l'exposition Mil Caras du 29 mai au 29 juillet 2014. À cette occasion, les artistes ont spécialement créé des œuvres interagissant avec des objets issus de la collection permanente du musée : une collection privée singulière qui reflète la personnalité de son auteur, Feu Abderrahman Slaoui. Cultivé, amoureux de l'art et mécène, il a su s'entourer tout au long de sa vie d'œuvres d'art précieuses provenant de différentes cultures et époques.
                  </p>

                  <p>
                    L'exposition Mil Caras, revue pour le musée, renvoie à ce jeu de regards qui s'instaure entre deux mondes et deux époques, qui se contemplent et qui se reflètent l'un dans l'autre : moment de rencontre d'où naît la complicité entre les artistes et la collection du musée.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">Objectif du projet</h3>
                    <p className="text-gray-700">
                      Un des objectifs de ce projet est de mettre en évidence le pouvoir de l'art et de la culture comme vecteurs de communication et de compréhension. Rien n'unit davantage qu'un souvenir et une émotion partagée. Cette émotion naît de la contemplation d'une œuvre d'art et de l'admiration ressentie à l'égard du collectionneur et mécène.
                    </p>
                  </div>

                  <p>
                    L'exposition MIL CARAS traite la personnalité individuelle ; elle est un hymne à la liberté et à la singularité de chaque créateur. Toutes les œuvres exposées comportent des aspects autobiographiques reflétant le vécu de chaque artiste.
                  </p>

                  <div className="border-t pt-6">
                    <h3 className="font-bodoni text-2xl text-gray-900 mb-6">Les œuvres</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white p-6 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">Safâa Erruas - Lison</h4>
                        <p className="text-gray-700">
                          Safâa Erruas a créé le dyptique Lison, composé de deux pièces en bois blanc. La présence d'aiguilles et de fils d'aluminium sur la surface vient perturber l'immobilité du blanc : les aiguilles sont plantées dans le bois, blessant la matière qui acquiert ainsi un caractère et une identité. Lison est un mot inventé, une métaphore qui renvoie à des liens, qui évoque ce lieu où tout prend son sens et où tout se remplit.
                        </p>
                      </div>

                      <div className="bg-white p-6 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">Amina Benbouchta - Down in The Rabbit Hole</h4>
                        <p className="text-gray-700">
                          Amina Benbouchta expose quelques photographies de sa série Down in The Rabbit Hole. La femme photographiée par Amina est en équilibre entre son propre intérieur et le monde extérieur, et en quête constante de son véritable moi. En outre, Amina Benboutchta a spécialement créé des dessins lesquels seront exposés pour la première fois dans cette édition de Mil Caras au sein du musée.
                        </p>
                      </div>

                      <div className="bg-white p-6 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">Zoulikha Bouabdellah - Les Chéris</h4>
                        <p className="text-gray-700">
                          Zoulikha Bouabdellah présente l'installation de dessins en papier, Les Chéris. Il nous parle d'amour, des mots de l'amour. Qu'est-ce que l'amour, sinon une émotion partagée... Bouabdellah a subi l'influence de nombreuses cultures : née à Moscou au sein d'une famille algérienne, elle a grandi en France et vit actuellement au Maroc. Ces différentes expériences lui ont appris la tolérance et l'ouverture d'esprit. C'est précisément ce dont elle parle dans sa vidéo Perfection Takes Time, qui nous montre la vie comme un chemin de compréhension et de perfection.
                        </p>
                      </div>

                      <div className="bg-white p-6 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">Clara Carvajal et María Gimeno - Sauce Tomate</h4>
                        <p className="text-gray-700">
                          Clara Carvajal et María Gimeno ont spécialement créé pour Mil Caras une pièce singulière. Leur installation, intitulée Sauce Tomate montre les artistes lors d'une dégustation à l'aveugle de plusieurs sauces tomate, une recette présente dans toutes les cultures mais, toujours différente. En donnant leur avis sur le goût de chacune des sauces, les créatrices nous renvoient à ces jugements que nous portons constamment sur les choses et les personnes qui nous entourent. Nous émettons si souvent un jugement à l'aveuglette. L'installation est complétée par un grand tapis contenant des codes QR.
                        </p>
                      </div>

                      <div className="bg-white p-6 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">Marina Vargas - Anunciación</h4>
                        <p className="text-gray-700">
                          Marina Vargas a spécialement créé pour Mil Caras une installation intitulée Anunciación où elle dresse son autoportrait en position de prière, faisant ainsi allusion au rôle de l'artiste en tant que vecteur de l'énergie créatrice, tel un grand magicien et alchimiste.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 bg-accent-gold/10 p-6 rounded-lg border-l-4 border-accent-gold">
                      <p className="text-gray-700">
                        En complément du travail de ces artistes féminines, <strong>Younes Atbane</strong> interviendra pour nous présenter sa propre vision de Mil Caras grâce à un spectacle spécialement pensé pour cette occasion, et dont la première aura lieu le jour du vernissage de l'exposition au musée de la Fondation Abderrahman Slaoui.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="mt-16 flex justify-end">
                <ReturnButton href="/collections-expositions/expositions-temporaires" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default MilCarasPage; 