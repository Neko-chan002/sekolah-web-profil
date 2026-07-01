import React, { useState } from 'react';
import { Calendar, Users, Award, ShieldAlert } from 'lucide-react';
import { SEJARAH_DATA, STAF_DATA, FAQ_DATA } from '../data/mockData';

export const ProfileSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div style={{ animation: 'morphing 0.5s ease-out' }}>
      
      {/* Sejarah Sekolah Section (Timeline) */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>LINIMASA</span>
            <h2 style={{ fontSize: '2.4rem', margin: 0 }}>Sejarah Singkat & Perkembangan</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '8px auto 0' }}>
              Perjalanan dedikasi SMA Negeri EduSphere melahirkan generasi unggul sejak awal berdirinya.
            </p>
          </div>

          {/* Timeline UI */}
          <div style={{
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px 0'
          }}>
            {/* Center Line for desktop */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'var(--surface-border)',
              transform: 'translateX(-50%)',
              zIndex: 0
            }} className="hide-on-mobile" />

            {/* Left Line for mobile */}
            <div style={{
              position: 'absolute',
              left: '20px',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'var(--surface-border)',
              zIndex: 0
            }} className="show-on-mobile" />

            {/* Milestone Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {SEJARAH_DATA.map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div 
                    key={idx}
                    style={{
                      display: 'flex',
                      justifyContent: isEven ? 'flex-start' : 'flex-end',
                      position: 'relative',
                      width: '100%',
                      zIndex: 1
                    }}
                  >
                    {/* Circle Node (Desktop) */}
                    <div style={{
                      position: 'absolute',
                      left: '50%',
                      top: '20px',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--surface)',
                      border: '4px solid var(--primary)',
                      transform: 'translateX(-50%)',
                      boxShadow: '0 0 10px rgba(167, 93, 60, 0.2)'
                    }} className="hide-on-mobile" />

                    {/* Circle Node (Mobile) */}
                    <div style={{
                      position: 'absolute',
                      left: '20px',
                      top: '20px',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--surface)',
                      border: '4px solid var(--primary)',
                      transform: 'translateX(-50%)'
                    }} className="show-on-mobile" />

                    {/* Card container */}
                    <div 
                      style={{
                        marginLeft: isEven ? '0' : 'auto',
                        marginRight: isEven ? 'auto' : '0'
                      }}
                      className="card-premium timeline-card"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                        <span style={{
                          fontSize: '1.4rem',
                          fontWeight: 800,
                          color: 'var(--primary)',
                          fontFamily: 'var(--font-display)'
                        }}>
                          {milestone.year}
                        </span>
                        <div style={{
                          height: '2px',
                          flex: 1,
                          backgroundColor: 'var(--primary-glow)'
                        }} />
                      </div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{milestone.title}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Struktur Organisasi Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--surface-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>PENGURUS SEKOLAH</span>
            <h2 style={{ fontSize: '2.4rem', margin: 0 }}>Struktur Organisasi & Manajemen</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '8px auto 0' }}>
              Kenali jajaran pimpinan yang berdedikasi menjaga kualitas pendidikan di SMA Negeri EduSphere.
            </p>
          </div>

          {/* Grid Hierarchy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            
            {/* Kepala Sekolah (Tingkat Atas) */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div 
                className="card-premium staff-card" 
                style={{ 
                  maxWidth: '480px', 
                  width: '100%',
                  backgroundColor: 'var(--surface)'
                }}
              >
                <div style={{
                  width: '100px',
                  height: '130px',
                  borderRadius: 'var(--border-radius-sm)',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: '1px solid var(--surface-border)'
                }}>
                  <img 
                    src={STAF_DATA[0].image} 
                    alt={STAF_DATA[0].name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', display: 'block', marginBottom: '4px' }}>
                    {STAF_DATA[0].role.toUpperCase()}
                  </span>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>{STAF_DATA[0].name}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {STAF_DATA[0].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Hub Line (Desktop Only) */}
            <div style={{
              height: '24px',
              width: '2px',
              backgroundColor: 'var(--surface-border)',
              margin: '-24px auto 0 auto'
            }} className="hide-on-mobile" />

            {/* Wakil Kepala Sekolah (Tingkat Bawah) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              position: 'relative'
            }}>
              {STAF_DATA.slice(1).map((staf, idx) => (
                <div 
                  key={idx}
                  className="card-premium staff-card"
                  style={{
                    backgroundColor: 'var(--surface)'
                  }}
                >
                  <div style={{
                    width: '90px',
                    height: '120px',
                    borderRadius: 'var(--border-radius-sm)',
                    overflow: 'hidden',
                    flexShrink: 0,
                    border: '1px solid var(--surface-border)'
                  }}>
                    <img 
                      src={staf.image} 
                      alt={staf.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--secondary)', display: 'block', marginBottom: '4px' }}>
                      {staf.role.toUpperCase()}
                    </span>
                    <h5 style={{ fontSize: '1rem', marginBottom: '6px', fontWeight: 700 }}>{staf.name}</h5>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                      {staf.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section (+9000 Plus) */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>TANYA JAWAB</span>
            <h2 style={{ fontSize: '2.2rem', margin: 0 }}>Pertanyaan Sering Diajukan (FAQ)</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '8px' }}>
              Temukan jawaban cepat atas beberapa pertanyaan mendasar mengenai pendaftaran, fasilitas, dan kurikulum belajar.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="card-premium"
                  style={{
                    padding: '24px 32px',
                    cursor: 'pointer',
                    backgroundColor: 'var(--surface)',
                    borderColor: isOpen ? 'var(--primary)' : 'var(--surface-border)',
                    boxShadow: isOpen ? '0 10px 25px rgba(167, 93, 60, 0.04)' : 'none'
                  }}
                  onClick={() => toggleFaq(idx)}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px'
                  }}>
                    <h4 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 700 }}>
                      {faq.q}
                    </h4>
                    <span style={{
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      color: 'var(--primary)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform var(--transition-fast)',
                      display: 'inline-block',
                      lineHeight: 1
                    }}>
                      +
                    </span>
                  </div>

                  {/* Accordion Content with smooth height logic */}
                  <div style={{
                    maxHeight: isOpen ? '150px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height var(--transition-normal) ease-out, margin-top var(--transition-fast), padding-top var(--transition-fast)',
                    marginTop: isOpen ? '16px' : '0',
                    borderTop: isOpen ? '1px solid var(--surface-border)' : 'none',
                    paddingTop: isOpen ? '16px' : '0'
                  }}>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
export default ProfileSection;
