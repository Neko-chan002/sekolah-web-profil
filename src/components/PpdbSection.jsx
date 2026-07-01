import React, { useState } from 'react';
import { ShieldCheck, User, FileText, CheckCircle, Upload, ArrowRight, ArrowLeft, Printer, QrCode } from 'lucide-react';

export const PpdbSection = () => {
  const [step, setStep] = useState(1);
  
  // Form State
  const [formData, setFormData] = useState({
    jalur: '',
    nama: '',
    nisn: '',
    asalSekolah: '',
    email: '',
    nohp: ''
  });

  // Document upload state
  const [uploads, setUploads] = useState({
    kk: { status: 'idle', progress: 0 },
    rapor: { status: 'idle', progress: 0 },
    sertifikat: { status: 'idle', progress: 0 }
  });

  const [regId, setRegId] = useState('');

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Simulate file upload with progress bar
  const simulateUpload = (docKey) => {
    if (uploads[docKey].status === 'success') return;
    
    setUploads(prev => ({
      ...prev,
      [docKey]: { status: 'uploading', progress: 0 }
    }));

    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      setUploads(prev => ({
        ...prev,
        [docKey]: { status: 'uploading', progress }
      }));

      if (progress >= 100) {
        clearInterval(interval);
        setUploads(prev => ({
          ...prev,
          [docKey]: { status: 'success', progress: 100 }
        }));
      }
    }, 200);
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.jalur || !formData.nama || !formData.nisn || !formData.asalSekolah) {
      alert("Harap lengkapi semua data wajib sebelum melanjutkan.");
      return;
    }
    // Generate random registration ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setRegId(`PPDB-2026-${randomNum}`);
    setStep(4);
  };

  const jalurs = [
    { id: 'Zonasi', title: 'Jalur Zonasi', desc: 'Berdasarkan radius jarak rumah tinggal siswa ke sekolah.' },
    { id: 'Prestasi Akademik', title: 'Prestasi Akademik', desc: 'Berdasarkan rata-rata nilai rapor & juara olimpiade sains.' },
    { id: 'Prestasi Non-Akademik', title: 'Prestasi Non-Akademik', desc: 'Berdasarkan piagam olahraga, seni, robotik, dll.' },
    { id: 'Afirmasi', title: 'Jalur Afirmasi', desc: 'Khusus bagi siswa dari keluarga ekonomi kurang mampu.' }
  ];

  return (
    <div style={{ animation: 'morphing 0.5s ease-out' }}>
      <section className="section">
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>PENDAFTARAN DIGITAL</span>
            <h2 style={{ fontSize: '2.4rem', margin: 0 }}>Portal Pendaftaran PPDB Online 2026</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '8px auto 0', fontSize: '0.92rem' }}>
              Proses pendaftaran masuk SMA Negeri EduSphere kini sepenuhnya digital, paperless, dan transparan.
            </p>
          </div>

          {/* Step Progress bar */}
          {step <= 3 && (
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              marginBottom: '50px',
              padding: '0 20px'
            }}>
              {/* Connecting line */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '40px',
                right: '40px',
                height: '2px',
                backgroundColor: 'var(--surface-border)',
                zIndex: 0
              }} />
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '40px',
                width: `${(step - 1) * 50}%`,
                height: '2px',
                backgroundColor: 'var(--primary)',
                transition: 'width var(--transition-normal) ease-out',
                zIndex: 0
              }} />

              {/* Step Nodes */}
              {[
                { number: 1, label: 'Pilih Jalur' },
                { number: 2, label: 'Biodata Diri' },
                { number: 3, label: 'Unggah Berkas' }
              ].map((s) => (
                <div key={s.number} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, position: 'relative' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: step >= s.number ? 'var(--primary)' : 'var(--surface)',
                    border: '2px solid',
                    borderColor: step >= s.number ? 'var(--primary)' : 'var(--surface-border)',
                    color: step >= s.number ? 'var(--bg-primary)' : 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    transition: 'all var(--transition-fast)'
                  }}>
                    {s.number}
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    marginTop: '8px',
                    fontWeight: step === s.number ? 700 : 500,
                    color: step === s.number ? 'var(--primary)' : 'var(--text-secondary)'
                  }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Form Content container */}
          <div className="card-premium" style={{ backgroundColor: 'var(--surface)', padding: '40px' }}>
            
            {/* STEP 1: PILIH JALUR */}
            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>Langkah 1: Pilih Jalur PPDB</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>Silakan tentukan salah satu jalur pendaftaran yang sesuai dengan persyaratan Anda.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="grid-mobile-1">
                  {jalurs.map((j) => (
                    <div 
                      key={j.id}
                      onClick={() => setFormData(prev => ({ ...prev, jalur: j.id }))}
                      style={{
                        padding: '24px',
                        borderRadius: 'var(--border-radius-md)',
                        border: '2px solid',
                        borderColor: formData.jalur === j.id ? 'var(--primary)' : 'var(--surface-border)',
                        backgroundColor: formData.jalur === j.id ? 'var(--primary-glow)' : 'var(--surface)',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: formData.jalur === j.id ? 'var(--primary)' : 'var(--text-primary)' }}>{j.title}</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{j.desc}</p>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                  <button 
                    onClick={() => {
                      if (!formData.jalur) {
                        alert("Harap pilih jalur pendaftaran terlebih dahulu.");
                        return;
                      }
                      setStep(2);
                    }}
                    className="btn-primary"
                  >
                    Lanjutkan <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: BIODATA DIRI */}
            {step === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>Langkah 2: Data Diri Calon Siswa</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>Isi formulir biodata diri dengan lengkap sesuai dokumen kependudukan resmi.</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="grid-mobile-1">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600 }}>Nama Lengkap *</label>
                      <input 
                        type="text" 
                        name="nama" 
                        value={formData.nama} 
                        onChange={handleInputChange} 
                        placeholder="Contoh: Farhan Syahputra"
                        style={{
                          padding: '12px',
                          borderRadius: 'var(--border-radius-sm)',
                          border: '1px solid var(--surface-border)',
                          backgroundColor: 'var(--bg-primary)',
                          color: 'var(--text-primary)',
                          fontSize: '0.85rem'
                        }}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600 }}>NISN (Nomor Induk Siswa Nasional) *</label>
                      <input 
                        type="text" 
                        name="nisn" 
                        value={formData.nisn} 
                        onChange={handleInputChange} 
                        placeholder="10 digit nomor NISN"
                        maxLength={10}
                        style={{
                          padding: '12px',
                          borderRadius: 'var(--border-radius-sm)',
                          border: '1px solid var(--surface-border)',
                          backgroundColor: 'var(--bg-primary)',
                          color: 'var(--text-primary)',
                          fontSize: '0.85rem'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600 }}>Sekolah Asal (SMP / MTs) *</label>
                    <input 
                      type="text" 
                      name="asalSekolah" 
                      value={formData.asalSekolah} 
                      onChange={handleInputChange} 
                      placeholder="Contoh: SMP Negeri 1 Jakarta"
                      style={{
                        padding: '12px',
                        borderRadius: 'var(--border-radius-sm)',
                        border: '1px solid var(--surface-border)',
                        backgroundColor: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="grid-mobile-1">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600 }}>Email Aktif</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        placeholder="nama@email.com"
                        style={{
                          padding: '12px',
                          borderRadius: 'var(--border-radius-sm)',
                          border: '1px solid var(--surface-border)',
                          backgroundColor: 'var(--bg-primary)',
                          color: 'var(--text-primary)',
                          fontSize: '0.85rem'
                        }}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600 }}>No. WhatsApp / HP</label>
                      <input 
                        type="tel" 
                        name="nohp" 
                        value={formData.nohp} 
                        onChange={handleInputChange} 
                        placeholder="0812xxxxxxxx"
                        style={{
                          padding: '12px',
                          borderRadius: 'var(--border-radius-sm)',
                          border: '1px solid var(--surface-border)',
                          backgroundColor: 'var(--bg-primary)',
                          color: 'var(--text-primary)',
                          fontSize: '0.85rem'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                  <button onClick={() => setStep(1)} className="btn-secondary">
                    <ArrowLeft size={16} /> Kembali
                  </button>
                  <button 
                    onClick={() => {
                      if (!formData.nama || !formData.nisn || !formData.asalSekolah) {
                        alert("Harap lengkapi semua kolom wajib (*)");
                        return;
                      }
                      setStep(3);
                    }}
                    className="btn-primary"
                  >
                    Lanjutkan <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: UNGGAH BERKAS */}
            {step === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>Langkah 3: Unggah Berkas Dokumen</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>Unggah salinan scan berkas wajib (KK & Rapor) untuk validasi administrasi.</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { key: 'kk', label: 'Scan Kartu Keluarga (KK) *', required: true },
                    { key: 'rapor', label: 'Scan Rapor Terakhir *', required: true },
                    { key: 'sertifikat', label: 'Piagam / Sertifikat Prestasi (Opsional)', required: false }
                  ].map((doc) => {
                    const upState = uploads[doc.key];
                    return (
                      <div 
                        key={doc.key}
                        style={{
                          padding: '20px',
                          borderRadius: 'var(--border-radius-sm)',
                          border: '1px solid var(--surface-border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          backgroundColor: 'var(--bg-primary)',
                          gap: '16px'
                        }}
                        className="grid-mobile-1"
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{doc.label}</span>
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Format: PDF / JPG (Maks. 2MB)</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          {upState.status === 'uploading' && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <div style={{ width: '80px', height: '6px', backgroundColor: 'var(--surface-border)', borderRadius: '3px', overflow: 'hidden' }}>
                                <div style={{ width: `${upState.progress}%`, height: '100%', backgroundColor: 'var(--primary)', transition: 'width 0.2s' }} />
                              </div>
                              <span style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>{upState.progress}%</span>
                            </div>
                          )}

                          {upState.status === 'success' && (
                            <span style={{ color: '#2d5a45', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                              <CheckCircle size={16} /> Berhasil
                            </span>
                          )}

                          {upState.status === 'idle' && (
                            <button 
                              onClick={() => simulateUpload(doc.key)}
                              className="btn-secondary"
                              style={{ padding: '8px 16px', display: 'inline-flex', gap: '6px', fontSize: '0.78rem' }}
                            >
                              <Upload size={14} /> Unggah File
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                  <button onClick={() => setStep(2)} className="btn-secondary">
                    <ArrowLeft size={16} /> Kembali
                  </button>
                  <button 
                    onClick={handleSubmit}
                    className="btn-primary"
                  >
                    Kirim Pendaftaran <CheckCircle size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: KARTU REGISTRASI SUKSES */}
            {step === 4 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', textAlign: 'center' }}>
                <div style={{
                  backgroundColor: 'var(--primary-glow)',
                  color: 'var(--primary)',
                  padding: '16px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 'fit-content'
                }}>
                  <CheckCircle size={36} />
                </div>
                
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '6px' }}>Pendaftaran Berhasil Terkirim!</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
                    Data pendaftaran calon peserta didik baru telah berhasil masuk ke database PPDB SMA Negeri EduSphere 2026.
                  </p>
                </div>

                {/* Printable Receipt Card */}
                <div style={{
                  width: '100%',
                  maxWidth: '520px',
                  border: '2px dashed var(--surface-border)',
                  borderRadius: 'var(--border-radius-md)',
                  backgroundColor: 'var(--bg-primary)',
                  padding: '32px',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.02)',
                  position: 'relative'
                }}>
                  
                  {/* Receipt Header */}
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', borderBottom: '1px solid var(--surface-border)', paddingBottom: '16px' }}>
                    <div style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--bg-primary)',
                      padding: '8px',
                      borderRadius: '8px'
                    }}>
                      <User size={20} />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '0.98rem', fontWeight: 800 }}>KARTU BUKTI PPDB 2026</h4>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>SMAN EDUSPHERE SEKOLAH DIGITAL</span>
                    </div>
                  </div>

                  {/* Receipt Body */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }} className="grid-mobile-1">
                    {/* Left: Metadata list */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8rem', flex: 1 }}>
                      <div>
                        <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>KODE REGISTRASI</span>
                        <strong style={{ color: 'var(--primary)', fontSize: '0.95rem' }}>{regId}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>NAMA LENGKAP</span>
                        <strong>{formData.nama.toUpperCase()}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>NISN</span>
                        <span>{formData.nisn}</span>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>JALUR SELEKSI</span>
                        <strong style={{ color: 'var(--text-primary)' }}>{formData.jalur}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>SEKOLAH ASAL</span>
                        <span>{formData.asalSekolah}</span>
                      </div>
                    </div>

                    {/* Right: Mock QR Code */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--surface-border)',
                      backgroundColor: 'var(--surface)',
                      borderRadius: 'var(--border-radius-sm)',
                      padding: '16px',
                      height: 'fit-content'
                    }}>
                      {/* SVG QR Code */}
                      <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                        <rect x="0" y="0" width="20" height="20" />
                        <rect x="5" y="5" width="10" height="10" fill="var(--bg-primary)" />
                        <rect x="80" y="0" width="20" height="20" />
                        <rect x="85" y="5" width="10" height="10" fill="var(--bg-primary)" />
                        <rect x="0" y="80" width="20" height="20" />
                        <rect x="5" y="85" width="10" height="10" fill="var(--bg-primary)" />
                        
                        {/* Random QR pixels */}
                        <rect x="30" y="10" width="10" height="10" />
                        <rect x="50" y="20" width="10" height="10" />
                        <rect x="40" y="40" width="20" height="20" fill="var(--primary)" />
                        <rect x="10" y="50" width="10" height="10" />
                        <rect x="70" y="60" width="10" height="10" />
                        <rect x="30" y="70" width="20" height="10" />
                        <rect x="80" y="40" width="10" height="20" />
                        <rect x="60" y="80" width="20" height="10" />
                      </svg>
                      <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)', marginTop: '8px', fontWeight: 600 }}>SCAN VALIDASI</span>
                    </div>
                  </div>

                  {/* Bottom validation stamp */}
                  <div style={{
                    borderTop: '1px dashed var(--surface-border)',
                    paddingTop: '12px',
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                    textAlign: 'center'
                  }}>
                    Kartu ini diterbitkan oleh Sistem PPDB Online Resmi SMA Negeri EduSphere 2026.
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }} className="grid-mobile-1">
                  <button 
                    onClick={() => window.print()} 
                    className="btn-secondary"
                    style={{ display: 'inline-flex', gap: '8px' }}
                  >
                    <Printer size={16} /> Cetak Kartu Bukti
                  </button>
                  <button 
                    onClick={() => {
                      setStep(1);
                      setFormData({ jalur: '', nama: '', nisn: '', asalSekolah: '', email: '', nohp: '' });
                      setUploads({
                        kk: { status: 'idle', progress: 0 },
                        rapor: { status: 'idle', progress: 0 },
                        sertifikat: { status: 'idle', progress: 0 }
                      });
                    }} 
                    className="btn-primary"
                  >
                    Daftar Baru Lagi
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>
    </div>
  );
};

export default PpdbSection;
