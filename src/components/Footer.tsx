import { Link } from 'react-router-dom'
import { OshunPetals, YemojaWaves } from './OrishaSymbols'

const serviceLinks = [
  { to: '/dog-walking', label: 'Dog Walking' },
  { to: '/cooking',     label: 'Cooking' },
  { to: '/websites',    label: 'Websites' },
  { to: '/apps',        label: 'Apps' },
  { to: '/agents',      label: 'AI Agents' },
  { to: '/contact',     label: 'Contact' },
]

const socials = [
  {
    label: 'Instagram',
    handle: '@nyctailblazers',
    href: 'https://instagram.com/NYCTailblazers',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    handle: 'NYC Tailblazers',
    href: 'https://facebook.com/NYCTailblazers',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    handle: '@NYCTailblazers',
    href: 'https://tiktok.com/@NYCTailblazers',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram — Cooking',
    handle: '@mixed_nd_marinated',
    href: 'https://www.instagram.com/mixed_nd_marinated/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-forest/20 mt-32 pt-4">
      {/* Yemojá waves — mother of waters receives all journeys */}
      <YemojaWaves className="w-full h-8 opacity-60" />

      <div className="px-6 py-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="relative">
            {/* Oshún 5-petal watermark — gold is her color */}
            <OshunPetals className="absolute -top-4 -left-4 w-24 h-24 pointer-events-none select-none" />
            <p className="font-display text-xl tracking-widest uppercase text-fog relative z-10">
              NYC<span className="text-gold">·</span>Tailblazers
            </p>
            <p className="text-fog/35 text-xs mt-2 tracking-wide">New York City</p>
            <p className="text-fog/25 text-xs mt-1 tracking-wide">nyctailblazers.com</p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-forest mb-4">Services</p>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-xs tracking-[0.15em] uppercase text-fog/40 hover:text-gold transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-forest mb-4">Follow</p>
            <ul className="flex flex-col gap-4">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2"
                  >
                    <span className="text-fog/30 group-hover:text-gold transition-colors duration-300">{s.icon}</span>
                    <span className="text-xs tracking-[0.15em] text-fog/55 group-hover:text-gold transition-colors duration-300">
                      {s.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-forest/15 flex flex-col sm:flex-row justify-between items-start gap-3">
          <p className="text-fog/20 text-xs tracking-wide">
            © {new Date().getFullYear()} NYC Tailblazers. All rights reserved.
          </p>
          <p className="text-fog/15 text-xs tracking-wide italic">
            Built with intention. Seasoned with soul.
          </p>
        </div>
      </div>
    </footer>
  )
}
