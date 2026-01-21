import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  BookOpen, 
  Users, 
  Award, 
  Globe,
  Lightbulb,
  Star,
  Shield
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PageHeader } from './PageHeader';

export function AboutSection() {
  const whyChooseReasons = [
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
      icon: Heart,
      title: "Nurturing Environment",
      description: "Safe, supportive, and inclusive atmosphere that promotes growth and learning."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Preparing students for a globalized world with international standards."
    }
  ];

  const coreValues = [
    {
      icon: Star,
      title: "Excellence",
      description: "Striving for the highest standards in all endeavors"
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Fostering empathy and kindness in all interactions"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Upholding honesty and moral principles"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Encouraging creativity and forward-thinking"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong, supportive relationships"
    },
    {
      icon: Target,
      title: "Growth",
      description: "Commitment to continuous improvement and learning"
    }
  ];

  const keyHighlights = [
    { label: "Established", value: "2008" },
    { label: "Students Enrolled", value: "2000+" },
    { label: "Faculty Members", value: "100+" },
    { label: "Success Rate", value: "98%" },
    { label: "Awards Won", value: "50+" },
    { label: "Campus Area", value: "15 Acres" }
  ];

  return (
    <div>
      <PageHeader
        title="About Us"
        subtitle="Discover our journey of educational excellence and commitment to nurturing future leaders"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=400&fit=crop&q=80"
      />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" >
              Why Choose Pranav Global School?
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are committed to providing an exceptional educational experience that 
              prepares students for success in an ever-changing world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To provide a holistic educational experience that nurtures intellectual curiosity, 
                character development, and global citizenship. We strive to create an environment 
                where every student can discover their unique potential and develop the skills 
                necessary to thrive in the 21st century.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission extends beyond academic excellence to encompass the development of 
                critical thinking, creativity, collaboration, and communication skills that will 
                serve our students throughout their lives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop&q=80"
                alt="Students in classroom"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop&q=80"
                alt="School library"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To be a leading educational institution that empowers students to become 
                confident, compassionate, and responsible global citizens who contribute 
                meaningfully to society while pursuing their dreams with passion and purpose.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision a future where our graduates are not just academically successful, 
                but also ethical leaders who can navigate complexity, embrace diversity, and 
                drive positive change in their communities and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Highlights</h2>
            <div className="w-24 h-1 bg-white/30 rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {keyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {highlight.value}
                </div>
                <div className="text-white/80">
                  {highlight.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide everything we do and shape the character 
              of our school community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Legacy Section */}
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
              Our Legacy
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since our establishment in 2008, Pranav Global School has been a beacon of 
                educational excellence in our community. What began as a vision to provide 
                quality education has evolved into a legacy of nurturing thousands of students 
                who have gone on to make significant contributions to society.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Our journey has been marked by continuous innovation in teaching methodologies, 
                infrastructure development, and student support systems. We take pride in our 
                alumni who have excelled in various fields including medicine, engineering, 
                arts, sports, and entrepreneurship.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to build upon this rich heritage while adapting to the 
                changing needs of modern education. Our commitment remains unwavering: to 
                provide each student with the tools, knowledge, and confidence to succeed 
                in their chosen path.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border-l-4 border-primary">
                <blockquote className="text-lg italic text-foreground">
                  "Education is not preparation for life; education is life itself. At Pranav 
                  Global School, we don't just teach subjects, we teach life."
                </blockquote>
                <cite className="block mt-3 text-sm text-muted-foreground">
                  — School Philosophy
                </cite>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&h=200&fit=crop&q=80"
                  alt="School building"
                  className="rounded-lg shadow-lg"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=300&h=200&fit=crop&q=80"
                  alt="Students learning"
                  className="rounded-lg shadow-lg mt-8"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=200&fit=crop&q=80"
                  alt="Graduation ceremony"
                  className="rounded-lg shadow-lg -mt-4"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&q=80"
                  alt="Science lab"
                  className="rounded-lg shadow-lg mt-4"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}