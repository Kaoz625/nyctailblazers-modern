import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const process = [
  { step: '01', title: 'Direction', desc: 'We define your brand voice, audience, and goals in a single focused session.' },
  { step: '02', title: 'Design', desc: 'A custom aesthetic built around your identity — not a template.' },
  { step: '03', title: 'Build', desc: 'Fast, clean code. React or static, mobile-first, optimized for speed.' },
  { step: '04', title: 'Launch', desc: 'Deployed and live. You get the source, the domain, and ongoing support.' },
]

const projects = [
  { name: 'Meridian', type: 'Luxury Real Estate', note: 'Cinematic hero, property showcase, contact system' },
  { name: 'Iris Studio', type: 'Creative Agency', note: 'Editorial layout, animated portfolio, team pages' },
  { name: 'Forma', type: 'Architecture Firm', note: 'Minimal dark theme, project gallery, inquiry form' },
  { name: 'Onyx Health', type: 'Wellness Brand', note: 'Clean typographic design, booking integration' },
]

export default function Websites() {
  useReveal()

  return (
    <main className="pt-24">
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <div className="reveal">
          <span className="gold-line mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Service 02</p>
          <h1 className="font-display text-6xl md:text-8xl font-light text-fog leading-none mb-8">
            Website<br /><span className="italic text-fog/40">Building</span>
          </h1>
          <p className="text-fog/50 max-w-lg leading-relaxed text-base md:text-lg">
            Cinematic websites that make people stop scrolling. Built fast, built right, built to convert. Not templates — original work every time.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <span className="gold-line mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Process</p>
          <h2 className="font-display text-4xl font-light text-fog">From idea to live site<br /><span className="italic text-fog/40">in under two weeks.</span></h2>
        </div>
        <div className="grid md:grid-cols-4 gap-px bg-white/5">
          {process.map((p, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} bg-ink p-8`}>
              <p className="font-display text-4xl text-white/5 font-light mb-4">{p.step}</p>
              <h3 className="font-display text-lg text-gold mb-2">{p.title}</h3>
              <p className="text-fog/40 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 px-6 bg-mist/20">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-16">
            <span className="gold-line mb-6" />
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Select Work</p>
            <h2 className="font-display text-4xl font-light text-fog">Recent builds</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            {projects.map((p, i) => (
              <div key={i} className={`reveal reveal-delay-${(i % 2) + 1} bg-ink p-10`}>
                <h3 className="font-display text-2xl text-fog mb-1">{p.name}</h3>
                <p className="text-xs tracking-[0.15em] uppercase text-gold mb-4">{p.type}</p>
                <p className="text-fog/40 text-sm">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 text-center max-w-2xl mx-auto">
        <div className="reveal">
          <h2 className="font-display text-4xl md:text-5xl font-light text-fog mb-6">
            Your site should look as good<br />
            <span className="italic text-fog/40">as your business is.</span>
          </h2>
          <Link to="/contact" className="inline-block px-12 py-4 bg-gold text-ink text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-colors duration-300">
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  )
}
