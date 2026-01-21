import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function RecentActivitiesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const activities = [
    {
      id: 1,
      title: "Annual Science Exhibition 2024",
      description: "Students showcase their innovative projects and experiments in this year's spectacular science fair.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&q=80",
      date: "March 15, 2024",
      location: "Main Auditorium",
      time: "10:00 AM - 4:00 PM",
      category: "Academic"
    },
    {
      id: 2,
      title: "Inter-House Sports Competition",
      description: "Exciting athletic competitions bringing together students from all houses in friendly rivalry.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&q=80",
      date: "March 22, 2024",
      location: "Sports Ground",
      time: "9:00 AM - 5:00 PM",
      category: "Sports"
    },
    {
      id: 3,
      title: "Cultural Arts Festival",
      description: "A vibrant celebration of music, dance, drama, and visual arts by our talented students.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop&q=80",
      date: "March 28, 2024",
      location: "School Theater",
      time: "6:00 PM - 9:00 PM",
      category: "Cultural"
    },
    {
      id: 4,
      title: "Environmental Awareness Campaign",
      description: "Students lead initiatives on sustainability and environmental conservation in our community.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop&q=80",
      date: "April 5, 2024",
      location: "School Campus",
      time: "8:00 AM - 12:00 PM",
      category: "Community"
    },
    {
      id: 5,
      title: "Parent-Teacher Conference",
      description: "Important meeting to discuss student progress and collaborative educational goals.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=250&fit=crop&q=80",
      date: "April 12, 2024",
      location: "Classrooms",
      time: "2:00 PM - 6:00 PM",
      category: "Academic"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(activities.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(activities.length / 3)) % Math.ceil(activities.length / 3));
  };

  const getVisibleActivities = () => {
    const startIndex = currentSlide * 3;
    return activities.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Recent Activities
            </h2>
            <div className="w-20 h-1 bg-secondary rounded-full" />
          </motion.div>
          
          {/* Navigation Controls */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex space-x-2"
          >
            <button
              onClick={prevSlide}
              className="p-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Activities Slider */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {getVisibleActivities().map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {activity.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-card-foreground mb-3 line-clamp-2">
                      {activity.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {activity.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} />
                        <span>{activity.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={14} />
                        <span>{activity.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={14} />
                        <span>{activity.location}</span>
                      </div>
                    </div>

                    <button className="mt-4 text-primary hover:text-primary/80 font-medium transition-colors">
                      Learn More →
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(activities.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-primary scale-125' : 'bg-primary/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}