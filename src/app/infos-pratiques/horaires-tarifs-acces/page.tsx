"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaAccessibleIcon, FaRegQuestionCircle } from 'react-icons/fa';
import PageLayout from '@/components/PageLayout';

const HorairesTarifsAccesPage = () => {
  return (
    <PageLayout
      title="Horaires, Tarifs et Accès"
      description="Toutes les informations pratiques pour préparer votre visite au Musée Abderrahman Slaoui."
      parentLink={{ href: "/infos-pratiques", label: "Retour aux Infos Pratiques" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column - Information */}
        <div>
          {/* Horaires section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center mb-4">
              <FaClock className="text-accent-gold text-2xl mr-3" />
              <h2 className="font-bodoni-regular text-2xl text-premium-white">Horaires d'ouverture</h2>
            </div>
            
            <div className="bg-charcoal p-6 rounded-lg">
              <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-graphite/50">
                <div className="font-medium text-soft-white">Mardi - Dimanche</div>
                <div className="text-premium-white">10h00 - 18h00</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-graphite/50">
                <div className="font-medium text-soft-white">Lundi</div>
                <div className="text-premium-white">Fermé</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="font-medium text-soft-white">Jours fériés</div>
                <div className="text-premium-white">Fermé (sauf exception)</div>
              </div>
              
              <div className="mt-4 text-sm text-soft-white italic">
                Le musée peut être fermé exceptionnellement pour des événements privés. Consultez notre site avant votre visite.
              </div>
            </div>
          </motion.div>
          
          {/* Tarifs section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center mb-4">
              <FaTicketAlt className="text-accent-gold text-2xl mr-3" />
              <h2 className="font-bodoni-regular text-2xl text-premium-white">Tarifs</h2>
            </div>
            
            <div className="bg-charcoal p-6 rounded-lg">
              <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-graphite/50">
                <div className="font-medium text-soft-white">Plein tarif</div>
                <div className="text-premium-white">50 DH</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-graphite/50">
                <div className="font-medium text-soft-white">Étudiants & Seniors</div>
                <div className="text-premium-white">30 DH (sur présentation d'un justificatif)</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-graphite/50">
                <div className="font-medium text-soft-white">Enfants (moins de 12 ans)</div>
                <div className="text-premium-white">Gratuit</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="font-medium text-soft-white">Groupes (10+)</div>
                <div className="text-premium-white">40 DH par personne (sur réservation)</div>
              </div>
            </div>
          </motion.div>
          
          {/* FAQ section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center mb-4">
              <FaRegQuestionCircle className="text-accent-gold text-2xl mr-3" />
              <h2 className="font-bodoni-regular text-2xl text-premium-white">Questions fréquentes</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-charcoal p-4 rounded-lg">
                <h3 className="font-medium text-accent-gold mb-2">Peut-on prendre des photos dans le musée ?</h3>
                <p className="text-soft-white">La photographie sans flash est autorisée dans les espaces d'exposition permanente. La photographie est interdite dans les expositions temporaires, sauf indication contraire.</p>
              </div>
              
              <div className="bg-charcoal p-4 rounded-lg">
                <h3 className="font-medium text-accent-gold mb-2">Y a-t-il une consigne pour les bagages ?</h3>
                <p className="text-soft-white">Des casiers sont disponibles à l'entrée du musée pour les petits bagages. Les grands sacs et valises ne sont pas acceptés dans le musée.</p>
              </div>
              
              <div className="bg-charcoal p-4 rounded-lg">
                <h3 className="font-medium text-accent-gold mb-2">Faut-il réserver à l'avance ?</h3>
                <p className="text-soft-white">La réservation n'est pas obligatoire pour les visites individuelles, mais fortement recommandée pour les groupes et les visites guidées.</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Right column - Map and accessibility */}
        <div>
          {/* Map section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-accent-gold text-2xl mr-3" />
              <h2 className="font-bodoni-regular text-2xl text-premium-white">Accès et localisation</h2>
            </div>
            
            <div className="bg-charcoal p-6 rounded-lg">
              <div className="aspect-[4/3] relative mb-6 overflow-hidden rounded">
                {/* Map placeholder - In production, replace with an actual map */}
                <div className="absolute inset-0 bg-graphite flex items-center justify-center text-soft-white">
                  Carte interactive
                </div>
              </div>
              
              <h3 className="font-medium text-accent-gold mb-2">Adresse</h3>
              <p className="text-soft-white mb-4">
                Musée Abderrahman Slaoui<br />
                12, rue du Caire<br />
                Quartier Racine<br />
                Casablanca, Maroc
              </p>
              
              <h3 className="font-medium text-accent-gold mb-2">Transport</h3>
              <ul className="text-soft-white mb-4 space-y-2">
                <li>
                  <span className="font-medium text-premium-white">Tramway:</span> Ligne 1, station "Place des Nations Unies" (10 min à pied)
                </li>
                <li>
                  <span className="font-medium text-premium-white">Bus:</span> Lignes 20, 30, 32 - Arrêt "Racine" (2 min à pied)
                </li>
                <li>
                  <span className="font-medium text-premium-white">Parking:</span> Parking souterrain à 200m du musée (payant)
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Accessibility section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center mb-4">
              <FaAccessibleIcon className="text-accent-gold text-2xl mr-3" />
              <h2 className="font-bodoni-regular text-2xl text-premium-white">Accessibilité</h2>
            </div>
            
            <div className="bg-charcoal p-6 rounded-lg">
              <p className="text-soft-white mb-4">
                Le Musée Abderrahman Slaoui s'engage à être accessible à tous les visiteurs.
              </p>
              
              <ul className="text-soft-white space-y-2 mb-4">
                <li>• Entrée accessible aux personnes à mobilité réduite</li>
                <li>• Ascenseur desservant tous les étages</li>
                <li>• Toilettes accessibles</li>
                <li>• Chiens-guides autorisés</li>
                <li>• Dispositifs d'aide à la visite disponibles sur demande</li>
              </ul>
              
              <p className="text-soft-white text-sm italic">
                Pour toute demande spécifique d'accessibilité, veuillez nous contacter au moins 48h avant votre visite.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HorairesTarifsAccesPage; 