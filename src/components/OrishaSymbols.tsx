/*
 * Orisha symbol components — hidden in plain sight throughout the site.
 *
 * The Seven who walk with NYC Tailblazers:
 *   Elegguá   — crossroads (in the Logo)
 *   Orunmila  — 16-dot Ifa wisdom grid
 *   Oshún     — 5-petal honey flower (gold is her color everywhere)
 *   Oggún     — iron chevron / forest strength
 *   Yemojá    — exactly 7 waves
 *   Changó    — double-headed oshe axe
 *   Obatalá   — white arch of purity
 */

/* Yemojá — mother of waters, 7 waves */
export function YemojaWaves({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 32"
      className={className}
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      {/* 7 peaks — Yemojá's sacred number */}
      <path
        d="M0,16 Q20,2 40,16 Q60,30 80,16 Q100,2 120,16 Q140,30 160,16 Q180,2 200,16 Q220,30 240,16 Q260,2 280,16"
        stroke="#2d8a4e" strokeWidth="1.5" opacity="0.45"
      />
      <path
        d="M0,20 Q20,6 40,20 Q60,34 80,20 Q100,6 120,20 Q140,34 160,20 Q180,6 200,20 Q220,34 240,20 Q260,6 280,20"
        stroke="#1a5c2e" strokeWidth="0.8" opacity="0.28"
      />
    </svg>
  )
}

/* Oshún — 5 petals, honey and rivers */
export function OshunPetals({ className }: { className?: string }) {
  const angles = [0, 72, 144, 216, 288]
  return (
    <svg viewBox="0 0 90 90" className={className} fill="none" aria-hidden="true">
      <g transform="translate(45,45)">
        {angles.map(a => (
          <ellipse
            key={a}
            cx="0" cy="-22"
            rx="7" ry="15"
            fill="#c8a96e"
            opacity="0.12"
            transform={`rotate(${a})`}
          />
        ))}
        {/* Center honey drop */}
        <circle r="5" fill="#c8a96e" opacity="0.16"/>
      </g>
    </svg>
  )
}

/* Changó — the Oshe, double-headed axe (power, lightning, justice) */
export function ChangoOshe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 72" className={className} fill="none" aria-hidden="true">
      {/* Handle */}
      <rect x="23" y="6" width="4" height="60" rx="2" fill="#8b0000" opacity="0.1"/>
      {/* Upper blade */}
      <path d="M25,10 Q5,5 5,20 Q5,32 25,28 Q45,32 45,20 Q45,5 25,10Z"
        fill="#8b0000" opacity="0.1"/>
      {/* Lower blade */}
      <path d="M25,44 Q5,40 5,54 Q5,66 25,64 Q45,66 45,54 Q45,40 25,44Z"
        fill="#8b0000" opacity="0.1"/>
    </svg>
  )
}

/* Orunmila/Ifa — 16-point divination grid (wisdom, knowledge) */
export function IreteGrid({ className }: { className?: string }) {
  const pts: { x: number; y: number }[] = []
  for (let r = 0; r < 4; r++)
    for (let c = 0; c < 4; c++)
      pts.push({ x: c * 20 + 10, y: r * 20 + 10 })
  return (
    <svg viewBox="0 0 90 90" className={className} aria-hidden="true">
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="2.5" fill="#c8a96e" opacity="0.18"/>
      ))}
    </svg>
  )
}

/* Obatalá — the white arch, purity and creation */
export function ObatalaArch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 56" className={className} preserveAspectRatio="none" fill="none" aria-hidden="true">
      <path d="M0,56 Q100,0 200,0 Q300,0 400,56"
        stroke="white" strokeWidth="0.6" opacity="0.07"/>
      <path d="M0,56 Q100,18 200,18 Q300,18 400,56"
        stroke="white" strokeWidth="0.4" opacity="0.045"/>
    </svg>
  )
}

/* Oggún — iron chevron border (forest, hard work, iron) */
export function OgunChevrons({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 18" className={className} preserveAspectRatio="none" fill="none" aria-hidden="true">
      {Array.from({ length: 18 }, (_, i) => (
        <path
          key={i}
          d={`M${i * 16},9 L${i * 16 + 8},2 L${i * 16 + 16},9`}
          stroke="#1a5c2e" strokeWidth="1" opacity="0.28"
        />
      ))}
    </svg>
  )
}
