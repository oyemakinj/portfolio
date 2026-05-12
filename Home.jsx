import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageSlot, CaseCard, useFadeUp } from '../components/Shared'

/* ── Pillar card ── */
function PillarCard({ num, title, desc, to, accent }) {
  const ref   = useFadeUp()
  const color = accent === 'blue' ? 'var(--blue)' : accent === 'gold' ? 'var(--gold)' : 'var(--white-50)'
  return (
    <div ref={ref} className="fade-up" style={{
      background: 'var(--bg-2)', border: '1px solid var(--border)',
      padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 20,
      transition: 'border-color 0.3s, transform 0.3s',
      cursor: 'default',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = 'translateY(-4px)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
    >
      <div style={{ fontFamily: 'var(--serif)', fontSize: 64, fontWeight: 300, color, lineHeight: 1, opacity: 0.25 }}>
        {num}
      </div>
      <div>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 400, marginBottom: 12, lineHeight: 1.2 }}>{title}</h3>
        <p style={{ fontSize: 14, color: 'var(--white-50)', lineHeight: 1.75, fontWeight: 300 }}>{desc}</p>
      </div>
      <Link to={to} className="link-arrow" style={{ color, marginTop: 'auto' }}>Explore Work →</Link>
    </div>
  )
}

/* ── Featured group ── */
function FeaturedGroup({ label, to, cards, accent }) {
  return (
    <div style={{ marginBottom: 80 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: accent === 'blue' ? 'var(--blue)' : 'var(--gold)' }}>
          {label}
        </div>
        <Link to={to} className="link-arrow" style={{ color: accent === 'blue' ? 'var(--blue)' : 'var(--gold)' }}>
          See All Work →
        </Link>
      </div>
      <div className="grid-2">
        {cards.map((c, i) => <CaseCard key={i} {...c} accent={accent} />)}
      </div>
    </div>
  )
}

export default function Home() {
  const heroTextRef = useRef(null)

  useEffect(() => {
    const el = heroTextRef.current
    if (!el) return
    setTimeout(() => { el.style.opacity = 1; el.style.transform = 'none' }, 100)
  }, [])

  return (
    <div>

      {/* ═══ HERO ═══════════════════════════════════════════════════ */}
      <section style={{
        minHeight: '100vh', paddingTop: 'var(--nav-h)',
        display: 'grid', gridTemplateColumns: '55% 45%',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Gold gradient top-left glow */}
        <div style={{
          position: 'absolute', top: -200, left: -200,
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,151,58,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Left: Text */}
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '80px 64px 80px 48px',
          opacity: 0, transform: 'translateY(30px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
        }} ref={heroTextRef}>

          <div className="label" style={{ marginBottom: 28 }}>
            Brand Systems Architect · Lagos, Nigeria
          </div>

          <h1 className="display display-xl" style={{ marginBottom: 28, lineHeight: 1.0 }}>
            Victor<br />
            <span style={{ color: 'var(--gold)' }}>Oyemakin</span>
          </h1>

          <p style={{ fontSize: 18, color: 'var(--white-50)', lineHeight: 1.75, fontWeight: 300, maxWidth: 480, marginBottom: 44 }}>
            I build brands that think clearly, grow consistently, and run efficiently — from cultural strategy and campaign execution to the AI systems that scale it all.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
            <Link to="/strategy" className="btn-gold">View My Work</Link>
            <a href="mailto:Victoroye2020@gmail.com" className="btn-ghost">Get In Touch</a>
          </div>

          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '0 40px', borderTop: '1px solid var(--border)', paddingTop: 36 }}>
            {[
              { n: '3M+', l: 'Campaign Reach' },
              { n: '70%', l: 'Automation Conversion' },
              { n: '33',  l: 'Agency Projects' },
            ].map(s => (
              <div key={s.n}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 36, fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: 4 }}>{s.n}</div>
                <div style={{ fontSize: 11, color: 'var(--white-20)', letterSpacing: '0.05em' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Photo */}
        <div style={{ position: 'relative', minHeight: 600 }}>
          {/* Blue glow behind photo */}
          <div style={{
            position: 'absolute', top: '20%', right: '10%',
            width: 400, height: 400, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(46,107,230,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <img
            src="/victor.jpg"
            alt="Victor Oyemakin"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'top center',
              filter: 'grayscale(15%)',
            }}
          />

          {/* Gold border overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            boxShadow: 'inset 0 0 0 1px rgba(196,151,58,0.15)',
            pointerEvents: 'none',
          }} />

          {/* Floating available badge */}
          <div style={{
            position: 'absolute', bottom: 40, left: -28,
            background: 'var(--bg-2)', border: '1px solid var(--border)',
            padding: '16px 24px', backdropFilter: 'blur(12px)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.05em' }}>Available for Work</div>
                <div style={{ fontSize: 11, color: 'var(--white-50)', marginTop: 2 }}>Full-time · Retainer · Projects</div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            section:first-of-type {
              grid-template-columns: 1fr !important;
            }
            section:first-of-type > div:last-child {
              height: 50vw !important;
              min-height: 320px;
            }
            section:first-of-type > div:first-child {
              padding: 80px 24px 48px !important;
            }
          }
        `}</style>
      </section>

      {/* ═══ THREE PILLARS ══════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div className="label">01 — What I Do</div>
              <h2 className="display display-lg">Three disciplines.<br />One direction.</h2>
            </div>
            <p className="body" style={{ maxWidth: 400 }}>
              Most strategists stop at the idea. Most operators stop at the workflow. I connect both ends — and everything in between.
            </p>
          </div>

          <div className="grid-3">
            <PillarCard
              num="01"
              accent="gold"
              title="Brand Strategy & Creative Direction"
              desc="Positioning, narrative, identity, cultural direction, creative production, influencer strategy. I shape how brands are perceived and build the story audiences believe."
              to="/strategy"
            />
            <PillarCard
              num="02"
              accent=""
              title="Campaign Management & Growth"
              desc="Paid media, funnels, organic growth, influencer campaigns, analytics. I build and run the systems that move audiences from discovery to action."
              to="/campaigns"
            />
            <PillarCard
              num="03"
              accent="blue"
              title="Automation & Systems"
              desc="Make.com, N8N, GHL, AI voice agents, CRM architecture. I engineer the infrastructure that lets brands scale without adding headcount."
              to="/automation"
            />
          </div>
        </div>
      </section>

      {/* ═══ FEATURED WORK ══════════════════════════════════════════ */}
      <section className="section" style={{ background: '#0C0C0C' }}>
        <div className="container">
          <div className="label">02 — Selected Work</div>
          <h2 className="display display-lg" style={{ marginBottom: 64 }}>
            Results across<br />every pillar.
          </h2>

          {/* Brand Strategy */}
          <FeaturedGroup
            label="Brand Strategy & Creative Direction"
            to="/strategy"
            accent="gold"
            cards={[
              {
                tag: 'Brand Strategy · Repositioning',
                client: 'Adanna',
                description: 'Repositioned a NY→Lagos fashion brand as a deliberate contribution to Africa\'s creative economy. Led PR, campaign, and full documentary production.',
                metric: '2 Markets',
                metricLabel: 'Cross-market brand repositioning',
                to: '/strategy',
              },
              {
                tag: 'Brand Strategy · Event Campaign',
                client: 'Lagos Fashion Week',
                description: 'Official media partner. Designed a layered content system that dominated the digital conversation around Africa\'s biggest fashion event.',
                metric: '3M+',
                metricLabel: 'Reach online',
                to: '/strategy',
              },
            ]}
          />

          {/* Campaigns */}
          <FeaturedGroup
            label="Campaign Management & Growth"
            to="/campaigns"
            accent="gold"
            cards={[
              {
                tag: 'Campaign · Google Ads Optimisation',
                client: 'Sensei Publishing',
                description: 'Full ad account audit and rebuild. Conversion rate went from zero to double-digits. Cost-per-click dropped while click-through rate quintupled.',
                metric: '11.45%',
                metricLabel: 'Conversion rate (from 0%)',
                to: '/campaigns',
              },
              {
                tag: 'Campaign · Organic Social Growth',
                client: 'Social Performance',
                description: 'Grew a brand account 85.7% in a single month. Reduced ad spend contribution to views from 10% to 0.2% — 99.8% organic reach.',
                metric: '85.7%',
                metricLabel: 'Follower growth in 30 days',
                to: '/campaigns',
              },
            ]}
          />

          {/* Automation */}
          <FeaturedGroup
            label="Automation & Systems"
            to="/automation"
            accent="blue"
            cards={[
              {
                tag: 'Automation · Lead Management · San Diego',
                client: 'DJMC Events',
                description: 'Built an end-to-end lead system from Google Ads to closed deal. Intelligent SMS nurture, appointment booking, and pipeline automation.',
                metric: '70%',
                metricLabel: 'Conversion rate via 2-week nurture',
                to: '/automation',
              },
              {
                tag: 'Automation · Compliance · New Zealand',
                client: 'Coverfy.nz',
                description: 'Insurance lead system with sub-2-min contact time, calling hour compliance, automatic follow-up sequences, and compliance doc generation.',
                metric: '<2 min',
                metricLabel: 'Lead contact time from submission',
                to: '/automation',
              },
            ]}
          />
        </div>
      </section>

      {/* ═══ GRIX TEASER ════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg-3)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="label">Grix Studio</div>
              <h2 className="display display-lg" style={{ marginBottom: 24 }}>
                The studio where<br />
                <span style={{ color: 'var(--gold)' }}>all three operate</span><br />
                as one.
              </h2>
              <p className="body" style={{ marginBottom: 36 }}>
                Grix is a Lagos-based cultural media and marketing studio built around music, fashion, and youth culture. It is the entity where brand strategy, campaign execution, and operational systems run simultaneously — not as separate departments, but as one connected machine.
              </p>
              <Link to="/grix" className="btn-gold">Explore Grix Studio</Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {[
                { n: '33', l: 'Agency Projects' },
                { n: '25', l: 'Marketing & PR Campaigns' },
                { n: '8',  l: 'Production Projects' },
                { n: '10', l: 'Events on Grix Tickets' },
              ].map(s => (
                <div key={s.n} style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 52, fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: 8 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: 'var(--white-50)', fontWeight: 300 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            section:nth-of-type(4) .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* ═══ CONTACT CTA ════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <div className="label" style={{ justifyContent: 'center' }}>Let's Work</div>
          <h2 className="display display-lg" style={{ marginBottom: 24 }}>
            Ready to build<br />
            <span style={{ color: 'var(--gold)' }}>something real?</span>
          </h2>
          <p className="body" style={{ marginBottom: 40 }}>
            Whether you need a brand positioned, a campaign run, or a system built — I'm available for full-time roles, retainers, and project-based engagements.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:Victoroye2020@gmail.com" className="btn-gold">Send Me an Email</a>
            <a href="https://linkedin.com/in/oyemakin-jesutofunmi-victor" target="_blank" rel="noreferrer" className="btn-ghost">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
