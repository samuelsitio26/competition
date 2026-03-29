import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = [
    { size: 'w-4 h-4', color: 'bg-primary/30', top: '10%', left: '5%', delay: 0 },
    { size: 'w-6 h-6', color: 'bg-accent/25', top: '20%', right: '8%', delay: 0.5 },
    { size: 'w-3 h-3', color: 'bg-secondary/35', top: '60%', left: '12%', delay: 1 },
    { size: 'w-5 h-5', color: 'bg-primary/20', top: '75%', right: '15%', delay: 1.5 },
    { size: 'w-8 h-8', color: 'bg-accent/15', top: '45%', left: '85%', delay: 0.8 },
    { size: 'w-3 h-3', color: 'bg-secondary/30', top: '35%', left: '3%', delay: 2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${el.size} ${el.color} blur-[1px]`}
          style={{ top: el.top, left: el.left, right: el.right }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 10, 0, -10, 0],
            scale: [1, 1.2, 1, 0.9, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: el.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
