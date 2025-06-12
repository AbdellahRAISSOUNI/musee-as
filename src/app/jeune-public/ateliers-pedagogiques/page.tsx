"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';

const AteliersPedagogiquesPage = () => {
  // Sample list of workshop offerings
  const ateliers = [
    {
      title: "Initiation à la Peinture",
      ageRange: "6-12 ans",
      duration: "1h30",
      description: "Cet atelier permet aux enfants de s'initier aux techniques de base de la peinture tout en s'inspirant des œuvres du musée.",
      image: "/images/hero-background.jpg"
    },
    {
      title: "Calligraphie Arabe",
      ageRange: "8-14 ans",
      duration: "2h00",
      description: "Découverte de l'art de la calligraphie arabe, de ses différents styles et réalisation d'une composition personnelle.",
      image: "/images/hero-background.jpg"
    },
    {
      title: "Mosaïque Marocaine",
      ageRange: "7-12 ans",
      duration: "2h00",
      description: "Initiation à l'art de la mosaïque traditionnelle marocaine (zellige) et création d'un motif géométrique.",
      image: "/images/hero-background.jpg"
    },
    {
      title: "Contes et Illustrations",
      ageRange: "5-10 ans",
      duration: "1h30",
      description: "À partir d'un conte marocain raconté par notre médiateur, les enfants créent des illustrations inspirées de l'histoire.",
      image: "/images/hero-background.jpg"
    },
    {
      title: "Poterie et Modelage",
      ageRange: "6-12 ans",
      duration: "2h00",
      description: "Manipulation de l'argile et initiation aux techniques de base du modelage pour créer un petit objet décoratif.",
      image: "/images/hero-background.jpg"
    },
    {
      title: "Photographie",
      ageRange: "10-16 ans",
      duration: "2h30",
      description: "Découverte des principes de base de la photographie et réalisation d'un projet photographique dans le musée.",
      image: "/images/hero-background.jpg"
    }
  ];

  return (
    <PageLayout
      title="Ateliers Pédagogiques"
      description="Des ateliers créatifs adaptés aux enfants pour découvrir l'art marocain de manière ludique et éducative."
      parentLink={{ href: "/jeune-public", label: "Retour au Jeune Public" }}
    >
      {/* Introduction Section */}
      <section className="mb-16">
        <div className="relative h-[40vh] overflow-hidden rounded-lg mb-8">
          <Image
            src="/images/hero-background.jpg"
            alt="Ateliers pédagogiques au Musée Abderrahman Slaoui"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl px-6"
            >
              <h2 className="font-bodoni-italic text-3xl md:text-4xl text-premium-white mb-4">
                L'art accessible à tous les enfants
              </h2>
              <p className="text-soft-white text-lg">
                Une programmation diversifiée pour développer la créativité et la sensibilité artistique.
              </p>
            </motion.div>
          </div>
        </div>

        <p className="text-soft-white text-lg mb-8 leading-relaxed">
          Nos ateliers pédagogiques sont conçus pour faire découvrir l'art marocain aux enfants de manière 
          ludique et interactive. Encadrés par des artistes-éducateurs expérimentés, ces ateliers permettent 
          aux enfants de s'initier à différentes techniques artistiques tout en découvrant les collections du musée.
        </p>

        <p className="text-soft-white text-lg leading-relaxed">
          Chaque atelier comprend une visite des œuvres en lien avec la thématique, suivie d'une activité 
          créative où les enfants peuvent s'exprimer et mettre en pratique ce qu'ils ont appris. Tous les 
          matériaux sont fournis et les enfants repartent avec leurs créations.
        </p>
      </section>

      {/* Ateliers Grid */}
      <section className="mb-16">
        <h2 className="font-bodoni-regular text-2xl text-premium-white mb-8">
          Nos ateliers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ateliers.map((atelier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="bg-charcoal rounded-lg overflow-hidden"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={atelier.image}
                  alt={atelier.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-bodoni-regular text-xl text-premium-white mb-3">
                  {atelier.title}
                </h3>
                
                <div className="flex space-x-4 mb-4">
                  <div className="bg-black/30 text-soft-white px-3 py-1 text-sm rounded-sm">
                    {atelier.ageRange}
                  </div>
                  <div className="bg-black/30 text-soft-white px-3 py-1 text-sm rounded-sm">
                    {atelier.duration}
                  </div>
                </div>
                
                <p className="text-soft-white">
                  {atelier.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Practical Information */}
      <section className="bg-charcoal p-8 rounded-lg">
        <h2 className="font-bodoni-regular text-2xl text-premium-white mb-6">
          Informations pratiques
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-accent-gold mb-3">Calendrier et réservations</h3>
            <p className="text-soft-white mb-4">
              Les ateliers ont lieu tous les mercredis après-midi et les samedis toute la journée, 
              ainsi que pendant les vacances scolaires. La réservation est obligatoire et peut se 
              faire par téléphone ou par email au moins 48h à l'avance.
            </p>
            <p className="text-soft-white">
              <span className="font-medium text-premium-white">Téléphone :</span> +212 5 22 xx xx xx<br />
              <span className="font-medium text-premium-white">Email :</span> jeunepublic@musee-as.ma
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-accent-gold mb-3">Tarifs</h3>
            <ul className="text-soft-white space-y-2">
              <li>• Atelier individuel: 80 DH par enfant</li>
              <li>• Forfait 5 ateliers: 350 DH</li>
              <li>• Atelier parents-enfants: 120 DH par duo</li>
              <li>• Groupe scolaire: 60 DH par enfant (min. 10 enfants)</li>
            </ul>
            <p className="text-soft-white mt-4 text-sm italic">
              Réduction de 20% pour les membres de l'Association des Amis du Musée.
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="font-medium text-accent-gold mb-3">À noter</h3>
          <ul className="text-soft-white space-y-2">
            <li>• Les enfants doivent être accompagnés par un adulte responsable (sauf pour les groupes scolaires).</li>
            <li>• Prévoir des vêtements adaptés aux activités artistiques.</li>
            <li>• Des goûters sont offerts pour les ateliers de plus de 2h.</li>
            <li>• Ateliers adaptés pour les enfants à besoins spécifiques (nous contacter).</li>
          </ul>
        </div>
      </section>
    </PageLayout>
  );
};

export default AteliersPedagogiquesPage;

 