import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const services = [
  {
    num: '01',
    title: 'Dog Walking',
    desc: 'Premium, trusted care for your dog across New York City. Daily walks, updates, and a bond your pet will love.',
    href: '/dog-walking',
    cta: 'Learn More',
  },
  {
    num: '02',
    title: 'Website Building',
    desc: 'Cinematic, high-converting websites built fast. From concept to live in days — not months.',
    href: '/websites',
    cta: 'See the Work',
  },
  {
    num: '03',
    title: 'App Development',
    desc: 'Mobile and web apps built with modern stacks. Clean code, beautiful interfaces, shipped on schedule.',
    href: '/apps',
    cta: 'Explore Apps',
  },
  {
    num: '04',
    title: 'AI Agent Systems',
    desc: 'Autonomous workflows powered by Claude. Let AI handle the repetitive so you focus on what matters.',
    href: '/agents',
    cta: 'See AI Work',
  },
]

const testimonials = [
  {
    quote: 'Markus built our site in under a week. It looks like we spent ten times more.',
    name: 'Sarah K.',
    role: 'Small Business Owner',
  },
  {
    quote: 'Our dog comes home tired, happy, and completely cared for. We trust Markus completely.',
    name: 'James & Priya T.',
    role: 'NYC Pet Parents',
  },
  {
    quote: 'The AI automation he set up saves our team hours every week. Genuinely transformative.',
    name: 'Demi A.',
    role: 'Startup Founder',
  },
]

export default function Home() {
  useReveal()

  useEffect(() => {
    const words = ['Websites.', 'Apps.', 'Agents.', 'Results.']
    let i = 0
    const el = document.getElementById('hero-cycle')
    if (!el) return
    const interval = setInterval(() => {
      i = (i + 1) % words.length
      el.style.opacity = '0'
      setTimeout(() => {
        if (el) { el.textContent = words[i]; el.style.opacity = '1' }
      }, 400)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-20 max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="gold-line mb-8 block" />
          <p className="text-xs tracking-[0.3em] uppercase text-gold">New York City</p>
        </div>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light leading-none text-fog mb-4">
          NYC<br />Tailblazers
        </h1>
        <div className="flex items-baseline gap-4 mt-4">
          <p className="font-display text-3xl md:text-5xl text-fog/40 font-light italic">Building</p>
          <p
            id="hero-cycle"
            className="font-display text-3xl md:text-5xl text-gold font-light italic transition-opacity duration-400"
          >
            Websites.
          </p>
        </div>
        <p className="mt-10 text-fog/50 max-w-md leading-relaxed text-sm md:text-base">
          One person. Four services. Dog walking, premium websites, app development, and AI automation — all built with the same obsessive care.
        </p>
        <div className="flex flex-wrap gap-4 mt-12">
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-gold text-ink text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-colors duration-300"
          >
            Start a Project
          </Link>
          <Link
            to="/dog-walking"
            className="px-8 py-3.5 border border-white/20 text-fog text-xs tracking-[0.2em] uppercase hover:border-gold/50 transition-colors duration-300"
          >
            Book a Walk
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="reveal mb-20">
          <span className="gold-line mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-fog">
            Four ways to work<br />
            <span className="italic text-fog/50">with Markus</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {services.map((s, i) => (
            <Link
              key={s.num}
              to={s.href}
              className={`reveal reveal-delay-${(i % 4) + 1} group bg-ink p-10 hover:bg-mist transition-colors duration-500`}
            >
              <p className="font-display text-5xl text-white/5 font-light mb-6 group-hover:text-gold/20 transition-colors duration-500">
                {s.num}
              </p>
              <h3 className="font-display text-2xl text-fog mb-3 group-hover:text-gold transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-fog/40 text-sm leading-relaxed mb-6">{s.desc}</p>
              <span className="text-xs tracking-[0.2em] uppercase text-gold/60 group-hover:text-gold transition-colors duration-300">
                {s.cta} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-mist/20">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-20">
            <span className="gold-line mb-6" />
            <p className="text-xs tracking-[0.3em] uppercase text-gold">What clients say</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((t, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`}>
                <p className="font-display text-xl md:text-2xl font-light italic text-fog leading-snug mb-6">
                  "{t.quote}"
                </p>
                <span className="gold-line mb-4" />
                <p className="text-sm text-fog font-medium">{t.name}</p>
                <p className="text-xs text-fog/40 tracking-wide mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 text-center max-w-4xl mx-auto">
        <div className="reveal">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Ready?</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-fog mb-8">
            Let's build something<br />
            <span className="italic text-fog/40">worth noticing.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-block px-12 py-4 bg-gold text-ink text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
