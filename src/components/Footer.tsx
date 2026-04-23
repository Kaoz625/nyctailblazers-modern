import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="font-display text-lg tracking-widest uppercase text-fog">
            NYC<span className="text-gold">·</span>Tailblazers
          </p>
          <p className="text-fog/40 text-xs mt-2 tracking-wide">New York City</p>
        </div>
        <div className="flex flex-wrap gap-8 text-xs tracking-[0.15em] uppercase text-fog/40">
          <Link to="/dog-walking" className="hover:text-gold transition-colors">Dog Walking</Link>
          <Link to="/websites" className="hover:text-gold transition-colors">Websites</Link>
          <Link to="/apps" className="hover:text-gold transition-colors">Apps</Link>
          <Link to="/agents" className="hover:text-gold transition-colors">AI Agents</Link>
          <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5">
        <p className="text-fog/25 text-xs tracking-wide">© {new Date().getFullYear()} NYC Tailblazers. All rights reserved.</p>
      </div>
    </footer>
  )
}
