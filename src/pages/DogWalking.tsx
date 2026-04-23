import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const features = [
  { title: 'Daily Updates', desc: 'Photo and GPS updates sent after every walk. You always know where your dog is.' },
  { title: 'Trusted & Insured', desc: 'Fully background-checked and insured. Your pet is safe in every sense.' },
  { title: 'Small Groups', desc: 'Small walking groups — never more than 4 dogs. Each walk gets real attention.' },
  { title: 'NYC Expert', desc: 'I know the best parks, routes, and dog-friendly spots across all 5 boroughs.' },
]

const pricing = [
  { name: '30-Min Walk', price: '$25', note: 'Great for potty breaks and quick exercise' },
  { name: '60-Min Walk', price: '$40', note: 'The full NYC experience — parks, streets, adventure' },
  { name: 'Weekly Package (5x)', price: '$175', note: 'Best value for daily walking clients' },
]

export default function DogWalking() {
  useReveal()

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <div className="reveal">
          <span className="gold-line mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Service 01</p>
          <h1 className="font-display text-6xl md:text-8xl font-light text-fog leading-none mb-8">
            Dog<br /><span className="italic text-fog/40">Walking</span>
          </h1>
          <p className="text-fog/50 max-w-lg leading-relaxed text-base md:text-lg">
            Premium, attentive dog walking across New York City. Your dog deserves someone who actually cares — not just someone going through the motions.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {features.map((f, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} bg-ink p-10`}>
              <h3 className="font-display text-xl text-gold mb-3">{f.title}</h3>
              <p className="text-fog/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-mist/20">
        <div className="max-w-4xl mx-auto">
          <div className="reveal mb-16">
            <span className="gold-line mb-6" />
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Pricing</p>
            <h2 className="font-display text-4xl font-light text-fog">Simple, honest rates</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/5">
            {pricing.map((p, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} bg-ink p-10`}>
                <p className="font-display text-4xl text-gold font-light mb-2">{p.price}</p>
                <p className="text-fog font-medium tracking-wide text-sm mb-3">{p.name}</p>
                <p className="text-fog/40 text-xs leading-relaxed">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center max-w-2xl mx-auto">
        <div className="reveal">
          <h2 className="font-display text-4xl md:text-5xl font-light text-fog mb-6">
            Your dog is waiting<br />
            <span className="italic text-fog/40">for its next adventure.</span>
          </h2>
          <Link to="/contact" className="inline-block px-12 py-4 bg-gold text-ink text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-colors duration-300">
            Book a Walk
          </Link>
        </div>
      </section>
    </main>
  )
}
