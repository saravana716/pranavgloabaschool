import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import im1 from "../assets/pg1.jpg"
import im2 from "../assets/pg2.jpg"
import im3 from "../assets/bg3.jpg"
import im4 from "../assets/bg4.jpg"

export function SchoolImageSwiper() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: im1,
      title: "Our Beautiful Campus",
      subtitle: "A modern learning environment designed for excellence"
    },
    {
      id: 2,
      image: im2,
      title: "State-of-the-Art Library",
      subtitle: "Where knowledge meets innovation"
    },
    {
      id: 3,
      image: im3,
      title: "Active Learning Spaces",
      subtitle: "Fostering creativity and physical development"
    },
    {
      id: 4,
      image: im4,
      title: "Innovation & Discovery",
      subtitle: "Hands-on learning experiences that inspire"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden bg-gray-900">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Image with proper fit */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full"
              style={{ 
                objectFit: 'cover',
                objectPosition: 'center',
                minHeight: '100%',
                minWidth: '100%'
              }}
            />
            
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                {/* Uncomment these if you want to show titles */}
                {/* <h2 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl opacity-90 drop-shadow-md">
                  {slide.subtitle}
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center text-white z-10">
        <div className="w-px h-12 bg-white/50 mb-2" />
        <div className="animate-bounce">
          <ChevronLeft className="h-4 w-4 -rotate-90" />
        </div>
      </div>
    </div>
  );
}