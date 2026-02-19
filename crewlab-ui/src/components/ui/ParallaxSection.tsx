import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxSection({ children, className = "", speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

interface ParallaxBackgroundProps {
  className?: string;
}

export function ParallaxBackground({ className = "" }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Large gradient orb - moves slower */}
      <motion.div
        className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full opacity-30"
        style={{ 
          y: y1,
          rotate: rotate1,
          scale,
          background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 70%)"
        }}
      />
      
      {/* Medium gradient orb - moves faster in opposite direction */}
      <motion.div
        className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-25"
        style={{ 
          y: y2,
          rotate: rotate2,
          background: "radial-gradient(circle, hsl(250 70% 60% / 0.12) 0%, transparent 70%)"
        }}
      />
      
      {/* Small accent orb */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full opacity-20"
        style={{ 
          y: y3,
          background: "radial-gradient(circle, hsl(var(--accent) / 0.2) 0%, transparent 70%)"
        }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-[15%] w-4 h-4 rounded-full bg-accent/10"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 80]) }}
      />
      <motion.div
        className="absolute top-40 right-[20%] w-3 h-3 rounded-full bg-accent/15"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 120]) }}
      />
      <motion.div
        className="absolute bottom-32 left-[25%] w-5 h-5 rotate-45 bg-accent/8"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -60]) }}
      />
    </div>
  );
}
