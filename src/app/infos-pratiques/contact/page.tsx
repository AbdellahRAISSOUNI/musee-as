"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaInstagram, 
  FaFacebookF, 
  FaTripadvisor,
  FaPaperPlane
} from 'react-icons/fa';

const gold = '#bfa76a';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const emailBody = `
Nom: ${formData.name}
Email: ${formData.email}
Sujet: ${formData.subject}

Message:
${formData.message}
    `.trim();
    
    const mailtoLink = `mailto:fas.musee@gmail.com?subject=${encodeURIComponent(`Contact - ${formData.subject}`)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center bg-black mt-16 md:mt-20">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/projet-musee/espace-museographique/espace_3.jpg"
            alt="Contact - Musée Abderrahman Slaoui"
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
              Contact
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-xl text-white/90 font-light font-bodoni italic">
              Nous sommes à votre écoute
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column - Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <h2 className="font-bodoni text-3xl mb-10" style={{ color: gold }}>Coordonnées</h2>
                
                <div className="space-y-10">
                  {/* Address */}
                  <div className="flex">
                    <div className="mr-6">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(191, 167, 106, 0.1)' }}>
                        <FaMapMarkerAlt className="text-xl" style={{ color: gold }} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bodoni text-xl mb-2">Adresse</h3>
                      <p className="font-bodoni text-lg text-gray-700">
                        12, rue du Parc, 20 070 Casablanca
                      </p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex">
                    <div className="mr-6">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(191, 167, 106, 0.1)' }}>
                        <FaPhone className="text-xl" style={{ color: gold }} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bodoni text-xl mb-2">Téléphone</h3>
                      <p className="font-bodoni text-lg text-gray-700">
                        <a href="tel:+212522206217" className="hover:text-[#bfa76a] transition-colors duration-300">
                          +212 (0)5 22 20 62 17
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex">
                    <div className="mr-6">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(191, 167, 106, 0.1)' }}>
                        <FaEnvelope className="text-xl" style={{ color: gold }} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bodoni text-xl mb-2">Courriel</h3>
                      <p className="font-bodoni text-lg text-gray-700">
                        <a href="mailto:fas.musee@gmail.com" className="hover:text-[#bfa76a] transition-colors duration-300">
                          fas.musee@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div className="flex">
                    <div className="mr-6">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(191, 167, 106, 0.1)' }}>
                        <FaClock className="text-xl" style={{ color: gold }} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bodoni text-xl mb-2">Horaire</h3>
                      <p className="font-bodoni text-lg text-gray-700">
                        Du mardi au samedi de 10h à 18h
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-12">
                  <h3 className="font-bodoni text-xl mb-6">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/musee_slaoui/?utm_source=ig_profile_share" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: 'rgba(191, 167, 106, 0.1)' }}
                    >
                      <FaInstagram className="text-xl transition-colors duration-300 hover:text-[#bfa76a]" style={{ color: gold }} />
                    </a>
                    <a 
                      href="https://www.facebook.com/museeslaoui#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: 'rgba(191, 167, 106, 0.1)' }}
                    >
                      <FaFacebookF className="text-xl transition-colors duration-300 hover:text-[#bfa76a]" style={{ color: gold }} />
                    </a>
                    <a 
                      href="https://www.tripadvisor.fr/Attraction_Review-g293732-d3620338-Reviews-Musee_Abderrahman_Slaoui-Casablanca_Casablanca_Settat.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: 'rgba(191, 167, 106, 0.1)' }}
                    >
                      <FaTripadvisor className="text-xl transition-colors duration-300 hover:text-[#bfa76a]" style={{ color: gold }} />
                    </a>
                  </div>
                </div>
              </motion.div>
              
              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <h2 className="font-bodoni text-3xl mb-10" style={{ color: gold }}>Envoyez-nous un message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-bodoni text-lg mb-2">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#bfa76a] outline-none transition-colors duration-300 font-bodoni"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-bodoni text-lg mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#bfa76a] outline-none transition-colors duration-300 font-bodoni"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block font-bodoni text-lg mb-2">Sujet</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#bfa76a] outline-none transition-colors duration-300 font-bodoni"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="information">Demande d'information</option>
                      <option value="reservation">Réservation de visite</option>
                      <option value="privatisation">Privatisation d'espace</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-bodoni text-lg mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#bfa76a] outline-none transition-colors duration-300 font-bodoni"
                    ></textarea>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="flex items-center justify-center px-8 py-3 bg-white border-2 border-[#bfa76a] text-[#bfa76a] hover:bg-[#bfa76a] hover:text-white transition-all duration-300 font-bodoni text-lg"
                    >
                      <span className="mr-2">Envoyer</span>
                      <FaPaperPlane className="text-sm" />
                    </button>
                  </div>
                  
                  {formSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-green-50 text-green-800 font-bodoni"
                    >
                      Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>
            
            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="mt-20"
            >
              <div className="border-t border-gray-200 pt-16">
                <h2 className="font-bodoni text-3xl mb-10 text-center" style={{ color: gold }}>Comment nous trouver</h2>
                
                {/* Map with decorative elements */}
                <div className="max-w-3xl mx-auto relative">
                  {/* Decorative corner elements */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2" style={{ borderColor: gold }}></div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2" style={{ borderColor: gold }}></div>
                  <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2" style={{ borderColor: gold }}></div>
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2" style={{ borderColor: gold }}></div>
                  
                  {/* Map container */}
                  <div className="border-2 p-3" style={{ borderColor: 'rgba(191, 167, 106, 0.3)' }}>
                    <div className="h-[350px]">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2916.726309324278!2d-7.621819000000001!3d33.592067!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2907e1bb68d%3A0x38816f214236c47b!2sMus%C3%A9e%20de%20la%20Fondation%20Abderrahman%20slaoui!5e1!3m2!1sfr!2sus!4v1749773400143!5m2!1sfr!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                  
                  {/* Caption */}
                  <p className="text-center font-bodoni text-gray-600 italic mt-4">
                    12, rue du Parc, 20 070 Casablanca, Maroc
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage; 