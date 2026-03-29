import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Brain,
  ArrowRight,
  Sparkles,
  Users,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroIllustration from '@/components/HeroIllustration.jsx';
import AnimatedSection from '@/components/AnimatedSection.jsx';
import StatsSection from '@/components/StatsSection.jsx';
import TestimonialCarousel from '@/components/TestimonialCarousel.jsx';
import ImageShowcase from '@/components/ImageShowcase.jsx';
import FloatingElements from '@/components/FloatingElements.jsx';

const HomePage = () => {
  const [isHappy, setIsHappy] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHappy((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const mentalHealthFacts = [
    {
      icon: AlertTriangle,
      stat: '1 dari 5',
      title: 'Mahasiswa Mengalami Gangguan Mental',
      description: 'Menurut WHO, sekitar 20% remaja dan dewasa muda di seluruh dunia mengalami gangguan kesehatan mental setiap tahunnya.',
    },
    {
      icon: TrendingUp,
      stat: '71%',
      title: 'Peningkatan Stres Akademik',
      description: 'Studi menunjukkan 71% mahasiswa melaporkan peningkatan stres dan kecemasan selama masa perkuliahan.',
    },
    {
      icon: Users,
      stat: '75%',
      title: 'Tidak Mencari Bantuan',
      description: 'Sekitar 75% orang dengan gangguan mental di negara berkembang tidak mendapatkan penanganan yang memadai.',
    },
    {
      icon: Heart,
      stat: '50%',
      title: 'Dimulai Sebelum Usia 14',
      description: 'Separuh dari semua gangguan kesehatan mental dimulai pada usia 14 tahun, namun sebagian besar tidak terdeteksi.',
    },
  ];

  const warningSignals = [
    'Perubahan pola tidur yang drastis (insomnia atau tidur berlebihan)',
    'Menarik diri dari aktivitas sosial dan teman-teman',
    'Penurunan drastis dalam performa akademik',
    'Perasaan putus asa atau tidak berharga yang berkepanjangan',
    'Perubahan nafsu makan yang signifikan',
    'Kesulitan berkonsentrasi dan membuat keputusan',
    'Mudah marah atau tersinggung tanpa alasan jelas',
    'Kehilangan minat pada hal-hal yang biasa dinikmati',
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
        <title>MindHaven - Kesehatan Mental untuk Mahasiswa</title>
        <meta
          name="description"
          content="MindHaven menyediakan informasi kesehatan mental yang lengkap dan mudah dipahami untuk mahasiswa. Kenali, pahami, dan jaga kesehatan mentalmu."
        />
      </Helmet>

      <main className="relative">
        <div className="fixed inset-0 -z-10 hero-mesh" />
        <div className="fixed inset-0 -z-10 grid-noise opacity-60" />
        <FloatingElements />

        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl animate-float" />
          <div className="absolute top-[40%] right-[10%] w-[250px] h-[250px] rounded-full bg-secondary/15 dark:bg-secondary/10 blur-3xl animate-float-delayed" />
          <div className="absolute bottom-[20%] left-[20%] w-[200px] h-[200px] rounded-full bg-accent/15 dark:bg-accent/10 blur-3xl animate-float" />
        </div>

        {/* ===== HERO SECTION: Full-page, Actor centered, text left & right ===== */}
        <section className="relative min-h-screen flex items-end justify-center overflow-hidden">
          <HeroIllustration />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10 dark:from-background dark:via-background/60 dark:to-background/20 z-[1]" />

          {/* Actor Image - Full centered */}
          <div className="absolute inset-0 flex items-end justify-center z-[2] pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.img
                key={isHappy ? 'hero-happy' : 'hero-unhappy'}
                src={isHappy ? '/images/actor/happy-background-remover.png' : '/images/actor/unhappy-background-remover.png'}
                alt={isHappy ? 'Mahasiswa bahagia dan sehat mental' : 'Mahasiswa yang membutuhkan dukungan'}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="h-[65vh] sm:h-[70vh] md:h-[78vh] object-contain object-bottom drop-shadow-2xl"
              />
            </AnimatePresence>
          </div>

          {/* Left Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-4 sm:left-8 lg:left-16 top-[28%] sm:top-1/3 -translate-y-1/2 z-10 max-w-xs sm:max-w-sm lg:max-w-md"
          >
            <div className="glass-card p-5 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary fill-primary/30" />
                <span className="text-sm font-medium text-primary">Mental Health Matters</span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                Kesehatan Mental Sama Pentingnya dengan Kesehatan Fisik
              </h2>
              <p className="body-text text-xs sm:text-sm lg:text-base">
                Menurut WHO, kesehatan mental adalah keadaan sejahtera di mana individu menyadari kemampuannya, dapat mengatasi tekanan hidup, dan mampu berkontribusi bagi komunitasnya.
              </p>
            </div>
          </motion.div>

          {/* Right Glass Card - animates with mood */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute right-4 sm:right-8 lg:right-16 top-[28%] sm:top-1/3 -translate-y-1/2 z-10 max-w-xs sm:max-w-sm lg:max-w-md"
          >
            <div className="glass-card p-5 sm:p-6 lg:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isHappy ? 'right-happy' : 'right-sad'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-3"
                >
                  {isHappy ? (
                    <>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium text-primary">Kondisi Sehat</span>
                      </div>
                      <p className="font-heading text-base sm:text-lg font-semibold text-foreground">Tanda Mental yang Sehat</p>
                      <ul className="space-y-2 text-xs sm:text-sm body-text">
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Mampu mengelola stres dengan baik</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Hubungan sosial yang positif</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Produktif dan percaya diri</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Tidur berkualitas & nafsu makan baik</li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-secondary" />
                        <span className="text-sm font-medium text-secondary">Perlu Perhatian</span>
                      </div>
                      <p className="font-heading text-base sm:text-lg font-semibold text-foreground">Tanda Perlu Bantuan</p>
                      <ul className="space-y-2 text-xs sm:text-sm body-text">
                        <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" /> Merasa sedih berkepanjangan</li>
                        <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" /> Menarik diri dari lingkungan</li>
                        <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" /> Sulit berkonsentrasi</li>
                        <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" /> Perubahan pola tidur & makan</li>
                      </ul>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Bottom Center Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative z-10 text-center pb-20 sm:pb-24 px-4"
          >
            <h1 className="heading-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Mind<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Haven</span>
            </h1>
            <p className="body-text text-base sm:text-lg mt-3 max-w-lg mx-auto">Ruang aman untuk memahami dan menjaga kesehatan mentalmu</p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-10"
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

        {/* ===== SECTION 2: Informative + Actor image on right ===== */}
        <section className="py-20 md:py-32 relative z-10 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left: Informative Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex-1 space-y-8"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-medium text-foreground">
                    <Brain className="h-4 w-4 text-secondary" />
                    Fakta Penting
                  </div>
                  <h2 className="heading-2">
                    Mengapa Kesehatan Mental Mahasiswa Perlu Diperhatikan?
                  </h2>
                  <p className="body-text text-lg">
                    Data dari National Alliance on Mental Illness (NAMI) menunjukkan bahwa masa kuliah merupakan periode paling rentan terhadap gangguan kesehatan mental. Tekanan akademik, transisi sosial, dan masalah keuangan menjadi faktor utama.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="body-text">
                    <strong className="text-foreground">Depresi dan kecemasan</strong> adalah gangguan mental paling umum di kalangan mahasiswa. Studi dari American College Health Association (ACHA) menemukan bahwa 41% mahasiswa mengalami kecemasan dan 36% mengalami depresi.
                  </p>
                  <p className="body-text">
                    Aktivitas fisik teratur, tidur yang cukup, meditasi, dan membangun koneksi sosial yang kuat terbukti secara ilmiah dapat membantu menjaga kesehatan mental. Penting untuk mengenali tanda-tanda awal dan mengambil langkah pencegahan.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="rounded-xl text-base px-8 py-6 h-auto gradient-btn">
                    <Link to="/wellness">
                      Pelajari Lebih Lanjut
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-xl text-base px-8 py-6 h-auto bg-secondary/10 text-foreground border-secondary/30 hover:bg-secondary/20">
                    <Link to="/health-condition">Cek Kondisi Mental</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Right: Actor Image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex-1 flex justify-center relative"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/20 blur-2xl scale-95" />
                  <div className="relative rounded-[32px] overflow-hidden border border-border/30 shadow-2xl">
                    <img
                      src="/images/actor/background-remover-unhappy.png"
                      alt="Mahasiswa yang memerlukan dukungan kesehatan mental"
                      className="w-full max-w-lg object-cover aspect-[3/4]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      <p className="font-heading text-xl font-semibold text-foreground">Kamu Tidak Sendiri</p>
                      <p className="body-text text-sm mt-2">Setiap orang memiliki perjuangan tersendiri. Mencari bantuan adalah tanda keberanian, bukan kelemahan.</p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="absolute -top-4 -right-4 lg:-right-8 z-20 px-5 py-4 rounded-2xl bg-background/90 backdrop-blur-md border border-border/50 shadow-xl max-w-[200px]"
                  >
                    <p className="font-heading text-3xl font-bold text-secondary">264 Juta</p>
                    <p className="text-xs text-muted-foreground mt-1">Orang di dunia mengalami depresi (WHO)</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: Data & Fakta ===== */}
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
                <h2 className="heading-2">Data & Fakta Kesehatan Mental</h2>
                <p className="body-text text-lg">
                  Angka-angka yang perlu kita ketahui untuk memahami pentingnya kesehatan mental di kalangan mahasiswa.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {mentalHealthFacts.map((fact, index) => {
                  const Icon = fact.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="glass-card p-6 lg:p-8 space-y-4 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="font-heading text-3xl font-bold text-primary">{fact.stat}</p>
                      <h3 className="font-heading text-lg font-semibold text-foreground">{fact.title}</h3>
                      <p className="body-text text-sm">{fact.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== SECTION 4: Warning Signs ===== */}
        <section className="py-20 md:py-32 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto glass-card p-10 md:p-16 space-y-12">
              <AnimatedSection className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="heading-2">Kenali Tanda-Tanda Peringatan</h2>
                <p className="body-text text-lg">
                  Menurut National Institute of Mental Health (NIMH), berikut adalah tanda-tanda yang perlu diwaspadai saat kondisi kesehatan mental memburuk.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {warningSignals.map((signal, index) => (
                  <AnimatedSection key={index} delay={index * 0.05}>
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-background/50 border border-border/30 hover:border-secondary/40 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <AlertTriangle className="w-4 h-4 text-secondary" />
                      </div>
                      <p className="body-text">{signal}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={0.3} className="text-center">
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                  <p className="body-text">
                    <strong className="text-foreground">Penting:</strong> Jika kamu atau seseorang yang kamu kenal menunjukkan tanda-tanda di atas, jangan ragu untuk mencari bantuan profesional. Hubungi hotline krisis di <strong className="text-primary">119 ext. 8</strong> (Indonesia) atau kunjungi pusat konseling kampusmu.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsSection />

        {/* Image Showcase */}
        <ImageShowcase
          title="Visualisasi Kesehatan Mental"
          description="Galeri gambar yang menggambarkan perjalanan kesehatan mental — dari kesadaran diri hingga dukungan komunitas."
          columns={3}
          images={[
            { src: '/images/mental-health/MentalHealth-happy1.png', alt: 'Kesehatan Mental', caption: 'Mindfulness & Meditasi' },
            { src: '/images/socialization/close-up-women-man-therapy.png', alt: 'Dukungan Komunitas', caption: 'Peer Support Group' },
            { src: '/images/support/young-man-holding-hands-girlfriend.png', alt: 'Konseling', caption: 'Layanan Konseling' },
            { src: '/images/illustrations/mental-health.png', alt: 'Self-Care', caption: 'Aktivitas Self-Care' },
            { src: '/images/socialization/people-therapy-meeting-medium-shot.png', alt: 'Sosialisasi', caption: 'Koneksi Sosial' },
            { src: '/images/support/mental-health-care-sketch-diagram.png', alt: 'Keseimbangan', caption: 'Work-Life Balance' },
          ]}
        />

        {/* Testimonial */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-10">
              <AnimatedSection className="text-center space-y-4">
                <h2 className="heading-2">Apa Kata Mereka?</h2>
                <p className="body-text">Cerita nyata dari mahasiswa yang terbantu oleh MindHaven</p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <TestimonialCarousel />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
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
              <h2 className="heading-2">Mulai Jaga Kesehatan Mentalmu Hari Ini</h2>
              <p className="body-text max-w-2xl mx-auto">
                Tidak ada kata terlambat untuk mulai peduli pada diri sendiri. Jelajahi informasi wellness kami, kenali kondisi mentalmu, atau hubungi kami jika butuh bantuan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="rounded-xl gradient-btn px-8 py-6 h-auto text-base">
                  <Link to="/wellness">Jelajahi Wellness</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl bg-background/40 backdrop-blur-sm border-border/50 px-8 py-6 h-auto text-base text-foreground hover:bg-background/60">
                  <Link to="/contact">Hubungi Kami</Link>
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
