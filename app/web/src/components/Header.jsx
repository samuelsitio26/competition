import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartPulse, Sun, Moon, Home, Info, Layers3, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider.jsx';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Features', path: '/features', icon: Layers3 },
    { name: 'Contact', path: '/contact', icon: MessageCircle },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-card/80 backdrop-blur-md border-b border-border/50 shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-primary/20">
              <HeartPulse className="w-5 h-5 text-primary" />
            </div>
            <span className="font-heading text-xl md:text-2xl font-bold text-foreground tracking-wide">
              Mind<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Haven</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3 rounded-full border border-border/60 bg-background/70 px-3 py-2 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-foreground/80 hover:bg-muted/60 hover:text-primary'
                }`}
              >
                <link.icon className="h-4 w-4" />
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions (Theme Toggle + Mobile Menu) */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full hover:bg-muted/50 transition-colors duration-300 flex items-center justify-center border border-transparent hover:border-border/60"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )}
              </motion.div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl hover:bg-muted/50 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
              style={{ top: '64px' }}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-lg border-b border-border/50 shadow-lg"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-heading font-medium transition-all duration-300 ${
                      isActive(link.path)
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/80 hover:bg-muted/50 hover:text-primary'
                    }`}
                  >
                    <link.icon className="h-4 w-4" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;