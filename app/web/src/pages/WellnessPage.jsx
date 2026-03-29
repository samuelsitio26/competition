import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  HeartPulse,
  Brain,
  Smile,
  Frown,
  Sun,
  Moon,
  ShieldAlert,
  PhoneCall,
  Leaf,
  Activity,
  Coffee,
  BookOpen,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection.jsx';
import ImageCard from '@/components/ImageCard.jsx';

const WellnessPage = () => {
  const wellnessTopics = [
    {
      image: '/images/mental-health/MentalHealth-happy1.png',
      icon: Smile,
      title: 'Kebahagiaan & Emosi Positif',
      description: 'Kebahagiaan bukan berarti selalu tersenyum. Menurut Martin Seligman, pendiri psikologi positif, kebahagiaan sejati terdiri dari lima elemen (PERMA): Positive Emotions, Engagement, Relationships, Meaning, dan Achievement. Emosi positif membantu memperluas cara berpikir dan membangun sumber daya psikologis yang bertahan lama.',
      tips: [
        'Praktikkan gratitude journal — tulis 3 hal yang kamu syukuri setiap hari',
        'Lakukan aktivitas yang memberikan "flow" — saat kamu larut dalam kegiatan yang menyenangkan',
        'Bangun koneksi bermakna dengan orang-orang terdekat',
        'Tetapkan tujuan kecil yang bisa dicapai setiap hari',
      ],
    },
    {
      image: '/images/mental-health/MentalHealth-happy2.png',
      icon: Sun,
      title: 'Mindfulness & Meditasi',
      description: 'Mindfulness adalah praktik memperhatikan momen saat ini tanpa menghakimi. Penelitian dari Harvard Medical School menunjukkan bahwa meditasi mindfulness selama 8 minggu dapat mengubah struktur otak — meningkatkan kepadatan grey matter di area yang berkaitan dengan memori, empati, dan regulasi stres.',
      tips: [
        'Mulai dengan meditasi 5 menit sehari, tingkatkan secara bertahap',
        'Gunakan teknik pernapasan 4-7-8: tarik napas 4 detik, tahan 7 detik, hembuskan 8 detik',
        'Body scan meditation sebelum tidur untuk melepas ketegangan',
        'Mindful eating — nikmati makanan tanpa distraksi gadget',
      ],
    },
    {
      image: '/images/mental-health/MentalHealth-unhappy1.png',
      icon: Frown,
      title: 'Mengenali Depresi',
      description: 'Depresi lebih dari sekadar merasa sedih. WHO mencatat depresi sebagai penyebab utama disabilitas di dunia, mempengaruhi lebih dari 264 juta orang. Pada mahasiswa, depresi sering kali tidak terdeteksi karena gejala yang dianggap "normal" seperti kelelahan atau kehilangan motivasi. Depresi adalah kondisi medis nyata yang memerlukan penanganan profesional.',
      tips: [
        'Kenali perbedaan antara kesedihan normal dan depresi klinis',
        'Jangan abaikan gejala yang berlangsung lebih dari 2 minggu',
        'Bicarakan perasaanmu dengan orang yang dipercaya',
        'Cari bantuan profesional — psikolog atau psikiater',
      ],
    },
    {
      image: '/images/mental-health/MentalHealth-unhappy2.jpg',
      icon: Moon,
      title: 'Kecemasan & Cara Mengatasinya',
      description: 'Gangguan kecemasan adalah gangguan mental paling umum di dunia, mempengaruhi 301 juta orang (WHO, 2023). Pada mahasiswa, kecemasan sering dipicu oleh tekanan ujian, deadline tugas, presentasi, dan kekhawatiran akan masa depan. Kecemasan yang tidak ditangani dapat berkembang menjadi serangan panik, fobia sosial, atau gangguan kecemasan umum (GAD).',
      tips: [
        'Teknik grounding 5-4-3-2-1: identifikasi 5 hal yang bisa dilihat, 4 yang disentuh, 3 yang didengar, 2 yang dicium, 1 yang dirasakan',
        'Progressive Muscle Relaxation (PMR) untuk mengurangi ketegangan fisik',
        'Batasi konsumsi kafein dan alkohol yang bisa memperburuk kecemasan',
        'Buat jadwal harian yang realistis untuk mengurangi overwhelm',
      ],
    },
  ];

  const selfCarePractices = [
    {
      icon: Activity,
      title: 'Olahraga Teratur',
      description: 'Aktivitas fisik 30 menit per hari melepaskan endorfin yang mengurangi stres, kecemasan, dan gejala depresi. Bahkan jalan kaki ringan bisa memberikan dampak positif.',
    },
    {
      icon: Coffee,
      title: 'Pola Makan Sehat',
      description: 'Nutrisi mempengaruhi kesehatan mental. Omega-3, vitamin D, magnesium, dan probiotik terbukti mendukung fungsi otak dan stabilitas mood.',
    },
    {
      icon: Moon,
      title: 'Tidur Berkualitas',
      description: 'Kurang tidur meningkatkan risiko depresi 10x lipat. Targetkan 7-9 jam tidur, hindari layar 1 jam sebelum tidur, dan jaga jadwal tidur yang konsisten.',
    },
    {
      icon: Leaf,
      title: 'Waktu di Alam',
      description: 'Studi di Jepang tentang "forest bathing" menunjukkan bahwa menghabiskan waktu di alam menurunkan kortisol (hormon stres) sebesar 12.4%.',
    },
    {
      icon: BookOpen,
      title: 'Journaling',
      description: 'Menulis ekspresif selama 15-20 menit tentang pengalaman emosional terbukti mengurangi gejala depresi dan kecemasan, serta memperkuat sistem imun.',
    },
    {
      icon: HeartPulse,
      title: 'Koneksi Sosial',
      description: 'Isolasi sosial sama berbahayanya dengan merokok 15 batang per hari. Jaga setidaknya 1-2 hubungan bermakna dan jangan ragu untuk meminta bantuan.',
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
        <title>Wellness - Informasi Kesehatan Mental | MindHaven</title>
        <meta
          name="description"
          content="Pelajari tentang kesehatan mental secara lengkap: kebahagiaan, mindfulness, depresi, kecemasan, dan praktik self-care berbasis riset ilmiah."
        />
      </Helmet>

      <main className="min-h-screen py-20 md:py-32 relative bg-background">
        <div className="fixed inset-0 -z-10 hero-mesh" />
        <div className="fixed inset-0 -z-10 grid-noise opacity-50" />

        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[20%] right-[5%] w-[250px] h-[250px] rounded-full bg-secondary/10 dark:bg-secondary/5 blur-3xl animate-float" />
          <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-20 md:space-y-28"
          >
            {/* Header */}
            <div className="text-center space-y-6 max-w-3xl mx-auto glass-card p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground">
                <HeartPulse className="h-4 w-4 text-primary" />
                Wellness & Kesehatan Mental
              </div>
              <h1 className="heading-1">Wellness</h1>
              <p className="body-text text-lg">
                Informasi lengkap tentang kesehatan mental berbasis riset ilmiah. Pahami kondisimu, kenali tanda-tandanya, dan temukan cara untuk menjaga kesejahteraan mentalmu.
              </p>
            </div>

            {/* Wellness Topics - alternating layout */}
            <div className="space-y-20 md:space-y-28">
              {wellnessTopics.map((topic, index) => {
                const Icon = topic.icon;
                const isReversed = index % 2 === 1;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className={`max-w-6xl mx-auto flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}
                  >
                    {/* Image */}
                    <div className="flex-1 w-full">
                      <div className="relative rounded-[32px] overflow-hidden border border-border/30 shadow-xl group">
                        <img
                          src={topic.image}
                          alt={topic.title}
                          loading="lazy"
                          className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h2 className="heading-2 text-2xl lg:text-3xl">{topic.title}</h2>
                      </div>
                      <p className="body-text">{topic.description}</p>
                      <div className="space-y-3">
                        <p className="font-heading text-sm font-semibold text-foreground uppercase tracking-wide">Tips & Langkah Praktis:</p>
                        <ul className="space-y-3">
                          {topic.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-primary">{tipIndex + 1}</span>
                              </div>
                              <p className="body-text text-sm">{tip}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Self-Care Practices Grid */}
            <section className="space-y-12">
              <AnimatedSection className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="heading-2">Praktik Self-Care Berbasis Riset</h2>
                <p className="body-text text-lg">
                  Langkah-langkah sederhana yang terbukti secara ilmiah membantu menjaga dan meningkatkan kesehatan mental.
                </p>
              </AnimatedSection>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              >
                {selfCarePractices.map((practice, index) => {
                  const Icon = practice.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="glass-card p-6 lg:p-8 space-y-4 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">{practice.title}</h3>
                      <p className="body-text text-sm">{practice.description}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </section>

            {/* Emergency Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto p-10 md:p-16 glass-card"
            >
              <div className="space-y-10 text-center">
                <div className="space-y-4">
                  <h2 className="heading-2">Butuh Bantuan Segera?</h2>
                  <p className="body-text max-w-2xl mx-auto">
                    Jika kamu atau seseorang yang kamu kenal sedang mengalami krisis kesehatan mental, segera hubungi layanan bantuan profesional. Kamu tidak sendirian.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
                  <div className="p-6 rounded-[24px] bg-background/50 border border-border/50 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm">
                    <ShieldAlert className="h-5 w-5 text-primary mb-3" />
                    <p className="heading-3 mb-2 text-lg">Hotline Krisis</p>
                    <p className="body-text">Into The Light Indonesia<br /><strong className="text-foreground">119 ext. 8</strong><br /><span className="text-sm">(24/7)</span></p>
                  </div>
                  <div className="p-6 rounded-[24px] bg-background/50 border border-border/50 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm">
                    <PhoneCall className="h-5 w-5 text-primary mb-3" />
                    <p className="heading-3 mb-2 text-lg">Sejiwa (KEMENKES)</p>
                    <p className="body-text">Layanan Konseling Gratis<br /><strong className="text-foreground">119 ext. 8</strong><br /><span className="text-sm">(Senin-Jumat)</span></p>
                  </div>
                  <div className="p-6 rounded-[24px] bg-background/50 border border-border/50 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm">
                    <Brain className="h-5 w-5 text-primary mb-3" />
                    <p className="heading-3 mb-2 text-lg">Konseling Kampus</p>
                    <p className="body-text">Hubungi Unit Konseling di kampusmu untuk mendapat bantuan profesional gratis</p>
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

export default WellnessPage;
