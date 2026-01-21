import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { fetchGalleryImages, type GalleryImage } from '../utils/galleryService';
import { toast } from 'sonner';

export function RecentClicksSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch gallery images from Firebase on component mount
  useEffect(() => {
    const loadGalleryImages = async () => {
      try {
        setIsLoading(true);
        const galleryImages = await fetchGalleryImages();
        // Sort by createdAt (most recent first) - images are already sorted by galleryService
        setImages(galleryImages);
      } catch (error) {
        console.error('Error loading gallery images:', error);
        toast.error('Failed to load gallery images. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadGalleryImages();
  }, []);

  const cardsPerView = 4;
  const totalSets = images.length > 0 ? Math.ceil(images.length / cardsPerView) : 0;

  // Auto-scroll continuously through all sets
  useEffect(() => {
    if (images.length === 0 || totalSets <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextIndex = prev + 1;
        // If we've shown all sets, loop back to start
        if (nextIndex >= totalSets) {
          return 0;
        }
        return nextIndex;
      });
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(timer);
  }, [images.length, totalSets]);

  const nextSlide = () => {
    if (images.length === 0 || totalSets <= 1) return;
    setCurrentSlide((prev) => (prev + 1) % totalSets);
  };

  const prevSlide = () => {
    if (images.length === 0 || totalSets <= 1) return;
    setCurrentSlide((prev) => (prev - 1 + totalSets) % totalSets);
  };

  const getCardColor = (index: number) => {
    const colors = [
      'before:bg-gradient-to-t before:from-primary/80 before:to-transparent',
      'before:bg-gradient-to-t before:from-secondary/80 before:to-transparent',
      'before:bg-gradient-to-t before:from-destructive/80 before:to-transparent',
      'before:bg-gradient-to-t before:from-accent/80 before:to-transparent'
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Recent Clicks
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Capturing memorable moments and vibrant life at Pranav Global School 
              through our lens.
            </p>
          </div>
          
          {/* Navigation Controls */}
          {images.length > 0 && (
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={prevSlide}
                disabled={isLoading || images.length === 0}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-secondary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous images"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                disabled={isLoading || images.length === 0}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-secondary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next images"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        {/* Image Slider */}
        <div className="relative overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-secondary" />
              <span className="ml-3 text-muted-foreground">Loading gallery images...</span>
            </div>
          ) : images.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No gallery images available.</p>
            </div>
          ) : (
            <>
              {/* Desktop View - Rotating gallery showing all items, 4 at a time */}
              <div className="hidden md:block overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {/* Group images into sets of 4, each set takes full width */}
                  {Array.from({ length: Math.ceil(images.length / 4) }).map((_, setIndex) => (
                    <div key={setIndex} className="w-full flex-shrink-0 flex gap-6">
                      {images
                        .slice(setIndex * 4, setIndex * 4 + 4)
                        .map((image, index) => (
                          <div
                            key={image.id}
                            className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer before:absolute before:inset-0 before:z-10 before:transition-opacity before:duration-300 before:opacity-0 hover:before:opacity-100 flex-1 ${getCardColor(index)}`}
                            style={{
                              animationDelay: `${index * 0.1}s`
                            }}
                          >
                            <div className="relative h-80 overflow-hidden">
                              <ImageWithFallback
                                src={image.url}
                                alt={image.title || image.name || 'Gallery Image'}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              
                              {/* Animated border */}
                              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-300"></div>
                              
                              {/* Floating animation dots */}
                              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex space-x-1">
                                  <div className={`w-2 h-2 rounded-full animate-bounce ${index % 2 === 0 ? 'bg-white' : 'bg-secondary'}`} style={{ animationDelay: '0ms' }}></div>
                                  <div className={`w-2 h-2 rounded-full animate-bounce ${index % 2 === 0 ? 'bg-secondary' : 'bg-white'}`} style={{ animationDelay: '150ms' }}></div>
                                  <div className={`w-2 h-2 rounded-full animate-bounce ${index % 2 === 0 ? 'bg-white' : 'bg-destructive'}`} style={{ animationDelay: '300ms' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile View - Rotating gallery showing all items */}
              <div className="md:hidden overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${(currentSlide % images.length) * 100}%)`,
                  }}
                >
                  {/* Show all images one by one */}
                  {images.map((image, index) => (
                    <div
                      key={`${image.id}-${index}`}
                      className={`group relative overflow-hidden shadow-lg flex-shrink-0 w-full transition-all duration-500 cursor-pointer before:absolute before:inset-0 before:z-10 before:transition-opacity before:duration-300 before:opacity-0 active:before:opacity-100 ${getCardColor(index)}`}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <ImageWithFallback
                          src={image.url}
                          alt={image.title || image.name || 'Gallery Image'}
                          className="w-full h-full object-cover transition-transform duration-700 group-active:scale-110"
                        />
                    
                        {/* Animated border */}
                        <div className="absolute inset-0 border-2 border-transparent group-active:border-white/30 transition-all duration-300"></div>
                        
                        {/* Floating animation dots */}
                        <div className="absolute top-4 right-4 opacity-0 group-active:opacity-100 transition-opacity duration-300">
                          <div className="flex space-x-1">
                            <div className={`w-2 h-2 rounded-full animate-bounce ${index % 2 === 0 ? 'bg-white' : 'bg-secondary'}`} style={{ animationDelay: '0ms' }}></div>
                            <div className={`w-2 h-2 rounded-full animate-bounce ${index % 2 === 0 ? 'bg-secondary' : 'bg-white'}`} style={{ animationDelay: '150ms' }}></div>
                            <div className={`w-2 h-2 rounded-full animate-bounce ${index % 2 === 0 ? 'bg-white' : 'bg-destructive'}`} style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        {!isLoading && images.length > 0 && (
          <div className="flex md:hidden justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              disabled={images.length === 0}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-secondary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous images"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {images.slice(0, Math.min(images.length, 10)).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    (currentSlide % images.length) === index
                      ? 'bg-secondary scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-secondary/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              disabled={images.length === 0}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-secondary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next images"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}