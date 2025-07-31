"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaInstagram, 
  FaFacebookF, 
  FaTripadvisor,
  FaArrowRight,
  FaGlobe
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Logo Section */}
      <div className="container mx-auto px-4 pt-10 pb-6 flex justify-center">
        <Image 
          src="/images/projet-musee/pxjg8psj.png"
          alt="Musée Abderrahman Slaoui Logo"
          width={160}
          height={70}
          className="object-contain"
        />
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* About Column */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bodoni-regular mb-4 uppercase tracking-wide">À Propos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fondation/projet-musee/abderrahman-slaoui-humaniste-eclaire-1919-2001" className="text-soft-white hover:text-accent-gold transition-colors">
                  Abderrahman Slaoui
                </Link>
              </li>
              <li>
                <Link href="/fondation/projet-musee/espace-museographique" className="text-soft-white hover:text-accent-gold transition-colors">
                  Espace muséographique
                </Link>
              </li>
              <li>
                <Link href="/infos-pratiques/horaires-tarifs-acces" className="text-soft-white hover:text-accent-gold transition-colors">
                  Informations pratiques
                </Link>
              </li>
              <li>
                <Link href="/visites-ateliers-activites/privatisation" className="text-soft-white hover:text-accent-gold transition-colors">
                  Privatisations
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections Column */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bodoni-regular mb-4 uppercase tracking-wide">Collections</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/collections-expositions/collections-permanentes/affiches-orientalistes" className="text-soft-white hover:text-accent-gold transition-colors">
                  Affiches orientalistes
                </Link>
              </li>
              <li>
                <Link href="/collections-expositions/collections-permanentes/les-bijoux-marocains" className="text-soft-white hover:text-accent-gold transition-colors">
                  Bijoux marocains
                </Link>
              </li>
              <li>
                <Link href="/collections-expositions/collections-permanentes/la-ceramique-de-fes" className="text-soft-white hover:text-accent-gold transition-colors">
                  Céramique de Fès
                </Link>
              </li>
              <li>
                <Link href="/collections-expositions/expositions-temporaires" className="text-soft-white hover:text-accent-gold transition-colors">
                  Expositions temporaires
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bodoni-regular mb-4 uppercase tracking-wide">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt size={12} className="text-accent-gold" />
                <span className="text-soft-white">
                  12, rue du Parc, Casablanca
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone size={12} className="text-accent-gold" />
                <a href="tel:+212522206217" className="text-soft-white hover:text-accent-gold transition-colors">
                  +212 (0)5 22 20 62 17
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope size={12} className="text-accent-gold" />
                <a href="mailto:fas.musee@gmail.com" className="text-soft-white hover:text-accent-gold transition-colors">
                  fas.musee@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaClock size={12} className="text-accent-gold" />
                <span className="text-soft-white">
                  Mar-Sam, 10h-18h
                </span>
              </li>
            </ul>
          </div>

          {/* Follow Us Column with Map */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bodoni-regular mb-4 uppercase tracking-wide">Suivez-nous</h3>
            <div className="flex space-x-3 mb-4">
              <a 
                href="https://www.instagram.com/musee_slaoui/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-soft-white/30 flex items-center justify-center hover:border-accent-gold transition-colors"
              >
                <FaInstagram size={14} className="text-soft-white hover:text-accent-gold transition-colors" />
              </a>
              <a 
                href="https://www.facebook.com/museeslaoui" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-soft-white/30 flex items-center justify-center hover:border-accent-gold transition-colors"
              >
                <FaFacebookF size={14} className="text-soft-white hover:text-accent-gold transition-colors" />
              </a>
              <a 
                href="https://www.tripadvisor.fr/Attraction_Review-g293732-d3620338-Reviews-Musee_Abderrahman_Slaoui-Casablanca_Casablanca_Settat.html" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="TripAdvisor"
                className="w-8 h-8 rounded-full border border-soft-white/30 flex items-center justify-center hover:border-accent-gold transition-colors"
              >
                <FaTripadvisor size={14} className="text-soft-white hover:text-accent-gold transition-colors" />
              </a>
            </div>
            
            {/* Mini Map */}
            <div className="h-[100px] w-full overflow-hidden rounded border border-soft-white/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2916.726309324278!2d-7.621819000000001!3d33.592067!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2907e1bb68d%3A0x38816f214236c47b!2sMus%C3%A9e%20de%20la%20Fondation%20Abderrahman%20slaoui!5e1!3m2!1sfr!2sus!4v1749773400143!5m2!1sfr!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-soft-white/60 text-xs">
          <div className="mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Fondation Abderrahman Slaoui. Tous droits réservés.
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/site-map" className="hover:text-accent-gold transition-colors">
              Plan du site
            </Link>
            <span>Mentions légales</span>
            <span>Politique de confidentialité</span>
            <span>Crédits</span>
          </div>
          
          {/* Developer Signature */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <a 
              href="https://abdellah-raissouni-2025.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-soft-white/80 hover:text-accent-gold transition-all duration-300"
            >
              <span className="text-base font-semibold tracking-wide">Made by Abdellah Raissouni</span>
              <FaGlobe 
                size={16} 
                className="opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 ease-out" 
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;