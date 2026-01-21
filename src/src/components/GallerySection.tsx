import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';
import Masonry from 'react-responsive-masonry';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PageHeader } from './PageHeader';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  date: string;
  title: string;
}

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['All', 'Campus', 'Events', 'Sports', 'Academic', 'Cultural', 'Awards'];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=600&fit=crop&q=80",
      alt: "School Campus Main Building",
      category: "Campus",
      date: "2024-03-15",
      title: "Main Campus Building"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop&q=80",
      alt: "Students in Interactive Classroom",
      category: "Academic",
      date: "2024-03-10",
      title: "Interactive Learning Session"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&q=80",
      alt: "Annual Sports Day Championship",
      category: "Sports",
      date: "2024-02-28",
      title: "Annual Sports Championship"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=400&fit=crop&q=80",
      alt: "Modern School Library",
      category: "Campus",
      date: "2024-03-05",
      title: "Digital Library"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=350&fit=crop&q=80",
      alt: "Cultural Festival Performance",
      category: "Cultural",
      date: "2024-02-20",
      title: "Cultural Arts Festival"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=450&fit=crop&q=80",
      alt: "Science Laboratory Experiment",
      category: "Academic",
      date: "2024-03-08",
      title: "Science Lab Innovation"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop&q=80",
      alt: "Graduation Ceremony",
      category: "Events",
      date: "2024-02-15",
      title: "Graduation Ceremony 2024"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=550&fit=crop&q=80",
      alt: "Science Exhibition",
      category: "Academic",
      date: "2024-03-01",
      title: "Annual Science Exhibition"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&h=350&fit=crop&q=80",
      alt: "Football Championship",
      category: "Sports",
      date: "2024-02-25",
      title: "Inter-School Football Championship"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop&q=80",
      alt: "Mathematics Competition",
      category: "Academic",
      date: "2024-02-18",
      title: "Mathematics Olympiad Winners"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop&q=80",
      alt: "School Transportation",
      category: "Campus",
      date: "2024-03-12",
      title: "Safe Transportation Fleet"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=500&fit=crop&q=80",
      alt: "Award Ceremony",
      category: "Awards",
      date: "2024-02-10",
      title: "Excellence Awards Ceremony"
    }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setLightboxImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setLightboxImage(filteredImages[prevIndex]);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div>
      <PageHeader
        title="Gallery"
        subtitle="Explore memorable moments and achievements from our school community"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=400&fit=crop&q=80"
      />

      {/* Category Filter */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <p className="text-muted-foreground">
              Showing {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'} 
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Masonry columnsCount={3} gutter="16px">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => openLightbox(image)}
                  >
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                        <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                        <h3 className="font-semibold mb-1">{image.title}</h3>
                        <div className="flex items-center justify-center space-x-2 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(image.date)}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-sm mt-1">
                          <Tag className="w-4 h-4" />
                          <span>{image.category}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Masonry>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              {/* Navigation Arrows */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Image */}
              <ImageWithFallback
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm text-white p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{lightboxImage.title}</h3>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(lightboxImage.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Tag className="w-4 h-4" />
                    <span>{lightboxImage.category}</span>
                  </div>
                  <span className="ml-auto">
                    {currentImageIndex + 1} of {filteredImages.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Photos' },
              { number: '50+', label: 'Events Covered' },
              { number: '12', label: 'Categories' },
              { number: '2024', label: 'Latest Update' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl shadow-lg"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}