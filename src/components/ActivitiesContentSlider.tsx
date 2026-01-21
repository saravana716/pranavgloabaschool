import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin, Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ActivitiesContentSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activities = [
    {
      id: 1,
      title: "Regional Robotics Competition Victory",
      category: "STEM",
      date: "March 18, 2024",
      time: "10:00 AM",
      location: "Tech Innovation Center",
      rating: 5,
      image: "https://images.unsplash.com/photo-1562758778-e5638b5b6607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBldGl0aW9uJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU2ODMxNTM0fDA&ixlib=rb-4.1.0&q=80&w=600&h=400",
      excerpt: "Our robotics team secured first place in the regional competition, showcasing exceptional engineering skills and teamwork.",
      fullContent: "The Branov School Robotics Team made history by winning the Regional Robotics Competition with their innovative autonomous robot design. The team spent months perfecting their creation, which successfully completed all challenge tasks with precision and efficiency. This victory qualifies them for the state championship next month.",
      achievements: ["1st Place Regional", "Innovation Award", "Team Spirit Award"],
      participants: ["John Smith (Captain)", "Sarah Johnson", "Mike Chen", "Emily Davis"],
      gallery: [
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Annual Drama Performance: Shakespeare Festival",
      category: "Arts",
      date: "March 12, 2024",
      time: "7:00 PM",
      location: "Main Auditorium",
      rating: 5,
      image: "https://images.unsplash.com/photo-1565388364543-c756ef352c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjB0aGVhdGVyJTIwZHJhbWElMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTY4MzE1Mzd8MA&ixlib=rb-4.1.0&q=80&w=600&h=400",
      excerpt: "Students delivered outstanding performances in our annual Shakespeare festival, bringing classic literature to life.",
      fullContent: "The annual Shakespeare festival was a tremendous success, featuring performances of Romeo and Juliet, Macbeth, and A Midsummer Night's Dream. Over 60 students participated as actors, directors, and crew members, creating an unforgettable theatrical experience for the entire school community.",
      achievements: ["Sold Out Shows", "Best Costume Design", "Outstanding Direction"],
      participants: ["Drama Club (60 members)", "Technical Crew (15 members)", "Orchestra (20 members)"],
      gallery: [
        "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1516307365426-bea8571e60cd?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1489952237811-bbcafae70650?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Environmental Science Field Trip",
      category: "Science",
      date: "March 8, 2024",
      time: "8:00 AM",
      location: "Coastal Marine Reserve",
      rating: 4,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      excerpt: "Students explored marine ecosystems and conducted water quality research at the coastal reserve.",
      fullContent: "The Environmental Science class embarked on an educational field trip to the Coastal Marine Reserve, where students conducted hands-on research on marine biodiversity and water quality. They collected samples, observed local wildlife, and learned about conservation efforts from marine biologists.",
      achievements: ["Research Data Collected", "Species Identification", "Conservation Awareness"],
      participants: ["Environmental Science Class (25 students)", "Biology Teachers (3)", "Marine Biologist Guide"],
      gallery: [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Community Service: Local Food Bank",
      category: "Service",
      date: "March 3, 2024",
      time: "9:00 AM",
      location: "City Food Bank",
      rating: 5,
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop",
      excerpt: "Students volunteered at the local food bank, organizing donations and helping distribute meals to families in need.",
      fullContent: "Over 40 students from various grades volunteered at the City Food Bank, demonstrating our commitment to community service. They sorted donations, packed food boxes, and helped distribute meals to local families. This initiative is part of our ongoing character development program.",
      achievements: ["500 Meals Packed", "Community Impact", "Leadership Development"],
      participants: ["Student Council (15 members)", "Honor Society (25 members)", "Faculty Advisors (5)"],
      gallery: [
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=200&fit=crop"
      ]
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activities.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(timer);
  }, [activities.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'STEM':
        return 'bg-secondary text-secondary-foreground';
      case 'Arts':
        return 'bg-accent text-accent-foreground';
      case 'Science':
        return 'bg-primary text-primary-foreground';
      case 'Service':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const currentActivity = activities[currentSlide];

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
          {activities.map((_, index) => (
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
          {activities.map((activity, index) => (
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