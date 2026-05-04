import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { to: '/dog-walking', label: 'Dog Walking' },
  { to: '/cooking',     label: 'Cooking' },
  { to: '/websites',    label: 'Websites' },
  { to: '/apps',        label: 'Apps' },
  { to: '/agents',      label: 'AI Agents' },
  { to: '/contact',     label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink/96 backdrop-blur-sm border-b border-forest/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo size="sm" />
          <span className="font-display text-lg tracking-widest text-fog uppercase hidden sm:block">
            NYC<span className="text-gold">·</span>Tailblazers
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-7 text-xs tracking-[0.2em] uppercase text-fog/55">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`hover:text-gold transition-colors duration-300 ${
                  location.pathname === l.to ? 'text-gold' : ''
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop social icons */}
        <div className="hidden md:flex items-center gap-3 ml-6">
          <a href="https://instagram.com/NYCTailblazers" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-fog/40 hover:text-gold transition-colors duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="https://facebook.com/NYCTailblazers" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-fog/40 hover:text-gold transition-colors duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="https://tiktok.com/@NYCTailblazers" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-fog/40 hover:text-gold transition-colors duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-fog transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-fog transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-fog transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="bg-ink/98 border-t border-forest/20 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`block text-sm tracking-[0.2em] uppercase py-2 transition-colors ${
                  location.pathname === l.to ? 'text-gold' : 'text-fog/70 hover:text-fog'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 flex gap-4">
            <a href="https://instagram.com/NYCTailblazers" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-fog/40 hover:text-gold transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://facebook.com/NYCTailblazers" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-fog/40 hover:text-gold transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://tiktok.com/@NYCTailblazers" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-fog/40 hover:text-gold transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
