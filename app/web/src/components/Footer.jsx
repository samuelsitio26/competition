import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative mt-auto overflow-hidden bg-card transition-colors duration-300">
      {/* Background Gradient Accent */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Branding */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-sm">
                  <Heart className="w-6 h-6 text-primary fill-primary/20" />
                </div>
                <span className="font-heading text-2xl font-bold text-foreground tracking-wide">
                  Mind<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Haven</span>
                </span>
              </div>
              <p className="body-text">
                Supporting student mental wellness through accessible resources, self-care tools, and compassionate guidance.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <span className="font-heading text-xl font-semibold text-foreground">Quick Links</span>
              <nav className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="body-text hover:text-primary transition-colors duration-300 w-fit relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <span className="font-heading text-xl font-semibold text-foreground">Get in Touch</span>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="body-text">support@mindhaven.com</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="body-text">1-800-MIND-HELP</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="body-text">Available 24/7 for students</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="body-text text-center">
              © {currentYear} MindHaven. All rights reserved. Your mental health matters.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;