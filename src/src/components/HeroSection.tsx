import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SchoolImageSwiper } from './SchoolImageSwiper';

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image Swiper */}
      <div className="absolute inset-0 z-0">
        <SchoolImageSwiper />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="block text-secondary mt-2">
                Pranav Global School
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Nurturing Excellence, Inspiring Innovation, Building Tomorrow's Leaders
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Explore Our Programs
              </button>
              <button className="border-2 border-white/80 hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                <Play size={20} />
                Take a Virtual Tour
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/80 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}