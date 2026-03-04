import React from 'react';
import { motion } from 'framer-motion';

const HeroIllustration = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-background dark:bg-background flex items-center justify-center opacity-80">
      <svg
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Soft Blue Background Blob */}
        <motion.path
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          d="M1200 200C1350 250 1450 400 1400 600C1350 800 1100 900 900 850C700 800 600 600 650 400C700 200 950 100 1200 200Z"
          fill="hsl(var(--secondary))"
        />
        
        {/* Sage Green Background Blob */}
        <motion.path
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
          d="M200 600C50 550 -50 400 0 200C50 0 300 -100 500 -50C700 0 800 200 750 400C700 600 450 700 200 600Z"
          fill="hsl(var(--primary))"
        />

        {/* Flowing Curves */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          d="M-100 400C200 300 400 600 700 500C1000 400 1200 700 1500 600"
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5 }}
          d="M-100 500C250 600 450 300 750 400C1050 500 1250 200 1500 300"
          stroke="hsl(var(--secondary))"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Geometric Circles */}
        <motion.circle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          cx="1100"
          cy="250"
          r="40"
          fill="hsl(var(--primary))"
        />
        <motion.circle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          cx="300"
          cy="650"
          r="60"
          fill="hsl(var(--secondary))"
        />
        <motion.circle
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          cx="800"
          cy="150"
          r="20"
          fill="hsl(var(--foreground))"
        />
      </svg>
    </div>
  );
};

export default HeroIllustration;