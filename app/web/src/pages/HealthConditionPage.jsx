import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Heart,
  Brain,
  AlertTriangle,
  Activity,
  Shield,
  Zap,
  Cloud,
  Flame,
  Eye,
  Users,
  Clock,
  Stethoscope,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection.jsx';
import ImageCard from '@/components/ImageCard.jsx';
import { StaggerContainer, StaggerItem } from '@/components/StaggerContainer.jsx';

const HealthConditionPage = () => {
  const mentalConditions = [
    {
      icon: Cloud,
      title: 'Depresi (Major Depressive Disorder)',
      prevalence: 'Mempengaruhi 3.8% populasi global (WHO, 2023)',
      description: 'Depresi adalah gangguan mood yang menyebabkan perasaan sedih yang mendalam dan kehilangan minat yang berlangsung setidaknya 2 minggu. Berbeda dengan kesedihan biasa, depresi mempengaruhi cara berpikir, merasa, dan menjalani aktivitas sehari-hari.',
      symptoms: [
        'Perasaan sedih, kosong, atau putus asa hampir setiap hari',
        'Kehilangan minat pada aktivitas yang dulu dinikmati',
        'Perubahan berat badan signifikan tanpa diet',
        'Insomnia atau hipersomnia',
        'Kelelahan atau kehilangan energi',
        'Perasaan tidak berharga atau rasa bersalah berlebihan',
        'Kesulitan berpikir, berkonsentrasi, atau membuat keputusan',
      ],
      treatment: 'Kombinasi psikoterapi (CBT, IPT) dan/atau obat antidepresan. Olahraga teratur dan dukungan sosial juga terbukti efektif.',
      color: 'from-blue-500/10 to-blue-600/5',
    },
    {
      icon: Zap,
      title: 'Gangguan Kecemasan (Anxiety Disorder)',
      prevalence: '301 juta orang di dunia (WHO, 2023)',
      description: 'Gangguan kecemasan ditandai dengan kekhawatiran berlebihan dan tidak terkendali yang mengganggu kehidupan sehari-hari. Ini berbeda dari kecemasan normal yang bersifat sementara. Gangguan ini termasuk GAD, Social Anxiety, Panic Disorder, dan Phobia.',
      symptoms: [
        'Kekhawatiran berlebihan yang sulit dikendalikan',
        'Gelisah, mudah lelah, atau tegang',
        'Sulit berkonsentrasi atau pikiran kosong',
        'Ketegangan otot',
        'Gangguan tidur',
        'Serangan panik (jantung berdebar, sesak napas, pusing)',
        'Menghindari situasi yang memicu kecemasan',
      ],
      treatment: 'Terapi Cognitive Behavioral Therapy (CBT) adalah standar emas. Teknik relaksasi, mindfulness, dan obat anxiolytic bila diperlukan.',
      color: 'from-amber-500/10 to-amber-600/5',
    },
    {
      icon: Flame,
      title: 'Burnout Akademik',
      prevalence: '40-60% mahasiswa mengalaminya (Maslach, 2016)',
      description: 'Burnout akademik adalah sindrom yang dihasilkan dari stres akademik kronis yang tidak ditangani. Ditandai dengan kelelahan emosional, sinisme terhadap studi, dan penurunan efikasi akademik. Meskipun bukan gangguan mental resmi, burnout bisa menjadi pintu masuk ke depresi dan kecemasan.',
      symptoms: [
        'Kelelahan emosional dan fisik yang kronis',
        'Sinisme dan detachment dari studi',
        'Penurunan performa akademik',
        'Perasaan tidak mampu atau tidak kompeten',
        'Prokrastinasi yang semakin parah',
        'Sakit kepala, gangguan pencernaan, atau sakit fisik lainnya',
        'Kehilangan motivasi untuk belajar',
      ],
      treatment: 'Manajemen waktu yang realistis, setting boundaries, istirahat yang cukup, dan mencari dukungan dari dosen pembimbing atau konselor kampus.',
      color: 'from-red-500/10 to-red-600/5',
    },
    {
      icon: Eye,
      title: 'Post-Traumatic Stress Disorder (PTSD)',
      prevalence: '3.9% populasi global pernah mengalami PTSD (WHO)',
      description: 'PTSD berkembang pada sebagian orang setelah mengalami atau menyaksikan peristiwa traumatis seperti kekerasan, kecelakaan, atau bencana alam. Gejala bisa muncul segera atau berbulan-bulan setelah kejadian. Pada mahasiswa, PTSD sering berkaitan dengan kekerasan seksual, bullying, atau pengalaman masa kecil.',
      symptoms: [
        'Flashback atau mimpi buruk tentang peristiwa traumatis',
        'Menghindari tempat, orang, atau situasi yang mengingatkan trauma',
        'Mudah terkejut atau selalu waspada berlebihan',
        'Perasaan mati rasa emosional',
        'Kesulitan tidur dan berkonsentrasi',
        'Ledakan emosi atau kemarahan yang tidak terduga',
        'Perasaan bersalah atau menyalahkan diri sendiri',
      ],
      treatment: 'Trauma-focused CBT, EMDR (Eye Movement Desensitization and Reprocessing), dan terapi eksposur. Memerlukan penanganan profesional.',
      color: 'from-purple-500/10 to-purple-600/5',
    },
    {
      icon: Users,
      title: 'Social Anxiety Disorder',
      prevalence: '7-13% populasi di negara barat (Kessler et al.)',
      description: 'Social Anxiety Disorder (SAD) atau fobia sosial ditandai dengan ketakutan intens terhadap situasi sosial di mana seseorang merasa diamati atau dievaluasi. Bagi mahasiswa, ini bisa sangat menghambat karena perkuliahan sering melibatkan presentasi, diskusi kelompok, dan interaksi sosial.',
      symptoms: [
        'Ketakutan intens akan situasi sosial atau performa',
        'Kekhawatiran berhari-hari sebelum acara sosial',
        'Menghindari kontak mata atau berbicara dengan orang asing',
        'Gejala fisik: keringat, gemetar, mual, suara bergetar',
        'Takut dihakimi atau dipermalukan di depan umum',
        'Kesulitan memulai atau mempertahankan percakapan',
        'Isolasi sosial yang meningkat',
      ],
      treatment: 'CBT dengan komponen eksposur sosial, social skills training, dan terapi kelompok. Obat SSRI juga efektif untuk kasus berat.',
      color: 'from-teal-500/10 to-teal-600/5',
    },
    {
      icon: Clock,
      title: 'Insomnia & Gangguan Tidur',
      prevalence: '60% mahasiswa memiliki kualitas tidur buruk (ASA)',
      description: 'Gangguan tidur dan insomnia kronis sangat umum di kalangan mahasiswa. Kurang tidur bukan hanya akibat dari gangguan mental — ia juga menjadi penyebabnya. Sleep deprivation meningkatkan risiko depresi 10x lipat dan kecemasan 17x lipat. Circadian rhythm yang terganggu oleh penggunaan gadget memperburuk situasi.',
      symptoms: [
        'Sulit tertidur meskipun sudah lelah',
        'Sering terbangun di tengah malam',
        'Bangun terlalu pagi dan tidak bisa tidur lagi',
        'Merasa tidak segar setelah tidur',
        'Kantuk berlebihan di siang hari',
        'Mudah marah dan sulit berkonsentrasi',
        'Bergantung pada kafein untuk fungsi normal',
      ],
      treatment: 'Sleep hygiene: jadwal tidur konsisten, hindari layar 1 jam sebelum tidur, suhu kamar sejuk, dan hindari kafein setelah jam 2 siang. CBT-I (untuk insomnia) sangat efektif.',
      color: 'from-indigo-500/10 to-indigo-600/5',
    },
  ];

  const protectiveFactors = [
    { title: 'Dukungan Sosial Kuat', description: 'Memiliki jaringan keluarga, teman, dan komunitas yang supportive.' },
    { title: 'Coping Skills', description: 'Kemampuan mengelola stres secara sehat: olahraga, meditasi, journaling.' },
    { title: 'Self-Awareness', description: 'Kemampuan mengenali emosi dan tanda-tanda awal ketika kondisi mental menurun.' },
    { title: 'Akses ke Layanan', description: 'Ketersediaan dan kemudahan akses ke konselor atau psikolog profesional.' },
    { title: 'Gaya Hidup Sehat', description: 'Tidur cukup, nutrisi baik, olahraga teratur, dan membatasi alkohol/zat.' },
    { title: 'Sense of Purpose', description: 'Memiliki tujuan hidup dan merasa berkontribusi pada sesuatu yang bermakna.' },
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
        <title>Health Condition - Kondisi Kesehatan Mental | MindHaven</title>
        <meta
          name="description"
          content="Informasi lengkap tentang berbagai kondisi kesehatan mental: depresi, kecemasan, burnout, PTSD, social anxiety, dan gangguan tidur. Kenali gejala dan cara penanganannya."
        />
      </Helmet>

      <main className="min-h-screen bg-background relative">
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[15%] right-[10%] w-[250px] h-[250px] rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl animate-float" />
          <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-secondary/10 dark:bg-secondary/5 blur-3xl animate-float-delayed" />
        </div>

        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto text-center space-y-8 glass-card p-10 md:p-16"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-medium text-foreground">
                <Stethoscope className="h-4 w-4 text-secondary" />
                Health Condition
              </div>
              <h1 className="heading-1">Kondisi Kesehatan Mental</h1>
              <p className="body-text max-w-2xl mx-auto text-lg">
                Memahami berbagai kondisi kesehatan mental adalah langkah pertama menuju pemulihan. Informasi di bawah ini disusun berdasarkan data dari WHO, NIMH, dan jurnal psikologi terkemuka.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro Stats */}
        <section className="py-12 md:py-16 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: '970 Juta', label: 'Orang di dunia hidup dengan gangguan mental (WHO, 2022)' },
                { value: '1 dari 4', label: 'Orang akan mengalami gangguan mental dalam hidupnya' },
                { value: '<50%', label: 'Yang menerima penanganan di negara berpenghasilan tinggi' },
                { value: '12 Miliar', label: 'Hari kerja hilang per tahun akibat depresi & kecemasan' },
              ].map((stat, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="glass-card p-6 text-center space-y-2 h-full">
                    <p className="font-heading text-2xl lg:text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="body-text text-sm">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Mental Health Conditions */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-12">
              <AnimatedSection className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="heading-2">Jenis-Jenis Gangguan Mental</h2>
                <p className="body-text text-lg">
                  Berikut adalah kondisi kesehatan mental yang paling umum dialami mahasiswa, beserta gejala dan cara penanganannya.
                </p>
              </AnimatedSection>

              <div className="space-y-8">
                {mentalConditions.map((condition, index) => {
                  const Icon = condition.icon;
                  return (
                    <AnimatedSection key={index} delay={index * 0.05}>
                      <div className={`rounded-[32px] border border-border/50 overflow-hidden bg-gradient-to-r ${condition.color} hover:shadow-lg transition-all duration-300`}>
                        <div className="p-8 md:p-10 space-y-6">
                          {/* Header */}
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-7 h-7 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-heading text-xl lg:text-2xl font-semibold text-foreground">{condition.title}</h3>
                              <p className="text-sm text-primary font-medium mt-1">{condition.prevalence}</p>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="body-text">{condition.description}</p>

                          {/* Symptoms */}
                          <div className="space-y-3">
                            <p className="font-heading text-sm font-semibold text-foreground uppercase tracking-wide flex items-center gap-2">
                              <AlertTriangle className="w-4 h-4 text-secondary" />
                              Gejala yang Perlu Diwaspadai
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {condition.symptoms.map((symptom, si) => (
                                <div key={si} className="flex items-start gap-2 p-2 rounded-xl bg-background/40">
                                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                  <p className="body-text text-sm">{symptom}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Treatment */}
                          <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                            <p className="body-text text-sm">
                              <strong className="text-foreground flex items-center gap-2 mb-1">
                                <Shield className="w-4 h-4 text-primary" />
                                Penanganan:
                              </strong>
                              {condition.treatment}
                            </p>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Protective Factors */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-5xl mx-auto space-y-12"
            >
              <motion.div variants={itemVariants} className="text-center space-y-4 glass-card p-10 max-w-3xl mx-auto">
                <h2 className="heading-2">Faktor Pelindung Kesehatan Mental</h2>
                <p className="body-text">
                  Meskipun gangguan mental bisa menimpa siapa saja, ada faktor-faktor yang terbukti melindungi dan memperkuat ketahanan mental.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {protectiveFactors.map((factor, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-[24px] bg-card border border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300 space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">{factor.title}</h3>
                    <p className="body-text text-sm">{factor.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Visual Story */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-12">
              <AnimatedSection className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="heading-2">Perjalanan Menuju Pemulihan</h2>
                <p className="body-text">
                  Pemulihan kesehatan mental bukan jalan yang lurus — ada naik turunnya. Tapi dengan dukungan yang tepat, setiap orang bisa pulih.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatedSection delay={0}>
                  <ImageCard
                    src="/images/support/authentic-group-therapy-meeting.png"
                    alt="Terapi Kelompok"
                    caption="Kekuatan terapi kelompok dan dukungan sebaya"
                    aspectRatio="aspect-[4/5]"
                  />
                </AnimatedSection>
                <AnimatedSection delay={0.1} className="md:mt-8">
                  <ImageCard
                    src="/images/icons/social-media-concept-with-woman-shape.png"
                    alt="Kesadaran Mental"
                    caption="Memahami apa yang terjadi dalam pikiran kita"
                    aspectRatio="aspect-[4/5]"
                  />
                </AnimatedSection>
                <AnimatedSection delay={0.2} className="md:mt-16">
                  <ImageCard
                    src="/images/support/young-man-holding-hands-girlfriend.png"
                    alt="Dukungan"
                    caption="Dukungan orang terdekat dalam proses pemulihan"
                    aspectRatio="aspect-[4/5]"
                  />
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Important Note */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto glass-card p-10 md:p-16 space-y-8"
            >
              <div className="text-center space-y-4">
                <h2 className="heading-2">Catatan Penting</h2>
              </div>
              <div className="space-y-4 body-text">
                <p>
                  Informasi pada halaman ini bersifat <strong className="text-foreground">edukatif</strong> dan bukan pengganti diagnosis atau penanganan profesional. Jika kamu merasa mengalami gejala-gejala yang disebutkan di atas, sangat disarankan untuk berkonsultasi dengan psikolog atau psikiater.
                </p>
                <p>
                  Gangguan kesehatan mental <strong className="text-foreground">bukanlah kelemahan</strong>. Sama seperti penyakit fisik, gangguan mental memerlukan penanganan yang tepat. Mencari bantuan adalah langkah berani dan bijaksana.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
                <p className="font-heading text-lg font-semibold text-foreground italic">
                  "There is no health without mental health." — World Health Organization
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HealthConditionPage;
