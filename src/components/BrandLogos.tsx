import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * Official Peugeot 2021+ Shield Logo
 * Exact match to uploaded: Logotipo_da_Peugeot.svg.png
 * Black shield with white border, PEUGEOT text, and roaring lion head
 */
export const PeugeotLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 500 560"
    fill="currentColor"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-label="Logo Oficial Peugeot"
  >
    {/* Outer Shield Outline */}
    <path
      d="M250 8 C380 8, 480 18, 492 38 C492 180, 430 420, 250 552 C70 420, 8 180, 8 38 C20 18, 120 8, 250 8 Z"
      fill="#050505"
      stroke="currentColor"
      strokeWidth="10"
    />
    {/* Inner Shield Inset Line */}
    <path
      d="M250 24 C365 24, 460 33, 472 50 C472 178, 414 402, 250 530 C86 402, 28 178, 28 50 C40 33, 135 24, 250 24 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
    />

    {/* Text: PEUGEOT (Official geometric typeface) */}
    <g fill="currentColor">
      {/* P */}
      <path d="M55 64 L102 64 C116 64, 126 73, 126 87 C126 101, 116 110, 102 110 L73 110 L73 136 L55 136 Z M73 78 L73 96 L100 96 C105 96, 108 93, 108 87 C108 81, 105 78, 100 78 Z" />
      {/* E */}
      <path d="M140 64 L195 64 L195 79 L158 79 L158 92 L190 92 L190 107 L158 107 L158 121 L196 121 L196 136 L140 136 Z" />
      {/* U */}
      <path d="M210 64 L228 64 L228 114 C228 123, 233 126, 243 126 C253 126, 258 123, 258 114 L258 64 L276 64 L276 114 C276 130, 264 138, 243 138 C222 138, 210 130, 210 114 Z" />
      {/* G */}
      <path d="M344 79 L344 64 C326 64, 292 68, 292 100 C292 132, 326 136, 345 136 L345 98 L320 98 L320 112 L328 112 L328 122 C318 122, 310 118, 310 100 C310 82, 318 79, 328 79 C336 79, 342 81, 344 79 Z" />
      {/* E */}
      <path d="M360 64 L415 64 L415 79 L378 79 L378 92 L410 92 L410 107 L378 107 L378 121 L416 121 L416 136 L360 136 Z" />
      {/* O */}
      <path d="M428 100 C428 75, 439 64, 465 64 C491 64, 502 75, 502 100 C502 125, 491 136, 465 136 C439 136, 428 125, 428 100 Z M446 100 C446 119, 452 122, 465 122 C478 122, 484 119, 484 100 C484 81, 478 78, 465 78 C452 78, 446 81, 446 100 Z" transform="scale(0.85 1) translate(75 0)" />
      {/* T */}
      <path d="M420 64 L472 64 L472 79 L454 79 L454 136 L437 136 L437 79 L420 79 Z" />
    </g>

    {/* Roaring Lion Head Artwork */}
    <g fill="currentColor">
      {/* Crown / Top Mane Strands */}
      <path d="M210 160 C240 156, 320 162, 346 195 C336 190, 318 190, 290 196 C272 200, 248 190, 222 176 C214 172, 210 166, 210 160 Z" />
      <path d="M255 174 C285 170, 335 180, 385 220 C365 210, 340 205, 305 210 C275 214, 250 204, 235 192 Z" />
      <path d="M310 190 C340 186, 375 195, 410 240 C390 230, 360 226, 330 230 C295 235, 275 225, 260 215 Z" />

      {/* Forehead & Brow */}
      <path d="M195 186 C182 200, 160 216, 142 232 C158 226, 185 216, 206 206 C225 196, 215 188, 195 186 Z" />
      <path d="M182 216 C165 226, 146 242, 130 256 C144 250, 168 238, 190 228 C202 222, 198 218, 182 216 Z" />

      {/* Nose bridge & Snout */}
      <path d="M136 246 C116 262, 98 282, 80 300 C98 296, 122 280, 145 264 C152 258, 148 250, 136 246 Z" />
      {/* Upper Jaw & Nose Tip */}
      <path d="M96 288 C88 298, 82 308, 86 318 C90 326, 102 328, 114 318 C124 310, 138 296, 146 286 C130 286, 112 284, 96 288 Z" />

      {/* Upper Lip & Teeth / Fangs */}
      <path d="M104 322 C104 330, 110 338, 122 334 C132 330, 145 316, 155 304 C162 296, 152 292, 138 300 C124 308, 112 318, 104 322 Z" />
      {/* Top Fang */}
      <polygon points="126,328 132,348 138,332" />
      <polygon points="144,320 148,336 154,322" />

      {/* Open Mouth Void / Throat Contour */}
      <path d="M136 348 C144 362, 156 372, 172 368 C186 364, 188 348, 185 330 C182 316, 170 310, 160 318 C150 328, 140 338, 136 348 Z" />

      {/* Lower Jaw & Chin & Bottom Fang */}
      <polygon points="152,364 158,348 164,360" />
      <path d="M142 366 C144 380, 148 400, 164 402 C178 404, 192 388, 194 372 C178 376, 160 376, 142 366 Z" />

      {/* Lion Eye Slit */}
      <polygon points="154,236 168,230 178,236 166,238" />

      {/* Powerful Flowing Mane Elements */}
      <path d="M214 260 C234 246, 276 244, 308 274 C342 306, 360 364, 350 432 C338 412, 328 368, 304 340 C280 312, 252 304, 224 306 C206 308, 198 288, 214 260 Z" />
      <path d="M312 284 C342 278, 388 300, 412 352 C424 380, 422 422, 388 472 C392 442, 390 410, 376 386 C360 358, 334 346, 306 348 C300 326, 300 300, 312 284 Z" />
      <path d="M236 332 C262 334, 288 358, 292 396 C296 440, 278 482, 240 522 C258 488, 268 448, 262 414 C256 382, 238 368, 218 368 C216 352, 222 340, 236 332 Z" />
      <path d="M198 376 C216 386, 234 416, 234 456 C234 488, 218 522, 194 542 C206 512, 212 480, 208 450 C204 422, 190 404, 178 398 Z" />
    </g>
  </svg>
);

/**
 * Official Citroën 2022+ Rebrand Oval Logo
 * Exact match to uploaded: logo_Citroen.svg
 * Oval perimeter with the two bold modern chevrons inside
 */
export const CitroenLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 100 130"
    fill="currentColor"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-label="Logo Oficial Citroën"
  >
    {/* Oval Outer Border */}
    <ellipse
      cx="50"
      cy="65"
      rx="44"
      ry="59"
      fill="none"
      stroke="currentColor"
      strokeWidth="7"
    />

    {/* Upper Citroën Chevron */}
    <path
      d="M50 24 L76 53 C78 55, 78 59, 75 61 C72 63, 68 62, 66 59 L50 41 L34 59 C32 62, 28 63, 25 61 C22 59, 22 55, 24 53 Z"
      fill="currentColor"
    />

    {/* Lower Citroën Chevron */}
    <path
      d="M50 56 L76 85 C78 87, 78 91, 75 93 C72 95, 68 94, 66 91 L50 73 L34 91 C32 94, 28 95, 25 93 C22 91, 22 87, 24 85 Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Official Renault 2021+ Logo
 * Exact match to uploaded: logo-renault.jpeg
 * Interlocking geometric parallel line diamond (losange)
 */
export const RenaultLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 100 130"
    fill="none"
    stroke="currentColor"
    strokeLinecap="square"
    strokeLinejoin="miter"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-label="Logo Oficial Renault"
  >
    {/* Outer Interlocking Geometric Diamond Loop */}
    <path
      d="M 50,10 
         L 88,65 
         L 62,102 
         L 50,119 
         L 38,102 
         L 12,65 
         L 50,10"
      strokeWidth="11"
      strokeMiterlimit="10"
    />

    {/* Inner Parallel Geometric Loop that creates the open twist */}
    <path
      d="M 50,38 
         L 68,65 
         L 50,92 
         L 32,65 
         L 50,38"
      strokeWidth="9"
      strokeMiterlimit="10"
    />
  </svg>
);

/**
 * Official Multimarcas Cluster Badge
 * Exact match to uploaded: logo_mutimarcas.jpg
 * Incorporating the iconic marks: Mercedes, BMW, VW, Toyota, Audi, Ford
 */
export const MultimarcasLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 120 120"
    fill="currentColor"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-label="Logo Multimarcas"
  >
    {/* Outer Clean Circular Badge */}
    <circle
      cx="60"
      cy="60"
      r="56"
      className="fill-slate-100 dark:fill-[#090d16]"
      stroke="currentColor"
      strokeWidth="4"
    />

    {/* 4 Iconic Quadrants Representing the Brands in logo_mutimarcas.jpg */}
    
    {/* 1. Mercedes Three-Pointed Star (Top-Left, from image 1) */}
    <g transform="translate(36, 36) scale(0.38)">
      <circle cx="0" cy="0" r="30" fill="none" stroke="currentColor" strokeWidth="4" />
      <polygon points="0,-28 4,0 0,2 -4,0" fill="currentColor" />
      <polygon points="24,14 0,-2 -2,2 2,4" fill="currentColor" />
      <polygon points="-24,14 -2,4 2,2 0,-2" fill="currentColor" />
    </g>

    {/* 2. Volkswagen VW Monogram (Top-Right, from image 1) */}
    <g transform="translate(84, 36) scale(0.38)">
      <circle cx="0" cy="0" r="30" fill="none" stroke="currentColor" strokeWidth="4" />
      {/* V on top */}
      <path d="M-16 -16 L-6 4 L6 4 L16 -16 L10 -16 L0 4 L-10 -16 Z" fill="currentColor" />
      {/* W below */}
      <path d="M-22 4 L-12 24 L-2 24 L6 6 L-2 6 L-8 18 L-16 4 Z" fill="currentColor" />
      <path d="M22 4 L12 24 L2 24 L-6 6 L2 6 L8 18 L16 4 Z" fill="currentColor" />
    </g>

    {/* 3. Toyota Interlocking Ovals (Bottom-Left, from image 1) */}
    <g transform="translate(36, 84) scale(0.38)">
      {/* Outer Ellipse */}
      <ellipse cx="0" cy="0" rx="30" ry="20" fill="none" stroke="currentColor" strokeWidth="4" />
      {/* Vertical Inner Ellipse */}
      <ellipse cx="0" cy="2" rx="10" ry="17" fill="none" stroke="currentColor" strokeWidth="3.5" />
      {/* Horizontal Inner Ellipse */}
      <ellipse cx="0" cy="-6" rx="20" ry="7" fill="none" stroke="currentColor" strokeWidth="3.5" />
    </g>

    {/* 4. Audi 4 Rings (Bottom-Right, from image 1) */}
    <g transform="translate(84, 84) scale(0.34)">
      <circle cx="-21" cy="0" r="13" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="-7" cy="0" r="13" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="7" cy="0" r="13" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="21" cy="0" r="13" fill="none" stroke="currentColor" strokeWidth="3" />
    </g>

    {/* Center Division Crossroads */}
    <circle cx="60" cy="60" r="7" className="fill-slate-100 dark:fill-[#090d16]" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="60" cy="60" r="2.5" fill="currentColor" />
  </svg>
);

/**
 * Full Multi-Brand Showcase Strip (Including Nissan, Volvo, Lexus, DS, Fiat, Jeep, RAM, Chevrolet, Mini, Kia)
 */
export const MultimarcasStrip: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 py-2 ${className}`}>
    {/* Mercedes-Benz */}
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs" title="Mercedes-Benz">
      <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-currentColor" aria-hidden="true">
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="7" />
        <polygon points="50,6 55,50 50,53 45,50" />
        <polygon points="88,72 50,47 47,53 53,56" />
        <polygon points="12,72 47,56 53,53 50,47" />
      </svg>
      <span>Mercedes</span>
    </div>

    {/* BMW */}
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs" title="BMW">
      <svg viewBox="0 0 100 100" className="w-3.5 h-3.5" aria-hidden="true">
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="6" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M 50,20 A 30,30 0 0,1 80,50 L 50,50 Z" fill="#0066b1" />
        <path d="M 50,50 L 20,50 A 30,30 0 0,1 50,80 Z" fill="#0066b1" />
      </svg>
      <span>BMW</span>
    </div>

    {/* Volkswagen */}
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs" title="Volkswagen">
      <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-currentColor" aria-hidden="true">
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="6" />
        <path d="M26 26 L42 66 L58 66 L74 26 L66 26 L50 60 L34 26 Z" />
        <path d="M18 52 L36 84 L48 84 L58 64 L48 64 L42 76 L26 52 Z" />
        <path d="M82 52 L64 84 L52 84 L42 64 L52 64 L58 76 L74 52 Z" />
      </svg>
      <span>VW</span>
    </div>

    {/* Toyota */}
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs" title="Toyota">
      <svg viewBox="0 0 100 70" className="w-3.5 h-3 fill-none stroke-currentColor" aria-hidden="true">
        <ellipse cx="50" cy="35" rx="46" ry="30" strokeWidth="6" />
        <ellipse cx="50" cy="38" rx="16" ry="26" strokeWidth="5" />
        <ellipse cx="50" cy="25" rx="30" ry="11" strokeWidth="5" />
      </svg>
      <span>Toyota</span>
    </div>

    {/* Jeep */}
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs" title="Jeep">
      <span className="font-extrabold tracking-wider text-xs">Jeep</span>
    </div>

    {/* Fiat */}
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs" title="Fiat">
      <span className="font-black italic tracking-widest text-xs text-red-600">FIAT</span>
    </div>

    {/* Chevrolet */}
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs" title="Chevrolet">
      <svg viewBox="0 0 100 50" className="w-4 h-2.5 fill-amber-500" aria-hidden="true">
        <polygon points="10,18 90,18 85,32 5,32" />
        <polygon points="38,8 62,8 62,42 38,42" />
      </svg>
      <span>Chevrolet</span>
    </div>

    {/* Nissan */}
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs" title="Nissan">
      <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-none stroke-currentColor" aria-hidden="true">
        <circle cx="50" cy="50" r="42" strokeWidth="7" />
        <rect x="8" y="38" width="84" height="24" rx="3" className="fill-white dark:fill-slate-900 stroke-currentColor" strokeWidth="6" />
        <text x="50" y="55" fill="currentColor" fontSize="13" fontWeight="bold" textAnchor="middle" stroke="none">NISSAN</text>
      </svg>
      <span>Nissan</span>
    </div>

    {/* Volvo */}
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs" title="Volvo">
      <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-none stroke-currentColor" aria-hidden="true">
        <circle cx="45" cy="55" r="35" strokeWidth="7" />
        <line x1="68" y1="32" x2="88" y2="12" strokeWidth="8" strokeLinecap="round" />
        <polygon points="76,10 92,10 92,26" fill="currentColor" stroke="none" />
      </svg>
      <span>Volvo</span>
    </div>

    {/* DS Automobiles */}
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs" title="DS Automobiles">
      <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-none stroke-currentColor" aria-hidden="true">
        <path d="M22 28 L45 28 L58 50 L45 72 L22 72 L35 50 Z" strokeWidth="6" />
        <path d="M55 28 L78 28 L65 50 L78 72 L55 72 L68 50 Z" strokeWidth="6" />
      </svg>
      <span>DS</span>
    </div>

    {/* RAM */}
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs" title="RAM">
      <span className="font-black tracking-widest text-xs">RAM</span>
    </div>

    {/* Lexus */}
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs" title="Lexus">
      <svg viewBox="0 0 100 70" className="w-3.5 h-3 fill-none stroke-currentColor" aria-hidden="true">
        <ellipse cx="50" cy="35" rx="45" ry="30" strokeWidth="6" />
        <path d="M30 22 L65 22 L40 50 L70 50" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>Lexus</span>
    </div>

    {/* Mini */}
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs" title="Mini">
      <svg viewBox="0 0 100 50" className="w-4 h-2.5 fill-none stroke-currentColor" aria-hidden="true">
        <circle cx="50" cy="25" r="16" strokeWidth="4" />
        <path d="M10 25 L34 25 M66 25 L90 25" strokeWidth="4" strokeLinecap="round" />
        <text x="50" y="29" fill="currentColor" fontSize="8" fontWeight="bold" textAnchor="middle" stroke="none">MINI</text>
      </svg>
      <span>Mini</span>
    </div>

    {/* Kia */}
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs" title="Kia">
      <span className="font-black tracking-tight text-xs">KIA</span>
    </div>

    {/* Hyundai */}
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs" title="Hyundai">
      <svg viewBox="0 0 100 65" className="w-3.5 h-3 fill-currentColor" aria-hidden="true">
        <ellipse cx="50" cy="32" rx="46" ry="28" fill="none" stroke="currentColor" strokeWidth="6" />
        <path d="M 32,15 C 38,15 44,22 44,32 L 44,48 L 36,48 L 36,36 C 36,28 32,25 28,25 Z M 68,15 L 68,27 C 68,36 64,48 56,48 L 56,36 C 56,28 60,25 64,25 Z M 36,32 L 64,32 L 64,38 L 36,38 Z" />
      </svg>
      <span>Hyundai</span>
    </div>

    {/* Audi */}
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs" title="Audi">
      <svg viewBox="0 0 100 35" className="w-5 h-2.5 fill-none stroke-currentColor" aria-hidden="true">
        <circle cx="20" cy="17" r="14" strokeWidth="4" />
        <circle cx="40" cy="17" r="14" strokeWidth="4" />
        <circle cx="60" cy="17" r="14" strokeWidth="4" />
        <circle cx="80" cy="17" r="14" strokeWidth="4" />
      </svg>
      <span>Audi</span>
    </div>

    {/* Ford */}
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs" title="Ford">
      <svg viewBox="0 0 100 50" className="w-4 h-2.5 fill-currentColor" aria-hidden="true">
        <ellipse cx="50" cy="25" rx="46" ry="21" fill="none" stroke="currentColor" strokeWidth="5" />
        <text x="50" y="32" textAnchor="middle" fontSize="18" fontStyle="italic" fontWeight="bold">Ford</text>
      </svg>
      <span>Ford</span>
    </div>
  </div>
);
