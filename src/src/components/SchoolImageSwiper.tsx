import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SchoolImageSwiper() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // School images for the background slideshow
  const schoolImages = [
    {
      url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=1080&fit=crop&q=80",
      alt: "School Campus"
    },
    {
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop&q=80",
      alt: "Students in Classroom"
    },
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop&q=80",
      alt: "School Library"
    },
    {
      url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1920&h=1080&fit=crop&q=80",
      alt: "Science Laboratory"
    },
    {
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&h=1080&fit=crop&q=80",
      alt: "Sports Facility"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % schoolImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [schoolImages.length]);

  return (
    <div className="relative w-full h-full">
      {schoolImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ImageWithFallback
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {schoolImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}