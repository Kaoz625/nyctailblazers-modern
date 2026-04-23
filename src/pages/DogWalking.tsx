import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { OgunChevrons, YemojaWaves } from '../components/OrishaSymbols'

const img = (path: string) => `${import.meta.env.BASE_URL}images/${path}`

const photos = [
  'nyctailblazers/nyctailblazers_1761520398_3752227515419970685_77720331497.jpg',
  'nyctailblazers/nyctailblazers_1763543631_3769199630576704582_77720331497.jpg',
  'nyctailblazers/nyctailblazers_1771445016_3835481213780281058_77720331497.jpg',
  'nyctailblazers/nyctailblazers_1772068067_3840707772997544090_77720331497.jpg',
  'best_life_2024/best_life_2024_1756434817_3709566570495595227_64573823451.jpg',
  'best_life_2024/best_life_2024_1756456521_3709748636189264770_64573823451.jpg',
]

const features = [
  {
    title: 'Led by Jiggs',
    desc: "At the heart of every walk is Jiggs — a Louisiana Catahoula Leopard Dog. He's why this all started. Every dog gets the same fierce love he does.",
  },
  {
    title: 'Daily Updates',
    desc: 'Photo and GPS check-ins after every walk. You always know exactly where your dog is.',
  },
  {
    title: 'Trusted & Insured',
    desc: 'Fully background-checked and insured. Your pet is safe in every sense.',
  },
  {
    title: 'Small Groups',
    desc: 'Never more than 4 dogs at once. Every walk gets real, focused attention.',
  },
  {
    title: 'NYC Expert',
    desc: "Best parks, routes, and dog-friendly spots across all 5 boroughs. NYC is our backyard.",
  },
  {
    title: 'All Boroughs',
    desc: 'Manhattan, Brooklyn, Queens, the Bronx, Staten Island — we cover it all.',
  },
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
      {/* ── Hero ── */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <div className="reveal grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-line mb-6" />
            <p className="text-xs tracking-[0.3em] uppercase text-emerald mb-4">Service 01</p>
            <h1 className="font-display text-6xl md:text-8xl font-light text-fog leading-none mb-8">
              Dog<br /><span className="italic text-fog/40">Walking</span>
            </h1>
            <p className="text-fog/50 max-w-lg leading-relaxed text-base md:text-lg mb-8">
              Premium, attentive dog walking across New York City — born from the love of one spotted dog named Jiggs. Your dog deserves someone who actually cares.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.instagram.com/nyctailblazers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] uppercase text-gold/70 hover:text-gold transition-colors border border-forest/30 px-4 py-2 hover:border-gold/40"
              >
                @nyctailblazers ↗
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61588199770039"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] uppercase text-fog/40 hover:text-fog/70 transition-colors border border-forest/20 px-4 py-2 hover:border-forest/40"
              >
                Facebook ↗
              </a>
            </div>
          </div>
          <div className="aspect-square overflow-hidden">
            <img
              src={img('nyctailblazers/nyctailblazers_1761520398_3752227515419970685_77720331497.jpg')}
              alt="NYC Tailblazers — original logo, two dogs"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        </div>
      </section>

      {/* Oggún chevron border — iron, hard work, the forest floor */}
      <OgunChevrons className="w-full h-5" />

      {/* ── Features ── */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-forest/10">
          {features.map((f, i) => (
            <div key={i} className={`reveal reveal-delay-${(i % 3) + 1} bg-ink p-10 hover:bg-canopy transition-colors duration-500`}>
              <h3 className="font-display text-xl text-gold mb-3">{f.title}</h3>
              <p className="text-fog/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="reveal mb-10">
          <span className="green-line mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-emerald mb-3">In the Field</p>
          <h2 className="font-display text-4xl font-light text-fog">Life on the leash</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} aspect-square overflow-hidden group`}
            >
              <img
                src={img(p)}
                alt="NYC Tailblazers"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Yemojá waves — nurturing, the waters that carry every journey home */}
      <YemojaWaves className="w-full h-8 my-4" />

      {/* ── Pricing ── */}
      <section className="py-24 px-6 bg-canopy/60">
        <div className="max-w-4xl mx-auto">
          <div className="reveal mb-16">
            <span className="gold-line mb-6" />
            <p className="text-xs tracking-[0.3em] uppercase text-emerald mb-3">Pricing</p>
            <h2 className="font-display text-4xl font-light text-fog">Simple, honest rates</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-forest/10">
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

      {/* ── CTA ── */}
      <section className="py-32 px-6 text-center max-w-2xl mx-auto">
        <div className="reveal">
          <h2 className="font-display text-4xl md:text-5xl font-light text-fog mb-6">
            Your dog is waiting<br />
            <span className="italic text-fog/40">for its next adventure.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-block px-12 py-4 bg-gold text-ink text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-colors duration-300"
          >
            Book a Walk
          </Link>
        </div>
      </section>
    </main>
  )
}
