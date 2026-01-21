import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Users, Award, Music, Beaker, BookOpen, Loader2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PageHeader } from './PageHeader';
import Masonry from 'react-responsive-masonry';
import { fetchGalleryImages, type GalleryImage } from '../utils/galleryService';
import { toast } from 'sonner';
import logo from "../assets/Gallery.jpg"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All', icon: Users },
    { id: 'junior', name: 'Junior', icon: BookOpen },
    { id: 'senior', name: 'Senior', icon: Award },
    { id: 'k1', name: 'K1', icon: Calendar },
    { id: 'k2', name: 'K2', icon: Beaker },
    { id: 'day care', name: 'Day Care', icon: Music }
  ];

  // Fetch gallery images from Firestore database on component mount
  useEffect(() => {
    const loadGalleryImages = async () => {
      try {
        setIsLoading(true);
        const images = await fetchGalleryImages();
        setGalleryImages(images);
      } catch (error) {
        console.error('Error loading gallery images:', error);
        toast.error('Failed to load gallery images. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadGalleryImages();
  }, []);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => {
      // Case-insensitive category matching
      const imgCategory = img.category?.toLowerCase().trim() || 'all';
      const selectedCat = selectedCategory.toLowerCase().trim();
      return imgCategory === selectedCat;
    });

  const openLightbox = (image: any) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div>
      <PageHeader title="Gallery" currentPage="Gallery" backgroundImage={logo} />
      <div className="py-20 bg-background">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              School Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore life at Branov School through our photo gallery showcasing 
              student achievements, campus events, and daily activities.
            </p>
          </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            // Count images in this category (case-insensitive)
            const categoryCount = category.id === 'all' 
              ? galleryImages.length 
              : galleryImages.filter(img => {
                  const imgCategory = img.category?.toLowerCase().trim() || 'all';
                  return imgCategory === category.id.toLowerCase().trim();
                }).length;
            
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-secondary text-white shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-secondary/20 hover:text-secondary'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
                {categoryCount > 0 && (
                  <span className="ml-2 text-xs opacity-70">({categoryCount})</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-secondary" />
            <span className="ml-3 text-muted-foreground">Loading gallery images...</span>
          </div>
        ) : filteredImages.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No images found in this category.</p>
          </div>
        ) : (
          /* Masonry Gallery */
          <Masonry columnsCount={3} gutter="16px">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(image)}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title || image.name}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold mb-1">{image.title || image.name}</h3>
                    <p className="text-white/80 text-sm">{image.date || 'Gallery Image'}</p>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <ImageWithFallback
                src={selectedImage.url}
                alt={selectedImage.title || selectedImage.name}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {/* Image info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold text-lg mb-2">{selectedImage.title || selectedImage.name}</h3>
                {selectedImage.description && (
                  <p className="text-white/80 text-sm mb-1">{selectedImage.description}</p>
                )}
                <p className="text-white/60 text-sm">{selectedImage.date || 'Gallery Image'}</p>
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        {/* <div className="mt-16 bg-muted/30 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground">Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">25+</div>
              <div className="text-muted-foreground">Achievements</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">100+</div>
              <div className="text-muted-foreground">Activities</div>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}