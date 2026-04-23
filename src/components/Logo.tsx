/*
 * NYC Tailblazers logo — two dogs facing each other.
 * Left: Jiggs, Louisiana Catahoula Leopard Dog (gold + leopard spots).
 * Right: companion dog (forest green).
 *
 * Hidden in plain sight — Elegguá's crossroads (+) sits at x=100, y=51,
 * exactly between the two noses. The opener of paths guards every journey.
 */

type LogoSize = 'sm' | 'default' | 'lg'

export default function Logo({ size = 'default' }: { size?: LogoSize }) {
  const widths: Record<LogoSize, number> = { sm: 130, default: 190, lg: 270 }
  const w = widths[size]
  const h = Math.round(w * 0.48)

  return (
    <svg
      viewBox="0 0 200 96"
      width={w}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NYC Tailblazers — two dogs"
    >
      {/* ── LEFT DOG — Jiggs (Catahoula Leopard Dog) ── */}

      {/* Tail — curves up and left */}
      <path d="M22,56 Q9,41 15,23" stroke="#c8a96e" strokeWidth="5" fill="none" strokeLinecap="round"/>

      {/* Body */}
      <ellipse cx="50" cy="62" rx="28" ry="14" fill="#c8a96e"/>

      {/* Head — overlaps right side of body, creating natural shoulder */}
      <circle cx="78" cy="51" r="14" fill="#c8a96e"/>

      {/* Prick ear (Catahoula-style) */}
      <polygon points="74,39 80,22 89,37" fill="#c8a96e"/>

      {/* Eye */}
      <circle cx="83" cy="48" r="2.8" fill="#070d08"/>
      {/* Blue merle eye — Catahoula's signature glass eye */}
      <circle cx="83.9" cy="47.1" r="1" fill="#87ceeb" opacity="0.9"/>

      {/* Nose */}
      <ellipse cx="91" cy="54" rx="2.8" ry="2" fill="#1a5c2e"/>

      {/* Catahoula leopard spots */}
      <circle cx="43" cy="59" r="3.8" fill="#1a5c2e" opacity="0.27"/>
      <circle cx="54" cy="55" r="2.8" fill="#1a5c2e" opacity="0.24"/>
      <circle cx="60" cy="65" r="3.2" fill="#1a5c2e" opacity="0.22"/>
      <circle cx="35" cy="64" r="2.2" fill="#1a5c2e" opacity="0.18"/>

      {/* Back legs */}
      <rect x="26" y="70" width="7" height="17" rx="3" fill="#c8a96e"/>
      <rect x="37" y="71" width="7" height="16" rx="3" fill="#c8a96e"/>

      {/* Front legs */}
      <rect x="62" y="69" width="7" height="18" rx="3" fill="#c8a96e"/>
      <rect x="73" y="68" width="7" height="19" rx="3" fill="#c8a96e"/>

      {/* ── ELEGGUÁ — The Hidden Crossroads ──
           Iba Elegguá. The guardian of all paths and crossroads.
           Where the two noses nearly meet — two destinies crossing.
           Visible to those who know. Design to all others. */}
      <line x1="100" y1="28" x2="100" y2="74" stroke="#6b0f0f" strokeWidth="0.8" opacity="0.22"/>
      <line x1="80"  y1="51" x2="120" y2="51" stroke="#6b0f0f" strokeWidth="0.8" opacity="0.22"/>

      {/* ── RIGHT DOG — Companion ── */}

      {/* Tail */}
      <path d="M178,56 Q191,41 185,23" stroke="#2d8a4e" strokeWidth="5" fill="none" strokeLinecap="round"/>

      {/* Body */}
      <ellipse cx="150" cy="62" rx="28" ry="14" fill="#2d8a4e"/>

      {/* Head */}
      <circle cx="122" cy="51" r="14" fill="#2d8a4e"/>

      {/* Floppy ear */}
      <path d="M113,43 Q103,52 107,63" stroke="#2d8a4e" strokeWidth="8" fill="none" strokeLinecap="round"/>

      {/* Eye */}
      <circle cx="117" cy="48" r="2.8" fill="#070d08"/>
      <circle cx="116.1" cy="47.1" r="1" fill="#f5f0eb" opacity="0.65"/>

      {/* Nose */}
      <ellipse cx="109" cy="54" rx="2.8" ry="2" fill="#c8a96e"/>

      {/* Back legs */}
      <rect x="167" y="70" width="7" height="17" rx="3" fill="#2d8a4e"/>
      <rect x="156" y="71" width="7" height="16" rx="3" fill="#2d8a4e"/>

      {/* Front legs */}
      <rect x="131" y="69" width="7" height="18" rx="3" fill="#2d8a4e"/>
      <rect x="120" y="68" width="7" height="19" rx="3" fill="#2d8a4e"/>
    </svg>
  )
}
