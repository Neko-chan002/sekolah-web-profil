import React, { useState } from 'react';
import { Award, Trophy, Star, Sparkles, ShieldCheck } from 'lucide-react';
import { PRESTASI_DATA } from '../data/mockData';

export const AchievementsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Akademik', 'Non-Akademik'];

  const filteredPrestasi = activeCategory === 'Semua' 
    ? PRESTASI_DATA 
    : PRESTASI_DATA.filter(item => item.category === activeCategory);

  const getLevelBadgeStyle = (level) => {
    switch (level) {
      case 'Internasional':
        return { backgroundColor: 'var(--accent-glow)', color: 'var(--accent)', border: '1px solid var(--accent)' };
      case 'Nasional':
        return { backgroundColor: 'var(--primary-glow)', color: 'var(--primary)', border: '1px solid var(--primary)' };
      case 'Regional':
      default:
        return { backgroundColor: 'var(--secondary-glow)', color: 'var(--secondary)', border: '1px solid var(--secondary)' };
    }
  };

  return (
    <div style={{ animation: 'morphing 0.5s ease-out' }}>
      
      <section className="section">
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>HALL OF FAME</span>
            <h2 style={{ fontSize: '2.4rem', margin: 0 }}>Prestasi & Penghargaan Siswa</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '8px auto 0' }}>
              Apresiasi tinggi atas dedikasi luar biasa para siswa SMA Negeri EduSphere yang berhasil menjuarai berbagai ajang kompetisi ilmiah dan kreativitas.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 24px',
                  borderRadius: '20px',
                  border: '1px solid var(--surface-border)',
                  backgroundColor: activeCategory === cat ? 'var(--primary)' : 'var(--surface)',
                  color: activeCategory === cat ? 'var(--bg-primary)' : 'var(--text-secondary)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Achievements Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px'
          }} className="grid-mobile-1">
            {filteredPrestasi.map((p, idx) => (
              <div 
                key={idx} 
                className="card-premium"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  backgroundColor: 'var(--surface)',
                  overflow: 'hidden',
                  padding: '24px'
                }}
              >
                {/* Photo Display */}
                <div style={{
                  width: '100%',
                  height: '180px',
                  borderRadius: 'var(--border-radius-sm)',
                  overflow: 'hidden',
                  border: '1px solid var(--surface-border)',
                  position: 'relative'
                }}>
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {/* Category overlay */}
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    backgroundColor: 'var(--surface)',
                    color: 'var(--text-primary)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                    border: '1px solid var(--surface-border)'
                  }}>
                    {p.category}
                  </span>
                </div>

                {/* Info Text */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '2px 10px',
                      borderRadius: '12px',
                      ...getLevelBadgeStyle(p.level)
                    }}>
                      {p.level}
                    </span>
                    <span style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center' }}><Trophy size={16} /></span>
                  </div>

                  <h4 style={{ fontSize: '1.1rem', lineHeight: 1.35, margin: 0 }}>
                    {p.title}
                  </h4>
                  
                  <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                    🏆 {p.winner}
                  </p>
                  
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* School Integrity Tag */}
          <div style={{
            marginTop: '60px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              borderRadius: 'var(--border-radius-md)',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--surface-border)',
              maxWidth: '600px',
              textAlign: 'left'
            }} className="grid-mobile-1">
              <div style={{
                backgroundColor: 'var(--primary-glow)',
                color: 'var(--primary)',
                padding: '10px',
                borderRadius: '50%',
                flexShrink: 0
              }}>
                <ShieldCheck size={24} />
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                SMA Negeri EduSphere secara berkala memberikan penghargaan beasiswa pembinaan prestasi bagi seluruh murid yang berhasil mengharumkan nama sekolah di tingkat regional maupun internasional.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
export default AchievementsSection;
