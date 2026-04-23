import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const stack = [
  { name: 'React / React Native', role: 'Web & Mobile UI' },
  { name: 'TypeScript', role: 'Type-safe logic' },
  { name: 'Node.js / Python', role: 'Backend & APIs' },
  { name: 'Vite / Expo', role: 'Fast builds' },
  { name: 'Supabase / Firebase', role: 'Database & Auth' },
  { name: 'Tailwind CSS', role: 'Styling system' },
]

const capabilities = [
  { title: 'Mobile Apps', desc: 'iOS and Android apps built with React Native. One codebase, both platforms.' },
  { title: 'Web Apps', desc: 'Full-featured web applications with real-time data, auth, and complex business logic.' },
  { title: 'API Development', desc: 'Clean REST and WebSocket APIs. Fast, documented, and built to scale.' },
  { title: 'Integrations', desc: 'Connect your app to Stripe, Twilio, Notion, Airtable, and anything with an API.' },
]

export default function Apps() {
  useReveal()

  return (
    <main className="pt-24">
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <div className="reveal">
          <span className="gold-line mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Service 03</p>
          <h1 className="font-display text-6xl md:text-8xl font-light text-fog leading-none mb-8">
            App<br /><span className="italic text-fog/40">Development</span>
          </h1>
          <p className="text-fog/50 max-w-lg leading-relaxed text-base md:text-lg">
            Mobile and web applications built with modern stacks. Beautiful interfaces, clean code, delivered on time.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {capabilities.map((c, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} bg-ink p-10`}>
              <h3 className="font-display text-2xl text-gold mb-3">{c.title}</h3>
              <p className="text-fog/50 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="py-24 px-6 bg-mist/20">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-16">
            <span className="gold-line mb-6" />
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Tech Stack</p>
            <h2 className="font-display text-4xl font-light text-fog">Tools of the trade</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5">
            {stack.map((s, i) => (
              <div key={i} className={`reveal reveal-delay-${(i % 3) + 1} bg-ink p-8`}>
                <p className="font-display text-lg text-fog mb-1">{s.name}</p>
                <p className="text-xs tracking-wide text-gold/60 uppercase">{s.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 text-center max-w-2xl mx-auto">
        <div className="reveal">
          <h2 className="font-display text-4xl md:text-5xl font-light text-fog mb-6">
            Have an idea?<br />
            <span className="italic text-fog/40">Let's build it.</span>
          </h2>
          <Link to="/contact" className="inline-block px-12 py-4 bg-gold text-ink text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-colors duration-300">
            Discuss Your App
          </Link>
        </div>
      </section>
    </main>
  )
}
