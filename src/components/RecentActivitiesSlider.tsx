import { useState, useEffect } from 'react';
import { Calendar, Users, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function RecentActivitiesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activities = [
    {
      id: 1,
      title: "Science Fair 2024",
      category: "Academic",
      date: "March 15, 2024",
      participants: "120 Students",
      image: "https://images.unsplash.com/photo-1660351174962-e2a1fbb9af09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzY2llbmNlJTIwZmFpciUyMHN0dWRlbnRzfGVufDF8fHx8MTc1NjgzMTM2NXww&ixlib=rb-4.1.0&q=80&w=400&h=300",
      description: "Students showcase innovative projects and compete in various scientific categories.",
      highlights: ["50+ Projects", "10 Categories", "Guest Judges"]
    },
    {
      id: 2,
      title: "Art Exhibition Opening",
      category: "Arts",
      date: "March 10, 2024",
      participants: "80 Students",
      image: "https://images.unsplash.com/photo-1598389118600-9a83ceb4ebe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGFydCUyMGNsYXNzJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzU2ODMxMzY4fDA&ixlib=rb-4.1.0&q=80&w=400&h=300",
      description: "Annual art exhibition featuring student masterpieces across various mediums.",
      highlights: ["100+ Artworks", "5 Mediums", "Community Event"]
    },
    {
      id: 3,
      title: "Basketball Championship",
      category: "Sports",
      date: "March 5, 2024",
      participants: "15 Players",
      image: "https://images.unsplash.com/photo-1585915751878-f51978a77710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBiYXNrZXRiYWxsfGVufDF8fHx8MTc1NjgzMDU5NXww&ixlib=rb-4.1.0&q=80&w=400&h=300",
      description: "Our varsity team wins the regional championship in an exciting final match.",
      highlights: ["Regional Champions", "Undefeated Season", "MVP Awards"]
    },
    {
      id: 4,
      title: "International Day Celebration",
      category: "Cultural",
      date: "February 28, 2024",
      participants: "500 Students",
      image: "https://images.unsplash.com/photo-1565402161570-7ca09ba499f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwbGF5Z3JvdW5kJTIwY2hpbGRyZW58ZW58MXx8fHwxNzU2ODMxMzYyfDA&ixlib=rb-4.1.0&q=80&w=400&h=300",
      description: "Students celebrate diversity with cultural performances and traditional foods.",
      highlights: ["25 Countries", "Cultural Performances", "Food Festival"]
    },
    {
      id: 5,
      title: "Math Olympiad Success",
      category: "Academic",
      date: "February 20, 2024",
      participants: "30 Students",
      image: "https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGlicmFyeXxlbnwxfHx8fDE3NTY4MTc3ODB8MA&ixlib=rb-4.1.0&q=80&w=400&h=300",
      description: "Students excel in state-level mathematics competition bringing home multiple awards.",
      highlights: ["5 Gold Medals", "State Champions", "Record Breaking"]
    },
    {
      id: 6,
      title: "Spring Concert Series",
      category: "Music",
      date: "February 15, 2024",
      participants: "90 Students",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
      description: "Students perform in multiple ensembles showcasing musical talents and skills.",
      highlights: ["Orchestra", "Choir", "Band Performance"]
    }
  ];

  const cardsPerView = 3;
  const maxSlides = Math.ceil(activities.length / cardsPerView);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % maxSlides);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [maxSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic':
        return 'bg-secondary text-secondary-foreground';
      case 'Sports':
        return 'bg-destructive text-destructive-foreground';
      case 'Arts':
        return 'bg-accent text-accent-foreground';
      case 'Cultural':
        return 'bg-primary text-primary-foreground';
      case 'Music':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getCurrentCards = () => {
    const start = currentSlide * cardsPerView;
    return activities.slice(start, start + cardsPerView);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Recent Activities
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Stay updated with the latest happenings, achievements, and events 
              at Pranav Global School. Our students are always engaged in exciting activities.
            </p>
          </div>
          
          {/* Navigation Controls */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-card border hover:bg-muted transition-colors"
              aria-label="Previous activities"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-card border hover:bg-muted transition-colors"
              aria-label="Next activities"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Cards Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {Array.from({ length: maxSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activities
                    .slice(slideIndex * cardsPerView, slideIndex * cardsPerView + cardsPerView)
                    .map((activity) => (
                      <Card key={activity.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                        {/* Image */}
                        <div className="relative overflow-hidden">
                          <ImageWithFallback
                            src={activity.image}
                            alt={activity.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className={getCategoryColor(activity.category)}>
                              {activity.category}
                            </Badge>
                          </div>
                        </div>

                        <CardHeader className="pb-3">
                          <h3 className="font-bold text-foreground group-hover:text-secondary transition-colors">
                            {activity.title}
                          </h3>
                          
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{activity.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{activity.participants}</span>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="pt-0">
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {activity.description}
                          </p>
                          
                          {/* Highlights */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {activity.highlights.map((highlight, index) => (
                              <span
                                key={index}
                                className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>

                          <button className="text-secondary font-medium text-sm flex items-center space-x-1 group-hover:space-x-2 transition-all">
                            <span>Read More</span>
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center items-center space-x-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-card border hover:bg-muted transition-colors"
            aria-label="Previous activities"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          
          <div className="flex space-x-2">
            {Array.from({ length: maxSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-secondary' : 'bg-muted'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-card border hover:bg-muted transition-colors"
            aria-label="Next activities"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            View All Activities
          </button>
        </div>
      </div>
    </section>
  );
}