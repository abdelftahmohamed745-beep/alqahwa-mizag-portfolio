type ArtProps = {
  className?: string;
};

/**
 * Hero still life — hand-built SVG instead of a stock photo.
 * Espresso arch, cream cup, gold rim, steam that actually moves.
 */
export default function HeroArt({ className }: ArtProps) {
  return (
    <svg
      viewBox="0 0 520 640"
      className={className}
      role="img"
      aria-labelledby="hero-art-title hero-art-desc"
      preserveAspectRatio="xMidYMid meet"
    >
      <title id="hero-art-title">فنجان قهوة داخل قوس عربي</title>
      <desc id="hero-art-desc">
        رسم خطّي لفنجان قهوة كريمي بحافة ذهبية على طبق، وبخار متصاعد، وحبوب قهوة
        متناثرة، داخل إطار على شكل قوس عربي.
      </desc>

      <defs>
        <linearGradient id="arch-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#54341f" />
          <stop offset="0.55" stopColor="#3f2617" />
          <stop offset="1" stopColor="#2a180e" />
        </linearGradient>
        <radialGradient id="arch-glow" cx="0.5" cy="0.42" r="0.55">
          <stop offset="0" stopColor="#d4a373" stopOpacity="0.34" />
          <stop offset="0.65" stopColor="#d4a373" stopOpacity="0.06" />
          <stop offset="1" stopColor="#d4a373" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cup-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbf4e8" />
          <stop offset="0.55" stopColor="#f2e5d2" />
          <stop offset="1" stopColor="#dcc6a9" />
        </linearGradient>
        <radialGradient id="coffee-surface" cx="0.5" cy="0.4" r="0.7">
          <stop offset="0" stopColor="#6d4526" />
          <stop offset="0.6" stopColor="#4a2a16" />
          <stop offset="1" stopColor="#2e180c" />
        </radialGradient>
        <linearGradient id="saucer" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#efe1cd" />
          <stop offset="1" stopColor="#c9ac8b" />
        </linearGradient>
        <clipPath id="arch-clip">
          <path d="M20 620V262a240 240 0 0 1 480 0v358Z" />
        </clipPath>
      </defs>

      {/* arch window */}
      <g clipPath="url(#arch-clip)">
        <rect x="20" y="20" width="480" height="600" fill="url(#arch-bg)" />
        <rect x="20" y="20" width="480" height="600" fill="url(#arch-glow)" />
        <circle cx="260" cy="245" r="132" fill="#d4a373" opacity="0.07" />

        {/* soft table plane */}
        <path d="M20 505h480v115H20Z" fill="#241309" opacity="0.55" />
        <path d="M20 505h480" stroke="#d4a373" strokeOpacity="0.25" strokeWidth="1.5" />

        {/* sprigs */}
        <g stroke="#8a9a52" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85">
          <path d="M96 512c14-34 22-66 20-102" />
          <path d="M110 452c-13-4-21-12-24-24 12 1 21 7 26 17" />
          <path d="M114 470c13-6 20-15 21-27-12 2-20 9-24 19" />
          <path d="M106 492c-12-2-21-8-26-19 11 0 20 5 27 13" />
        </g>
        <g stroke="#d4a373" strokeWidth="2.4" strokeLinecap="round" fill="none" opacity="0.7">
          <path d="M404 512c-10-28-14-54-12-84" />
          <path d="M396 458c12-2 21-8 27-18-11-2-21 3-28 12" />
          <path d="M400 484c-11-3-19-10-23-21 11 0 20 5 25 14" />
        </g>

        {/* saucer */}
        <ellipse cx="260" cy="486" rx="158" ry="30" fill="#1c0f07" opacity="0.55" />
        <ellipse cx="260" cy="478" rx="154" ry="29" fill="url(#saucer)" />
        <ellipse cx="260" cy="474" rx="128" ry="21" fill="#e3d0b6" />
        <ellipse cx="260" cy="472" rx="128" ry="21" fill="none" stroke="#b98d5f" strokeWidth="1.6" opacity="0.7" />

        {/* cup shadow */}
        <ellipse cx="260" cy="468" rx="92" ry="16" fill="#8a6440" opacity="0.35" />

        {/* handle */}
        <path
          d="M356 356c40 2 54 22 52 44-2 24-24 40-56 38"
          fill="none"
          stroke="url(#cup-body)"
          strokeWidth="17"
          strokeLinecap="round"
        />
        <path
          d="M356 356c40 2 54 22 52 44-2 24-24 40-56 38"
          fill="none"
          stroke="#b9946b"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* cup body */}
        <path d="M150 330h220c0 0-18 138-110 138S150 330 150 330Z" fill="url(#cup-body)" />
        <path
          d="M150 330h220c0 0-18 138-110 138S150 330 150 330Z"
          fill="none"
          stroke="#b9946b"
          strokeWidth="1.6"
          opacity="0.55"
        />

        {/* gold band */}
        <path
          d="M158 372c30 10 174 10 204 0"
          fill="none"
          stroke="#d4a373"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* coffee inside */}
        <ellipse cx="260" cy="332" rx="106" ry="26" fill="#2a180e" />
        <ellipse cx="260" cy="330" rx="103" ry="25" fill="url(#coffee-surface)" />
        <ellipse cx="260" cy="330" rx="70" ry="15" fill="#7c4f2b" opacity="0.5" />
        <path
          d="M206 328c16-10 34-12 54-8 14 3 26 2 36-4"
          fill="none"
          stroke="#c08a58"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* cup rim */}
        <ellipse cx="260" cy="331" rx="110" ry="28" fill="none" stroke="#f7efe2" strokeWidth="7" />
        <ellipse cx="260" cy="331" rx="110" ry="28" fill="none" stroke="#b98d5f" strokeWidth="1.2" opacity="0.65" />

        {/* steam */}
        <g className="steam" stroke="#f5ebdd" strokeWidth="4.5" strokeLinecap="round" fill="none">
          <path d="M232 296c-12-16 6-26-4-42-8-13 2-22 8-30" opacity="0.5" />
          <path d="M262 292c-13-18 8-29-2-47-8-14 3-24 9-33" opacity="0.5" />
          <path d="M292 298c-11-15 6-24-3-39-7-12 2-21 7-28" opacity="0.45" />
        </g>

        {/* beans */}
        <g fill="#5a3419" stroke="#2a180e" strokeWidth="1.2">
          <g transform="rotate(-24 148 520)">
            <ellipse cx="148" cy="520" rx="16" ry="10" />
            <path d="M136 520c8-3 16-3 24 0" fill="none" stroke="#c08a58" strokeWidth="1.4" />
          </g>
          <g transform="rotate(18 342 528)">
            <ellipse cx="342" cy="528" rx="15" ry="9.5" />
            <path d="M331 528c7-3 15-3 22 0" fill="none" stroke="#c08a58" strokeWidth="1.4" />
          </g>
          <g transform="rotate(-8 312 552)">
            <ellipse cx="312" cy="552" rx="13" ry="8.5" />
            <path d="M302 552c6-3 13-3 20 0" fill="none" stroke="#c08a58" strokeWidth="1.3" />
          </g>
        </g>
      </g>

      {/* arch border + inner gold line */}
      <path
        d="M20 620V262a240 240 0 0 1 480 0v358"
        fill="none"
        stroke="#d4a373"
        strokeOpacity="0.45"
        strokeWidth="2"
      />
      <path
        d="M40 620V264a220 220 0 0 1 440 0v356"
        fill="none"
        stroke="#d4a373"
        strokeOpacity="0.18"
        strokeWidth="1.5"
      />
    </svg>
  );
}
