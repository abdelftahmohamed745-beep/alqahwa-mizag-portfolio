type SceneName = "window" | "pour" | "latte" | "roast" | "sweet" | "night";

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const gold = "#d4a373";

function WindowScene() {
  return (
    <>
      <g {...line}>
        <path d="M96 250V138a104 104 0 0 1 208 0v112" />
        <path d="M96 250h208" />
        <path d="M200 36v214M96 138h208" />
        <path d="M70 258h260" />
      </g>
      <circle cx="152" cy="112" r="22" fill={gold} opacity="0.85" />
      <g {...line} opacity="0.55">
        <path d="M118 60c14 10 20 24 18 42M262 78c10 8 16 18 18 30" />
      </g>
      {/* cup on the sill */}
      <g {...line}>
        <path d="M158 250v-26h40v13a13 13 0 0 1-13 13h-14a13 13 0 0 1-13-13Z" />
        <path d="M198 232h7a9 9 0 0 1 0 18h-7" />
        <path d="M150 250h58" />
      </g>
      {/* plant */}
      <g {...line}>
        <path d="M280 250v-24" />
        <path d="M280 232c-14-2-22-10-24-24 14 1 23 9 26 20M280 226c12-4 19-13 20-26-13 3-20 12-22 23" />
        <path d="M266 250h28l-4 22h-20Z" />
      </g>
      <g stroke="currentColor" strokeWidth="2" fill="none" opacity="0.45">
        <path d="M170 214c-4-6 2-10-2-16M184 214c-4-6 2-10-2-16" strokeLinecap="round" />
      </g>
    </>
  );
}

function PourScene() {
  return (
    <>
      <g {...line}>
        <path d="M58 250h284" />
        {/* kettle */}
        <path d="M54 122c0-17 13-28 30-28h20c17 0 30 11 30 28v34c0 17-13 28-30 28H84c-17 0-30-11-30-28Z" />
        <path d="M134 122c22 2 42 2 62 0" />
        <path d="M134 138c26 0 44 10 52 24" />
        <path d="M87 94c0-10 9-16 16-16M58 138c-10 2-16 8-16 16" />
        <path d="M74 158h40" opacity="0.6" />
      </g>
      {/* stream */}
      <path
        d="M186 160c4 18 8 30 16 40"
        fill="none"
        stroke={gold}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="3 6"
      />
      <g {...line}>
        {/* dripper */}
        <path d="M182 196h74l-20 46h-34Z" />
        <path d="M188 208h62M194 220h50M200 232h38" opacity="0.5" strokeWidth="1.4" />
        <path d="M219 242v14" />
        {/* server */}
        <path d="M186 260h66v44a14 14 0 0 1-14 14h-38a14 14 0 0 1-14-14Z" />
        <path d="M186 274h66" opacity="0.55" />
        <path d="M198 318h42" opacity="0.5" />
      </g>
      <g stroke="currentColor" strokeWidth="2" fill="none" opacity="0.45">
        <path d="M300 180c-6-10 4-16-2-26M316 180c-6-10 4-16-2-26" strokeLinecap="round" />
      </g>
      <ellipse cx="219" cy="322" rx="54" ry="6" fill="currentColor" opacity="0.12" />
    </>
  );
}

function LatteScene() {
  return (
    <>
      <g {...line}>
        <circle cx="200" cy="150" r="104" />
        <circle cx="200" cy="150" r="88" opacity="0.55" />
        <circle cx="200" cy="150" r="72" />
        <path d="M304 136c18-4 26 6 25 17-1 11-11 19-27 16" />
        {/* spoon */}
        <path d="M86 232c4-16 10-28 20-38" />
        <ellipse cx="82" cy="240" rx="14" ry="8" transform="rotate(-32 82 240)" />
      </g>
      {/* rosetta */}
      <g fill="none" stroke={gold} strokeWidth="2.6" strokeLinecap="round" opacity="0.95">
        <path d="M200 210V96" />
        <path d="M200 196c-18-2-30-10-36-24 16-2 29 4 36 14M200 196c18-2 30-10 36-24-16-2-29 4-36 14" />
        <path d="M200 176c-16-2-27-9-33-22 15-2 27 4 33 13M200 176c16-2 27-9 33-22-15-2-27 4-33 13" />
        <path d="M200 157c-14-2-24-8-29-19 13-2 24 3 29 11M200 157c14-2 24-8 29-19-13-2-24 3-29 11" />
        <path d="M200 139c-11-2-18-7-22-15 10-1 18 3 22 9M200 139c11-2 18-7 22-15-10-1-18 3-22 9" />
        <path d="M200 123c-6-1-10-4-12-9 5 0 10 2 12 5M200 123c6-1 10-4 12-9-5 0-10 2-12 5" />
      </g>
    </>
  );
}

function RoastScene() {
  return (
    <>
      <g {...line}>
        <path d="M40 250h320" />
        <circle cx="200" cy="140" r="76" />
        <circle cx="200" cy="140" r="62" opacity="0.55" />
        <path d="M124 140h152M200 64v152" opacity="0.35" strokeWidth="1.4" />
        <path d="M276 140h44v22h-44" />
        <path d="M320 162c14 2 20 10 18 20" />
        <path d="M118 76h44v-22h76v22" />
        <path d="M162 76v18M238 76v18" opacity="0.45" strokeWidth="1.4" />
      </g>
      {/* beans */}
      <g fill="currentColor" opacity="0.85">
        <ellipse cx="200" cy="118" rx="9" ry="6" transform="rotate(-20 200 118)" />
        <ellipse cx="216" cy="142" rx="9" ry="6" transform="rotate(14 216 142)" />
        <ellipse cx="186" cy="152" rx="9" ry="6" transform="rotate(-34 186 152)" />
        <ellipse cx="206" cy="170" rx="8" ry="5.4" transform="rotate(8 206 170)" />
      </g>
      {/* flame */}
      <path
        d="M200 250c-18 0-32-12-32-28 0-14 10-20 14-32 6 8 8 12 8 18 6-4 10-10 12-18 12 10 18 22 18 34 0 16-10 26-20 26Z"
        fill={gold}
        opacity="0.9"
      />
      <path
        d="M200 250c-10 0-18-7-18-16 0-8 6-12 8-19 4 5 5 7 5 11 4-3 6-6 7-11 7 6 11 13 11 20 0 9-6 15-13 15Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <g stroke={gold} strokeWidth="2" strokeLinecap="round" opacity="0.7">
        <path d="M112 224c-6-6-6-12 0-18M96 232c-8-8-8-16 0-24M304 224c6-6 6-12 0-18M320 232c8-8 8-16 0-24" />
      </g>
    </>
  );
}

function SweetScene() {
  return (
    <>
      <g {...line}>
        <ellipse cx="200" cy="238" rx="132" ry="26" />
        <ellipse cx="200" cy="232" rx="112" ry="18" opacity="0.4" />
        {/* slice */}
        <path d="M128 214 200 118l72 96Z" />
        <path d="M144 200h112M160 178h80" opacity="0.55" />
        <path d="M200 118v96" opacity="0.25" strokeWidth="1.2" />
        {/* fork */}
        <path d="M312 150v78M304 150v22c0 6 4 10 8 10s8-4 8-10v-22" />
        <path d="M296 150v22c0 6 4 10 8 10M320 150v22" opacity="0.55" strokeWidth="1.4" />
        {/* cup */}
        <path d="M60 196h52v20a18 18 0 0 1-18 18H78a18 18 0 0 1-18-18Z" />
        <path d="M112 202h6a10 10 0 0 1 0 20h-6" />
        <path d="M54 234h62" />
      </g>
      <path d="M200 132 226 198h-52Z" fill={gold} opacity="0.35" />
      <g stroke="currentColor" strokeWidth="1.6" fill="none" opacity="0.5">
        <path d="M72 184c-3-5 2-8-1-13M84 184c-3-5 2-8-1-13" strokeLinecap="round" />
      </g>
      <g fill="currentColor" opacity="0.6">
        <circle cx="140" cy="244" r="2.6" />
        <circle cx="252" cy="248" r="2.2" />
        <circle cx="268" cy="240" r="1.8" />
      </g>
    </>
  );
}

function NightScene() {
  return (
    <>
      <g {...line}>
        <path d="M200 26v42" />
        <path d="M168 88c0-12 14-20 32-20s32 8 32 20Z" />
        <path d="M200 68v20" />
        <path d="M46 250h308" />
        <path d="M72 250V96h64v154" opacity="0.35" />
        <path d="M104 96v154M72 140h64" opacity="0.25" strokeWidth="1.4" />
      </g>
      <circle cx="200" cy="102" r="12" fill={gold} />
      <path d="M172 88h56L214 224h-28Z" fill={gold} opacity="0.12" />
      {/* cup */}
      <g {...line}>
        <path d="M232 228v-22h44v11a11 11 0 0 1-11 11h-22a11 11 0 0 1-11-11Z" />
        <path d="M276 212h6a8 8 0 0 1 0 16h-6" />
        <path d="M226 228h56" />
      </g>
      {/* book */}
      <g {...line}>
        <path d="M96 236c0-8 26-12 44-12s44 4 44 12v-14c0-8-26-12-44-12s-44 4-44 12Z" />
        <path d="M140 210v26" opacity="0.5" />
        <path d="M108 216c10-2 20-2 28 0M148 216c8-2 18-2 28 0" opacity="0.5" strokeWidth="1.4" />
      </g>
      <g stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4">
        <path d="M244 200c-5-7 3-11-2-18M258 200c-5-7 3-11-2-18" strokeLinecap="round" />
      </g>
      <circle cx="330" cy="70" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="352" cy="104" r="1.6" fill="currentColor" opacity="0.4" />
    </>
  );
}

const scenes: Record<SceneName, () => React.JSX.Element> = {
  window: WindowScene,
  pour: PourScene,
  latte: LatteScene,
  roast: RoastScene,
  sweet: SweetScene,
  night: NightScene,
};

export default function Scene({
  name,
  className,
}: {
  name: SceneName;
  className?: string;
}) {
  const Body = scenes[name] ?? WindowScene;
  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <Body />
    </svg>
  );
}

export type { SceneName };
