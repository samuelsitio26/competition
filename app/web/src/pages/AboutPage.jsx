import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Target, Lightbulb, Users, Shield, Sparkles } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach mental health with empathy, understanding, and genuine care for every student.',
    },
    {
      icon: Shield,
      title: 'Privacy',
      description: 'Your mental health journey is personal. We protect your data and respect your confidentiality.',
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Mental health support should be available to everyone, anytime, anywhere.',
    },
    {
      icon: Sparkles,
      title: 'Evidence-Based',
      description: 'Our tools and resources are grounded in scientific research and proven practices.',
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
        <title>About MindHaven - Our Mission & Values</title>
        <meta
          name="description"
          content="Learn about MindHaven's mission to provide accessible mental health support for students. Discover our values, vision, and commitment to student wellness."
        />
      </Helmet>

      <main className="min-h-screen bg-background relative">
        {/* Floating Background Shapes */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[15%] right-[10%] w-[250px] h-[250px] rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl animate-float" />
          <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-secondary/10 dark:bg-secondary/5 blur-3xl animate-float-delayed" />
        </div>

        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto text-center space-y-8 glass-card p-10 md:p-16"
            >
              <h1 className="heading-1">
                About MindHaven
              </h1>
              <p className="body-text max-w-2xl mx-auto">
                Empowering students to prioritize their mental wellness through accessible, compassionate, and beautifully designed support tools.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-32 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="max-w-4xl mx-auto space-y-20"
            >
              <motion.div variants={itemVariants} className="space-y-8 glass-card p-8 md:p-12">
                <div className="flex flex-col items-center gap-6 text-center">
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center shadow-inner">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="heading-2">Our Mission</h2>
                </div>
                <p className="body-text text-center max-w-3xl mx-auto">
                  MindHaven exists to break down barriers to mental health support for students. We believe that every student deserves access to tools and resources that help them understand, track, and improve their mental wellness. Our mission is to create a safe, judgment-free space where students can take proactive steps toward better mental health.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-8 glass-card p-8 md:p-12">
                <div className="flex flex-col items-center gap-6 text-center">
                  <div className="w-20 h-20 rounded-3xl bg-secondary/20 flex items-center justify-center shadow-inner">
                    <Lightbulb className="w-10 h-10 text-secondary" />
                  </div>
                  <h2 className="heading-2">Our Vision</h2>
                </div>
                <p className="body-text text-center max-w-3xl mx-auto">
                  We envision a world where mental health is treated with the same importance as physical health, where students feel empowered to seek help without stigma, and where technology serves as a bridge to better wellbeing. Through MindHaven, we're building a future where mental wellness is accessible, understood, and prioritized by every student.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-32 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="space-y-16"
            >
              <motion.div variants={itemVariants} className="text-center space-y-6 glass-card p-10 max-w-3xl mx-auto">
                <h2 className="heading-2">Our Values</h2>
                <p className="body-text max-w-2xl mx-auto">
                  These core principles guide everything we do at MindHaven
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="p-8 rounded-[32px] bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="heading-3">{value.title}</h3>
                          <p className="body-text">{value.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Mental Health Matters Section */}
        <section className="py-20 md:py-32 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="max-w-4xl mx-auto space-y-12 glass-card p-10 md:p-16"
            >
              <motion.div variants={itemVariants} className="text-center space-y-6">
                <h2 className="heading-2">
                  Why Mental Health Matters
                </h2>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6 body-text">
                <p>
                  Student life comes with unique challenges: academic pressure, social dynamics, financial stress, and the transition to independence. These factors can significantly impact mental health, yet many students struggle in silence due to stigma, lack of resources, or simply not knowing where to start.
                </p>
                <p>
                  Research shows that mental health directly affects academic performance, relationships, and overall quality of life. When students prioritize their mental wellness, they're better equipped to handle stress, maintain healthy relationships, and achieve their goals.
                </p>
                <p>
                  MindHaven recognizes that seeking help is a sign of strength, not weakness. We're here to provide the tools, resources, and support that make mental wellness accessible and achievable for every student. Whether you're managing daily stress or facing more significant challenges, you deserve support—and we're here to help you find it.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-10 rounded-[2rem] bg-gradient-to-r from-primary/10 to-accent/10 border border-border/50 shadow-sm relative overflow-hidden"
              >
                <div className="absolute -left-4 -top-4 text-primary/20 font-serif text-9xl leading-none">"</div>
                <p className="text-center heading-3 relative z-10 italic">
                  Taking care of your mental health is not a luxury—it's a necessity. You matter, your wellbeing matters, and you deserve support.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;