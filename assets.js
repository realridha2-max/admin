// ---------- BESPOKE MONOCHROME INLINE SVG ARTWORK LIBRARY ----------
// Zero broken external images: every splash, banner, card, header & avatar uses crisp inline SVGs.

const SPLASH_ILLUSTRATION_SVG = `
  <svg viewBox="0 0 430 224" class="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="splashBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1F2937"/>
        <stop offset="55%" stop-color="#111827"/>
        <stop offset="100%" stop-color="#090D16"/>
      </linearGradient>
      <radialGradient id="splashHalo" cx="50%" cy="45%" r="55%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.16"/>
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="silverGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#F9FAFB"/>
        <stop offset="50%" stop-color="#D1D5DB"/>
        <stop offset="100%" stop-color="#6B7280"/>
      </linearGradient>
    </defs>
    <rect width="430" height="224" fill="url(#splashBg)"/>
    <circle cx="215" cy="112" r="145" fill="url(#splashHalo)"/>
    <!-- Architectural Campus Pillars Silhouette -->
    <g opacity="0.22" fill="#E5E7EB">
      <polygon points="85,120 215,62 345,120"/>
      <rect x="96" y="120" width="238" height="10" rx="2"/>
      <rect x="115" y="130" width="16" height="94" rx="2"/>
      <rect x="165" y="130" width="16" height="94" rx="2"/>
      <rect x="249" y="130" width="16" height="94" rx="2"/>
      <rect x="299" y="130" width="16" height="94" rx="2"/>
    </g>
    <!-- Subtle Grid Lines -->
    <g stroke="#FFFFFF" stroke-opacity="0.06" stroke-width="1">
      <line x1="0" y1="56" x2="430" y2="56"/>
      <line x1="0" y1="112" x2="430" y2="112"/>
      <line x1="0" y1="168" x2="430" y2="168"/>
    </g>
    <!-- Floating Achievement Cards -->
    <g transform="translate(38, 122) rotate(-5)">
      <rect width="108" height="62" rx="14" fill="#1F2937" stroke="#E5E7EB" stroke-opacity="0.3"/>
      <rect x="12" y="14" width="26" height="26" rx="8" fill="#FFFFFF" fill-opacity="0.14"/>
      <path d="M25 20 L27 25 L32 25.5 L28 28.5 L29.5 33.5 L25 30.8 L20.5 33.5 L22 28.5 L18 25.5 L23 25 Z" fill="#F9FAFB"/>
      <rect x="46" y="17" width="48" height="6" rx="3" fill="#F9FAFB"/>
      <rect x="46" y="29" width="36" height="5" rx="2.5" fill="#9CA3AF"/>
      <rect x="12" y="47" width="84" height="5" rx="2.5" fill="#FFFFFF" fill-opacity="0.22"/>
    </g>
    <g transform="translate(284, 118) rotate(5)">
      <rect width="110" height="62" rx="14" fill="#1F2937" stroke="#E5E7EB" stroke-opacity="0.3"/>
      <circle cx="25" cy="27" r="13" fill="#FFFFFF" fill-opacity="0.14"/>
      <path d="M19 27 L23 31 L31 23" stroke="#FFFFFF" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="46" y="17" width="50" height="6" rx="3" fill="#F9FAFB"/>
      <rect x="46" y="29" width="34" height="5" rx="2.5" fill="#9CA3AF"/>
      <rect x="12" y="47" width="86" height="5" rx="2.5" fill="#FFFFFF" fill-opacity="0.22"/>
    </g>
    <!-- Center Metallic Emblem -->
    <g transform="translate(215, 118)">
      <circle r="46" fill="#0F172A" stroke="url(#silverGrad)" stroke-width="2.5"/>
      <circle r="38" fill="none" stroke="#FFFFFF" stroke-opacity="0.15" stroke-dasharray="4 4"/>
      <!-- Graduation Cap -->
      <polygon points="0,-20 26,-8 0,4 -26,-8" fill="url(#silverGrad)"/>
      <path d="M-15,-1 V11 C-15,16 15,16 15,11 V-1 L0,6 Z" fill="#E5E7EB"/>
      <line x1="22" y1="-6" x2="22" y2="12" stroke="#F9FAFB" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="22" cy="14" r="3" fill="#F9FAFB"/>
    </g>
    <!-- Sparkle Accents -->
    <g fill="#FFFFFF" opacity="0.8">
      <circle cx="152" cy="70" r="2.2"/>
      <circle cx="278" cy="68" r="2"/>
      <circle cx="72" cy="84" r="1.6"/>
      <circle cx="358" cy="82" r="1.8"/>
    </g>
  </svg>
`;

function getStudentAvatarSVG(initials = 'AR') {
  return `
    <svg viewBox="0 0 80 80" class="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="avBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#374151"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </linearGradient>
      </defs>
      <rect width="80" height="80" fill="url(#avBg)"/>
      <circle cx="40" cy="31" r="14" fill="#F3F4F6"/>
      <path d="M16 74 C18 55 29 48 40 48 C51 48 62 55 64 74 Z" fill="#E5E7EB"/>
      <circle cx="40" cy="31" r="14" fill="none" stroke="#FFFFFF" stroke-opacity="0.35"/>
      <rect x="46" y="48" width="24" height="16" rx="8" fill="#111827" stroke="#FFFFFF" stroke-width="1.5"/>
      <text x="58" y="59" text-anchor="middle" fill="#FFFFFF" font-size="8.5" font-weight="800" font-family="Plus Jakarta Sans, sans-serif">${initials}</text>
    </svg>
  `;
}

// 4 Bespoke Circular Hero Banner SVG Illustrations
const HERO_SLIDE_SVGS = {
  beasiswa: `
    <svg viewBox="0 0 160 160" class="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bGrad1" cx="45%" cy="35%" r="70%">
          <stop offset="0%" stop-color="#4B5563"/>
          <stop offset="60%" stop-color="#1F2937"/>
          <stop offset="100%" stop-color="#090D16"/>
        </radialGradient>
        <linearGradient id="bSilver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="55%" stop-color="#D1D5DB"/>
          <stop offset="100%" stop-color="#6B7280"/>
        </linearGradient>
      </defs>
      <rect width="160" height="160" fill="url(#bGrad1)"/>
      <circle cx="80" cy="80" r="64" fill="none" stroke="#FFFFFF" stroke-opacity="0.12" stroke-width="1"/>
      <circle cx="80" cy="80" r="48" fill="none" stroke="#FFFFFF" stroke-opacity="0.1" stroke-dasharray="4 4"/>
      <g transform="translate(82, 108) rotate(-10)">
        <rect x="-42" y="-12" width="84" height="24" rx="11" fill="#F9FAFB" stroke="#D1D5DB" stroke-width="1.5"/>
        <ellipse cx="-38" cy="0" rx="5" ry="11" fill="#E5E7EB" stroke="#9CA3AF" stroke-width="1"/>
        <ellipse cx="38" cy="0" rx="5" ry="11" fill="#E5E7EB" stroke="#9CA3AF" stroke-width="1"/>
        <rect x="-6" y="-13" width="12" height="26" rx="2" fill="#111827"/>
        <path d="M-3 12 L-8 23 L0 19 L8 23 L3 12 Z" fill="#374151"/>
      </g>
      <g transform="translate(78, 60)">
        <polygon points="0,-24 46,-5 0,14 -46,-5" fill="url(#bSilver)" stroke="#FFFFFF" stroke-width="1.2"/>
        <path d="M-26,3 V20 C-26,28 26,28 26,20 V3 L0,14 Z" fill="#111827" stroke="#E5E7EB" stroke-width="1.2"/>
        <circle cx="0" cy="-5" r="3.5" fill="#111827"/>
        <path d="M36,-1 V22" stroke="#F9FAFB" stroke-width="2.4" stroke-linecap="round"/>
        <circle cx="36" cy="24" r="4" fill="#F9FAFB"/>
        <path d="M33 27 L36 36 L39 27 Z" fill="#D1D5DB"/>
      </g>
      <path d="M34 40 L36.5 46 L42.5 48.5 L36.5 51 L34 57 L31.5 51 L25.5 48.5 L31.5 46 Z" fill="#FFFFFF"/>
      <path d="M126 32 L128 36.5 L132.5 38.5 L128 40.5 L126 45 L124 40.5 L119.5 38.5 L124 36.5 Z" fill="#E5E7EB"/>
      <circle cx="36" cy="122" r="2.5" fill="#D1D5DB"/>
      <circle cx="132" cy="112" r="2" fill="#FFFFFF" opacity="0.7"/>
    </svg>
  `,
  lomba: `
    <svg viewBox="0 0 160 160" class="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lGrad1" cx="50%" cy="35%" r="68%">
          <stop offset="0%" stop-color="#374151"/>
          <stop offset="65%" stop-color="#111827"/>
          <stop offset="100%" stop-color="#030712"/>
        </radialGradient>
        <linearGradient id="trophyMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="45%" stop-color="#D1D5DB"/>
          <stop offset="100%" stop-color="#6B7280"/>
        </linearGradient>
      </defs>
      <rect width="160" height="160" fill="url(#lGrad1)"/>
      <g transform="translate(22, 26)">
        <rect width="116" height="68" rx="10" fill="#1F2937" stroke="#FFFFFF" stroke-opacity="0.2"/>
        <circle cx="12" cy="11" r="2.5" fill="#9CA3AF"/>
        <circle cx="20" cy="11" r="2.5" fill="#6B7280"/>
        <circle cx="28" cy="11" r="2.5" fill="#4B5563"/>
        <rect x="12" y="22" width="38" height="4" rx="2" fill="#E5E7EB" opacity="0.6"/>
        <rect x="12" y="31" width="60" height="4" rx="2" fill="#9CA3AF" opacity="0.45"/>
        <rect x="12" y="40" width="28" height="4" rx="2" fill="#FFFFFF" opacity="0.5"/>
      </g>
      <path d="M40 124 C24 106 24 80 38 62" stroke="#D1D5DB" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-dasharray="4 6"/>
      <path d="M120 124 C136 106 136 80 122 62" stroke="#D1D5DB" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-dasharray="4 6"/>
      <g transform="translate(80, 88)">
        <path d="M-24,-22 H-34 C-38,-22 -38,-4 -26,2 L-20,4" fill="none" stroke="#E5E7EB" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M24,-22 H34 C38,-22 38,-4 26,2 L20,4" fill="none" stroke="#E5E7EB" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M-25,-28 H25 L20,4 C18,16 10,22 0,22 C-10,22 -18,16 -20,4 Z" fill="url(#trophyMetal)" stroke="#FFFFFF" stroke-width="1"/>
        <path d="M0,-16 L3,-9 L10,-8 L5,-3 L6.5,4 L0,0.5 L-6.5,4 L-5,-3 L-10,-8 L-3,-9 Z" fill="#111827"/>
        <rect x="-5" y="21" width="10" height="14" fill="#D1D5DB"/>
        <rect x="-18" y="33" width="36" height="8" rx="3" fill="#F9FAFB"/>
        <rect x="-24" y="40" width="48" height="10" rx="4" fill="#111827" stroke="#E5E7EB" stroke-width="1.2"/>
        <text x="0" y="47.5" text-anchor="middle" fill="#FFFFFF" font-size="6.5" font-weight="800" font-family="Plus Jakarta Sans, sans-serif">JUARA #1</text>
      </g>
      <path d="M128 32 L130 37 L135 39 L130 41 L128 46 L126 41 L121 39 L126 37 Z" fill="#FFFFFF"/>
    </svg>
  `,
  magang: `
    <svg viewBox="0 0 160 160" class="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="mGrad1" cx="50%" cy="35%" r="72%">
          <stop offset="0%" stop-color="#4B5563"/>
          <stop offset="60%" stop-color="#1E293B"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </radialGradient>
        <linearGradient id="briefMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#F9FAFB"/>
          <stop offset="100%" stop-color="#9CA3AF"/>
        </linearGradient>
      </defs>
      <rect width="160" height="160" fill="url(#mGrad1)"/>
      <g fill="#FFFFFF" fill-opacity="0.12">
        <rect x="14" y="64" width="22" height="96" rx="2"/>
        <rect x="40" y="42" width="28" height="118" rx="2"/>
        <rect x="74" y="54" width="24" height="106" rx="2"/>
        <rect x="104" y="34" width="30" height="126" rx="2"/>
        <rect x="138" y="72" width="18" height="88" rx="2"/>
      </g>
      <g transform="translate(72, 96)">
        <path d="M-16,-24 V-32 C-16,-35 -13,-37 -10,-37 H10 C13,-37 16,-35 16,-32 V-24" fill="none" stroke="#E5E7EB" stroke-width="3.5"/>
        <rect x="-42" y="-24" width="84" height="54" rx="11" fill="#111827" stroke="url(#briefMetal)" stroke-width="2"/>
        <path d="M-42,-4 H42" stroke="#FFFFFF" stroke-opacity="0.25" stroke-width="1.5"/>
        <rect x="-8" y="-10" width="16" height="12" rx="3" fill="#F9FAFB"/>
      </g>
      <g transform="translate(106, 62) rotate(10)">
        <rect x="-24" y="-30" width="48" height="60" rx="8" fill="#FFFFFF" stroke="#111827" stroke-width="1.5"/>
        <rect x="-8" y="-25" width="16" height="3.5" rx="1.7" fill="#9CA3AF"/>
        <circle cx="0" cy="-8" r="9" fill="#111827"/>
        <circle cx="0" cy="-10" r="3" fill="#F9FAFB"/>
        <path d="M-5,-2 C-4,-6 4,-6 5,-2" fill="#F9FAFB"/>
        <rect x="-15" y="7" width="30" height="4" rx="2" fill="#111827"/>
        <rect x="-11" y="14" width="22" height="3.5" rx="1.7" fill="#9CA3AF"/>
        <circle cx="18" cy="-22" r="8" fill="#111827" stroke="#FFFFFF" stroke-width="1.8"/>
        <path d="M14.5 -22 L17 -19.5 L21.5 -24.5" stroke="#FFFFFF" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>
  `,
  webinar: `
    <svg viewBox="0 0 160 160" class="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="wGrad1" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stop-color="#374151"/>
          <stop offset="58%" stop-color="#18181B"/>
          <stop offset="100%" stop-color="#09090B"/>
        </radialGradient>
        <linearGradient id="micGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="#9CA3AF"/>
        </linearGradient>
      </defs>
      <rect width="160" height="160" fill="url(#wGrad1)"/>
      <circle cx="64" cy="78" r="46" fill="none" stroke="#FFFFFF" stroke-opacity="0.14" stroke-width="1.2"/>
      <circle cx="64" cy="78" r="62" fill="none" stroke="#FFFFFF" stroke-opacity="0.08" stroke-width="1.2"/>
      <g transform="translate(84, 28)">
        <rect width="52" height="22" rx="11" fill="#FFFFFF"/>
        <polygon points="13,7 20,11 13,15" fill="#111827"/>
        <text x="35" y="14" text-anchor="middle" fill="#111827" font-size="8" font-weight="800" font-family="Plus Jakarta Sans, sans-serif">LIVE</text>
      </g>
      <g transform="translate(64, 76)">
        <rect x="-15" y="-32" width="30" height="44" rx="15" fill="url(#micGrad)" stroke="#FFFFFF" stroke-width="1"/>
        <line x1="-10" y1="-18" x2="10" y2="-18" stroke="#111827" stroke-width="2" stroke-linecap="round"/>
        <line x1="-10" y1="-10" x2="10" y2="-10" stroke="#111827" stroke-width="2" stroke-linecap="round"/>
        <line x1="-10" y1="-2" x2="10" y2="-2" stroke="#111827" stroke-width="2" stroke-linecap="round"/>
        <path d="M-23,-4 V4 C-23,18 -13,28 0,28 C13,28 23,18 23,4 V-4" fill="none" stroke="#E5E7EB" stroke-width="3.2" stroke-linecap="round"/>
        <line x1="0" y1="28" x2="0" y2="42" stroke="#E5E7EB" stroke-width="3.2"/>
        <rect x="-18" y="40" width="36" height="6" rx="3" fill="#F9FAFB"/>
      </g>
      <g transform="translate(114, 102) rotate(-6)">
        <rect x="-24" y="-18" width="48" height="34" rx="6" fill="#F9FAFB" stroke="#111827" stroke-width="1.4"/>
        <rect x="-16" y="-10" width="22" height="3.5" rx="1.7" fill="#111827"/>
        <rect x="-16" y="-3" width="16" height="3" rx="1.5" fill="#9CA3AF"/>
        <circle cx="14" cy="4" r="9" fill="#111827" stroke="#FFFFFF" stroke-width="1.5"/>
        <path d="M10.5 4 L13 6.5 L17.5 1.5" stroke="#FFFFFF" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11 13 L9 24 L14 20 L19 24 L17 13 Z" fill="#374151"/>
      </g>
    </svg>
  `
};

// Menampilkan gambar Cloudinary jika tersedia, atau fallback ke SVG bawaan
function getOpportunityCoverSVG(item, variant = 'card') {
  if (item && item.imageUrl) {
    const safeUrl = String(item.imageUrl).replace(/"/g, '&quot;');
    const safeTitle = String(item.title || 'Poster Peluang').replace(/"/g, '&quot;');
    return `<img src="${safeUrl}" alt="${safeTitle}" loading="lazy" class="w-full h-full object-cover block" />`;
  }

  const cat = item.category;
  const palettes = {
    Lomba:    { bg1: '#1F2937', bg2: '#090D16', chip: '#FFFFFF', motif: 'trophy' },
    Beasiswa: { bg1: '#111827', bg2: '#27272A', chip: '#F3F4F6', motif: 'grad' },
    Magang:   { bg1: '#0F172A', bg2: '#334155', chip: '#E5E7EB', motif: 'brief' },
    Webinar:  { bg1: '#18181B', bg2: '#3F3F46', chip: '#FFFFFF', motif: 'mic' },
    Relawan:  { bg1: '#1F2937', bg2: '#374151', chip: '#F9FAFB', motif: 'heart' }
  };
  const pal = palettes[cat] || palettes.Lomba;
  const uid = item.id.replace(/[^a-z0-9]/gi, '') + '_' + variant;

  let centerIcon = '';
  if (pal.motif === 'trophy') {
    centerIcon = `
      <g transform="translate(150, 74)">
        <circle r="34" fill="#FFFFFF" fill-opacity="0.08" stroke="#FFFFFF" stroke-opacity="0.22"/>
        <path d="M-15,-14 H15 L12,4 C10,12 5,15 0,15 C-5,15 -10,12 -12,4 Z" fill="#F9FAFB"/>
        <path d="M-14,-10 H-21 C-23,-10 -23,1 -16,3 L-12,4" fill="none" stroke="#E5E7EB" stroke-width="2.4"/>
        <path d="M14,-10 H21 C23,-10 23,1 16,3 L12,4" fill="none" stroke="#E5E7EB" stroke-width="2.4"/>
        <rect x="-3" y="14" width="6" height="8" fill="#D1D5DB"/>
        <rect x="-12" y="21" width="24" height="5" rx="2.5" fill="#FFFFFF"/>
      </g>`;
  } else if (pal.motif === 'grad') {
    centerIcon = `
      <g transform="translate(150, 74)">
        <circle r="34" fill="#FFFFFF" fill-opacity="0.08" stroke="#FFFFFF" stroke-opacity="0.22"/>
        <polygon points="0,-17 26,-6 0,5 -26,-6" fill="#FFFFFF"/>
        <path d="M-15,0 V12 C-15,17 15,17 15,12 V0 L0,6 Z" fill="#D1D5DB"/>
        <line x1="21" y1="-4" x2="21" y2="14" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>
        <circle cx="21" cy="15" r="2.6" fill="#FFFFFF"/>
      </g>`;
  } else if (pal.motif === 'brief') {
    centerIcon = `
      <g transform="translate(150, 74)">
        <circle r="34" fill="#FFFFFF" fill-opacity="0.08" stroke="#FFFFFF" stroke-opacity="0.22"/>
        <path d="M-9,-12 V-16 C-9,-18 -7,-19 -5,-19 H5 C7,-19 9,-18 9,-16 V-12" fill="none" stroke="#E5E7EB" stroke-width="2.4"/>
        <rect x="-22" y="-12" width="44" height="30" rx="6" fill="#F9FAFB"/>
        <line x1="-22" y1="0" x2="22" y2="0" stroke="#111827" stroke-opacity="0.22" stroke-width="1.8"/>
        <rect x="-5" y="-4" width="10" height="7" rx="2" fill="#111827"/>
      </g>`;
  } else if (pal.motif === 'mic') {
    centerIcon = `
      <g transform="translate(150, 74)">
        <circle r="34" fill="#FFFFFF" fill-opacity="0.08" stroke="#FFFFFF" stroke-opacity="0.22"/>
        <rect x="-9" y="-20" width="18" height="26" rx="9" fill="#FFFFFF"/>
        <path d="M-15,-2 V4 C-15,12 -8,18 0,18 C8,18 15,12 15,4 V-2" fill="none" stroke="#E5E7EB" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="0" y1="18" x2="0" y2="25" stroke="#E5E7EB" stroke-width="2.5"/>
        <line x1="-10" y1="25" x2="10" y2="25" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round"/>
      </g>`;
  } else {
    centerIcon = `
      <g transform="translate(150, 74)">
        <circle r="34" fill="#FFFFFF" fill-opacity="0.08" stroke="#FFFFFF" stroke-opacity="0.22"/>
        <path d="M0,18 C-14,9 -22,1 -22,-7 C-22,-14 -16,-19 -10,-19 C-5,-19 -2,-16 0,-12 C2,-16 5,-19 10,-19 C16,-19 22,-14 22,-7 C22,1 14,9 0,18 Z" fill="#F9FAFB"/>
        <circle cx="0" cy="-2" r="5" fill="#111827"/>
      </g>`;
  }

  return `
    <svg viewBox="0 0 300 150" preserveAspectRatio="xMidYMid slice" class="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cg_${uid}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${pal.bg1}"/>
          <stop offset="100%" stop-color="${pal.bg2}"/>
        </linearGradient>
      </defs>
      <rect width="300" height="150" fill="url(#cg_${uid})"/>
      <circle cx="255" cy="24" r="64" fill="#FFFFFF" fill-opacity="0.05"/>
      <circle cx="38" cy="132" r="56" fill="#FFFFFF" fill-opacity="0.04"/>
      <g stroke="#FFFFFF" stroke-opacity="0.07" stroke-width="1">
        <line x1="0" y1="38" x2="300" y2="38"/>
        <line x1="0" y1="76" x2="300" y2="76"/>
        <line x1="0" y1="114" x2="300" y2="114"/>
        <line x1="75" y1="0" x2="75" y2="150"/>
        <line x1="225" y1="0" x2="225" y2="150"/>
      </g>
      ${centerIcon}
      <circle cx="54" cy="48" r="2.2" fill="#FFFFFF" opacity="0.5"/>
      <circle cx="242" cy="108" r="2.5" fill="#FFFFFF" opacity="0.4"/>
      <path d="M234 44 L236 48 L240 50 L236 52 L234 56 L232 52 L228 50 L232 48 Z" fill="#FFFFFF" opacity="0.7"/>
    </svg>
  `;
}