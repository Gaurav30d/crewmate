import { motion } from "framer-motion";

const doodles = [
  // Stars
  { type: "star", x: "5%", y: "15%", size: 24, rotation: 15, delay: 0 },
  { type: "star", x: "92%", y: "25%", size: 18, rotation: -10, delay: 0.5 },
  { type: "star", x: "15%", y: "75%", size: 20, rotation: 30, delay: 1 },
  { type: "star", x: "85%", y: "80%", size: 16, rotation: -20, delay: 1.5 },
  
  // Squiggles
  { type: "squiggle", x: "10%", y: "40%", size: 40, rotation: 45, delay: 0.2 },
  { type: "squiggle", x: "88%", y: "55%", size: 35, rotation: -30, delay: 0.7 },
  
  // Circles
  { type: "circle", x: "20%", y: "20%", size: 12, rotation: 0, delay: 0.3 },
  { type: "circle", x: "78%", y: "35%", size: 8, rotation: 0, delay: 0.8 },
  { type: "circle", x: "8%", y: "60%", size: 10, rotation: 0, delay: 1.2 },
  { type: "circle", x: "90%", y: "70%", size: 14, rotation: 0, delay: 1.7 },
  
  // Hearts
  { type: "heart", x: "25%", y: "85%", size: 16, rotation: -15, delay: 0.4 },
  { type: "heart", x: "75%", y: "10%", size: 14, rotation: 20, delay: 0.9 },
  
  // Arrows
  { type: "arrow", x: "35%", y: "12%", size: 28, rotation: 25, delay: 0.6 },
  { type: "arrow", x: "65%", y: "88%", size: 24, rotation: -35, delay: 1.1 },
  
  // Dots cluster
  { type: "dots", x: "45%", y: "8%", size: 30, rotation: 0, delay: 0.1 },
  { type: "dots", x: "55%", y: "92%", size: 25, rotation: 0, delay: 0.6 },
];

function Star({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function Squiggle({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 0.4} viewBox="0 0 40 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M2 8c4-6 8 6 12 0s8 6 12 0 8 6 12 0" />
    </svg>
  );
}

function Circle({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="6" r="5" />
    </svg>
  );
}

function Heart({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function Arrow({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 28 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 8h22M18 2l6 6-6 6" />
    </svg>
  );
}

function Dots({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 0.4} viewBox="0 0 30 12" fill="currentColor">
      <circle cx="4" cy="6" r="2" />
      <circle cx="15" cy="6" r="2" />
      <circle cx="26" cy="6" r="2" />
    </svg>
  );
}

function DoodleElement({ type, size }: { type: string; size: number }) {
  switch (type) {
    case "star":
      return <Star size={size} />;
    case "squiggle":
      return <Squiggle size={size} />;
    case "circle":
      return <Circle size={size} />;
    case "heart":
      return <Heart size={size} />;
    case "arrow":
      return <Arrow size={size} />;
    case "dots":
      return <Dots size={size} />;
    default:
      return null;
  }
}

export function DoodleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {doodles.map((doodle, index) => (
        <motion.div
          key={index}
          className="absolute text-accent/10 dark:text-accent/8"
          style={{
            left: doodle.x,
            top: doodle.y,
            rotate: doodle.rotation,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { delay: doodle.delay, duration: 0.5 },
            scale: { delay: doodle.delay, duration: 0.5, type: "spring" },
            y: { 
              delay: doodle.delay + 0.5, 
              duration: 4 + index * 0.3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            },
          }}
        >
          <DoodleElement type={doodle.type} size={doodle.size} />
        </motion.div>
      ))}
    </div>
  );
}
