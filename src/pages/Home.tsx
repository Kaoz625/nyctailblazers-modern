import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import Logo from '../components/Logo'
import { ObatalaArch } from '../components/OrishaSymbols'

const img = (path: string) => `${import.meta.env.BASE_URL}images/${path}`

const services = [
  {
    num: '01',
    title: 'Dog Walking',
    desc: 'Premium, trusted care for your dog across New York City. Daily walks, updates, and a bond your pet will love.',
    href: '/dog-walking',
    cta: 'Book a Walk',
  },
  {
    num: '02',
    title: 'Cooking',
    desc: 'Bold flavors, cultural fusion, marinades built with soul. Private chef, meal prep, and pop-up events.',
    href: '/cooking',
    cta: 'See the Menu',
  },
  {
    num: '03',
    title: 'Website Building',
    desc: 'Cinematic, high-converting websites built fast. From concept to live in days — not months.',
    href: '/websites',
    cta: 'See the Work',
  },
  {
    num: '04',
    title: 'App Development',
    desc: 'Mobile and web apps built with modern stacks. Clean code, beautiful interfaces, shipped on schedule.',
    href: '/apps',
    cta: 'Explore Apps',
  },
  {
    num: '05',
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

const heroPhotos = [
  'nyctailblazers/nyctailblazers_1761520398_3752227515419970685_77720331497.jpg',
  'best_life_2024/best_life_2024_1756434817_3709566570495595227_64573823451.jpg',
  'mixed_nd_marinated/mixed_nd_marinated_1749775975_3653708157743454651_75238899182.jpg',
  'best_life_2024/best_life_2024_1756456521_3709748636189264770_64573823451.jpg',
  'nyctailblazers/nyctailblazers_1763543631_3769199630576704582_77720331497.jpg',
]

export default function Home() {
  useReveal()
  const calendlyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  useEffect(() => {
    const words = ['Websites.', 'Apps.', 'Agents.', 'Recipes.', 'Results.']
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
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 max-w-6xl mx-auto overflow-hidden">
        {/* Obatalá — white arch of purity at every threshold */}
        <ObatalaArch className="absolute top-0 left-0 right-0 w-full h-14 pointer-events-none" />

        {/* Ifa wisdom grid — Orunmila watches over all knowledge here */}
        <div className="absolute inset-0 ifa-grid opacity-25 pointer-events-none" />

        <div className="relative z-10">
          <div className="mb-10">
            <Logo size="lg" />
          </div>
          <div className="mb-6">
            <span className="gold-line mb-8 block" />
            <p className="text-xs tracking-[0.3em] uppercase text-emerald">New York City</p>
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
            One person. Five crafts. Dog walking, cooking, premium websites, app development, and AI automation — all built with the same obsessive care.
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
              className="px-8 py-3.5 border border-forest/40 text-fog text-xs tracking-[0.2em] uppercase hover:border-gold/50 transition-colors duration-300"
            >
              Book a Walk
            </Link>
          </div>
        </div>
      </section>

      {/* ── Photo strip ── */}
      <section className="py-6 overflow-x-auto">
        <div className="flex gap-2 px-6 min-w-max">
          {heroPhotos.map((p, i) => (
            <div key={i} className="w-48 h-48 md:w-64 md:h-64 overflow-hidden flex-shrink-0">
              <img
                src={img(p)}
                alt=""
                className="w-full h-full object-cover opacity-65 hover:opacity-90 transition-opacity duration-500"
                style={{ filter: 'saturate(0.8)' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="reveal mb-20">
          <span className="gold-line mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-emerald mb-3">Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-fog">
            Five ways to work<br />
            <span className="italic text-fog/50">with Markus</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-forest/10">
          {services.map((s, i) => (
            <Link
              key={s.num}
              to={s.href}
              className={`reveal reveal-delay-${(i % 4) + 1} group bg-ink p-10 hover:bg-canopy transition-colors duration-500`}
            >
              <p className="font-display text-5xl text-white/5 font-light mb-6 group-hover:text-forest/20 transition-colors duration-500">
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

      {/* ── Testimonials ── */}
      <section className="py-32 px-6 bg-canopy/60">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-20">
            <span className="gold-line mb-6" />
            <p className="text-xs tracking-[0.3em] uppercase text-emerald">What clients say</p>
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

      {/* ── Booking ── */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <div className="reveal mb-12 text-center">
          <span className="gold-line mx-auto mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-emerald mb-3">Book a Walk</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-fog">
            Ready to Book?<br />
            <span className="italic text-fog/50">Schedule Your Walk</span>
          </h2>
        </div>
        <div
          ref={calendlyRef}
          className="calendly-inline-widget rounded-sm overflow-hidden"
          data-url="https://calendly.com/nyctailblazers"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </section>

      {/* ── CTA ── */}
      <section className="py-40 px-6 text-center max-w-4xl mx-auto">
        <div className="reveal">
          <p className="text-xs tracking-[0.3em] uppercase text-emerald mb-6">Ready?</p>
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
