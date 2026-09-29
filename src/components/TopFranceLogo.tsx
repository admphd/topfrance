import React from 'react';

interface TopFranceLogoProps {
  className?: string;
  size?: number;
  showSubtitle?: boolean;
}

export const TopFranceLogo: React.FC<TopFranceLogoProps> = ({
  className = 'w-12 h-12',
  size,
  showSubtitle = true
}) => {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo Oficial Top France Centro Automotivo"
    >
      <defs>
        {/* Outer Dark Rim Gradient */}
        <linearGradient id="tf-outer-rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e2229" />
          <stop offset="50%" stopColor="#0d0f12" />
          <stop offset="100%" stopColor="#2a303c" />
        </linearGradient>

        {/* Metallic Bevel Ring Gradient */}
        <linearGradient id="tf-metallic-ring" x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#9aa0a6" />
          <stop offset="50%" stopColor="#e8eaed" />
          <stop offset="75%" stopColor="#5f6368" />
          <stop offset="100%" stopColor="#dadce0" />
        </linearGradient>

        {/* Inner Disc Subtle Gradient */}
        <radialGradient id="tf-disc" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#f1f3f4" />
          <stop offset="100%" stopColor="#dadce0" />
        </radialGradient>

        {/* Soft Drop Shadow for Inner Elements */}
        <filter id="tf-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* 1. Outermost Ring */}
      <circle cx="200" cy="200" r="195" fill="url(#tf-outer-rim)" />
      
      {/* 2. Chrome / Silver Metallic Bevel Ring */}
      <circle cx="200" cy="200" r="186" fill="url(#tf-metallic-ring)" />
      <circle cx="200" cy="200" r="162" fill="#202124" opacity="0.35" />

      {/* 3. Pure Inner White/Silver Disc */}
      <circle cx="200" cy="200" r="158" fill="url(#tf-disc)" />
      <circle cx="200" cy="200" r="158" fill="none" stroke="#bdc1c6" strokeWidth="1.5" />

      {/* 4. Center Mechanic Fist Holding Wrench Icon */}
      <g filter="url(#tf-shadow)" fill="#0f1115">
        {/* Open-Ended Wrench Head (Angled to the left) */}
        <path
          d="M 125,124 
             C 118,102 129,78 150,71 
             C 165,66 182,72 191,84 
             C 183,90 178,98 179,109 
             C 180,120 188,128 197,133 
             C 192,142 181,148 170,147 
             C 152,146 142,135 137,133
             Z"
        />
        {/* Wrench Cutout Mouth */}
        <path
          d="M 148,84 
             L 168,91 
             C 165,101 168,111 176,117 
             L 158,126 
             C 151,114 147,98 148,84 
             Z"
          fill="url(#tf-disc)"
        />

        {/* Wrench Handle Shaft */}
        <path
          d="M 174,124 
             L 214,146 
             L 204,164 
             L 164,142 
             Z"
        />

        {/* Clenched Fist Fingers & Thumb holding the handle */}
        <path
          d="M 188,162 
             C 184,152 188,142 196,134 
             C 204,127 218,128 226,136 
             C 232,130 244,130 250,137 
             C 255,133 266,135 270,143 
             C 274,148 273,156 273,163 
             C 273,180 263,195 248,197 
             L 204,197 
             C 192,197 186,180 188,162 
             Z"
        />
        {/* Knuckle Detailing Lines */}
        <path
          d="M 215,134 C 217,144 218,154 217,164"
          stroke="url(#tf-disc)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 236,136 C 238,146 238,156 237,166"
          stroke="url(#tf-disc)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 255,142 C 256,150 256,158 255,166"
          stroke="url(#tf-disc)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      {/* 5. Cursive "Top" Script in Royal Blue */}
      <g>
        <path
          d="M 148,164 
             C 158,163 172,160 188,156
             M 166,157 
             L 152,192 
             C 150,197 154,200 160,195 
             C 166,190 174,178 180,168
             C 186,158 196,166 193,178 
             C 190,190 180,198 174,197 
             C 169,196 172,188 178,186 
             C 184,184 190,186 192,188
             M 193,178 
             L 197,168 
             C 198,164 204,166 206,170
             L 204,198 
             L 211,180 
             C 214,172 222,170 226,176
             C 230,182 228,192 220,195
             C 214,197 210,193 210,188"
          fill="none"
          stroke="#0052cc"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* 6. Horizontal Baseline Bar Under Hand */}
      <line
        x1="120"
        y1="198"
        x2="288"
        y2="198"
        stroke="#0f1115"
        strokeWidth="4.5"
        strokeLinecap="square"
      />

      {/* 7. Bold "FRANCE" Typography */}
      <text
        x="200"
        y="248"
        textAnchor="middle"
        fill="#0f1115"
        fontFamily="'Cabinet Grotesk', 'Arial Black', -apple-system, sans-serif"
        fontWeight="900"
        fontSize="48"
        letterSpacing="2.5"
      >
        FRANCE
      </text>

      {/* 8. Subtitle "CENTRO AUTOMOTIVO" */}
      {showSubtitle && (
        <text
          x="200"
          y="273"
          textAnchor="middle"
          fill="#1e2229"
          fontFamily="'Plus Jakarta Sans', Arial, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="15"
          letterSpacing="5.5"
        >
          CENTRO AUTOMOTIVO
        </text>
      )}
    </svg>
  );
};
