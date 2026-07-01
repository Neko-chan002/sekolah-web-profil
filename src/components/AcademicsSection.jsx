import React, { useState } from 'react';
import { Cpu, Beaker, Trophy, Music, Palette, CheckCircle, ListFilter, Users, Sparkles } from 'lucide-react';
import { JURUSAN_DATA, EKSKUL_DATA } from '../data/mockData';

export const AcademicsSection = () => {
  const [activeJurusan, setActiveJurusan] = useState('mipa');
  const [activeEkskulCategory, setActiveEkskulCategory] = useState('Semua');

  // Map nama ikon ke komponen Lucide
  const getEkskulIcon = (name) => {
    switch (name) {
      case 'Cpu':
        return <Cpu size={22} />;
      case 'Trophy':
        return <Trophy size={22} />;
      case 'Music':
        return <Music size={22} />;
      case 'Drama':
        return <Palette size={22} />; // Drama / Seni
      case 'FlaskCon':
        return <Beaker size={22} />;
      default:
        return <Palette size={22} />;
    }
  };

  const ekskulCategories = ['Semua', 'Sains & Teknologi', 'Olahraga', 'Seni & Budaya'];

  const filteredEkskul = activeEkskulCategory === 'Semua' 
    ? EKSKUL_DATA 
    : EKSKUL_DATA.filter(item => item.category === activeEkskulCategory);

  const selectedJurusan = JURUSAN_DATA.find(j => j.id === activeJurusan);

  return (
    <div style={{ animation: 'morphing 0.5s ease-out' }}>
      
      {/* Jurusan / Program Keahlian */}
      <section className="section">
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>PROGRAM AKADEMIK</span>
            <h2 style={{ fontSize: '2.4rem', margin: 0 }}>Peminatan & Jurusan Unggulan</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '8px auto 0' }}>
              Kurikulum terarah yang mengasah minat bakat spesifik siswa demi keberlanjutan jenjang studi universitas.
            </p>
          </div>

          {/* Jurusan Selector Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '32px',
            flexWrap: 'wrap'
          }}>
            {JURUSAN_DATA.map((j) => (
              <button
                key={j.id}
                onClick={() => setActiveJurusan(j.id)}
                className="btn-secondary"
                style={{
                  padding: '12px 28px',
                  backgroundColor: activeJurusan === j.id ? 'var(--primary)' : 'var(--surface)',
                  color: activeJurusan === j.id ? 'var(--bg-primary)' : 'var(--text-primary)',
                  borderColor: activeJurusan === j.id ? 'var(--primary)' : 'var(--surface-border)',
                  fontWeight: 600
                }}
              >
                {j.title.split(' (')[0]}
              </button>
            ))}
          </div>

          {/* Active Jurusan Detail Card */}
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card-premium" style={{ backgroundColor: 'var(--surface)', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Sparkles size={20} color="var(--accent)" />
                <h3 style={{ fontSize: '1.6rem', color: 'var(--primary)', margin: 0 }}>
                  {selectedJurusan.title}
                </h3>
              </div>
              
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.7 }}>
                {selectedJurusan.desc}
              </p>

              <div style={{ borderTop: '1px solid var(--surface-border)', paddingTop: '24px' }}>
                <h4 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem' }}>
                  Fokus Pembinaan & Fasilitas Khusus:
                </h4>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '16px'
                }}>
                  {selectedJurusan.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle size={18} color="var(--secondary)" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Ekstrakurikuler (Filterable List) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--surface-border)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>PENGEMBANGAN DIRI</span>
            <h2 style={{ fontSize: '2.4rem', margin: 0 }}>Klub Ekstrakurikuler Siswa</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '8px auto 0' }}>
              Kembangkan kepemimpinan, kerja tim, dan minat kreatif Anda melalui ragam klub pilihan sekolah.
            </p>
          </div>

          {/* Ekskul Filters */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '32px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginRight: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              <ListFilter size={16} />
              <span>Saring Kategori:</span>
            </div>
            
            {ekskulCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveEkskulCategory(category)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '20px',
                  border: '1px solid var(--surface-border)',
                  backgroundColor: activeEkskulCategory === category ? 'var(--primary)' : 'var(--surface)',
                  color: activeEkskulCategory === category ? 'var(--bg-primary)' : 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Ekskul Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {filteredEkskul.map((ekskul, idx) => (
              <div 
                key={idx} 
                className="card-premium" 
                style={{ 
                  backgroundColor: 'var(--surface)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{
                    backgroundColor: 'var(--primary-glow)',
                    color: 'var(--primary)',
                    padding: '8px',
                    borderRadius: '8px'
                  }}>
                    {getEkskulIcon(ekskul.iconName)}
                  </div>
                  
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-secondary)',
                    padding: '2px 10px',
                    borderRadius: '12px'
                  }}>
                    {ekskul.category}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.15rem', margin: 0 }}>{ekskul.name}</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                  {ekskul.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
export default AcademicsSection;
