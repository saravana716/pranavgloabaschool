import { useState, useEffect } from 'react';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { buildingBlocks, facilityDetails } from '../../data/schoolData';

export function BuildingBlocks() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % buildingBlocks.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-16 mb-24">
      {/* Left Side - Auto Sliding Building Blocks */}
      <div className="relative">
        <Badge className="bg-primary/10 text-primary border-0 mb-4">
          OUR STORY
        </Badge>
        <h2 className="text-4xl font-bold text-foreground mb-8">
          Our Story About Global International School
        </h2>
        
        {/* Auto Sliding Building Blocks */}
        <div className="relative h-[600px] bg-gradient-to-br from-muted/20 to-card/50 rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute inset-0">
            {buildingBlocks.map((block, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <ImageWithFallback
                  src={block.image}
                  alt={block.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="font-semibold text-primary">{block.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slide Indicators */}
          <div className="absolute top-4 right-4 flex space-x-2">
            {buildingBlocks.map((_, index) => (
              <div 
                key={index} 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/60'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Right Side - Block Names and Specialties */}
      <div className="h-[600px] flex flex-col">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-4">Our Building Blocks</h3>
          <p className="text-muted-foreground leading-relaxed">
            Each block represents our commitment to providing world-class facilities 
            that support comprehensive learning and development.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto pr-4 space-y-6 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
          {facilityDetails.map((block, index) => (
            <div 
              key={index} 
              className="group p-6 bg-card/50 rounded-xl border border-muted/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {block.name}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {block.specialty}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}