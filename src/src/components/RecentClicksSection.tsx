import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, Heart, Share2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function RecentClicksSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Academics', 'Sports', 'Cultural', 'Events'];

  const recentClicks = [
    {
      id: 1,
      title: "Students Excel in Mathematics Olympiad",
      category: "Academics",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop&q=80",
      views: 1250,
      likes: 89,
      type: "article"
    },
    {
      id: 2,
      title: "Annual Sports Day Highlights",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&q=80",
      views: 2100,
      likes: 156,
      type: "video"
    },
    {
      id: 3,
      title: "Cultural Festival Performance",
      category: "Cultural",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&q=80",
      views: 1850,
      likes: 203,
      type: "gallery"
    },
    {
      id: 4,
      title: "Science Lab Innovation Project",
      category: "Academics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&q=80",
      views: 980,
      likes: 67,
      type: "article"
    },
    {
      id: 5,
      title: "Inter-School Football Championship",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&h=300&fit=crop&q=80",
      views: 3200,
      likes: 241,
      type: "video"
    },
    {
      id: 6,
      title: "Parent Appreciation Day",
      category: "Events",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop&q=80",
      views: 1450,
      likes: 178,
      type: "gallery"
    }
  ];

  const filteredClicks = selectedCategory === 'All' 
    ? recentClicks 
    : recentClicks.filter(click => click.category === selectedCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play size={20} className="text-white" />;
      case 'gallery':
        return <Eye size={20} className="text-white" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recent Highlights
          </h2>
          <div className="w-24 h-1 bg-secondary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, achievements, and memorable moments 
            from our school community.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 bg-card rounded-full p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredClicks.map((click, index) => (
            <motion.div
              key={click.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Image with Overlay */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={click.image}
                  alt={click.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay with Play/View Icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  {getTypeIcon(click.type) && (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/80 rounded-full p-3">
                      {getTypeIcon(click.type)}
                    </div>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {click.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-4 line-clamp-2">
                  {click.title}
                </h3>

                {/* Stats */}
                <div className="flex items-center justify-between text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye size={16} />
                      <span className="text-sm">{click.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart size={16} />
                      <span className="text-sm">{click.likes}</span>
                    </div>
                  </div>
                  
                  <button className="p-2 hover:bg-muted rounded-full transition-colors">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg">
            View All Highlights
          </button>
        </motion.div>
      </div>
    </section>
  );
}