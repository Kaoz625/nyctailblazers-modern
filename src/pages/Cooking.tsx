import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { OshunPetals, YemojaWaves } from '../components/OrishaSymbols'

const img = (path: string) => `${import.meta.env.BASE_URL}images/${path}`

const foodPhotos = [
  'mixed_nd_marinated/mixed_nd_marinated_1749751392_3653501940291049661_75238899182.jpg',
  'mixed_nd_marinated/mixed_nd_marinated_1749761347_3653585451476433283_75238899182.jpg',
  'mixed_nd_marinated/mixed_nd_marinated_1749778320_3653727833138700281_75238899182.jpg',
  'mixed_nd_marinated/mixed_nd_marinated_1749797393_3653887828127934120_75238899182.jpg',
  'mixed_nd_marinated/mixed_nd_marinated_1750084371_3656295174612165084_75238899182.jpg',
  'mixed_nd_marinated/mixed_nd_marinated_1749775975_3653708157743454651_75238899182.jpg',
  'mixed_nd_marinated/mixed_nd_marinated_1760746241_3745733420077814965_75238899182.jpg',
  'mixed_nd_marinated/mixed_nd_marinated_1760746551_3745736019237694820_75238899182.jpg',
  'mixed_nd_marinated/mixed_nd_marinated_1750772685_3662069169680772241_75238899182.jpg',
]

const offerings = [
  {
    title: 'Private Chef',
    desc: 'Intimate dinners and gatherings elevated with bold, culturally-layered flavors. Your home, your vibe, our fire.',
  },
  {
    title: 'Meal Prep',
    desc: 'Weekly prep with seasoning that actually lasts. Real food, real flavor — no bland Tuesday lunches.',
  },
  {
    title: 'Pop-Up Events',
    desc: 'Rotating menus built around season, culture, and mood. Follow @mixed_nd_marinated to catch the next drop.',
  },
  {
    title: 'Catering',
    desc: 'Corporate events, celebrations, and everything in between. Mixed flavors, marinated with care.',
  },
]

export default function Cooking() {
  useReveal()

  return (
    <main className="pt-24">
      {/* ── Hero ── */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <div className="reveal grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Oshún's 5-petal bloom — she governs honey, rivers, and all sweet things */}
            <OshunPetals className="absolute -top-10 -left-10 w-36 h-36 pointer-events-none" />
            <div className="relative z-10">
              <span className="gold-line mb-6" />
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Service 02</p>
              <h1 className="font-display text-6xl md:text-8xl font-light text-fog leading-none mb-4">
                Mixed<br />
                <span className="text-gold italic">&amp;</span>
                <br />
                <span className="italic text-fog/50">Marinated</span>
              </h1>
              <p className="font-display text-xl italic text-gold/55 mb-8 tracking-wide">
                Seasoned with intention. Mixed with soul.
              </p>
              <p className="text-fog/50 max-w-lg leading-relaxed text-base mb-10">
                Bold flavors rooted in culture, crafted by Markus. Every dish tells a story — of heritage, of hunger, of the pursuit of something worth tasting twice.
              </p>
              <a
                href="https://www.instagram.com/mixed_nd_marinated/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 bg-gold text-ink text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-colors duration-300"
              >
                @mixed_nd_marinated ↗
              </a>
            </div>
          </div>

          {/* 2×2 photo grid */}
          <div className="grid grid-cols-2 gap-2">
            {foodPhotos.slice(0, 4).map((p, i) => (
              <div key={i} className="aspect-square overflow-hidden group">
                <img
                  src={img(p)}
                  alt="Mixed & Marinated"
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offerings ── */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <span className="gold-line mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Offerings</p>
          <h2 className="font-display text-4xl font-light text-fog">
            Every meal, a<br />
            <span className="italic text-fog/40">deliberate craft</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-gold/10">
          {offerings.map((o, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 2) + 1} bg-ink p-10 group hover:bg-canopy transition-colors duration-500`}
            >
              <h3 className="font-display text-2xl text-gold mb-3 group-hover:text-gold-light transition-colors duration-300">
                {o.title}
              </h3>
              <p className="text-fog/50 text-sm leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="reveal mb-10">
          <span className="gold-line mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Gallery</p>
          <h2 className="font-display text-4xl font-light text-fog">The table is set</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {foodPhotos.slice(4).map((p, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} aspect-square overflow-hidden group`}
            >
              <img
                src={img(p)}
                alt="Mixed & Marinated"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Yemojá separator */}
      <YemojaWaves className="w-full h-8 my-6" />

      {/* ── CTA ── */}
      <section className="py-32 px-6 text-center max-w-2xl mx-auto">
        <div className="reveal relative">
          <OshunPetals className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Let's Eat</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-fog mb-4">
              Hungry for something<br />
              <span className="italic text-gold">worth remembering?</span>
            </h2>
            <p className="text-fog/40 text-sm mb-10 max-w-xs mx-auto leading-relaxed">
              Inquiries for private events, catering, and meal prep welcome.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://www.instagram.com/mixed_nd_marinated/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-gold text-ink text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-colors duration-300"
              >
                Instagram
              </a>
              <Link
                to="/contact"
                className="px-10 py-4 border border-gold/30 text-fog/70 text-xs tracking-[0.25em] uppercase hover:border-gold/60 transition-colors duration-300"
              >
                Book an Event
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
