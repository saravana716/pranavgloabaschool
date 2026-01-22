import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsMobile } from "./ui/use-mobile";

export function AnimatedBackground() {
  console.log("ppppppppppp");
  
  const isMobile = useIsMobile();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [mounted, setMounted] = useState(false);

  // Call all hooks unconditionally at the top level
  const spotlightX = useTransform(mouseX, (value) => value - 250);
  const spotlightY = useTransform(mouseY, (value) => value - 250);
  const orbX1 = useTransform(mouseX, (value) => value * 0.05);
  const orbY1 = useTransform(mouseY, (value) => value * 0.05);
  const orbX2 = useTransform(mouseX, (value) => value * 0.08);
  const orbY2 = useTransform(mouseY, (value) => value * 0.08);

  useEffect(() => {
    setMounted(true);
    if (isMobile) return; // Skip mouse listeners on mobile

    let animationFrameId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY, isMobile]);

  if (isMobile) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 20%, #d4fc79 40%, #a1c4fd 60%, #fbc2eb 80%, #96e6a1 100%)",
            backgroundSize: "cover",
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base animated gradient background - Light colors */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 20%, #d4fc79 40%, #a1c4fd 60%, #fbc2eb 80%, #96e6a1 100%)",
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Overlay gradient for depth - Light tones */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 20% 50%, rgba(255,220,240,0.5) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(200,230,255,0.5) 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cursor spotlight effect */}
      {mounted && (
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)",
            x: spotlightX,
            y: spotlightY,
          }}
        />
      )}

      {/* Animated gradient orbs with milder colors */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{
          background: "linear-gradient(135deg, #a8b5ff 0%, #c9b3e6 100%)",
          top: "10%",
          left: "10%",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{
          background: "linear-gradient(135deg, #ffc9e5 0%, #ffb3c1 100%)",
          top: "50%",
          right: "10%",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-72 h-72 rounded-full opacity-12 blur-3xl"
        style={{
          background: "linear-gradient(135deg, #b3e5fc 0%, #b3f5ff 100%)",
          bottom: "15%",
          left: "15%",
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glowing orbs that follow cursor - milder */}
      {mounted && (
        <>
          <motion.div
            className="absolute w-40 h-40 rounded-full opacity-10 blur-2xl"
            style={{
              background: "radial-gradient(circle, #ffe8b3 0%, transparent 70%)",
              x: orbX1,
              y: orbY1,
            }}
          />
          <motion.div
            className="absolute w-32 h-32 rounded-full opacity-8 blur-xl"
            style={{
              background: "radial-gradient(circle, #ffd9ec 0%, transparent 70%)",
              x: orbX2,
              y: orbY2,
            }}
          />
        </>
      )}

      {/* Animated flowing lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a8b5ff" stopOpacity="0.3">
              <animate attributeName="stop-opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#c9b3e6" stopOpacity="0.1">
              <animate attributeName="stop-opacity" values="0.1;0.5;0.1" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffc9e5" stopOpacity="0.3">
              <animate attributeName="stop-opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#b3e5fc" stopOpacity="0.1">
              <animate attributeName="stop-opacity" values="0.1;0.5;0.1" dur="5s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        
        {/* Flowing curved lines */}
        <motion.path
          d="M 0 200 Q 400 100, 800 200 T 1600 200"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.6, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.path
          d="M 1600 400 Q 1200 300, 800 400 T 0 400"
          stroke="url(#lineGradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.6, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        <motion.path
          d="M 800 0 Q 600 300, 400 600"
          stroke="url(#lineGradient1)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </svg>

      {/* Diagonal animated lines with transitions */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px"
          style={{
            width: "150%",
            top: `${i * 15 + 10}%`,
            left: "-25%",
            background: `linear-gradient(90deg, transparent, rgba(${180 + i * 10}, ${200 + i * 5}, 255, 0.3), transparent)`,
            transform: `rotate(-${i * 2 + 5}deg)`,
          }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5,
          }}
        />
      ))}

      {/* Horizontal flowing lines */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`h-line-${i}`}
          className="absolute w-full h-px"
          style={{
            top: `${i * 25 + 12}%`,
            background: `linear-gradient(90deg, transparent, rgba(${200 + i * 8}, ${180 + i * 10}, 255, 0.25), transparent)`,
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Enhanced floating particles with glow - reduced */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: "0 0 8px rgba(200,220,255,0.6)",
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Sparkle effects - subtle */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  );
}
