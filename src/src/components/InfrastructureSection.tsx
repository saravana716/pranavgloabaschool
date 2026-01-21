import { motion } from 'framer-motion';
import { 
  Building2, 
  Microscope, 
  BookOpen, 
  Dumbbell, 
  Music, 
  Car,
  Wifi,
  Shield,
  Utensils,
  Stethoscope
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PageHeader } from './PageHeader';

export function InfrastructureSection() {
  const facilities = [
    {
      icon: Building2,
      title: "Modern Classrooms",
      description: "Spacious, well-ventilated classrooms equipped with smart boards and multimedia facilities",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop&q=80",
      features: ["Smart Interactive Boards", "Air Conditioning", "Ergonomic Furniture", "Natural Lighting"]
    },
    {
      icon: Microscope,
      title: "Science Laboratories",
      description: "State-of-the-art labs for Physics, Chemistry, Biology with latest equipment and safety measures",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&q=80",
      features: ["Advanced Equipment", "Safety Protocols", "Individual Workstations", "Digital Microscopes"]
    },
    {
      icon: BookOpen,
      title: "Digital Library",
      description: "Vast collection of books, digital resources, and quiet study spaces for research and reading",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop&q=80",
      features: ["50,000+ Books", "Digital Catalog", "Research Databases", "Reading Corners"]
    },
    {
      icon: Dumbbell,
      title: "Sports Complex",
      description: "Multi-purpose sports facilities including gymnasium, playground, and swimming pool",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&q=80",
      features: ["Indoor Gymnasium", "Swimming Pool", "Sports Grounds", "Fitness Equipment"]
    },
    {
      icon: Music,
      title: "Arts & Music Center",
      description: "Dedicated spaces for music, dance, drama, and visual arts with professional equipment",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&q=80",
      features: ["Music Studio", "Art Gallery", "Dance Hall", "Theater Stage"]
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Safe and reliable bus service covering major routes with GPS tracking and trained drivers",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop&q=80",
      features: ["GPS Tracking", "Trained Drivers", "Safety Measures", "Multiple Routes"]
    }
  ];

  const additionalFeatures = [
    { icon: Wifi, title: "High-Speed Internet", description: "Campus-wide Wi-Fi connectivity" },
    { icon: Shield, title: "24/7 Security", description: "Round-the-clock security with CCTV monitoring" },
    { icon: Utensils, title: "Cafeteria", description: "Nutritious meals and healthy snacking options" },
    { icon: Stethoscope, title: "Medical Room", description: "On-site medical facility with qualified nurse" }
  ];

  return (
    <div>
      <PageHeader
        title="Infrastructure"
        subtitle="Discover our world-class facilities designed to enhance learning and development"
        backgroundImage="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=400&fit=crop&q=80"
      />

      {/* Main Facilities Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              World-Class Facilities
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our campus is equipped with modern facilities that create an optimal 
              learning environment for academic excellence and overall development.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-64">
                  <ImageWithFallback
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <facility.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-card-foreground">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Amenities
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Statistics */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Campus Overview</h2>
            <div className="w-24 h-1 bg-white/30 rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15", label: "Acres Campus" },
              { number: "50+", label: "Classrooms" },
              { number: "10", label: "Laboratories" },
              { number: "24/7", label: "Security" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Experience Our Campus
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a visit to explore our facilities firsthand and see how our 
              infrastructure supports exceptional learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg">
                Schedule Campus Tour
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors">
                Virtual Campus Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}