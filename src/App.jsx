import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, School, Info, ArrowUpRight } from 'lucide-react';
import HomeSection from './components/HomeSection';
import ProfileSection from './components/ProfileSection';
import FacilitiesSection from './components/FacilitiesSection';
import AcademicsSection from './components/AcademicsSection';
import ContactSection from './components/ContactSection';
import AchievementsSection from './components/AchievementsSection';

export const App = () => {
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'profil' | 'fasilitas' | 'akademik' | 'prestasi' | 'kontak'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('edu_theme') || 'light'; // Default Light mode for clean soothing Sage & Cream feel
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // Sync theme to document element
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('theme-transitioning');
    root.setAttribute('data-theme', theme);
    localStorage.setItem('edu_theme', theme);
    const timer = setTimeout(() => {
      root.classList.remove('theme-transitioning');
    }, 150);
    return () => clearTimeout(timer);
  }, [theme]);

  // Preloader timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 800); // matches the transition duration in CSS
      return () => clearTimeout(removeTimer);
    }, 2000); // 2 seconds display time
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    // Auto-scroll to top when tab changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'profil':
        return <ProfileSection />;
      case 'fasilitas':
        return <FacilitiesSection />;
      case 'akademik':
        return <AcademicsSection />;
      case 'prestasi':
        return <AchievementsSection />;
      case 'kontak':
        return <ContactSection />;
      case 'home':
      default:
        return <HomeSection onNavigate={handleTabChange} />;
    }
  };

  const navLinks = [
    { id: 'home', label: 'Beranda' },
    { id: 'profil', label: 'Profil' },
    { id: 'fasilitas', label: 'Tur Fasilitas' },
    { id: 'akademik', label: 'Akademik & Ekskul' },
    { id: 'prestasi', label: 'Prestasi Siswa' },
    { id: 'kontak', label: 'Hubungi Kami' }
  ];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Premium+++ Cinematic Split-Curtain Preloader */}
      {loading && (
        <div className={`preloader-overlay ${fadeOut ? 'fade-out' : ''}`}>
          {/* Split Curtains */}
          <div className="preloader-curtain curtain-left"></div>
          <div className="preloader-curtain curtain-right"></div>
          
          {/* Glowing Background Particles */}
          <div className="preloader-particles">
            <div className="particle p1"></div>
            <div className="particle p2"></div>
            <div className="particle p3"></div>
            <div className="particle p4"></div>
            <div className="particle p5"></div>
          </div>
          
          <div className="preloader-content-wrapper">
            {/* Double Glowing Orbit Rings */}
            <div className="preloader-orbit-container">
              <div className="orbit-ring ring-outer"></div>
              <div className="orbit-ring ring-inner"></div>
              <div className="preloader-crest-center">
                <span className="preloader-emoji">🏫</span>
              </div>
            </div>
            
            {/* Cinematic Metallic Shine Title */}
            <h1 className="preloader-title-cinematic">
              <span>SMAN</span><span>EDUSPHERE</span>
            </h1>
            
            {/* Pulse Line Loader */}
            <div className="preloader-pulse-track">
              <div className="preloader-pulse-glow"></div>
            </div>
            
            {/* Cinematic Subtitle */}
            <span className="preloader-subtitle-cinematic">
              SEKOLAH HIJAU & DIGITAL
            </span>
          </div>
        </div>
      )}
      
      {/* Header / Navbar */}
      <header className="glass-panel" style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        height: 'var(--header-height)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        transition: 'all var(--transition-normal)'
      }}>
        <div style={{
          width: '100%',
          padding: '0 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <div 
            onClick={() => handleTabChange('home')}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--bg-primary)',
              boxShadow: '0 4px 10px var(--primary-glow)'
            }}>
              <School size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                SMAN <span style={{ color: 'var(--primary)' }}>EduSphere</span>
              </h3>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginTop: '-3px', letterSpacing: '0.05em' }}>
                SEKOLAH HIJAU & DIGITAL
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hide-on-mobile" style={{ display: 'flex', gap: '28px', fontWeight: 600, fontSize: '0.92rem' }}>
            {navLinks.map((link) => (
              <span 
                key={link.id} 
                onClick={() => handleTabChange(link.id)}
                className={`nav-hover-link ${activeTab === link.id ? 'active' : ''}`}
              >
                {link.label}
              </span>
            ))}
          </nav>

          {/* Action Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--surface-border)',
                backgroundColor: 'var(--surface)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
              title={theme === 'dark' ? "Mode Terang" : "Mode Gelap (Soothing Charcoal)"}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Icon */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="show-on-mobile"
              style={{
                border: 'none',
                background: 'transparent',
                color: 'var(--text-primary)',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sliding Navigation Menu */}
      <div className={`mobile-nav-menu glass-panel ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            style={{ border: 'none', background: 'transparent', color: 'var(--text-primary)', cursor: 'pointer' }}
          >
            <X size={26} />
          </button>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '1.15rem', fontWeight: 600 }}>
          {navLinks.map((link) => (
            <span 
              key={link.id} 
              onClick={() => handleTabChange(link.id)}
              style={{
                color: activeTab === link.id ? 'var(--primary)' : 'var(--text-secondary)',
                borderBottom: activeTab === link.id ? '2px solid var(--primary)' : 'none',
                paddingBottom: '4px',
                width: 'fit-content',
                cursor: 'pointer'
              }}
            >
              {link.label}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content Router */}
      <main style={{ flex: 1 }}>
        {renderActiveSection()}
      </main>

      {/* Soothing Footer */}
      <footer style={{
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-secondary)',
        padding: '50px 0 30px 0',
        borderTop: '1px solid var(--surface-border)',
        fontSize: '0.88rem'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr 1fr',
            gap: '40px',
            marginBottom: '40px'
          }} className="grid-mobile-1">
            
            {/* Column 1: Brand Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <School size={20} color="var(--primary)" />
                <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800 }}>SMAN EduSphere</h4>
              </div>
              <p style={{ lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                Sekolah menengah atas rujukan nasional yang memadukan keunggulan kompetensi digital masa depan dengan kesadaran kelestarian lingkungan hidup.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>Navigasi Cepat</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {navLinks.map((link) => (
                  <span 
                    key={link.id} 
                    onClick={() => handleTabChange(link.id)}
                    style={{ cursor: 'pointer', transition: 'color var(--transition-fast)' }}
                    className="nav-hover-link"
                  >
                    {link.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 3: Contact Summary */}
            <div>
              <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>Kontak Kampus</h5>
              <p style={{ margin: '0 0 8px 0' }}>📍 Jl. Raya Sains No. 101, Jakarta</p>
              <p style={{ margin: '0 0 8px 0' }}>📞 (021) 8888-9999</p>
              <p style={{ margin: 0 }}>✉️ info@edusphere.sch.id</p>
            </div>

          </div>

          <div style={{
            borderTop: '1px solid var(--surface-border)',
            paddingTop: '24px',
            textAlign: 'center',
            fontSize: '0.78rem',
            color: 'var(--text-muted)'
          }}>
            <p>© 2026 SMA Negeri EduSphere. Hak Cipta Dilindungi Undang-Undang.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};
export default App;
