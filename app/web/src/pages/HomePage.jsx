import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Brain, BookOpen, ArrowRight, Sparkles, Shield, Users, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroIllustration from '@/components/HeroIllustration.jsx';
import BentoGrid from '@/components/BentoGrid.jsx';

const HomePage = () => {
  const features = [
    {
      content: (
        <>
          <div className="w-16 h-16 rounded-[20px] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
            <Heart className="w-8 h-8 text-primary fill-primary/20" />
          </div>
          <h3 className="heading-3 mb-3">Mood Tracker</h3>
          <p className="body-text">
            Track your daily emotions and identify patterns in your mental wellness journey with our intuitive interface.
          </p>
        </>
      ),
      className: "lg:col-span-2 lg:row-span-2",
    },
    {
      content: (
        <>
          <div className="w-14 h-14 rounded-[16px] bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
            <Brain className="w-7 h-7 text-secondary" />
          </div>
          <h3 className="font-heading text-[22px] font-medium mb-2 text-foreground">Self-Assessment</h3>
          <p className="body-text text-sm">
            Take guided assessments to better understand your mental health.
          </p>
        </>
      ),
    },
    {
      content: (
        <>
          <div className="w-14 h-14 rounded-[16px] bg-gradient-to-br from-primary/10 to-accent/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
            <BookOpen className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-heading text-[22px] font-medium mb-2 text-foreground">Resources</h3>
          <p className="body-text text-sm">
            Access curated mental health resources and professional support.
          </p>
        </>
      ),
    },
    {
      content: (
        <>
          <div className="w-14 h-14 rounded-[16px] bg-gradient-to-br from-secondary/30 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
            <Activity className="w-7 h-7 text-secondary" />
          </div>
          <h3 className="font-heading text-[22px] font-medium mb-2 text-foreground">Daily Habits</h3>
          <p className="body-text text-sm">
            Build and maintain positive routines for your wellbeing.
          </p>
        </>
      ),
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Safe & Confidential',
      description: 'Your privacy matters. All your data stays secure and private.',
    },
    {
      icon: Users,
      title: 'Student-Focused',
      description: 'Designed specifically for the unique challenges students face.',
    },
    {
      icon: Sparkles,
      title: 'Evidence-Based',
      description: 'Built on proven mental wellness practices and research.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Helmet>
        <title>MindHaven - Mental Wellness Support for Students</title>
        <meta
          name="description"
          content="MindHaven provides accessible mental health support, mood tracking, self-assessments, and resources designed specifically for students' wellbeing."
        />
      </Helmet>

      <main className="relative">
        {/* Floating Background Shapes */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl animate-float" />
          <div className="absolute top-[40%] right-[10%] w-[250px] h-[250px] rounded-full bg-secondary/10 dark:bg-secondary/5 blur-3xl animate-float-delayed" />
          <div className="absolute bottom-[20%] left-[20%] w-[200px] h-[200px] rounded-full bg-accent/10 dark:bg-accent/5 blur-3xl animate-float" />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <HeroIllustration />
          <div className="absolute inset-0 bg-background/30 dark:bg-background/50 backdrop-blur-[2px] z-0" />

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto text-center space-y-8 glass-card p-10 md:p-16"
            >
              <h1 className="heading-1">
                Welcome to MindHaven
              </h1>
              <p className="body-text max-w-3xl mx-auto text-lg">
                Your safe space for mental wellness, designed to support students through every challenge with compassion and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button asChild size="lg" className="rounded-xl text-base px-8 py-6 h-auto gradient-btn">
                  <Link to="/features">
                    Explore Features
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl text-base px-8 py-6 h-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 border-0 transition-all shadow-md hover:shadow-lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-background/20"
            >
              <div className="w-1.5 h-3 bg-primary rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section (Bento Grid) */}
        <section className="py-20 md:py-32 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="space-y-16"
            >
              <motion.div variants={itemVariants} className="text-center space-y-6 max-w-3xl mx-auto">
                <h2 className="heading-2">
                  Tools for Your Wellness Journey
                </h2>
                <p className="body-text">
                  Discover beautifully designed features to help you understand, track, and improve your mental health every day.
                </p>
              </motion.div>

              <div className="max-w-6xl mx-auto">
                <BentoGrid items={features} />
              </div>

              <motion.div variants={itemVariants} className="text-center pt-8">
                <Button asChild size="lg" className="rounded-xl gradient-btn px-8 py-6 h-auto text-base">
                  <Link to="/features">
                    Get Started Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-32 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="space-y-16 glass-card p-10 md:p-16"
            >
              <motion.div variants={itemVariants} className="text-center space-y-6 max-w-3xl mx-auto">
                <h2 className="heading-2">
                  Why Choose MindHaven?
                </h2>
                <p className="body-text">
                  We're committed to providing the best mental wellness support tailored for the student experience.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="text-center space-y-5 p-8 rounded-[24px] bg-background/40 border border-border/50 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-16 h-16 rounded-[20px] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto shadow-inner">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="heading-3">
                        {benefit.title}
                      </h3>
                      <p className="body-text">
                        {benefit.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center space-y-10 p-10 md:p-16 glass-card relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />
              <h2 className="heading-2">
                Ready to Start Your Wellness Journey?
              </h2>
              <p className="body-text max-w-2xl mx-auto">
                Join thousands of students who are taking control of their mental health with MindHaven's supportive tools and resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="rounded-xl gradient-btn px-8 py-6 h-auto text-base">
                  <Link to="/features">Start Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl bg-background/40 backdrop-blur-sm border-border/50 px-8 py-6 h-auto text-base text-foreground hover:bg-background/60">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;