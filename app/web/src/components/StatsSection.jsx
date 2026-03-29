import React from 'react';
import CounterAnimation from './CounterAnimation';
import AnimatedSection from './AnimatedSection';

const StatsSection = ({ stats = [] }) => {
  const defaultStats = stats.length > 0 ? stats : [
    { value: 1500, suffix: '+', label: 'Mahasiswa Terbantu', description: 'Pengguna aktif platform wellness' },
    { value: 95, suffix: '%', label: 'Kepuasan Pengguna', description: 'Rating dari survei feedback' },
    { value: 24, suffix: '/7', label: 'Selalu Tersedia', description: 'Akses kapan saja, di mana saja' },
    { value: 50, suffix: '+', label: 'Sumber Daya', description: 'Artikel, tips, dan panduan' },
  ];

  return (
    <section className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {defaultStats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="text-center">
                <div className="stat-card flex flex-col items-center gap-2 glow-border">
                  <p className="font-heading text-4xl md:text-5xl font-bold text-primary">
                    <CounterAnimation
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2000 + index * 300}
                    />
                  </p>
                  <p className="font-heading font-semibold text-foreground text-lg">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
