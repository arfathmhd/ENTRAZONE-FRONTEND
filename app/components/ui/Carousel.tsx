'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type Slide = {
  src: string;
  alt: string;
};

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      src: "https://res.cloudinary.com/djwvgejge/image/upload/v1751713671/back_to_school_facebook_cover_34_cam99d.jpg",
      alt: "Study abroad education banner"
    },
    {
      src: "https://res.cloudinary.com/djwvgejge/image/upload/v1751713782/Back-To-School-Facebook-Banner-02_mjt9hm.jpg",
      alt: "Digital marketing webinar banner"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full group">
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[38rem] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              fill
              className="object-cover"
              alt={slide.alt}
              priority={index === 0}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />
          </div>
        ))}
      </div>
      
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-current={index === currentSlide}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;