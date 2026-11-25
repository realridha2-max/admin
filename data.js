// ---------- 1. KONFIGURASI DATABASE SUPABASE & CLOUDINARY ----------
const SUPABASE_CONFIG = {
  url: 'https://rnmscwvvczjdohycgmrx.supabase.co',
  anonKey: 'sb_publishable_ufcM83uC6yx3Ps3eGM0Z6g_3gg2chsm'
};

const CLOUDINARY_CONFIG = {
  cloudName: 'xwsqb6zu',
  uploadPreset: 'peluangku_preset'
};

// ---------- 2. KONTAK WA KIRIM INFO ACARA ----------
const CONTACT_CONFIG = {
  submitEventWa: 'https://wa.me/6281234567890?text=Halo%20PeluangKu,%20saya%20ingin%20titip%20info%20lomba/beasiswa/magang'
};

// ---------- 3. HERO BANNER SLIDES DATA ----------
const HERO_BANNERS = [
  {
    id: 'slide-beasiswa',
    badge: 'Beasiswa 2026',
    badgeIcon: 'award',
    title: 'Beasiswa Unggulan Nasional',
    sticker: 'Full UKT + Hidup',
    cta: 'Lihat Katalog',
    gradient: 'from-[#1F2937] via-[#111827] to-[#090D16]',
    artwork: HERO_SLIDE_SVGS.beasiswa,
    actionType: 'catalog',
    targetId: ''
  },
  {
    id: 'slide-lomba',
    badge: 'Lomba Nasional',
    badgeIcon: 'trophy',
    title: 'Hackathon & UI/UX Mahasiswa',
    sticker: 'Hadiah Rp 50 Juta',
    cta: 'Lihat Katalog',
    gradient: 'from-[#27272A] via-[#18181B] to-[#09090B]',
    artwork: HERO_SLIDE_SVGS.lomba,
    actionType: 'catalog',
    targetId: ''
  },
  {
    id: 'slide-magang',
    badge: 'Magang Berdampak',
    badgeIcon: 'briefcase',
    title: 'Magang BUMN & Startup Tech',
    sticker: 'Uang Saku 4jt/bln',
    cta: 'Lihat Katalog',
    gradient: 'from-[#334155] via-[#1E293B] to-[#0F172A]',
    artwork: HERO_SLIDE_SVGS.magang,
    actionType: 'catalog',
    targetId: ''
  },
  {
    id: 'slide-webinar',
    badge: 'Webinar & Bootcamp',
    badgeIcon: 'video',
    title: 'Karir & Beasiswa LPDP 101',
    sticker: '100% Gratis + E-Sertif',
    cta: 'Lihat Katalog',
    gradient: 'from-[#374151] via-[#1F2937] to-[#111827]',
    artwork: HERO_SLIDE_SVGS.webinar,
    actionType: 'catalog',
    targetId: ''
  }
];

// ---------- 4. DATA AWAL PELUANG (DIKOSONGKAN — DIISI DARI ADMIN PANEL) ----------
const DEFAULT_OPPORTUNITIES = [];

// ---------- 5. CATEGORIES ----------
const CATEGORIES = [
  { id: 'Semua', label: 'Semua', icon: 'sparkles' },
  { id: 'Lomba', label: 'Lomba', icon: 'trophy' },
  { id: 'Beasiswa', label: 'Beasiswa', icon: 'award' },
  { id: 'Magang', label: 'Magang', icon: 'briefcase' },
  { id: 'Webinar', label: 'Webinar', icon: 'video' },
  { id: 'Relawan', label: 'Relawan', icon: 'heart-handshake' }
];

// ---------- 6. DEFAULT PERSISTENT STATE ----------
const DEFAULT_STATE = {
  user: {
    isLoggedIn: false,
    name: '',
    email: '',
    nim: '-',
    major: 'Mahasiswa Aktif',
    campus: '-',
    cvLink: ''
  },
  opportunities: [],
  saved: [],
  notifications: []
};