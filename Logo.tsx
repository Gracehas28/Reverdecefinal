import React from 'react';

interface LogoProps {
  scrolled?: boolean;
  variant?: 'header' | 'footer' | 'standalone';
}

export default function Logo({ scrolled = false, variant = 'header' }: LogoProps) {
  // Determine color palette based on scroll state and variant
  const isLight = variant === 'footer' || (variant === 'header' && !scrolled);
  
  // Outer logo line color: deep olive green or white/cream
  const strokeColor = isLight ? '#FFFFFF' : '#556B2F';
  // Text color
  const titleColor = isLight ? 'text-white' : 'text-[#556B2F]';
  const subtitleColor = isLight ? 'text-gray-300' : 'text-gray-500';
  const locationColor = isLight ? 'text-gray-400' : 'text-[#556B2F]/80';
  // Accent orange dot
  const orangeColor = '#E05A17';

  return (
    <div className="flex items-center space-x-3 select-none">
      {/* SVG Icon following the exact uploaded design */}
      <div className="flex-shrink-0">
        <svg
          width="48"
          height="44"
          viewBox="0 0 100 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all duration-300 transform group-hover:scale-105"
        >
          {/* Base bottom line left */}
          <path
            d="M 15 65 H 42"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Base bottom line right */}
          <path
            d="M 46 65 H 68"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Leftmost box with inner loop */}
          <path
            d="M 15 65 V 45 H 33 V 59 H 29 V 45"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Tallest middle skyscraper with sloped roof sliding down-right */}
          <path
            d="M 30 65 V 20 L 42 30 V 65"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right tower with slanted roof sliding down-right */}
          <path
            d="M 45 65 V 28 L 58 35 V 65"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right lamp post curving over the orange light bulb */}
          <path
            d="M 64 65 V 47 A 5 5 0 0 1 73 47"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Orange glowing circle representing the signature bulb */}
          <circle
            cx="73"
            cy="48"
            r="3.5"
            fill={orangeColor}
            className="stroke-none"
          />
        </svg>
      </div>

      {/* Structured Text following the original typography block */}
      <div className="flex flex-col justify-center leading-none">
        <span className={`font-sans font-bold text-lg tracking-[0.16em] leading-none transition-colors duration-300 ${titleColor}`}>
          REVERDECE
        </span>
        <span className={`text-[8px] font-sans font-medium tracking-[0.24em] uppercase mt-1 transition-colors duration-300 ${subtitleColor}`}>
          APARTAMENTOS AMOBLADOS
        </span>
        <span className={`text-[8.5px] font-sans font-bold tracking-[0.38em] uppercase mt-0.5 transition-colors duration-300 ${locationColor}`}>
          CARTAGENA
        </span>
      </div>
    </div>
  );
}
