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
        </ul>
      </div>
    </header>
  )
}
