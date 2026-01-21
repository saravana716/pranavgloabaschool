import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin, Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { spotlightActivities } from '../data/activities';
import { getCategoryColor } from '../utils/categoryUtils';

export function ActivitiesContentSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % spotlightActivities.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % spotlightActivities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + spotlightActivities.length) % spotlightActivities.length);
  };

  const currentActivity = spotlightActivities[currentSlide];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Activity Spotlight
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dive deeper into our most impactful activities and see how our students 
            are making a difference both in and out of the classroom.
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Badge className={getCategoryColor(currentActivity.category)}>
                    {currentActivity.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: currentActivity.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-foreground leading-tight">
                  {currentActivity.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{currentActivity.date} at {currentActivity.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{currentActivity.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {currentActivity.fullContent}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentActivity.achievements.map((achievement, index) => (
                      <span
                        key={index}
                        className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Participants */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Participants:</h4>
                  <div className="space-y-1">
                    {currentActivity.participants.map((participant, index) => (
                      <div key={index} className="text-sm text-muted-foreground">
                        • {participant}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <ImageWithFallback
                    src={currentActivity.image}
                    alt={currentActivity.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {currentActivity.gallery.map((img, index) => (
                    <div key={index} className="aspect-video overflow-hidden rounded-lg">
                      <ImageWithFallback
                        src={img}
                        alt={`${currentActivity.title} gallery ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous activity"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next activity"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {spotlightActivities.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 rounded-full transition-all ${
                index === currentSlide ? 'bg-secondary' : 'bg-muted'
              }`}
              aria-label={`Go to activity ${index + 1}`}
            />
          ))}
        </div>

        {/* Activity Timeline Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {spotlightActivities.map((activity, index) => (
            <button
              key={activity.id}
              onClick={() => setCurrentSlide(index)}
              className={`p-4 rounded-lg text-left transition-all ${
                index === currentSlide
                  ? 'bg-secondary text-white'
                  : 'bg-card hover:bg-muted'
              }`}
            >
              <div className="text-sm font-medium mb-1 truncate">
                {activity.title}
              </div>
              <div className="text-xs opacity-75">
                {activity.date}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}