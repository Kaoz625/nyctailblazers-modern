import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  useReveal()
  const [sent, setSent] = useState(false)

  const inputClass = 'w-full bg-transparent border-b border-white/15 py-3 text-fog text-sm placeholder-fog/25 focus:outline-none focus:border-gold transition-colors duration-300'
  const labelClass = 'block text-xs tracking-[0.2em] uppercase text-fog/40 mb-2'

  return (
    <main className="pt-24">
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <div className="reveal">
          <span className="gold-line mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Let's Talk</p>
          <h1 className="font-display text-6xl md:text-8xl font-light text-fog leading-none mb-8">
            Get in<br /><span className="italic text-fog/40">Touch</span>
          </h1>
        </div>
      </section>

      <section className="pb-32 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24">
          {/* Info */}
          <div className="reveal space-y-12">
            <div>
              <p className="text-fog/50 leading-relaxed text-sm md:text-base max-w-sm">
                Whether you want to book a dog walk, start a website project, or explore AI automation — I'd love to hear from you.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-1">Email</p>
                <a href="mailto:markususeche@gmail.com" className="text-fog hover:text-gold transition-colors text-sm">
                  markususeche@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-1">Location</p>
                <p className="text-fog/50 text-sm">New York City, NY</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">Services</p>
                <ul className="space-y-1 text-fog/40 text-sm">
                  <li>Dog Walking</li>
                  <li>Website Building</li>
                  <li>App Development</li>
                  <li>AI Agent Systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form — Formspree */}
          <div className="reveal reveal-delay-2">
            {sent ? (
              <div className="py-20 text-center">
                <span className="gold-line mx-auto mb-6" />
                <p className="font-display text-3xl text-fog font-light mb-3">Message sent!</p>
                <p className="text-fog/40 text-sm">Thanks — I'll be in touch shortly.</p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xwkgvpbz"
                method="POST"
                onSubmit={() => setSent(true)}
                className="space-y-10"
              >
                <div>
                  <label className={labelClass}>Your Name</label>
                  <input name="name" required placeholder="Markus Useche" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input name="email" type="email" required placeholder="you@example.com" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Dog's Name</label>
                  <input name="dog_name" placeholder="e.g. Jiggs" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Service Interested In</label>
                  <select name="service" required className={`${inputClass} bg-ink`}>
                    <option value="">Select a service...</option>
                    <option value="Dog Walking">Dog Walking</option>
                    <option value="Website Building">Website Building</option>
                    <option value="App Development">App Development</option>
                    <option value="AI Agent Systems">AI Agent Systems</option>
                    <option value="Multiple Services">Multiple Services</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Your Message</label>
                  <textarea name="message" required rows={4} placeholder="Tell me about your project or what you need..." className={`${inputClass} resize-none`} />
                </div>
                <button type="submit" className="px-12 py-4 bg-gold text-ink text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-colors duration-300">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
