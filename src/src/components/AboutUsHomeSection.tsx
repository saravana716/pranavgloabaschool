import { motion } from 'framer-motion';
import { GraduationCap, Users, Award, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutUsHomeSection() {
  const stats = [
    { icon: GraduationCap, value: "15+", label: "Years of Excellence" },
    { icon: Users, value: "2000+", label: "Happy Students" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: BookOpen, value: "100+", label: "Qualified Teachers" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&q=80"
                alt="Pranav Global School Campus"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Achievement Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                About Pranav Global School
              </h2>
              <div className="w-20 h-1 bg-secondary rounded-full mb-6" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              For over 15 years, Pranav Global School has been at the forefront of educational 
              excellence, nurturing young minds and shaping future leaders. Our commitment to 
              holistic education combines academic rigor with character development.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We believe in creating an environment where students can explore their potential, 
              develop critical thinking skills, and build the confidence to face tomorrow's challenges. 
              Our state-of-the-art facilities and experienced faculty ensure that every student 
              receives personalized attention and world-class education.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-lg bg-muted/30"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-3">
                    <stat.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}