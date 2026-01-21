import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Heart, 
  Globe, 
  Lightbulb,
  Shield,
  Star
} from 'lucide-react';

export function WhyChooseSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Comprehensive curriculum designed to foster critical thinking and academic achievement."
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Highly qualified and experienced teachers dedicated to student success."
    },
    {
      icon: Trophy,
      title: "Holistic Development",
      description: "Focus on overall personality development through academics, sports, and arts."
    },
    {
      icon: Heart,
      title: "Nurturing Environment",
      description: "Safe, supportive, and inclusive atmosphere that promotes growth and learning."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Preparing students for a globalized world with international standards."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Emphasis on creativity, innovation, and 21st-century skills development."
    },
    {
      icon: Shield,
      title: "Safe Learning Space",
      description: "Secure campus with modern safety measures and child protection policies."
    },
    {
      icon: Star,
      title: "Individual Attention",
      description: "Small class sizes ensuring personalized attention for every student."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Pranav Global School?
          </h2>
          <div className="w-24 h-1 bg-secondary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover what makes us the preferred choice for parents and students seeking 
            exceptional education and holistic development opportunities.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Our School Family?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Take the first step towards your child's bright future. Contact us today to 
              schedule a campus visit and learn more about our admission process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg">
                Schedule Campus Visit
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}