import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialCarousel = ({ testimonials = [] }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const defaultTestimonials = testimonials.length > 0 ? testimonials : [
    {
      quote: 'MindHaven membantu saya memahami pola emosi selama semester. Fitur mood tracker-nya sangat intuitif dan desainnya bikin betah.',
      name: 'Rina Safitri',
      role: 'Mahasiswa Psikologi',
      avatar: null,
    },
    {
      quote: 'Self-assessment di MindHaven membuat saya sadar pentingnya kesehatan mental. Tampilannya modern dan mudah digunakan.',
      name: 'Budi Santoso',
      role: 'Mahasiswa Teknik Informatika',
      avatar: null,
    },
    {
      quote: 'Desain website ini sangat menenangkan. Warna dan tata letaknya membuat saya merasa aman untuk mengeksplorasi fitur-fiturnya.',
      name: 'Anisa Putri',
      role: 'Mahasiswa Desain Komunikasi Visual',
      avatar: null,
    },
    {
      quote: 'Sebagai mahasiswa yang sering merasa overwhelmed, MindHaven memberikan ruang aman untuk refleksi diri. Love the UI!',
      name: 'Dwi Prasetyo',
      role: 'Mahasiswa Manajemen',
      avatar: null,
    },
  ];

  const items = defaultTestimonials;

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const item = items[current];

  return (
    <div className="relative w-full overflow-hidden glass-card p-8 md:p-12">
      {/* Quote decoration */}
      <div className="absolute top-6 left-8 opacity-10">
        <Quote className="w-20 h-20 text-primary" />
      </div>

      <div className="relative min-h-[280px] flex items-center justify-center">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-12"
          >
            <p className="body-text text-lg md:text-xl leading-relaxed max-w-3xl mb-8 italic">
              "{item.quote}"
            </p>
            <div className="flex items-center gap-4">
              {item.avatar ? (
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                  <span className="font-heading font-bold text-primary text-lg">
                    {item.name.charAt(0)}
                  </span>
                </div>
              )}
              <div className="text-left">
                <p className="font-heading font-semibold text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-border/50 bg-background/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>

        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-border/50 bg-background/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
