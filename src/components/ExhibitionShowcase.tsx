"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface ExhibitionImage {
  src: string;
  alt: string;
}

interface Exhibition {
  id: string;
  title: string;
  subtitle?: string;
  artist: string;
  dateRange: string;
  link: string;
  images: ExhibitionImage[];
  featured?: boolean;
}

interface ExhibitionShowcaseProps {
  exhibitions?: Exhibition[];
  autoPlayDelay?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
}

const defaultExhibitions: Exhibition[] = [
  {
    id: "nostalgie-du-futur",
    title: "NOSTALGIE DU FUTUR",
    subtitle: "TCHAT PHOTO",
    artist: "Hicham Gardaf & Marie Moignard",
    dateRange: "6.20.25 — 9.14.25",
    link: "/visites-ateliers-activites/rencontres/nostalgie-du-futur",
    images: [
      {
        src: "/images/visites-ateliers-activites/rencontres/nostalgie/TCHAT-PHOTO-Nostalgie-du-futur.png",
        alt: "Nostalgie du futur - Hicham Gardaf"
      },
      {
        src: "/images/visites-ateliers-activites/rencontres/nostalgie/WhatsApp_Image_2023-07-25_at_15.50.21_1.jpeg",
        alt: "Nostalgie du futur - Détails"
      }
    ],
    featured: true
  },
  {
    id: "hicham-benohoud",
    title: "HICHAM BENOHOUD",
    subtitle: "25 ANS DE RÉFLEXION",
    artist: "Hicham Benohoud",
    dateRange: "4.15.25 — 7.20.25",
    link: "/visites-ateliers-activites/rencontres/hicham-benohoud",
    images: [
      {
        src: "/images/visites-ateliers-activites/rencontres/hicham-benohoud/TCHAT-PHOTO-Hicham-Benohoud-25-ans-de-reflexion.png",
        alt: "Hicham Benohoud - 25 ans de réflexion"
      }
    ]
  },
  {
    id: "courts-circuits",
    title: "COURTS-CIRCUITS",
    subtitle: "CASABLANCA",
    artist: "Rencontre Culturelle",
    dateRange: "2.10.25 — 5.30.25",
    link: "/visites-ateliers-activites/rencontres/casablanca-courts-circuits",
    images: [
      {
        src: "/images/visites-ateliers-activites/rencontres/courts-circuits/Invitation_public.png",
        alt: "Casablanca Courts-Circuits"
      }
    ]
  },
  {
    id: "spiritualite-islam",
    title: "SPIRITUALITÉ EN ISLAM",
    subtitle: "CONFÉRENCE",
    artist: "Éric Geoffroy",
    dateRange: "1.15.25 — 4.10.25",
    link: "/visites-ateliers-activites/rencontres/spiritualite-en-islam",
    images: [
      {
        src: "/images/visites-ateliers-activites/rencontres/islam/visuel_conf_FB_1.jpg",
        alt: "Spiritualité en Islam - Éric Geoffroy"
      }
    ]
  }
];

const ExhibitionShowcase: React.FC<ExhibitionShowcaseProps> = ({
  exhibitions = defaultExhibitions,
  autoPlayDelay = 5000,
  showNavigation = true,
  showPagination = true
}) => {
  const [currentExhibition, setCurrentExhibition] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const currentExhibitionData = exhibitions[currentExhibition];

  return (
    <section className="bg-white py-3 md:py-4 lg:py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-stretch">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-5 lg:pr-8">
            
            {/* ON SHOW Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-[#B8860B] font-medium text-sm md:text-base tracking-[0.2em] uppercase">
                  À L'AFFICHE
                </span>
                <div className="ml-4 flex-1 h-[1px] bg-[#B8860B]"></div>
              </div>
            </motion.div>

            {/* Exhibition Title */}
            <motion.div
              key={currentExhibition}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-4 md:space-y-6"
            >
              <h2 className="font-light text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-black tracking-tight">
                {currentExhibitionData.title}
              </h2>
              
              <p className="text-gray-600 text-lg md:text-xl lg:text-2xl font-light italic">
                {currentExhibitionData.artist}
              </p>
            </motion.div>

            {/* Date Range */}
            <motion.div
              key={`date-${currentExhibition}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="text-[#B8860B] text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
                {currentExhibitionData.dateRange}
              </div>
              
              {/* Learn More Link */}
              <Link 
                href={currentExhibitionData.link}
                className="inline-block group"
              >
                <div className="flex items-center space-x-2 text-black hover:text-[#B8860B] transition-colors duration-300">
                  <span className="text-base md:text-lg font-medium">EN SAVOIR PLUS</span>
                  <div className="w-8 h-[1px] bg-black group-hover:bg-[#B8860B] transition-colors duration-300"></div>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right Images Carousel */}
          <div className="relative h-[300px] md:h-[350px] lg:h-[400px] group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full h-full"
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides={true}
                grabCursor={true}
                allowTouchMove={true}
                speed={800}
                loop={true}
                autoplay={{
                  delay: autoPlayDelay,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                pagination={{
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet-custom',
                  bulletActiveClass: 'swiper-pagination-bullet-active-custom'
                }}
                navigation={{
                  nextEl: '.swiper-button-next-exhibition',
                  prevEl: '.swiper-button-prev-exhibition'
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setCurrentExhibition(swiper.realIndex);
                }}
                className="w-full h-full rounded-lg overflow-hidden shadow-2xl"
              >
                {exhibitions.map((exhibition, index) => (
                  <SwiperSlide key={exhibition.id} className="w-full h-full">
                    <div className="relative w-full h-full bg-gray-100">
                      <Image
                        src={exhibition.images[0]?.src || '/images/placeholder.jpg'}
                        alt={exhibition.images[0]?.alt || exhibition.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      
                      {/* Optional subtitle overlay */}
                      {exhibition.subtitle && (
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded">
                            <p className="text-sm md:text-base font-medium">
                              {exhibition.subtitle}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              {showNavigation && (
                <>
                  <button className="swiper-button-prev-exhibition absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="swiper-button-next-exhibition absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Pagination Dots */}
              {showPagination && exhibitions.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex space-x-2">
                    {exhibitions.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => swiperRef.current?.slideTo(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentExhibition === index 
                            ? 'bg-[#B8860B] scale-125' 
                            : 'bg-white/60 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet-custom {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          opacity: 1;
          margin: 0 4px !important;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: #B8860B;
          transform: scale(1.25);
        }
        
        .swiper-pagination {
          bottom: 16px !important;
        }
      `}</style>
    </section>
  );
};

export default ExhibitionShowcase; 