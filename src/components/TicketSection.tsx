"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

interface TicketSectionProps {
  museumName?: string;
  address?: string;
  openingHours?: {
    days?: string;
    hours?: string;
    note?: string;
  };
  tickets?: {
    type: string;
    price: string;
  }[];
  ticketLink?: string;
}

const defaultProps: TicketSectionProps = {
  museumName: "MUSÉE ABDERRAHMAN SLAOUI",
  address: "12 rue du parc, 20070 Casablanca",
  openingHours: {
    days: "Ouvert du mardi au samedi",
    hours: "De 10h à 18h",
    note: "y compris les jours fériés (à l'exception des fêtes de l'Aïd Al Fitr, l'Aïd Al Adha et l'Aïd Al Mawlid)"
  },
  tickets: [
    { type: "Réduit", price: "10 dh" },
    { type: "Plein", price: "60 dh" }
  ],
  ticketLink: "/infos-pratiques/horaires-tarifs-acces"
};

const TicketSection: React.FC<TicketSectionProps> = ({
  museumName = defaultProps.museumName,
  address = defaultProps.address,
  openingHours = defaultProps.openingHours,
  tickets = defaultProps.tickets,
  ticketLink = defaultProps.ticketLink
}) => {
  return (
    <section className="relative py-20 overflow-hidden pb-24" style={{ backgroundColor: '#f6f3ee' }}>
      {/* Complex sophisticated background */}
      <div className="absolute inset-0">
        {/* Base layer with subtle noise */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 25%, rgba(226, 217, 204, 0.3) 25%, rgba(226, 217, 204, 0.3) 50%, transparent 50%, transparent 75%, rgba(226, 217, 204, 0.3) 75%),
              linear-gradient(-45deg, transparent 25%, rgba(238, 230, 219, 0.4) 25%, rgba(238, 230, 219, 0.4) 50%, transparent 50%, transparent 75%, rgba(238, 230, 219, 0.4) 75%)
            `,
            backgroundSize: '60px 60px, 40px 40px',
            backgroundPosition: '0 0, 30px 30px'
          }}
        />
        
        {/* Organic marble-like patterns */}
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 800px 600px at 20% 30%, rgba(218, 207, 192, 0.4) 0%, transparent 60%),
              radial-gradient(ellipse 600px 800px at 80% 70%, rgba(230, 220, 206, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse 400px 300px at 60% 20%, rgba(242, 235, 225, 0.5) 0%, transparent 40%),
              radial-gradient(ellipse 300px 500px at 10% 80%, rgba(225, 214, 199, 0.3) 0%, transparent 45%),
              radial-gradient(ellipse 500px 400px at 90% 10%, rgba(235, 226, 213, 0.2) 0%, transparent 35%)
            `,
            backgroundSize: '1200px 900px, 1000px 1200px, 800px 600px, 600px 1000px, 1000px 800px',
            backgroundPosition: '0 0, 100% 100%, 40% 0, 0 100%, 100% 0'
          }}
        />

        {/* Subtle geometric accents */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(200, 190, 175, 0.3) 2px,
                rgba(200, 190, 175, 0.3) 3px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 120px,
                rgba(210, 200, 185, 0.2) 120px,
                rgba(210, 200, 185, 0.2) 121px
              )
            `
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Museum Info - 4 columns */}
          <div className="lg:col-span-4">
            <h2 className="font-bodoni text-2xl lg:text-3xl font-bold tracking-[0.01em] leading-tight text-gray-900 mb-6">
              {museumName}
            </h2>
            <div className="w-20 h-[1.5px] bg-gray-900 mb-6" />
            <p className="font-bodoni text-lg text-gray-700 leading-relaxed font-light">
              {address}
            </p>
          </div>

          {/* Opening Hours - 4 columns */}
          <div className="lg:col-span-4">
            <h3 className="font-bodoni text-xl lg:text-2xl font-bold tracking-[0.01em] text-gray-900 mb-6 leading-tight">
              HORAIRES D'OUVERTURE
            </h3>
            <div className="w-20 h-[1.5px] bg-gray-900 mb-6" />
            <div className="space-y-4">
              <p className="font-bodoni text-lg text-gray-900 font-medium">
                {openingHours?.days}
              </p>
              <p className="font-bodoni text-lg text-gray-800 font-light">
                {openingHours?.hours}
              </p>
              {openingHours?.note && (
                <p className="font-bodoni text-sm text-gray-600 font-light leading-relaxed pt-2">
                  {openingHours.note}
                </p>
              )}
            </div>
          </div>

          {/* Tickets - 4 columns */}
          <div className="lg:col-span-4 relative">
            <h3 className="font-bodoni text-xl lg:text-2xl font-bold tracking-[0.01em] text-gray-900 mb-6">
              BILLETS
            </h3>
            <div className="w-20 h-[1.5px] bg-gray-900 mb-6" />
            <div className="space-y-4 mb-8">
              {tickets?.map((ticket, index) => (
                <div key={index} className="flex justify-between items-baseline">
                  <span className="font-bodoni text-lg text-gray-800 font-medium">
                    {ticket.type}
                  </span>
                  <span className="font-bodoni text-lg text-gray-900 font-semibold">
                    {ticket.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Absolutely positioned CTA button at bottom right of section */}
        <div className="hidden lg:block">
          <div className="absolute right-8 bottom-8 z-10">
            <Link href={ticketLink || "/infos-pratiques/horaires-tarifs-acces"}>
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group flex items-center space-x-3 cursor-pointer"
              >
                <span className="font-bodoni text-lg lg:text-xl font-bold tracking-[0.02em] text-gray-900 border-b-2 border-gray-900 pb-1">
                  PLUS DE DÉTAILS
                </span>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <FiArrowRight className="text-xl lg:text-2xl text-gray-900" />
                </motion.div>
              </motion.div>
            </Link>
          </div>
        </div>
        {/* For mobile, keep button inline at end of grid */}
        <div className="block lg:hidden mt-8 text-right">
          <Link href={ticketLink || "/infos-pratiques/horaires-tarifs-acces"}>
            <motion.div
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group flex items-center justify-end space-x-3 cursor-pointer"
            >
              <span className="font-bodoni text-lg font-bold tracking-[0.02em] text-gray-900 border-b-2 border-gray-900 pb-1">
                PLUS DE DÉTAILS
              </span>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <FiArrowRight className="text-xl text-gray-900" />
              </motion.div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TicketSection; 