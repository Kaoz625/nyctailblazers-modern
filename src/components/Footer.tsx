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
    label: 'Instagram — Dog Walking',
    handle: '@nyctailblazers',
    href: 'https://www.instagram.com/nyctailblazers/',
  },
  {
    label: 'Facebook — Dog Walking',
    handle: 'NYC Tailblazers',
    href: 'https://www.facebook.com/profile.php?id=61588199770039',
  },
  {
    label: 'Instagram — Cooking',
    handle: '@mixed_nd_marinated',
    href: 'https://www.instagram.com/mixed_nd_marinated/',
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
                    className="group flex flex-col gap-0.5"
                  >
                    <span className="text-xs text-fog/30 tracking-wide">{s.label}</span>
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
