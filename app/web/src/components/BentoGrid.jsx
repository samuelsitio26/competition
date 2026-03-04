import React from 'react';
import { motion } from 'framer-motion';

const BentoGrid = ({ items = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-6">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`group glass-card p-8 hover:shadow-xl transition-all duration-300 cursor-default ${item.className || ''}`}
        >
          {item.content}
        </motion.div>
      ))}
    </div>
  );
};

export default BentoGrid;
