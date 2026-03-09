import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Heart,
  Brain,
  BookOpen,
  ArrowRight,
  Sparkles,
  Shield,
  Users,
  Activity,
  Trophy,
  Palette,
  Gauge,
  Accessibility,
  CheckCircle2,
} from 'lucide-react';
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

  const judgingCriteria = [
    {
      icon: Palette,
      title: 'Visual & Brand Identity',
      points: 'Komposisi warna, tipografi, dan konsistensi identitas',
    },
    {
      icon: Gauge,
      title: 'UX & Interactivity',
      points: 'Navigasi, micro-interaction, serta flow pengguna',
    },
    {
      icon: Accessibility,
      title: 'Accessibility & Responsiveness',
      points: 'Nyaman dipakai di desktop dan mobile',
    },
    {
      icon: Trophy,
      title: 'Innovation & Relevance',
      points: 'Fitur bernilai, relevan dengan problem statement',
    },
  ];

  const heroStats = [
    { label: 'Design Direction', value: 'Bold + Calm' },
    { label: 'Framework', value: 'React + Tailwind' },
    { label: 'Interaction', value: 'Motion Driven' },
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
        <div className="fixed inset-0 -z-10 hero-mesh" />
        <div className="fixed inset-0 -z-10 grid-noise opacity-60" />

        {/* Floating Background Shapes */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl animate-float" />
          <div className="absolute top-[40%] right-[10%] w-[250px] h-[250px] rounded-full bg-secondary/15 dark:bg-secondary/10 blur-3xl animate-float-delayed" />
          <div className="absolute bottom-[20%] left-[20%] w-[200px] h-[200px] rounded-full bg-accent/15 dark:bg-accent/10 blur-3xl animate-float" />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <HeroIllustration />
          <div className="absolute inset-0 bg-background/20 dark:bg-background/45 backdrop-blur-[2px] z-0" />

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-5xl mx-auto text-center space-y-8 section-shell p-8 md:p-14"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground">
                <Trophy className="h-4 w-4 text-primary" />
                Web Design Competition Ready
              </div>
              <h1 className="heading-1">
                MindHaven: Ruang Aman dengan Desain yang Bernilai
              </h1>
              <p className="body-text max-w-3xl mx-auto text-lg">
                Website ini dirancang untuk unggul pada aspek visual, pengalaman pengguna, dan kejelasan value. Fokus kami adalah membuat dukungan kesehatan mental terasa modern, manusiawi, dan mudah dijangkau mahasiswa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button asChild size="lg" className="rounded-xl text-base px-8 py-6 h-auto gradient-btn">
                  <Link to="/features">
                    Lihat Fitur Utama
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl text-base px-8 py-6 h-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 border-0 transition-all shadow-md hover:shadow-lg">
                  <Link to="/about">Pelajari Konsep</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <p className="text-xs tracking-wide uppercase text-muted-foreground">{stat.label}</p>
                    <p className="mt-1 font-heading text-lg text-foreground">{stat.value}</p>
                  </div>
                ))}
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

        {/* Judging Criteria Section */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto section-shell p-8 md:p-12 space-y-10">
              <div className="max-w-3xl space-y-4">
                <h2 className="heading-2">Penyesuaian Dengan Ketentuan Penilaian</h2>
                <p className="body-text">
                  Struktur halaman dan visual kami arahkan untuk menjawab poin penilaian lomba: estetika, UX, aksesibilitas, dan inovasi fitur yang relevan.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {judgingCriteria.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="stat-card">
                      <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-heading text-xl text-foreground">{item.title}</h3>
                      <p className="body-text mt-2 text-sm">{item.points}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
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
                  Fitur Kunci untuk Pengalaman yang Berdampak
                </h2>
                <p className="body-text">
                  Setiap modul diposisikan agar mudah dipahami juri dan pengguna: jelas manfaatnya, mudah diakses, dan kuat secara visual.
                </p>
              </motion.div>

              <div className="max-w-6xl mx-auto">
                <BentoGrid items={features} />
              </div>

              <motion.div variants={itemVariants} className="text-center pt-8">
                <Button asChild size="lg" className="rounded-xl gradient-btn px-8 py-6 h-auto text-base">
                  <Link to="/features">
                    Coba Interaksi
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
                  Kenapa MindHaven Layak Dipilih?
                </h2>
                <p className="body-text">
                  Kami menggabungkan pendekatan human-centered design, insight psikologi, dan implementasi web modern.
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

              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
                <div className="stat-card flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-heading text-lg text-foreground">Storytelling yang Kuat</h4>
                    <p className="body-text text-sm mt-1">Alur dari hero hingga CTA dirancang untuk menyampaikan nilai produk secara cepat.</p>
                  </div>
                </div>
                <div className="stat-card flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-heading text-lg text-foreground">Kode Siap Iterasi</h4>
                    <p className="body-text text-sm mt-1">Mengandalkan komponen reusable Tailwind untuk mempercepat polishing sebelum presentasi.</p>
                  </div>
                </div>
              </motion.div>
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
                Siap Finalisasi untuk Hari Penjurian?
              </h2>
              <p className="body-text max-w-2xl mx-auto">
                Lanjutkan ke halaman fitur dan kontak untuk melihat interaksi form, navigasi, serta konsistensi visual yang siap dipresentasikan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="rounded-xl gradient-btn px-8 py-6 h-auto text-base">
                  <Link to="/features">Buka Demo Fitur</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl bg-background/40 backdrop-blur-sm border-border/50 px-8 py-6 h-auto text-base text-foreground hover:bg-background/60">
                  <Link to="/contact">Hubungi Tim</Link>
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