import React from 'react';
import { Phone, Mail, MapPin, Clock, Share2, Compass, CalendarRange } from 'lucide-react';
import { AGENDA_DATA } from '../data/mockData';

export const ContactSection = () => {
  return (
    <div style={{ animation: 'morphing 0.5s ease-out' }}>
      
      <section className="section">
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>HUBUNGI KAMI</span>
            <h2 style={{ fontSize: '2.4rem', margin: 0 }}>Hubungi & Kunjungi Sekolah</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '8px auto 0' }}>
              Kami selalu terbuka untuk pertanyaan, kunjungan studi, atau kerja sama kemitraan.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '40px',
            alignItems: 'stretch'
          }} className="grid-mobile-1">
            
            {/* Left Column: Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              <div className="card-premium" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{
                  backgroundColor: 'var(--primary-glow)',
                  color: 'var(--primary)',
                  padding: '12px',
                  borderRadius: '50%',
                  flexShrink: 0
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', margin: '0 0 4px 0', color: 'var(--text-secondary)' }}>Nomor Telepon</h4>
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>(021) 8888-9999</p>
                </div>
              </div>

              <div className="card-premium" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{
                  backgroundColor: 'var(--primary-glow)',
                  color: 'var(--primary)',
                  padding: '12px',
                  borderRadius: '50%',
                  flexShrink: 0
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', margin: '0 0 4px 0', color: 'var(--text-secondary)' }}>Email Resmi</h4>
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>info@edusphere.sch.id</p>
                </div>
              </div>

              <div className="card-premium" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{
                  backgroundColor: 'var(--primary-glow)',
                  color: 'var(--primary)',
                  padding: '12px',
                  borderRadius: '50%',
                  flexShrink: 0
                }}>
                  <Clock size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', margin: '0 0 4px 0', color: 'var(--text-secondary)' }}>Jam Operasional Kantor</h4>
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Senin - Jumat | 07:00 - 15:30 WIB</p>
                </div>
              </div>

              <div className="card-premium" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{
                  backgroundColor: 'var(--primary-glow)',
                  color: 'var(--primary)',
                  padding: '12px',
                  borderRadius: '50%',
                  flexShrink: 0
                }}>
                  <Share2 size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', margin: '0 0 4px 0', color: 'var(--text-secondary)' }}>Media Sosial</h4>
                  <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)', cursor: 'pointer' }}>@sman_edusphere</span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>|</span>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)', cursor: 'pointer' }}>Youtube SMAN EduSphere</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Address and Mock Map */}
            <div className="card-premium" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px'
            }}>
              
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '12px' }}>
                  <MapPin size={18} />
                  <span>ALAMAT KAMPUS</span>
                </div>
                <h3 style={{ fontSize: '1.6rem', margin: 0, lineHeight: 1.3 }}>
                  Jl. Raya Sains No. 101, Kompleks EduTeknologi, Jakarta Barat
                </h3>
              </div>

              {/* Interactive Google Map Embed */}
              <iframe
                title="Peta Kampus SMAN EduSphere"
                width="100%"
                height="220"
                style={{
                  border: '1px solid var(--surface-border)',
                  borderRadius: 'var(--border-radius-sm)',
                  backgroundColor: 'var(--bg-secondary)',
                  colorScheme: 'light dark'
                }}
                src="https://maps.google.com/maps?q=66.842251,-43.696020&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
              ></iframe>

              {/* Transit Directions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                <h5 style={{ margin: 0, fontWeight: 700, color: 'var(--text-primary)' }}>Rute Transportasi Umum:</h5>
                <p style={{ margin: 0 }}>
                  🚌 <strong>TransJakarta</strong>: Halte EduTeknologi (Koridor 9) - Berjalan kaki 3 menit ke arah timur.
                </p>
                <p style={{ margin: 0 }}>
                  🚊 <strong>KRL Commuter Line</strong>: Stasiun Jakarta Barat - Dilanjutkan ojek online (10 menit).
                </p>
              </div>

            </div>

          </div>
          {/* Kalender Agenda Akademik Section (+9000 Plus) */}
          <div style={{ marginTop: '80px', borderTop: '1px solid var(--surface-border)', paddingTop: '60px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>RANGKAIAN ACARA</span>
              <h3 style={{ fontSize: '2rem', margin: 0 }}>Agenda Akademik & Kegiatan</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '8px auto 0', fontSize: '0.92rem' }}>
                Jadwal penting rangkaian ujian, masa libur, serta agenda kegiatan penting SMA Negeri EduSphere.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px'
            }} className="grid-mobile-1">
              {AGENDA_DATA.map((agenda, idx) => (
                <div 
                  key={idx} 
                  className="card-premium"
                  style={{
                    backgroundColor: 'var(--surface)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    borderLeft: '4px solid var(--primary)',
                    padding: '24px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 700 }}>
                    <CalendarRange size={16} />
                    <span>{agenda.date}</span>
                  </div>
                  <h4 style={{ fontSize: '1rem', margin: 0, fontWeight: 700 }}>{agenda.title}</h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>⏰ {agenda.time}</span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    {agenda.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
export default ContactSection;
