"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroVideo: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Set error state immediately since video file is not yet available
    // This will trigger the fallback animation
    setIsVideoError(true);
    setShowImage(true);

    // Check if video element exists after component mounts
    const videoElement = document.getElementById('hero-video') as HTMLVideoElement;
    if (videoElement) {
      videoElement.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
        setIsVideoError(false);
        setShowImage(false);
      });
      videoElement.addEventListener('error', () => {
        setIsVideoError(true);
        setShowImage(true);
      });
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', () => {
          setIsVideoLoaded(true);
          setIsVideoError(false);
          setShowImage(false);
        });
        videoElement.removeEventListener('error', () => {
          setIsVideoError(true);
          setShowImage(true);
        });
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 bg-premium-black">
      {!isVideoError ? (
        <video 
          id="hero-video"
          className={`absolute h-full w-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      ) : null}
      
      {/* Background image */}
      {showImage && !imageError && (
        <div className="absolute inset-0">
          <Image 
            src="/images/hero-background.jpg" 
            alt="Museum background" 
            fill
            priority
            className="object-cover brightness-75"
            sizes="100vw"
            onError={() => setImageError(true)}
          />
        </div>
      )}
      
      {/* Fallback gradient if both video and image fail */}
      {(isVideoError && imageError) && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-graphite to-charcoal bg-200% animate-gradient-shift"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-1 bg-accent-gold/30 rounded-full animate-pulse-slow"></div>
          </div>
        </div>
      )}
      
      {/* Enhanced dark overlay for better text readability - always visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-premium-black/80 via-premium-black/60 to-premium-black/80"></div>
      
      {/* Additional dark overlay */}
      <div className="absolute inset-0 bg-premium-black/40"></div>
    </div>
  );
};

export default HeroVideo; 