import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";
import di from "../assets/di.jpg";
import logo from "../assets/in.webp";
import logo1 from "../assets/Phi.jpg";

export function AboutUsHomeSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 60px 0 rgba(31, 38, 135, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Floating animation variants for background images
  const floatingImages = [
    {
      src: "https://images.unsplash.com/photo-1619970984073-bb0c47cdfbbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdXBwbGllcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc2NDkyMjA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      position: { top: "10%", left: "5%" },
      size: 100,
      duration: 5,
      delay: 0,
    },
    {
      src: "https://images.unsplash.com/photo-1558907353-ceb54f3882ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYmMlMjBibG9ja3MlMjB0b3lzfGVufDF8fHx8MTc2NDkyMjA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      position: { top: "20%", right: "8%" },
      size: 120,
      duration: 6,
      delay: 0.5,
    },
    {
      src: "https://images.unsplash.com/photo-1581972472593-fe1e492d5c96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmF5b25zJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY0OTIyMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      position: { top: "50%", left: "3%" },
      size: 90,
      duration: 7,
      delay: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1603530657796-cf3b12aa9e5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjQ4NzA4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      position: { top: "65%", right: "5%" },
      size: 110,
      duration: 5.5,
      delay: 1.5,
    },
    {
      src: "https://images.unsplash.com/photo-1693651199295-2dee5af42919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsb29ucyUyMGNvbG9yZnVsfGVufDF8fHx8MTc2NDkyMjA5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      position: { top: "15%", left: "50%" },
      size: 80,
      duration: 6.5,
      delay: 2,
    },
    {
      src: "https://images.unsplash.com/photo-1589828994379-7a8869c4f519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMGFpcnBsYW5lfGVufDF8fHx8MTc2NDkyMjA5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      position: { top: "75%", left: "15%" },
      size: 95,
      duration: 8,
      delay: 2.5,
    },
  ];

  return (
    <section className="relative overflow-hidden " style={{paddingTop:40}}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          // backgroundImage: `url('https://images.unsplash.com/photo-1600880291319-1a7499c191e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBzY2hvb2wlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjQ5MTkyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Animated Floating Images */}
      {floatingImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute z-0 rounded-full overflow-hidden shadow-lg opacity-40"
          style={{
            ...image.position,
            width: image.size,
            height: image.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: image.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: image.delay,
          }}
        >
          <img
            src={image.src}
            alt=""
            className="w-full h-full object-cover"
            style={{ pointerEvents: "none" }}
          />
        </motion.div>
      ))}

      {/* Overlay for better text readability */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          background: 'rgba(255, 255, 255, 0.85)',
        }}
      />

      <div
        className="full mx-auto px-0 sm:px-0 lg:px-0 relative z-10"
        style={{ paddingBottom: "60px" }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16 py-4 px-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl  md:text-5xl text-foreground mb-6" style={{fontWeight:"bold"}}
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.3)",
                "0 0 30px rgba(255,255,255,0.5)",
                "0 0 20px rgba(255,255,255,0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Welcome to Pranav Global School
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-5.5xl mx-auto">
            At Pranav Preschool and Daycare, we are dedicated to creating a
            nurturing and stimulating environment where children grow into
            confident, compassionate, and responsible individuals. Our approach
            focuses on holistic development - fostering intellectual, emotional,
            social, and physical growth - while encouraging curiosity,
            creativity, and independent thinking.
          </p>
        </motion.div>

        {/* Content Grid - 3 sections with alternating layout */}
        <div className="space-y-20 lg: px-8">
          {/* Section 1: Image Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1 overflow-hidden rounded-2xl"
              variants={imageVariants}
              whileHover="hover"
            >
              <ImageWithFallback
                src={di}
                alt="Modern School Campus"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2 p-8 rounded-2xl relative group cursor-pointer"
              style={{
                background: "rgba(255, 255, 255, 0.85)",
                borderRadius: "16px",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
              }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
              <h3 className="text-3xl text-primary mb-6 relative z-10" style={{fontWeight:700}}>
                Discover Student Life at Pranav global School
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                At Pranav Global School, students enjoy a balanced life that
                combines learning, values, and personal growth. The school
                encourages creativity and teamwork through sports, arts, and
                various activities, while celebrating each student's
                achievements. With a safe and supportive campus, children are
                guided to become confident, responsible, and future-ready
                individuals.
              </p>
            </motion.div>
          </div>

          {/* Section 2: Content Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="p-8 rounded-2xl relative group cursor-pointer"
              style={{
                background: "rgba(255, 255, 255, 0.85)",
                borderRadius: "16px",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
              }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
              <h3 className="text-3xl text-primary mb-6 relative z-10" style={{fontWeight:700}}>
                Our Philosophy
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                At Pranav Global School, we believe that education is a
                collaborative journey between students, teachers, and parents.
                Our philosophy is rooted in the conviction that every child
                possesses unique talents and a boundless capacity for growth. We
                are committed to fostering a love for learning, encouraging
                intellectual curiosity, and instilling values of integrity,
                respect, and responsibility.
              </p>
            </motion.div>
            <motion.div
              className="overflow-hidden rounded-2xl"
              variants={imageVariants}
              whileHover="hover"
            >
              <ImageWithFallback
                src={logo1}
                alt="Students Studying"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>

          {/* Section 3: Image Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1 overflow-hidden rounded-2xl"
              variants={imageVariants}
              whileHover="hover"
            >
              <ImageWithFallback
                src={logo}
                alt="Students Playing"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2 p-8 rounded-2xl relative group cursor-pointer"
              style={{
                background: "rgba(255, 255, 255, 0.85)",
                borderRadius: "16px",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
              }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
              <h3 className="text-3xl text-primary mb-6 relative z-10" style={{fontWeight:700}}>
                Trained & caring teachers
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed relastyle={{fontWeight:700}}tive z-10">
             Daycare with love, safety & comfort
Safe, caring & happy environment
Play-based learning activities
              </p>
              <div className="space-y-3 relative z-10">
                {[
                  "Digital Learning Platforms",
                  "STEM Education Focus",
                  "Global Partnerships",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-accent rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          "0 0 0px rgba(59, 130, 246, 0.5)",
                          "0 0 10px rgba(59, 130, 246, 0.8)",
                          "0 0 0px rgba(59, 130, 246, 0.5)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}