import React from 'react';

interface PandoraLogoProps {
  className?: string;
  size?: number | string;
}

export function PandoraCrownO({ className = 'text-white', size = 28 }: PandoraLogoProps) {
  return (
    <svg
      viewBox="0 0 100 105"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Three circles on top of the crown peaks */}
      <circle cx="50" cy="16" r="3" />
      <circle cx="34" cy="27" r="2" />
      <circle cx="66" cy="27" r="2" />

      {/* The Crown Path */}
      <path
        d="M 34.5 28 L 41 42.5 L 50 25.5 L 59 42.5 L 65.5 28 C 65.5 28 66 48.5 64 49 C 62 49.5 38 49.5 36 49 C 34 48.5 34.5 28 34.5 28 Z"
        fill="currentColor"
      />

      {/* Minimal gap between crown and O */}
      {/* The letter O (with precise inner and outer path for crispness) */}
      <path
        d="M 50 51 C 36.2 51 25 62.2 25 76 C 25 89.8 36.2 101 50 101 C 63.8 101 75 89.8 75 76 C 75 62.2 63.8 51 50 51 Z M 50 57 C 60.5 57 69 65.5 69 76 C 69 86.5 60.5 95 50 95 C 39.5 95 31 86.5 31 76 C 31 65.5 39.5 57 50 57 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PandoraWordmark({ className = 'text-[#1c1d21]', size = 180 }: PandoraLogoProps) {
  // Renders the full P A N D O R A text layout with the crown on the O
  const height = typeof size === 'number' ? size * 0.22 : 'auto';
  return (
    <div className={`flex items-center justify-center select-none ${className}`} style={{ width: size, height }}>
      <svg
        viewBox="0 0 320 80"
        width="100%"
        height="100%"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <g style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif', fontWeight: 800, letterSpacing: '0.15em' }}>
          {/* P */}
          <text x="10" y="58" fontSize="28">P</text>
          {/* A */}
          <text x="44" y="58" fontSize="28">A</text>
          {/* N */}
          <text x="80" y="58" fontSize="28">N</text>
          {/* D */}
          <text x="116" y="58" fontSize="28">D</text>

          {/* O with crown */}
          <g transform="translate(156, 12)">
            {/* The O circle */}
            <circle cx="21" cy="40" r="12.5" stroke="currentColor" strokeWidth="3" fill="none" />
            {/* Crown base dots */}
            <circle cx="21" cy="11.5" r="2" />
            <circle cx="10" cy="19.5" r="1.3" />
            <circle cx="32" cy="19.5" r="1.3" />
            {/* Crown body */}
            <path d="M 10 20 L 14.5 30 L 21 18 L 27.5 30 L 32 20 C 32 20 32.5 33 21 34 C 9.5 33 10 20 10 20 Z" />
          </g>

          {/* R */}
          <text x="214" y="58" fontSize="28">R</text>
          {/* A */}
          <text x="249" y="58" fontSize="28">A</text>
        </g>
      </svg>
    </div>
  );
}
