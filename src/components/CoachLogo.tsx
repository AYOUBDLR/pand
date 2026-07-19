import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export function CoachHangtag({ className = 'text-[#dfc3a1]', size = 32 }: LogoProps) {
  // Renders a high-fidelity dangling bead chain + Coach hangtag
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bead chain loop */}
      <path
        d="M 50 15 
           C 53 15, 54 18, 54 21 
           C 54 24, 52 26, 50 28 
           C 48 26, 46 24, 46 21 
           C 46 18, 47 15, 50 15 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 5"
      />
      {/* Connection ring */}
      <circle cx="50" cy="28" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
      
      {/* Leather Hangtag */}
      {/* Rounded rectangle rotated slightly for organic look */}
      <g transform="rotate(8 50 50)">
        {/* Hangtag Base */}
        <rect
          x="38"
          y="31"
          width="24"
          height="46"
          rx="4"
          fill="currentColor"
          stroke="#1c1d21"
          strokeWidth="1.5"
        />
        {/* Eyelet hole */}
        <circle cx="50" cy="37" r="2.5" fill="#1c1d21" />
        
        {/* Inner stitch lines */}
        <rect
          x="41"
          y="34"
          width="18"
          height="40"
          rx="2"
          fill="none"
          stroke="#1c1d21"
          strokeWidth="1"
          strokeDasharray="2 2"
          opacity="0.4"
        />
        
        {/* Embossed COACH lettering inside hangtag */}
        <text
          x="50"
          y="56"
          fontFamily='"Cinzel", serif'
          fontSize="5"
          fontWeight="900"
          fill="#1c1d21"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          COACH
        </text>
        <text
          x="50"
          y="62"
          fontFamily='"Plus Jakarta Sans", sans-serif'
          fontSize="2.5"
          fontWeight="bold"
          fill="#1c1d21"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          NEW YORK
        </text>
      </g>
    </svg>
  );
}

export function CoachLogo({ className = 'text-[#3e2d21]' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center select-none text-center ${className}`}>
      {/* COACH wordmark with classic serif font */}
      <h1 
        className="font-cinzel text-4xl md:text-5xl font-bold tracking-[0.25em] text-[#3e2d21] leading-none pr-[-0.25em]"
        style={{ fontFeatureSettings: '"kern" 1' }}
      >
        COACH
      </h1>
      {/* NEW YORK subtext with wide letter-spacing */}
      <p className="font-sans text-[11px] md:text-xs font-semibold tracking-[0.45em] text-[#3e2d21]/80 mt-2.5 uppercase mr-[-0.45em]">
        NEW YORK
      </p>
    </div>
  );
}

export function CoachDivider() {
  return (
    <div className="relative flex items-center justify-center my-6">
      {/* Horizontal horizontal line */}
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-neutral-200/70" />
      </div>
      
      {/* Center Blue Diamond Indicator Icon */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="w-6 h-6 bg-[#3b82f6] rounded-xs flex items-center justify-center shadow-xs rotate-45 transform">
          {/* Diamond star inside */}
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 text-white -rotate-45 transform"
            fill="currentColor"
          >
            <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function LuxuryBagIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Soft, warm luxury shadow */}
        <radialGradient id="bagShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2e1a14" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2e1a14" stopOpacity="0" />
        </radialGradient>

        {/* Dynamic leather body gradient from sandy peach highlights to deep chocolate */}
        <linearGradient id="leatherBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e3af9a" />
          <stop offset="45%" stopColor="#aa6d57" />
          <stop offset="100%" stopColor="#4f261c" />
        </linearGradient>

        {/* Premium handle gradient */}
        <linearGradient id="leatherHandle" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6e3e31" />
          <stop offset="50%" stopColor="#9b5d4b" />
          <stop offset="100%" stopColor="#6e3e31" />
        </linearGradient>

        {/* Metallic gold buckles and attachments */}
        <linearGradient id="goldAccents" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f6e1cd" />
          <stop offset="35%" stopColor="#d19c74" />
          <stop offset="70%" stopColor="#ad754c" />
          <stop offset="100%" stopColor="#e2b995" />
        </linearGradient>
      </defs>

      {/* 1. Natural floor shadow under the bag */}
      <ellipse cx="32" cy="53" rx="18" ry="3" fill="url(#bagShadow)" />

      {/* 2. Arched leather top handle */}
      {/* We stroke the arc from x=21 to x=43 with a thickness of 4 to give it that round tube feel */}
      <path
        d="M 22 34 A 10 10 0 0 1 42 34"
        fill="none"
        stroke="url(#leatherHandle)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* 3. Handle attachment loops (Gold back-layer of buckle) */}
      <circle cx="22" cy="34" r="3.5" fill="none" stroke="url(#goldAccents)" strokeWidth="1.5" />
      <circle cx="42" cy="34" r="3.5" fill="none" stroke="url(#goldAccents)" strokeWidth="1.5" />

      {/* 4. Luxury flared trapezoidal bag body with rounded bottom corners */}
      <path
        d="M 17 34 
           L 47 34 
           Q 51 34 51 38 
           L 49 48 
           Q 48.5 51 45 51 
           L 19 51 
           Q 15.5 51 15 48 
           L 13 38 
           Q 13 34 17 34 Z"
        fill="url(#leatherBody)"
        stroke="#441f16"
        strokeWidth="0.75"
      />

      {/* 5. Stitching & crease details to look crafted */}
      {/* Top leather fold seam */}
      <path
        d="M 14.5 37 L 49.5 37"
        stroke="#ffd5c2"
        strokeWidth="1"
        strokeDasharray="1.5 1.5"
        opacity="0.3"
      />

      {/* Bottom leather border stitch */}
      <path
        d="M 16.5 48.5 Q 18 49.5 20 49.5 L 44 49.5 Q 46 49.5 47.5 48.5"
        fill="none"
        stroke="#ffd5c2"
        strokeWidth="1"
        strokeDasharray="1.5 1.5"
        opacity="0.3"
      />

      {/* 6. Front leather tabs wrapping the handle anchors */}
      <rect x="20" y="32" width="4" height="6.5" rx="1" fill="#582a20" stroke="#31140e" strokeWidth="0.5" />
      <rect x="40" y="32" width="4" height="6.5" rx="1" fill="#582a20" stroke="#31140e" strokeWidth="0.5" />

      {/* Gold metallic pins/rivets on the tabs */}
      <circle cx="22" cy="36" r="1" fill="url(#goldAccents)" />
      <circle cx="42" cy="36" r="1" fill="url(#goldAccents)" />
    </svg>
  );
}
