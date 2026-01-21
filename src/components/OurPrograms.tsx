import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, BookOpen, Heart, Star, Zap, Users, Play } from 'lucide-react';
import se1 from "../assets/se.jpg";
import se2 from "../assets/ju.jpg";
import se3 from "../assets/k1.jpg";
import se4 from "../assets/k2.jpg";
import se5 from "../assets/day.jpg";
import se6 from "../assets/af.jpg";
// Program data interface and data
interface Program {
  id: string;
  name: string;
  title: string;
  description: string[];
  image: string;
  color: string;
  bgColor: string;
  borderColor: string;
  features: string[];
  ageRange: string;
}

const programsData: Program[] = [
  {
    id: 'Junior',
    name: 'Junior Toddlers',
    title: 'Junior Toddlers',
    ageRange: '2 - 3 years',
    description: [
      "At Pranav Global School, our Junior Toddlers program (2 - 3 years) offers a safe and caring space where little ones learn through play, stories, music, and fun activities. We focus on building early skills, confidence, and joyful learning every day."
    ],
    features: [
      'Sensory play activities',
      'Language development',
      'Social interaction skills',
      'Creative exploration'
    ],
    image:se1,
    color: 'text-[#0F4C5C]',
    bgColor: 'bg-[#D8EFED]',
    borderColor: 'border-[#0F4C5C]/30'
  },
  {
    id: 'Senior ',
    name: 'Senior Toddlers',
    title: 'Senior Toddlers',
    ageRange: '3 - 4 years',
    description: [
    "At Pranav Global School, our Senior Toddlers program (3 - 4 years) helps children explore, learn, and grow with confidence. Through stories, music, art, play, and fun activities, we develop communication, creativity, and social skills in a joyful environment."    ],
    features: [
      'Pre-math concepts',
      'Phonics introduction',
      'Art and craft activities',
      'Group activities'
    ],
    image: se2,
    color: 'text-[#0F4C5C]',
    bgColor: 'bg-[#E5EBEC]',
    borderColor: 'border-[#0F4C5C]/30'
  },
  {
    id: 'K1 ',
    name: 'K1-LKG',
    title: 'K1-LKG',
    ageRange: '4 - 5 years',
    description: [
    "Our K1 (LKG) program is designed for children aged 4 - 5 years, focusing on building strong basics in literacy, numeracy, and communication. With engaging activities like reading, writing, storytelling, art, and play, children develop confidence, creativity, and a love for learning in a fun-filled environment."   ],
    features: [
      'Early literacy skills',
      'Number concepts',
      'Science exploration',
      'Physical development'
    ],
    image: se3,
    color: 'text-[#0F4C5C]',
    bgColor: 'bg-[#D8EFED]',
    borderColor: 'border-[#0F4C5C]/30'
  },
  {
    id: 'K2',
    name: 'K2-UKG',
    title: 'K2-UKG',
    ageRange: '5 - 6 years',
    description: [
      "Our K2 (UKG) program prepares children aged 5 - 6 years for primary school with a strong foundation in reading, writing, math, and communication. Through interactive lessons, creative activities, and play-based learning, children gain confidence, discipline, and essential skills for lifelong learning."  ],
    features: [
      'Advanced reading skills',
      'Mathematical concepts',
      'Writing preparation',
      'Critical thinking'
    ],
    image: se4,
    color: 'text-[#0F4C5C]',
    bgColor: 'bg-[#E5EBEC]',
    borderColor: 'border-[#0F4C5C]/30'
  },
  {
    id: 'daycare',
    name: 'Daycare',
    title: 'Daycare',
    ageRange: '2 Years - 8 Years',
    description: [
  "Our Daycare facility provides a safe, caring, and homely environment for children after school hours. With trained staff, engaging activities, nutritious snacks, and a secure space, we ensure your child feels comfortable, happy, and well cared for while you are at work."   ],
    features: [
      'Full-day supervision',
      'Nutritious meals',
      'Age-appropriate activities',
      'Safe environment'
    ],
    image: se5,
    color: 'text-[#0F4C5C]',
    bgColor: 'bg-[#D8EFED]',
    borderColor: 'border-[#0F4C5C]/30'
  },
  {
    id: 'after-school',
    name: 'After School',
    title: 'After School',
    ageRange: 'School Counseling',
    description: [
     "Our After-School Counselling program provides children with guidance and emotional support in a safe, caring space. Through friendly conversations and activities, we help students build confidence, manage stress, improve social skills, and grow into happy, balanced learners."  ],
    features: [
      'Homework assistance',
      'Recreational activities',
      'Skill development',
      'Flexible schedules'
    ],
    image: se6,
    color: 'text-[#0F4C5C]',
    bgColor: 'bg-[#E5EBEC]',
    borderColor: 'border-[#0F4C5C]/30'
  },
  
];

// Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 4,
    color: [
      'bg-[#0F4C5C]/30',
      'bg-[#D8EFED]/50',
      'bg-[#E5EBEC]/50'
    ][Math.floor(Math.random() * 3)],
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.color} blur-sm`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-15, 15, -15],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Main Our Programs Component
export default function OurPrograms() {
  const [activeProgram, setActiveProgram] = useState('Junior');

  const handleProgramChange = (programId: string) => {
    setActiveProgram(programId);
  };

  const program = programsData.find(p => p.id === activeProgram);
  const colors = ['bg-[#0F4C5C]', 'bg-[#D8EFED]', 'bg-[#E5EBEC]', 'bg-[#0F4C5C]', 'bg-[#D8EFED]', 'bg-[#E5EBEC]'];
  const words = program?.title.split(' ') || [];
  const decorativeIcons = [BookOpen, Heart, Star, Zap];

  return (
    <div className="bg-gradient-to-br from-[#E5EBEC] via-white to-[#D8EFED]/30 relative overflow-hidden" style={{paddingBottom:70}}>
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-[#D8EFED]/20 to-[#0F4C5C]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-r from-[#E5EBEC]/20 to-[#D8EFED]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Additional floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-8 h-8 bg-gradient-to-r from-[#D8EFED]/40 to-[#0F4C5C]/20"
          animate={{
            rotate: [0, 360],
            borderRadius: ["0%", "50%", "0%"],
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-r from-[#E5EBEC]/40 to-[#0F4C5C]/30"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.5, 0.8, 1],
            borderRadius: ["50%", "0%", "50%"]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Additional floating particles for more dynamic background */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#0F4C5C]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-6 py-0 pb-0 relative z-10" style={{paddingTop:20}}>
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-3 mb-8 w-full"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated colorful logo/icon */}
          <div className="flex">
            {colors.map((color, index) => (
              <motion.div
                key={index}
                className={`w-2 h-8 ${color} rounded-sm ${index > 0 ? '-ml-0.5' : ''}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 32, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  height: 40,
                  transition: { duration: 0.2 }
                }}
              />
            ))}
          </div>
          
          {/* Animated title */}
          <motion.h1
            className="text-3xl font-bold text-[#0F4C5C] text-center md:text-left"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our Programs
          </motion.h1>
        </motion.div>
        
        {/* Navigation tabs */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Main program tabs */}
          <div className="flex overflow-x-auto pb-4 gap-3 mb-4 w-full justify-start md:justify-center md:flex-wrap md:overflow-visible px-2 md:px-0 [&::-webkit-scrollbar]:hidden" style={{ display:"flex",alignItems:"center",justifyContent:"center", scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {programsData.map((program) => {
              const isActive = program.id === activeProgram;
              return (
                <motion.button
                  key={program.id}
                  onClick={() => handleProgramChange(program.id)}
                  className={`shrink-0 whitespace-nowrap px-6 py-3 font-semibold rounded-lg transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? `${program.bgColor} ${program.color} border-2 ${program.borderColor} shadow-lg`
                      : 'bg-[#E5EBEC] text-[#0F4C5C] border-2 border-transparent hover:bg-[#D8EFED] hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    />
                  )}
                  <span className="relative z-10">{program.name}</span>
                </motion.button>
              );
            })}
          </div>
          
          {/* Sub-option for Mother-Toddler - only show when Toddlers is active */}
          {activeProgram === 'Junior' && (
            <motion.div
              className="ml-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* <motion.button
                className="px-4 py-2 text-[#0F4C5C] bg-[#E5EBEC] rounded-lg border border-[#0F4C5C]/20 hover:bg-[#D8EFED] transition-all duration-200 hover:shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Junior
              </motion.button> */}
            </motion.div>
          )}
        </motion.div>
        
        {/* Main content */}
        {program && (
          <motion.div
            key={activeProgram}
            className="relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Floating particles background */}
            <FloatingParticles />
            
            {/* Morphing background shapes */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-20 left-20 w-32 h-32 bg-[#D8EFED]/20 opacity-10"
                animate={{
                  borderRadius: ["50% 50% 50% 50%", "20% 80% 30% 70%", "80% 20% 70% 30%", "50% 50% 50% 50%"],
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.2, 0.8, 1]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            {/* Main grid layout - Left content, Right image */}
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10" >
              {/* Left Content */}
              <motion.div
                className="space-y-6 flex flex-col items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Age badge */}
                <motion.div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm ${program.bgColor} ${program.color} shadow-md`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <Clock size={16} />
                  {program.ageRange}
                </motion.div>
                
                {/* Animated title */}
                <div className="space-y-2">
                  <div className="text-center">
                    {words.map((word, index) => (
                      <motion.span
                        key={index}
                        className="inline-block text-3xl md:text-4xl font-bold text-[#0F4C5C] mr-3"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.4 + index * 0.15,
                          type: "spring",
                          bounce: 0.4
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Description paragraphs */}
                <div className="space-y-4 w-full text-center">
                  {program.description.map((paragraph, index) => (
                    <motion.div
                      key={index}
                      className="relative group"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className="absolute left-0 top-0 w-1 h-full bg-[#0F4C5C] rounded-full hidden"
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                      />
                      <p className="text-[#0F4C5C]/80 leading-relaxed pl-0">{paragraph}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Interactive feature icons */}
                {/* <motion.div
                  className="flex gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  {decorativeIcons.slice(0, 3).map((Icon, index) => (
                    <motion.div
                      key={index}
                      className={`w-12 h-12 ${program.bgColor} rounded-2xl flex items-center justify-center shadow-md cursor-pointer group`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 10,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        y: { duration: 2, repeat: Infinity, delay: index * 0.3 }
                      }}
                    >
                      <Icon 
                        size={20} 
                        className="text-[#0F4C5C] group-hover:scale-110 transition-transform" 
                      />
                    </motion.div>
                  ))}
                </motion.div> */}
              </motion.div>
              
              {/* Right Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Animated decorative background */}
                <motion.div
                  className="absolute -top-8 -right-8 w-full h-full z-0"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    <path
                      d="M100 0 C300 0 400 100 400 200 C400 250 350 300 300 300 L0 300 L0 100 C0 50 50 0 100 0 Z"
                      fill="#D8EFED"
                    />
                  </svg>
                </motion.div>
                
                {/* Main image container */}
                <motion.div
                  className="relative z-10 rounded-3xl overflow-hidden shadow-2xl group"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={program.image}
                    alt={`${program.title} activities`}
                    className="w-full h-85 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  
                  {/* Floating play button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="w-6 h-6 text-[#0F4C5C] ml-1" fill="currentColor" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Program icon badge */}
                  <motion.div
                    className={`absolute top-4 right-4 w-12 h-12 ${program.bgColor} rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border-2 border-white/20`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 1, type: "spring" }}
                    whileHover={{ rotate: 360 }}
                  >
                    <Users className="w-6 h-6 text-[#0F4C5C]" />
                  </motion.div>
                  
                  {/* Age range badge */}
                  <motion.div
                    className={`absolute bottom-4 left-4 ${program.bgColor} ${program.color} px-3 py-2 rounded-full text-sm backdrop-blur-sm border border-white/20 shadow-lg`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    Ages {program.ageRange}
                  </motion.div>
                </motion.div>

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#D8EFED] rounded-full opacity-60"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute -top-2 -left-2 w-6 h-6 bg-[#E5EBEC] rounded-full opacity-40"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    x: [0, 10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Footer URL */}
      {/* <motion.div
        className="fixed bottom-4 left-4 text-xs text-[#0F4C5C]/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        https://deepblueseschools.com/127
      </motion.div> */}
    </div>
  );
}