"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// Use the same gold color from the contact page
const gold = '#bfa76a';

interface ImageCarouselProps {
  title?: string;
  subtitle?: string;
  images: {
    src: string;
    alt: string;
  }[];
  buttonLink: string;
  buttonText: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  title,
  subtitle,
  images, 
  buttonLink,
  buttonText
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperType>();

  return (
    <section className="py-12 relative" style={{ backgroundColor: '#faf9f7' }}>
      {/* Elegant Top Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-[1px]" style={{ backgroundColor: gold }}></div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          {title && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative inline-block"
            >
              <h2 className="font-bodoni text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900">
                {title}
              </h2>
              <div className="w-24 h-[2px] mx-auto mb-4" style={{ backgroundColor: gold }}></div>
              {subtitle && (
                <p className="text-gray-700 mt-4 max-w-3xl mx-auto font-bodoni text-lg leading-relaxed">
                  {subtitle}
                </p>
              )}
            </motion.div>
          )}
        </div>

        {/* Enhanced Swiper Carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay, FreeMode]}
              spaceBetween={30}
              slidesPerView="auto"
              centeredSlides={false}
              grabCursor={true}
              freeMode={{
                enabled: true,
                sticky: false,
                momentum: true,
                momentumRatio: 0.4,
                momentumVelocityRatio: 0.8,
                momentumBounceRatio: 0.6,
              }}
              speed={500}
              resistance={true}
              resistanceRatio={0.75}
              allowTouchMove={true}
              touchRatio={0.8}
              touchAngle={45}
              threshold={8}
              longSwipes={true}
              longSwipesRatio={0.4}
              followFinger={true}
              simulateTouch={true}
              autoplay={{
                delay: 6000,
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
                nextEl: '.swiper-button-next-carousel',
                prevEl: '.swiper-button-prev-carousel'
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setCurrentIndex(swiper.activeIndex);
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                  spaceBetween: 20
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 25
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 30
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                1280: {
                  slidesPerView: 3.5,
                  spaceBetween: 35
                }
              }}
              className="pb-16"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} className="!w-auto">
                  <motion.div
                    className="relative w-[280px] md:w-[320px] lg:w-[350px] h-[420px] md:h-[480px] lg:h-[520px] group cursor-grab active:cursor-grabbing"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="relative w-full h-full overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-500">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 350px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white text-sm md:text-base font-bodoni opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                          {image.alt}
                        </p>
                      </div>
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-opacity-40 transition-colors duration-300" style={{ borderColor: gold }}></div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
              className="swiper-button-prev-carousel absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/95 hover:bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{ backdropFilter: 'blur(12px)' }}
            >
              <span className="text-gray-900 text-xl font-bold">‹</span>
            </button>
            <button
              className="swiper-button-next-carousel absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/95 hover:bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{ backdropFilter: 'blur(12px)' }}
            >
              <span className="text-gray-900 text-xl font-bold">›</span>
            </button>
          </motion.div>
        </div>

        {/* Enhanced Button */}
        <div className="flex justify-center mt-16">
          <Link href={buttonLink}>
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden px-8 py-4 bg-transparent border-2 text-gray-900 font-bodoni text-lg font-medium transition-all duration-300 hover:text-white group"
              style={{ borderColor: gold }}
            >
              <span className="relative z-10">{buttonText}</span>
              <div 
                className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: gold }}
              ></div>
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Elegant Bottom Separator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-[1px]" style={{ backgroundColor: gold }}></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: rgba(191, 167, 106, 0.3);
          border-radius: 50%;
          opacity: 1;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: #bfa76a;
          transform: scale(1.3);
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

        .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
    </section>
  );
};

export default ImageCarousel; 