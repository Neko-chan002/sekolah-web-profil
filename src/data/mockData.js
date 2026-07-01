// Database Statis SMA Negeri EduSphere
// Menyediakan data profil sekolah, sejarah, fasilitas, ekstrakurikuler, prestasi, testimoni, FAQ, galeri, dan agenda

export const STAF_DATA = [
  {
    name: "Dr. H. Ahmad Fauzi, M.Pd.",
    role: "Kepala Sekolah",
    desc: "Memimpin SMA Negeri EduSphere sejak tahun 2020 dengan visi mewujudkan sekolah digital ramah lingkungan berprestasi global.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Ibu Retno Wulandari, M.Pd.",
    role: "Wakil Kepala Sekolah Bidang Kurikulum",
    desc: "Mengembangkan kurikulum terpadu berbasis sains, literasi teknologi, dan pemikiran analitis kritis.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Bapak Ahmad Sofyan, S.Pd.",
    role: "Wakil Kepala Sekolah Bidang Kesiswaan",
    desc: "Membina kedisiplinan, kepemimpinan siswa, serta menaungi pengembangan seluruh klub ekstrakurikuler.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Ibu Indah Pertiwi, M.T.",
    role: "Wakil Kepala Sekolah Bidang Sarana & Prasarana",
    desc: "Bertanggung jawab atas ketersediaan fasilitas teknologi modern dan pemeliharaan gedung berkonsep ramah lingkungan.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600"
  }
];

export const SEJARAH_DATA = [
  {
    year: "2005",
    title: "Pendirian Sekolah",
    desc: "SMA Negeri EduSphere didirikan atas inisiasi pemerintah kota sebagai rintisan sekolah menengah berorientasi teknologi sains."
  },
  {
    year: "2012",
    title: "Akreditasi A & Rujukan Kota",
    desc: "Mendapatkan status Akreditasi A dengan nilai sangat memuaskan, dan resmi ditunjuk menjadi sekolah model rujukan kurikulum lokal."
  },
  {
    year: "2018",
    title: "Penghargaan Adiwiyata Mandiri",
    desc: "Dianugerahi penghargaan Adiwiyata Mandiri tingkat Nasional oleh Presiden atas komitmen pelestarian lingkungan hidup di sekolah."
  },
  {
    year: "2024",
    title: "Transformasi Sekolah Digital",
    desc: "Meluncurkan integrasi pembelajaran berbasis Cyber-Classroom, e-learning mandiri, dan laboratorium komputer berbasis cloud."
  }
];

export const FASILITAS_DATA = [
  {
    title: "Laboratorium Sains Terintegrasi",
    desc: "Fasilitas riset Fisika, Kimia, dan Biologi dengan instrumen lengkap untuk eksperimen praktis siswa.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Perpustakaan Digital (Cyber Library)",
    desc: "Ribuan katalog e-book dan jurnal ilmiah yang dapat diakses dengan mudah menggunakan tablet yang disediakan sekolah.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "EduSphere Smart Dome & Sports Center",
    desc: "Gedung olahraga indoor berstandar nasional untuk basket, bulutangkis, serta acara panggung seni siswa.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Ruang Kelas Pintar (Smart Classroom)",
    desc: "Dilengkapi dengan proyektor interaktif, AC, dan tata letak meja-kursi ergonomis yang fleksibel untuk kerja kelompok.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1200"
  }
];

export const JURUSAN_DATA = [
  {
    id: "mipa",
    title: "Matematika & Ilmu Pengetahuan Alam (MIPA)",
    desc: "Fokus pada penguasaan sains analitis, matematika mendalam, fisika teori, kimia eksperimental, dan biologi molekuler. Menyiapkan siswa untuk program studi kedokteran, teknik, dan sains murni.",
    features: ["Kelas Olimpiade Khusus", "Praktikum Mingguan di Lab", "Bimbingan Karya Ilmiah Remaja (KIR)"]
  },
  {
    id: "ips",
    title: "Ilmu Pengetahuan Sosial (IPS)",
    desc: "Menitikberatkan pada pemahaman ekonomi makro/mikro, sosiologi interaktif, sejarah kritis, dan geografi spasial. Melatih siswa berpikir taktis dalam memecahkan isu sosial dan wirausaha.",
    features: ["Simulasi Pasar Modal & Bisnis", "Studi Lapangan Sosial-Budaya", "Inkubator Start-up Sekolah"]
  },
  {
    id: "bahasa",
    title: "Bahasa & Budaya",
    desc: "Mengembangkan keterampilan komunikasi verbal multibahasa (Bahasa Inggris, Jerman, Jepang) dan pemahaman mendalam lintas budaya global untuk menyiapkan karir diplomatik dan sastra.",
    features: ["Program Pertukaran Pelajar", "Lembaga Bahasa Berlisensi", "Klub Jurnalistik & Teater"]
  }
];

export const EKSKUL_DATA = [
  {
    name: "Klub Robotik",
    category: "Sains & Teknologi",
    desc: "Mempelajari pemrograman mikrokontroler, perakitan sensor, dan pembuatan robot tanding tingkat regional dan nasional.",
    iconName: "Cpu"
  },
  {
    name: "Karya Ilmiah Remaja (KIR)",
    category: "Sains & Teknologi",
    desc: "Wadah eksperimen ilmiah dan penulisan karya ilmiah remaja guna mengikuti ajang lomba sains bergengsi.",
    iconName: "FlaskCon"
  },
  {
    name: "Klub Basket",
    category: "Olahraga",
    desc: "Latihan rutin teknik basket, pembinaan fisik, dan partisipasi aktif dalam turnamen persahabatan antar sekolah.",
    iconName: "Trophy"
  },
  {
    name: "Paskibra",
    category: "Olahraga",
    desc: "Melatih disiplin tinggi, baris-berbaris formal, kesiapan mental patriotik, dan pengibaran bendera hari besar.",
    iconName: "User"
  },
  {
    name: "Paduan Suara (Choir)",
    category: "Seni & Budaya",
    desc: "Pengembangan teknik vokal kelompok, harmoni nada, dan pengisi upacara resmi serta lomba paduan suara daerah.",
    iconName: "Music"
  },
  {
    name: "Teater & Seni Peran",
    category: "Seni & Budaya",
    desc: "Pelatihan akting, penulisan skenario drama, dan pementasan teater tahunan di panggung apresiasi seni.",
    iconName: "Drama"
  }
];

// DATA TESTIMONI ALUMNI (+9000 Plus)
export const ALUMNI_DATA = [
  {
    name: "Faris Izzudin",
    gradYear: "Alumni 2021",
    dest: "Teknik Informatika - Institut Teknologi Bandung (ITB)",
    quote: "EduSphere memberikan saya ekosistem belajar digital yang luar biasa. Sejak SMA saya sudah terbiasa dengan fasilitas komputasi modern yang membuat adaptasi kuliah saya di ITB terasa begitu mudah.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300"
  },
  {
    name: "Clara Amalia",
    gradYear: "Alumni 2022",
    dest: "Pendidikan Kedokteran - Universitas Indonesia (UI)",
    quote: "Praktikum sains mingguan di laboratorium terintegrasi SMAN EduSphere membentuk nalar klinis saya. Bimbingan guru-guru di sini sangat tulus dan selalu mendorong saya melampaui batas.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300"
  },
  {
    name: "Reza Mahendra",
    gradYear: "Alumni 2023",
    dest: "Computer Science - Tokyo Institute of Technology, Jepang",
    quote: "Program kelas olimpiade dan pengenalan riset karya ilmiah di EduSphere sangat berstandar global. Saya mendapat beasiswa penuh ke Jepang berkat portofolio ekskul robotik yang saya bina di sini.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
  }
];

// DATA PRESTASI SISWA (+9000 Plus)
export const PRESTASI_DATA = [
  {
    title: "Medali Emas - Olimpiade Sains Nasional (OSN) Fisika 2025",
    winner: "Rian Aditya (Siswa Kelas XII MIPA 1)",
    level: "Nasional",
    category: "Akademik",
    desc: "Meraih penghargaan nilai tertinggi dalam analisis termodinamika teoritis tingkat nasional.",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Juara 1 - Kontes Robotik Cerdas Indonesia (KRCI) 2026",
    winner: "Tim Robotik EduSphere (Budi, Ani, & Farhan)",
    level: "Nasional",
    category: "Non-Akademik",
    desc: "Menghadirkan robot pemadam kebakaran otonom dengan algoritma sensor ultrasonik paling presisi.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Medali Perak - International Mathematics Olympiad (IMO) 2025",
    winner: "Siti Rahmawati (Siswa Kelas XII MIPA 2)",
    level: "Internasional",
    category: "Akademik",
    desc: "Mewakili delegasi Indonesia di Tokyo dan berhasil meraih perak dalam aljabar tingkat lanjut.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Juara 1 - Kejuaraan Basket SMA Jabodetabek Cup 2026",
    winner: "Tim Basket Putra SMAN EduSphere",
    level: "Regional",
    category: "Non-Akademik",
    desc: "Menjuarai liga persahabatan antar SMA setelah mengalahkan juara bertahan di babak final.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=500"
  }
];

// DATA FAQ AKORDION (+9000 Plus)
export const FAQ_DATA = [
  {
    q: "Kapan Penerimaan Peserta Didik Baru (PPDB) dibuka?",
    a: "Pendaftaran PPDB online SMA Negeri EduSphere biasanya dibuka dalam 2 gelombang: Gelombang Jalur Prestasi (Maret - April) dan Gelombang Jalur Reguler/Zonasi (Juni - Juli) setiap tahunnya."
  },
  {
    q: "Apakah disediakan beasiswa bagi siswa kurang mampu?",
    a: "Ya, sekolah menyediakan beasiswa penuh (bebas SPP & uang gedung) bagi siswa berprestasi yang kurang mampu melalui Program Beasiswa EduCare, serta memfasilitasi beasiswa KIP (Kartu Indonesia Pintar)."
  },
  {
    q: "Bagaimana sistem pengajaran digital yang diterapkan?",
    a: "Kami menggunakan infrastruktur pembelajaran pintar (Smart Classroom) yang terintegrasi dengan akun cloud belajar siswa. Setiap materi pembelajaran, kuis, dan pengumpulan tugas sekolah diakses secara paperless menggunakan tablet/laptop."
  },
  {
    q: "Apa saja fasilitas laboratorium sains yang ada di sekolah?",
    a: "Sekolah kami memiliki 4 laboratorium utama: Laboratorium Kimia (stoikiometri & larutan), Laboratorium Fisika (termodinamika & mekanika), Laboratorium Biologi (mikroskopi & genetika), dan Laboratorium Komputer Komputasi Cloud."
  }
];

// DATA GALERI FOTO KEGIATAN (+9000 Plus)
export const GALERI_DATA = [
  {
    title: "Praktikum Kimia Organik",
    category: "Akademik",
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Latihan Rutin Robotik",
    category: "Ekskul",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Upacara Hari Kemerdekaan",
    category: "Umum",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Kunjungan Kemitraan Industri",
    category: "Umum",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Kejuaraan Basket Antar Sekolah",
    category: "Ekskul",
    image: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Belajar Kelompok Smart Room",
    category: "Akademik",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600"
  }
];

// DATA AGENDA AKADEMIK (+9000 Plus)
export const AGENDA_DATA = [
  {
    date: "10 Juli - 18 Juli 2026",
    title: "Ujian Akhir Semester (UAS) Ganjil",
    time: "07:30 - 12:30 WIB",
    desc: "Dilaksanakan secara serentak di ruang kelas pintar masing-masing."
  },
  {
    date: "24 Juli 2026",
    title: "Pembagian Rapor & Gelar Karya Projek",
    time: "08:00 - 11:30 WIB",
    desc: "Pameran hasil karya seni dan teknologi projek profil pelajar Pancasila siswa."
  },
  {
    date: "27 Juli - 10 Agustus 2026",
    title: "Libur Semester & Pendaftaran Ulang PPDB",
    time: "Luring & Daring",
    desc: "Masa libur siswa dan proses pemberkasan calon siswa baru gelombang reguler."
  },
  {
    date: "12 Agustus 2026",
    title: "Hari Pertama Masuk Sekolah & MPLS",
    time: "07:00 - 14:00 WIB",
    desc: "Masa Pengenalan Lingkungan Sekolah bagi peserta didik baru kelas X."
  }
];
