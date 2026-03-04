import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import MoodTracker from '@/components/MoodTracker.jsx';
import SelfAssessment from '@/components/SelfAssessment.jsx';

const FeaturesPage = () => {
  return (
    <>
      <Helmet>
        <title>Features - MindHaven Mental Wellness Tools</title>
        <meta
          name="description"
          content="Explore MindHaven's mental wellness features including mood tracking, self-assessment tools, and personalized insights for students."
        />
      </Helmet>

      <main className="min-h-screen py-20 md:py-32 relative bg-background">
        {/* Floating Background Shapes */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[20%] right-[5%] w-[250px] h-[250px] rounded-full bg-secondary/10 dark:bg-secondary/5 blur-3xl animate-float" />
          <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-16 md:space-y-24"
          >
            {/* Header */}
            <div className="text-center space-y-6 max-w-3xl mx-auto glass-card p-10">
              <h1 className="heading-1">
                Wellness Tools
              </h1>
              <p className="body-text">
                Interactive, beautifully designed features to help you understand and improve your mental health journey.
              </p>
            </div>

            {/* Features Content */}
            <div className="max-w-5xl mx-auto space-y-16">
              <div className="space-y-6">
                <div className="space-y-3 text-center md:text-left px-4">
                  <h2 className="heading-2">Track Your Daily Mood</h2>
                  <p className="body-text max-w-2xl">
                    Understanding your emotional patterns is the first step toward better mental wellness. 
                    Log how you're feeling each day and identify trends over time.
                  </p>
                </div>
                <MoodTracker />
              </div>

              <div className="space-y-6">
                <div className="space-y-3 text-center md:text-left px-4">
                  <h2 className="heading-2">Mental Wellness Assessment</h2>
                  <p className="body-text max-w-2xl">
                    Gain insights into your current mental health status with our guided educational tool.
                  </p>
                </div>
                <SelfAssessment />
              </div>
            </div>

            {/* Additional Resources Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto p-10 md:p-16 glass-card"
            >
              <div className="space-y-10 text-center">
                <div className="space-y-4">
                  <h2 className="heading-2">
                    Need Additional Support?
                  </h2>
                  <p className="body-text max-w-2xl mx-auto">
                    If you're experiencing a mental health crisis or need immediate support, please reach out to a professional counselor or crisis helpline. Your wellbeing is important, and help is available.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
                  <div className="p-6 rounded-[24px] bg-background/50 border border-border/50 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm">
                    <p className="heading-3 mb-2 text-lg">National Crisis Hotline</p>
                    <p className="body-text">Call or text 988<br/><span className="text-sm">(available 24/7)</span></p>
                  </div>
                  <div className="p-6 rounded-[24px] bg-background/50 border border-border/50 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm">
                    <p className="heading-3 mb-2 text-lg">Crisis Text Line</p>
                    <p className="body-text">Text "HELLO" to 741741<br/><span className="text-sm">(available 24/7)</span></p>
                  </div>
                  <div className="p-6 rounded-[24px] bg-background/50 border border-border/50 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm">
                    <p className="heading-3 mb-2 text-lg">Campus Counseling</p>
                    <p className="body-text">Contact your school's counseling center</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default FeaturesPage;