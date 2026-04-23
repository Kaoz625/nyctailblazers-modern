import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const useCases = [
  { title: 'Content Pipelines', desc: 'Automated research, drafting, and publishing workflows. Your content machine runs while you sleep.' },
  { title: 'Customer Support Agents', desc: 'AI agents that handle tier-1 support, qualify leads, and escalate only when needed.' },
  { title: 'Data Processing', desc: 'Agents that pull, clean, analyze, and report on data from multiple sources automatically.' },
  { title: 'Scheduling & Coordination', desc: 'Autonomous systems that manage calendars, send reminders, and coordinate across platforms.' },
  { title: 'Research Automation', desc: 'Agents that browse, extract, and synthesize information for you on demand.' },
  { title: 'Custom Workflows', desc: 'Any repeatable task you do manually today — an agent can probably do it better.' },
]

export default function Agents() {
  useReveal()

  return (
    <main className="pt-24">
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <div className="reveal">
          <span className="gold-line mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Service 04</p>
          <h1 className="font-display text-6xl md:text-8xl font-light text-fog leading-none mb-8">
            AI Agent<br /><span className="italic text-fog/40">Systems</span>
          </h1>
          <p className="text-fog/50 max-w-lg leading-relaxed text-base md:text-lg">
            Autonomous workflows powered by Claude and other frontier models. Stop doing the same tasks over and over. Build a system that does it for you.
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-y border-white/5">
        <div className="reveal grid md:grid-cols-2 gap-16 items-center py-8">
          <div>
            <h2 className="font-display text-4xl font-light text-fog mb-6">
              What is an<br /><span className="italic text-gold">agentic workflow?</span>
            </h2>
          </div>
          <div className="space-y-4 text-fog/50 text-sm leading-relaxed">
            <p>An AI agent is software that can reason, plan, and take actions autonomously. Unlike a chatbot, it doesn't wait for your input — it executes a task from start to finish.</p>
            <p>I build these using Claude (Anthropic's AI), custom tool integrations, and automation frameworks. The result: workflows that run 24/7, handle complex multi-step tasks, and get smarter over time.</p>
            <p>Think of it as hiring a tireless assistant who never misses a step.</p>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <span className="gold-line mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Use Cases</p>
          <h2 className="font-display text-4xl font-light text-fog">What agents can do<br /><span className="italic text-fog/40">for your business</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {useCases.map((u, i) => (
            <div key={i} className={`reveal reveal-delay-${(i % 3) + 1} bg-ink p-8`}>
              <h3 className="font-display text-xl text-gold mb-3">{u.title}</h3>
              <p className="text-fog/40 text-sm leading-relaxed">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 text-center max-w-2xl mx-auto">
        <div className="reveal">
          <h2 className="font-display text-4xl md:text-5xl font-light text-fog mb-6">
            Stop doing manually<br />
            <span className="italic text-fog/40">what AI can do for you.</span>
          </h2>
          <Link to="/contact" className="inline-block px-12 py-4 bg-gold text-ink text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-colors duration-300">
            Automate Your Work
          </Link>
        </div>
      </section>
    </main>
  )
}
