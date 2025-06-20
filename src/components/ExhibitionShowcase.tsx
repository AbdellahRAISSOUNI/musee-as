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
import 'swiper/css/effect-fade';

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
    dateRange: "Janvier 2016",
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
    dateRange: "Avril 2016",
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
    dateRange: "2023",
    link: "/visites-ateliers-activites/rencontres/casablanca-courts-circuits",
    images: [
      {
        src: "/images/visites-ateliers-activites/rencontres/courts-circuits/Invitation_public.png",
        alt: "Casablanca Courts-Circuits"
      }
    ]
  }
];

const ExhibitionShowcase: React.FC<ExhibitionShowcaseProps> = ({
  exhibitions = defaultExhibitions,
  autoPlayDelay = 4000,
  showNavigation = true,
  showPagination = true
}) => {
  const [currentExhibition, setCurrentExhibition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const swiperRef = useRef<SwiperType>();

  const currentExhibitionData = exhibitions[currentExhibition];
  const allImages = exhibitions.flatMap((exhibition) => exhibition.images);

  return (
    <section className="relative h-screen bg-gray-50 overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center h-full"
        >
          {/* Left Content - 60% */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-center h-full py-20">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-xl lg:text-2xl font-bold tracking-[0.15em] text-gray-900 mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                À L'AFFICHE
              </h2>
              <div className="w-24 h-[2px] bg-[#f85c54] mb-8" />
            </motion.div>

            {/* Exhibition Info */}
            <motion.div
              key={currentExhibition}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-6 flex-1 flex flex-col justify-center"
            >
              {/* Subtitle */}
              {currentExhibitionData.subtitle && (
                <p className="font-bodoni text-lg lg:text-xl text-[#f85c54] font-medium tracking-wide">
                  {currentExhibitionData.subtitle}
                </p>
              )}

              {/* Main Title */}
              <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-tight" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                {currentExhibitionData.title}
              </h3>

              {/* Artist */}
              <p className="font-bodoni text-xl lg:text-2xl text-gray-600 font-light">
                {currentExhibitionData.artist}
              </p>

              {/* Date Range */}
              <p className="text-lg text-[#f85c54] font-medium" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                {currentExhibitionData.dateRange}
              </p>

              {/* CTA Link */}
              <div className="pt-6">
                <Link href={currentExhibitionData.link}>
                  <motion.span
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center space-x-3 text-lg font-medium text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-[#f85c54] hover:border-[#f85c54] transition-colors duration-300"
                    style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                  >
                    <span>DÉCOUVRIR</span>
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl"
                    >
                      →
                    </motion.span>
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Carousel - 40% */}
          <div className="lg:col-span-5 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative aspect-[4/5] w-full max-h-[80vh] group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                grabCursor={true}
                allowTouchMove={true}
                touchRatio={1}
                touchAngle={45}
                threshold={5}
                longSwipes={true}
                longSwipesRatio={0.5}
                longSwipesMs={300}
                followFinger={true}
                simulateTouch={true}
                touchMoveStopPropagation={false}
                resistance={true}
                resistanceRatio={0.85}
                speed={800}
                autoplay={{
                  delay: autoPlayDelay,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                  bulletActiveClass: 'swiper-pagination-bullet-active-custom',
                  bulletClass: 'swiper-pagination-bullet-custom'
                }}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom'
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  // Find which exhibition this image belongs to
                  let imageIndex = swiper.activeIndex;
                  let exhibitionIndex = 0;
                  let currentCount = 0;
                  
                  for (let i = 0; i < exhibitions.length; i++) {
                    currentCount += exhibitions[i].images.length;
                    if (imageIndex < currentCount) {
                      exhibitionIndex = i;
                      break;
                    }
                  }
                  
                  setCurrentExhibition(exhibitionIndex);
                }}
                className="w-full h-full"
              >
                {allImages.map((image, index) => {
                  // Find which exhibition this image belongs to
                  let currentIndex = 0;
                  let exhibitionIndex = 0;
                  for (let i = 0; i < exhibitions.length; i++) {
                    if (index < currentIndex + exhibitions[i].images.length) {
                      exhibitionIndex = i;
                      break;
                    }
                    currentIndex += exhibitions[i].images.length;
                  }
                  
                  return (
                    <SwiperSlide key={index}>
                      <Link href={exhibitions[exhibitionIndex]?.link || '#'}>
                        <div className="relative w-full h-full group cursor-grab active:cursor-grabbing">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 40vw"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#f85c54]/30 transition-colors duration-300" />
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {/* Custom Navigation */}
              {showNavigation && (
                <>
                  <button
                    className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white hover:shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{ backdropFilter: 'blur(8px)' }}
                  >
                    <span className="text-gray-900 text-xl font-bold">‹</span>
                  </button>
                  <button
                    className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white hover:shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{ backdropFilter: 'blur(8px)' }}
                  >
                    <span className="text-gray-900 text-xl font-bold">›</span>
                  </button>
                </>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: rgba(248, 92, 84, 0.3);
          border-radius: 50%;
          opacity: 1;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: #f85c54;
          transform: scale(1.2);
        }
        
        .swiper-pagination {
          bottom: 20px !important;
        }

        .swiper-slide {
          user-select: none;
        }

        .swiper {
          touch-action: pan-y;
        }
      `}</style>
    </section>
  );
};

export default ExhibitionShowcase; 