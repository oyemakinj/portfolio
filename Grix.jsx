import { Link } from 'react-router-dom'
import { ImageSlot, useFadeUp } from '../components/Shared'

function StatBlock({ n, label }) {
  const ref = useFadeUp()
  return (
    <div ref={ref} className="fade-up" style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', padding: '36px 28px' }}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 64, fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: 10 }}>{n}</div>
      <div style={{ fontSize: 13, color: 'var(--white-50)', fontWeight: 300 }}>{label}</div>
    </div>
  )
}

function ProjectRow({ client, type, result }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 24, padding: '20px 0', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 400 }}>{client}</div>
      <div style={{ fontSize: 12, color: 'var(--white-50)', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{type}</div>
      <div style={{ fontSize: 13, color: 'var(--gold)', fontWeight: 300 }}>{result}</div>
    </div>
  )
}

export default function Grix() {
  const heroRef = useFadeUp()

  return (
    <div>
      {/* ── Hero ── */}
      <div style={{
        paddingTop: 'calc(var(--nav-h) + 80px)', paddingBottom: 100,
        background: 'linear-gradient(180deg, rgba(196,151,58,0.05) 0%, transparent 100%)',
        borderBottom: '1px solid var(--border)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Large background GRIX text */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--serif)', fontSize: 'clamp(120px, 20vw, 240px)',
          fontWeight: 300, color: 'rgba(196,151,58,0.04)',
          userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.02em',
          whiteSpace: 'nowrap',
        }}>
          GRIX
        </div>

        <div className="container" style={{ position: 'relative' }}>
          <div ref={heroRef} className="fade-up">
            <div className="label">The Studio</div>
            <h1 className="display display-xl" style={{ marginBottom: 24, maxWidth: 820 }}>
              Grix<span style={{ color: 'var(--gold)' }}>.</span>
            </h1>
            <p style={{ fontSize: 22, fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--white-50)', fontWeight: 300, maxWidth: 600, marginBottom: 32, lineHeight: 1.5 }}>
              The studio where brand strategy, campaign execution, and operational systems operate as one.
            </p>
            <p className="body-lg" style={{ maxWidth: 640, marginBottom: 48 }}>
              Grix is a Lagos-based cultural media and marketing studio built around music, fashion, and youth culture. It is not a project on my résumé — it is proof that all three disciplines work together. I didn't consult on these things. I built and ran an entity where they had to.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="https://grix.ng" target="_blank" rel="noreferrer" className="btn-gold">
                Visit Grix.ng ↗
              </a>
              <a href="https://grixtickets.com" target="_blank" rel="noreferrer" className="btn-ghost">
                Grix Tickets ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <section className="section-sm" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
            {[
              { n: '33',  label: 'Agency Projects' },
              { n: '25',  label: 'Marketing & PR Campaigns' },
              { n: '8',   label: 'Production Projects' },
              { n: '10',  label: 'Events via Grix Tickets' },
              { n: '4',   label: 'Fashion Shows' },
            ].map(s => <StatBlock key={s.n} {...s} />)}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .stat-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }
          @media (max-width: 600px) {
            .stat-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </section>

      {/* ── What Grix Is ── */}
      <section className="section" style={{ background: '#0C0C0C' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="label">The Model</div>
              <h2 className="display display-lg" style={{ marginBottom: 28 }}>
                Culture is<br />
                <span style={{ color: 'var(--gold)' }}>the strategy.</span>
              </h2>
              <p className="body" style={{ marginBottom: 20 }}>
                Most media companies cover culture. Grix operates inside it. The editorial voice, the brand partnerships, the event coverage, the influencer network — every piece connects back to one core insight: youth audiences don't respond to brands that talk at them. They respond to brands that are part of their world.
              </p>
              <p className="body" style={{ marginBottom: 20 }}>
                Grix became the bridge between brands and that world — not by selling access, but by genuinely being part of the culture through music, fashion, and editorial.
              </p>
              <p className="body">
                The result: brands like Spotify, Lanre Da Silva, and BNXN worked with Grix because of cultural credibility, not just distribution reach.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <ImageSlot label="Grix — editorial cover or magazine spread" minHeight={280} />
              <ImageSlot label="Grix — event coverage or team at Lagos Fashion Week" minHeight={200} />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 860px) {
            section:nth-of-type(3) .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* ── Brand Partners ── */}
      <section className="section" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="label">Clients & Partners</div>
          <h2 className="display display-md" style={{ marginBottom: 56 }}>
            Brands that trusted the platform.
          </h2>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            <ProjectRow client="Spotify Africa" type="Campaign · Digital Extension" result="500K+ reach" />
            <ProjectRow client="Lanre Da Silva" type="Brand Strategy · 20yr Anniversary" result="1M+ reach" />
            <ProjectRow client="BNXN" type="Campaign · North America Tour" result="150K+ reach" />
            <ProjectRow client="Odumodublvck" type="Campaign · Album Launch" result="400K+ reach" />
            <ProjectRow client="Swypatune" type="PR · App Launch" result="1K+ signups · 200K reach" />
            <ProjectRow client="Adanna" type="Brand Strategy · Documentary" result="Cross-market repositioning" />
            <ProjectRow client="Lagos Fashion Week" type="Official Media Partner" result="3M+ reach" />
            <ProjectRow client="Fave" type="Campaign" result="Digital amplification" />
          </div>
        </div>
      </section>

      {/* ── Grix Tickets ── */}
      <section style={{ background: 'var(--bg-3)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <ImageSlot label="Grix Tickets — website screenshot (www.grixtickets.com)" minHeight={340} />
            </div>
            <div>
              <div className="label">Grix Tickets</div>
              <h2 className="display display-md" style={{ marginBottom: 24 }}>
                Built from scratch.<br />
                <span style={{ color: 'var(--gold)' }}>grixtickets.com</span>
              </h2>
              <p className="body" style={{ marginBottom: 20 }}>
                I built the Grix Tickets project roadmap from zero — laying out milestones, timelines, and development phases. I conducted candidate interviews and hired the development team. I managed the design process and oversaw UI/UX decisions, and coordinated all development stages with weekly stakeholder updates.
              </p>
              <p className="body" style={{ marginBottom: 32 }}>
                Grix Tickets is a live events and reservation platform for businesses and individuals — streamlining event planning and ticket management. Building it demonstrated not just brand and campaign thinking, but the operational and product management muscle that sits behind both.
              </p>
              <a href="https://grixtickets.com" target="_blank" rel="noreferrer" className="btn-gold">
                Visit grixtickets.com ↗
              </a>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 860px) {
            section:nth-of-type(5) .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* ── Selected Visuals ── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="label">Visual Work</div>
          <h2 className="display display-md" style={{ marginBottom: 48 }}>Selected campaigns.</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 16 }}>
            <ImageSlot label="Lagos Fashion Week — runway shot" minHeight={300} />
            <ImageSlot label="Odumodublvck — editorial visual" minHeight={300} />
            <ImageSlot label="Lanre Da Silva — runway or event" minHeight={300} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 16 }}>
            <ImageSlot label="Swypatune — campaign creative" minHeight={260} />
            <ImageSlot label="Spotify Africa — editorial visual" minHeight={260} />
          </div>
          <p style={{ fontSize: 12, color: 'var(--white-20)', marginTop: 16, letterSpacing: '0.05em' }}>
            Replace the placeholder slots above with your actual campaign images. Recommended: export from your Grix DECK.pdf or download from your TikTok/Instagram dashboards.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--bg-3)', padding: '80px 0', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 680 }}>
          <h2 className="display display-md" style={{ marginBottom: 20 }}>
            Work with the studio<span style={{ color: 'var(--gold)' }}>.</span>
          </h2>
          <p className="body" style={{ marginBottom: 36 }}>
            If your brand needs cultural presence, campaign execution, or a media partner that understands the African creative economy — let's talk.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:Victoroye2020@gmail.com" className="btn-gold">Reach Out</a>
            <Link to="/" className="btn-ghost">Back to Portfolio</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
