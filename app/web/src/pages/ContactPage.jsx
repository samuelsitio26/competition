import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send, CheckCircle2, Mail, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      // Store in localStorage
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      const newSubmission = {
        ...formData,
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      };
      submissions.push(newSubmission);
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      // Show success state
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Show toast
      toast({
        title: 'Message Sent Successfully! 🎉',
        description: 'Thank you for reaching out. We\'ll get back to you soon.',
      });

      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - MindHaven Support</title>
        <meta
          name="description"
          content="Get in touch with MindHaven. We're here to help with any questions about mental wellness support for students."
        />
      </Helmet>

      <main className="min-h-screen py-20 md:py-32 relative bg-background">
        {/* Floating Background Shapes */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[15%] left-[10%] w-[250px] h-[250px] rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl animate-float" />
          <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-secondary/10 dark:bg-secondary/5 blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-5xl mx-auto space-y-16"
          >
            {/* Header */}
            <div className="text-center space-y-6 glass-card p-10">
              <h1 className="heading-1">
                Get in Touch
              </h1>
              <p className="body-text max-w-2xl mx-auto">
                Have questions, feedback, or need support? We're here to listen and help. Your voice matters to us.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Contact Form - Floating Card Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="lg:col-span-2 p-8 md:p-12 glass-card shadow-2xl lg:-mt-16 relative z-20"
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 space-y-6"
                  >
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-12 h-12 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="heading-2">Message Sent!</h3>
                      <p className="body-text">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="body-text font-medium text-foreground">
                          Your Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-14 rounded-xl body-text text-foreground bg-input border-border focus:border-primary focus:ring-primary/20 transition-all shadow-sm backdrop-blur-sm"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="email" className="body-text font-medium text-foreground">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-14 rounded-xl body-text text-foreground bg-input border-border focus:border-primary focus:ring-primary/20 transition-all shadow-sm backdrop-blur-sm"
                        />
                      </div>

                      <div className="space-y-3 md:col-span-2">
                        <Label htmlFor="message" className="body-text font-medium text-foreground">
                          Your Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us what's on your mind..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="resize-none rounded-xl body-text text-foreground bg-input border-border focus:border-primary focus:ring-primary/20 transition-all shadow-sm p-4 backdrop-blur-sm"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto min-w-[200px] h-14 rounded-xl gradient-btn text-base font-medium"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-3" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* Additional Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="space-y-6"
              >
                <div className="p-8 glass-card hover:shadow-xl transition-shadow">
                  <div className="flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-[20px] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-inner">
                      <Mail className="w-7 h-7 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="heading-3 text-xl">Email Us</h3>
                      <p className="body-text">support@mindhaven.com</p>
                      <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 glass-card hover:shadow-xl transition-shadow">
                  <div className="flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-[20px] bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center shadow-inner">
                      <MessageSquare className="w-7 h-7 text-secondary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="heading-3 text-xl">Crisis Support</h3>
                      <p className="body-text">Call or text 988</p>
                      <p className="text-sm text-muted-foreground">Available 24/7 for immediate help</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;