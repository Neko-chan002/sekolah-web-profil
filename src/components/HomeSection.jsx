import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Heart, GraduationCap } from 'lucide-react';
import { STAF_DATA, ALUMNI_DATA } from '../data/mockData';

export const HomeSection = ({ onNavigate }) => {
  const principal = STAF_DATA[0]; // Kepala Sekolah

  return (
    <div style={{ animation: 'morphing 0.5s ease-out' }}>
      
      {/* Hero Section */}
      <section className="section hero-section">
        {/* Animated organic shapes in background for soothing look */}
        <div className="organic-shape" style={{ top: '-10%', left: '-5%', width: '400px', height: '400px' }} />
        <div className="organic-shape" style={{ bottom: '-10%', right: '-5%', width: '350px', height: '350px', animationDelay: '-5s' }} />

        <div className="container grid-mobile-1" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '20px',
              backgroundColor: 'var(--primary-glow)',
              color: 'var(--primary)',
              fontWeight: 600,
              fontSize: '0.85rem',
              marginBottom: '20px'
            }}>
              <Sparkles size={14} />
              <span>Sekolah Ramah Lingkungan & Unggul Digital</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              marginBottom: '20px',
              fontWeight: 800
            }}>
              Membentuk Generasi Berkarakter <span style={{ color: 'var(--primary)' }}>Cerdas & Berbudaya</span>
            </h1>

            <p style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
              color: 'var(--text-secondary)',
              marginBottom: '32px',
              maxWidth: '550px'
            }}>
              Selamat datang di SMA Negeri EduSphere. Kami mengintegrasikan pembelajaran berbasis teknologi modern dengan kelestarian alam untuk mewujudkan pendidikan yang bermutu, adem, dan inspiratif.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={() => onNavigate('profil')} className="btn-primary" style={{ padding: '14px 28px' }}>
                Kenali Lebih Dekat <ArrowRight size={16} />
              </button>
              <button onClick={() => onNavigate('akademik')} className="btn-secondary" style={{ padding: '14px 28px' }}>
                Program Akademik
              </button>
            </div>
          </div>

          {/* Right Hero Image (Enak dilihat & Adem) */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '440px',
              height: '340px',
              borderRadius: 'var(--border-radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(45, 90, 69, 0.05)',
              border: '4px solid var(--surface)'
            }}>
              <img 
                src="./hero.jpg" 
                alt="SMA Negeri EduSphere Kampus" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Soft decorative badge */}
            <div className="card-premium" style={{
              position: 'absolute',
              bottom: '-20px',
              left: '20px',
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 8px 24px rgba(45, 90, 69, 0.08)',
              borderRadius: 'var(--border-radius-sm)',
              maxWidth: '220px'
            }}>
              <div style={{
                backgroundColor: 'var(--primary-glow)',
                color: 'var(--primary)',
                padding: '8px',
                borderRadius: '50%'
              }}>
                <GraduationCap size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', margin: 0 }}>Akreditasi A</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>Nilai Memuaskan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sambutan Kepala Sekolah */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderY: '1px solid var(--surface-border)' }}>
        <div className="container">
          <div className="card-premium grid-mobile-1" style={{
            display: 'grid',
            gridTemplateColumns: '0.7fr 1.3fr',
            gap: '40px',
            alignItems: 'center',
            padding: '48px',
            backgroundColor: 'var(--surface)'
          }}>
            {/* Foto Kepala Sekolah */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{
                width: '180px',
                height: '220px',
                borderRadius: 'var(--border-radius-md)',
                overflow: 'hidden',
                marginBottom: '16px',
                border: '3px solid var(--surface-border)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
              }}>
                <img 
                  src={principal.image} 
                  alt={principal.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4 style={{ margin: '4px 0 0 0', fontSize: '1.05rem', color: 'var(--text-primary)' }}>{principal.name}</h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>{principal.role}</span>
            </div>

            {/* Pesan Sambutan */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.15em' }}>KATA PENGANTAR</span>
              <h2 style={{ fontSize: '1.9rem', margin: 0, fontWeight: 800 }}>Selamat Datang di SMAN EduSphere</h2>
              <div className="quote-style">
                Assalamu'alaikum Wr. Wb.<br/><br/>
                Puji syukur ke hadirat Tuhan Yang Maha Esa atas terwujudnya website profil resmi SMA Negeri EduSphere. Sekolah kami bukan hanya sekadar wadah transfer ilmu, melainkan sebuah ekosistem belajar yang sejuk, bersahabat, dan berwawasan lingkungan.<br/><br/>
                Kami berkomitmen membekali setiap peserta didik dengan fondasi moral yang kokoh (karakter), kapasitas sains mendalam, dan literasi digital tinggi guna menyongsong era global yang penuh tantangan. Semoga portal info ini memberikan wawasan jernih tentang dedikasi pendidikan kami.
              </div>
              <div className="signature-font">
                — Dr. Neko, M.Kom
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi & Nilai Karakter */}
      <section className="section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          
          {/* Visi Misi */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '48px',
            alignItems: 'start'
          }} className="grid-mobile-1">
            {/* Visi */}
            <div style={{
              backgroundColor: 'var(--primary-glow)',
              padding: '40px',
              borderRadius: 'var(--border-radius-md)',
              border: '1px solid var(--surface-border)'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>VISI SEKOLAH</span>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', lineHeight: 1.3, fontWeight: 800 }}>
                "Menjadi pusat pendidikan unggulan berkelas global yang melahirkan agen perubahan berkarakter luhur dan selaras dengan kelestarian alam."
              </h3>
            </div>

            {/* Misi */}
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>MISI SEKOLAH</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  "Menyelenggarakan proses pembelajaran akademik holistik yang melatih nalar kritis dan kreativitas siswa.",
                  "Mengintegrasikan kesadaran ekologis dan ramah lingkungan ke dalam budaya harian sekolah (Green School).",
                  "Mengembangkan kompetensi bahasa asing global dan literasi teknologi informasi berbasis komputasi cloud."
                ].map((misi, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--bg-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      flexShrink: 0
                    }}>
                      {idx + 1}
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>{misi}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nilai Karakter Utama (Enak dilihat & Adem) */}
          <div>
            <h4 style={{ textAlign: 'center', fontSize: '1.25rem', marginBottom: '32px', color: 'var(--text-secondary)' }}>
              Nilai Karakter Inti (EduSphere Core Values)
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}>
              {[
                { icon: <ShieldCheck size={28} />, title: "Integritas", desc: "Mengedepankan kejujuran, moralitas kepemimpinan, dan tanggung jawab etis dalam berpikir dan bertindak." },
                { icon: <GraduationCap size={28} />, title: "Keunggulan", desc: "Pantang menyerah untuk mencapai prestasi akademik dan non-akademik terbaik di kancah nasional." },
                { icon: <Heart size={28} />, title: "Empati Lingkungan", desc: "Menjaga kelestarian lingkungan hidup dan menumbuhkan rasa peduli terhadap sesama makhluk sosial." }
              ].map((val, idx) => (
                <div key={idx} className="card-premium" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{
                    display: 'inline-flex',
                    padding: '12px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--primary-glow)',
                    color: 'var(--primary)',
                    width: 'fit-content'
                  }}>
                    {val.icon}
                  </div>
                  <h4 style={{ fontSize: '1.2rem', margin: 0 }}>{val.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Counter Statistics Section */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderY: '1px solid var(--surface-border)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            textAlign: 'center'
          }}>
            {[
              { count: "1,200+", label: "Siswa Aktif Berbakat" },
              { count: "48+", label: "Pendidik & Staf Ahli" },
              { count: "25+", label: "Klub Ekstrakurikuler" },
              { count: "98%", label: "Lulusan Melanjutkan PTN / LN" }
            ].map((stat, idx) => (
              <div key={idx}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', margin: 0, fontFamily: 'var(--font-display)' }}>{stat.count}</h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, margin: '4px 0 0 0' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni Alumni (Success Stories) */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>KISAH SUKSES</span>
            <h2 style={{ fontSize: '2.2rem', margin: 0 }}>Gerbang Menuju Perguruan Tinggi Dunia</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '8px auto 0' }}>
              Inspirasi dari para alumni SMA Negeri EduSphere yang telah berhasil melanjutkan pendidikan di universitas-universitas terbaik nasional dan global.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }} className="grid-mobile-1">
            {ALUMNI_DATA.map((alumni, idx) => (
              <div 
                key={idx} 
                className="card-premium"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  backgroundColor: 'var(--surface)',
                  padding: '32px',
                  justifyContent: 'space-between'
                }}
              >
                <div className="quote-style" style={{ fontSize: '0.88rem', borderLeftColor: 'var(--primary)', margin: 0 }}>
                  "{alumni.quote}"
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid var(--surface-border)', paddingTop: '20px', marginTop: '10px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid var(--surface-border)'
                  }}>
                    <img src={alumni.image} alt={alumni.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h5 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700 }}>{alumni.name}</h5>
                    <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, display: 'block' }}>{alumni.gradYear}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', lineHeight: 1.3 }}>{alumni.dest}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
export default HomeSection;
