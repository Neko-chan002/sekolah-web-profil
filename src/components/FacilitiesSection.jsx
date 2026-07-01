import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Info, Eye, Layers } from 'lucide-react';
import { FASILITAS_DATA, GALERI_DATA } from '../data/mockData';

const DENAH_DATA = {
  1: [
    { id: 'lobby', name: 'Lobby Utama', icon: '🔑', desc: 'Area masuk utama berlantai marmer dengan lounge tunggu komunal berpemanas alami.', items: ['Information Desk', 'Interactive Kiosk', 'Exhibition Panel'] },
    { id: 'kepsek', name: 'Ruang Kepala Sekolah', icon: '👔', desc: 'Suite pimpinan eksekutif untuk pertemuan formal komite dan pembinaan eksternal.', items: ['Meeting Table', 'Honor Roll Display', 'Secretariat Room'] },
    { id: 'library', name: 'Cyber Library', icon: '📖', desc: 'Perpustakaan digital modern dengan ribuan akses e-book dan tablet mandiri.', items: ['Reading Pods', 'Database Server Access', 'Comfort Lounge'] },
    { id: 'dome', name: 'Smart Dome Center', icon: '🏀', desc: 'Gedung olahraga indoor berstandar nasional dengan lantai kayu parket premium.', items: ['Basketball Court', 'Tribunes', 'Stage Platform'] }
  ],
  2: [
    { id: 'classrooms', name: 'Ruang Kelas Pintar', icon: '🏫', desc: 'Kelas ergonomis ber-AC dengan proyektor interaktif pintar dan meja diskusi dinamis.', items: ['Smart Projector', 'Flexible Desks', 'Whiteboard Grid'] },
    { id: 'scilab', name: 'Lab Sains Terintegrasi', icon: '🔬', desc: 'Laboratorium gabungan biologi, fisika, dan kimia dengan mikroskop elektronik.', items: ['Fume Hood', 'Electronic Microscopes', 'Safety Kit Station'] },
    { id: 'robotics', name: 'Lab Robotik & Cloud', icon: '💻', desc: 'Hub teknologi untuk pemrograman mikrokontroler Arduino dan komputasi cloud.', items: ['3D Printers', 'IoT Testbeds', 'High-End PCs'] },
    { id: 'art', name: 'Studio Seni & Teater', icon: '🎭', desc: 'Ruang kedap suara untuk apresiasi musik, drama, dan latihan tari tradisional.', items: ['Acoustic Panels', 'Sound System', 'Costume Wardrobe'] }
  ],
  3: [
    { id: 'greenhouse', name: 'Greenhouse Organik', icon: '🌱', desc: 'Area bercocok tanam hidroponik perkotaan sebagai wadah riset botani siswa.', items: ['Drip Irrigation', 'Temperature Control', 'Organic Seedbeds'] },
    { id: 'solar', name: 'Panel Surya Array', icon: '☀️', desc: 'Pembangkit listrik tenaga surya mandiri penyedia energi bersih sekolah digital.', items: ['Monocrystalline Panels', 'Inverter System', 'Power Monitor Station'] },
    { id: 'astronomy', name: 'Deck Observasi Bintang', icon: '🔭', desc: 'Area atap terbuka yang dilengkapi dengan teleskop bintang otomatis terkomputerisasi.', items: ['Auto-Tracking Telescope', 'Sky Map Console', 'Starry Lounge'] }
  ]
};

export const FacilitiesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeGaleriCat, setActiveGaleriCat] = useState('Semua');
  const [activeFloor, setActiveFloor] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(DENAH_DATA[1][0]);

  const galeriCategories = ['Semua', 'Akademik', 'Ekskul', 'Umum'];
  
  const filteredGaleri = activeGaleriCat === 'Semua' 
    ? GALERI_DATA 
    : GALERI_DATA.filter(item => item.category === activeGaleriCat);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % FASILITAS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + FASILITAS_DATA.length) % FASILITAS_DATA.length);
  };

  return (
    <div style={{ animation: 'morphing 0.5s ease-out' }}>
      
      <section className="section">
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>TUR KAMPUS</span>
            <h2 style={{ fontSize: '2.4rem', margin: 0 }}>Fasilitas Unggulan Modern</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '8px auto 0' }}>
              Sarana prasarana canggih yang dirancang selaras dengan alam untuk menunjang produktivitas riset dan kenyamanan belajar.
            </p>
          </div>

          {/* Main Carousel Slider */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '40px',
            alignItems: 'center',
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--surface-border)',
            borderRadius: 'var(--border-radius-lg)',
            padding: '32px',
            boxShadow: '0 4px 20px rgba(45, 90, 69, 0.02)'
          }} className="grid-mobile-1">
            
            {/* Left Column: Image Display with soft fade */}
            <div style={{ position: 'relative', height: '360px', width: '100%', overflow: 'hidden', borderRadius: 'var(--border-radius-md)' }}>
              <img 
                src={FASILITAS_DATA[activeIndex].image} 
                alt={FASILITAS_DATA[activeIndex].title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'opacity var(--transition-slow) ease-in-out'
                }}
              />
              {/* Fade Overlay for Text on image bottom */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '20px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)'
              }}>
                <span style={{
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  backgroundColor: 'var(--primary)',
                  padding: '4px 12px',
                  borderRadius: '12px'
                }}>
                  Fasilitas {activeIndex + 1} dari {FASILITAS_DATA.length}
                </span>
              </div>
            </div>

            {/* Right Column: Info & Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                <Info size={16} />
                <span>DETAIL FASILITAS</span>
              </div>

              <h3 style={{ fontSize: '1.8rem', margin: 0, lineHeight: 1.25 }}>
                {FASILITAS_DATA[activeIndex].title}
              </h3>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0, lineHeight: 1.65 }}>
                {FASILITAS_DATA[activeIndex].desc}
              </p>

              {/* Slider Controls */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '16px', alignItems: 'center' }}>
                <button 
                  onClick={handlePrev} 
                  className="btn-secondary" 
                  style={{ width: '48px', height: '48px', padding: 0, justifyContent: 'center', borderRadius: '50%' }}
                >
                  <ChevronLeft size={20} />
                </button>
                
                {/* Dots indicator */}
                <div style={{ display: 'flex', gap: '8px', margin: '0 12px' }}>
                  {FASILITAS_DATA.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      style={{
                        width: activeIndex === idx ? '24px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        border: 'none',
                        backgroundColor: activeIndex === idx ? 'var(--primary)' : 'var(--surface-border)',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                      }}
                      title={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={handleNext} 
                  className="btn-secondary" 
                  style={{ width: '48px', height: '48px', padding: 0, justifyContent: 'center', borderRadius: '50%' }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Grid of Other Facilities (Static overview below) */}
          <div style={{ marginTop: '60px' }}>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'var(--text-secondary)', textAlign: 'center' }}>
              Lihat Semua Fasilitas Kampus
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px'
            }}>
              {FASILITAS_DATA.map((facility, idx) => (
                <div 
                  key={idx} 
                  className="card-premium" 
                  onClick={() => setActiveIndex(idx)}
                  style={{ 
                    padding: '16px', 
                    cursor: 'pointer', 
                    backgroundColor: activeIndex === idx ? 'var(--primary-glow)' : 'var(--surface)',
                    borderColor: activeIndex === idx ? 'var(--primary)' : 'var(--surface-border)'
                  }}
                >
                  <div style={{
                    width: '100%',
                    height: '150px',
                    borderRadius: 'var(--border-radius-sm)',
                    overflow: 'hidden',
                    marginBottom: '12px'
                  }}>
                    <img 
                      src={facility.image} 
                      alt={facility.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <h4 style={{ fontSize: '1rem', margin: '0 0 4px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {facility.title}
                    <Eye size={14} color="var(--text-muted)" />
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {facility.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Galeri Kegiatan Grid Section (+9000 Plus) */}
          <div style={{ marginTop: '80px', borderTop: '1px solid var(--surface-border)', paddingTop: '60px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>GALERI MOMEN</span>
              <h3 style={{ fontSize: '2rem', margin: 0 }}>Dokumentasi Kegiatan Sekolah</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '8px auto 0', fontSize: '0.92rem' }}>
                Kilas balik ragam kreativitas, keceriaan belajar, dan momen bersejarah para siswa SMA Negeri EduSphere.
              </p>
            </div>

            {/* Galeri Category Filters */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: '32px',
              flexWrap: 'wrap'
            }}>
              {galeriCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveGaleriCat(cat)}
                  style={{
                    padding: '6px 16px',
                    borderRadius: '20px',
                    border: '1px solid var(--surface-border)',
                    backgroundColor: activeGaleriCat === cat ? 'var(--primary)' : 'var(--surface)',
                    color: activeGaleriCat === cat ? 'var(--bg-primary)' : 'var(--text-secondary)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Photo Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }} className="grid-mobile-1">
              {filteredGaleri.map((photo, idx) => (
                <div 
                  key={idx}
                  className="card-premium"
                  style={{
                    padding: '12px',
                    backgroundColor: 'var(--surface)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  <div style={{
                    width: '100%',
                    height: '180px',
                    borderRadius: 'var(--border-radius-sm)',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img 
                      src={photo.image} 
                      alt={photo.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 4px 0 4px' }}>
                    <h5 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 700 }}>{photo.title}</h5>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-secondary)',
                      padding: '2px 8px',
                      borderRadius: '4px'
                    }}>
                      {photo.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Peta Kampus Interaktif 2D Section (+9000 Plus) */}
          <div style={{ marginTop: '80px', borderTop: '1px solid var(--surface-border)', paddingTop: '60px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>EKSPLORASI FASILITAS</span>
              <h3 style={{ fontSize: '2rem', margin: 0 }}>Peta Kampus Interaktif 2D</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '8px auto 0', fontSize: '0.92rem' }}>
                Jelajahi tata letak dan detail ruangan tiap lantai di SMA Negeri EduSphere secara digital dan interaktif.
              </p>
            </div>

            {/* Floor Tabs Selection */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '36px'
            }}>
              {[
                { level: 1, label: 'Lantai 1 (Admin)' },
                { level: 2, label: 'Lantai 2 (Lab & Kelas)' },
                { level: 3, label: 'Lantai 3 (Rooftop & Eco)' }
              ].map((f) => (
                <button
                  key={f.level}
                  onClick={() => {
                    setActiveFloor(f.level);
                    setSelectedRoom(DENAH_DATA[f.level][0]);
                  }}
                  style={{
                    padding: '10px 24px',
                    borderRadius: '24px',
                    border: '1px solid var(--surface-border)',
                    backgroundColor: activeFloor === f.level ? 'var(--primary)' : 'var(--surface)',
                    color: activeFloor === f.level ? 'var(--bg-primary)' : 'var(--text-secondary)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <Layers size={14} />
                  {f.label}
                </button>
              ))}
            </div>

            {/* Map Explorer Grid: 2 columns on desktop (Map Left, Info Right) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '32px',
              alignItems: 'stretch'
            }} className="grid-mobile-1">
              
              {/* Map Layout Panel */}
              <div className="card-premium" style={{ 
                backgroundColor: 'var(--bg-secondary)', 
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '340px'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: activeFloor === 3 ? '1fr' : '1fr 1fr',
                  gap: '16px',
                  height: '100%'
                }}>
                  {DENAH_DATA[activeFloor].map((room) => {
                    const isSelected = selectedRoom.id === room.id;
                    return (
                      <div
                        key={room.id}
                        onClick={() => setSelectedRoom(room)}
                        style={{
                          borderRadius: 'var(--border-radius-sm)',
                          backgroundColor: isSelected ? 'var(--primary)' : 'var(--surface)',
                          border: '1px solid',
                          borderColor: isSelected ? 'var(--primary)' : 'var(--surface-border)',
                          color: isSelected ? 'var(--bg-primary)' : 'var(--text-primary)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '30px 20px',
                          cursor: 'pointer',
                          gap: '12px',
                          textAlign: 'center',
                          boxShadow: isSelected ? '0 8px 20px var(--primary-glow)' : '0 2px 8px rgba(0,0,0,0.02)',
                          transition: 'all var(--transition-fast)'
                        }}
                      >
                        <span style={{ fontSize: '2rem' }}>{room.icon}</span>
                        <h4 style={{ 
                          fontSize: '0.98rem', 
                          margin: 0, 
                          fontWeight: 700, 
                          color: isSelected ? 'var(--bg-primary)' : 'var(--text-primary)'
                        }}>
                          {room.name}
                        </h4>
                        <span style={{
                          fontSize: '0.68rem',
                          fontWeight: 600,
                          backgroundColor: isSelected ? 'rgba(255,255,255,0.2)' : 'var(--bg-secondary)',
                          color: isSelected ? 'var(--bg-primary)' : 'var(--primary)',
                          padding: '2px 8px',
                          borderRadius: '4px'
                        }}>
                          Lihat Detail
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Room Details Sidebar Panel */}
              <div className="card-premium" style={{ 
                backgroundColor: 'var(--surface)', 
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '20px'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '2.5rem' }}>{selectedRoom.icon}</span>
                    <div>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.05em', display: 'block' }}>INFO RUANGAN</span>
                      <h4 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 800 }}>{selectedRoom.name}</h4>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                    {selectedRoom.desc}
                  </p>
                </div>

                {/* Sub-facilities list tags */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>FASILITAS UTAMA DI DALAM:</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {selectedRoom.items.map((item, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          padding: '4px 10px',
                          borderRadius: '6px',
                          backgroundColor: 'var(--bg-secondary)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--surface-border)'
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
export default FacilitiesSection;
