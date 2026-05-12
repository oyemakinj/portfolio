import { ImageSlot, useFadeUp, Metric, SectionHeader } from '../components/Shared'

function CaseStudy({ tag, client, children, metrics = [], images = [], accent = 'gold', reverse = false }) {
  const ref   = useFadeUp()
  const color = accent === 'blue' ? 'var(--blue)' : 'var(--gold)'

  return (
    <article ref={ref} className="fade-up" style={{
      borderTop: `1px solid var(--border)`, paddingTop: 64, marginBottom: 80,
    }}>
      <div style={{ display: 'flex', gap: '4px 16px', flexWrap: 'wrap', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color }}>{tag}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
        {/* Content */}
        <div style={{ order: reverse ? 2 : 1 }}>
          <h2 className="display display-md" style={{ marginBottom: 28, lineHeight: 1.1 }}>{client}</h2>
          <div style={{ fontSize: 15, color: 'var(--white-50)', lineHeight: 1.85, fontWeight: 300 }}>
            {children}
          </div>
          {metrics.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(metrics.length, 3)}, 1fr)`, gap: 24, marginTop: 40 }}>
              {metrics.map((m, i) => <Metric key={i} {...m} accent={accent} />)}
            </div>
          )}
        </div>

        {/* Images */}
        <div style={{ order: reverse ? 1 : 2, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {images.length === 0
            ? <ImageSlot label={`${client} — campaign visuals`} minHeight={320} />
            : images.map((img, i) =>
                typeof img === 'string'
                  ? <img key={i} src={img} alt={`${client} ${i + 1}`} style={{ width: '100%', objectFit: 'cover' }} />
                  : <ImageSlot key={i} label={img.label} minHeight={img.h || 240} />
              )
          }
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          article > div:last-child { grid-template-columns: 1fr !important; gap: 36px !important; }
          article > div:last-child > div { order: unset !important; }
        }
      `}</style>
    </article>
  )
}

export default function Strategy() {
  return (
    <div>
      {/* ── Page Header ── */}
      <div style={{
        paddingTop: 'calc(var(--nav-h) + 80px)', paddingBottom: 80,
        background: 'linear-gradient(180deg, rgba(196,151,58,0.04) 0%, transparent 100%)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <div className="label">Pillar 01</div>
          <h1 className="display display-xl" style={{ marginBottom: 24, maxWidth: 760 }}>
            Brand Strategy<br />&amp; Creative Direction
          </h1>
          <p className="body-lg" style={{ maxWidth: 620 }}>
            For founders, CMOs, and brand teams who need someone to shape how their brand is perceived, build the narrative, and lead creative execution from concept to delivery.
          </p>

          <div style={{ display: 'flex', gap: 40, marginTop: 56, flexWrap: 'wrap' }}>
            {[
              'Brand Positioning',
              'Cultural & Editorial Strategy',
              'Creative Direction',
              'Influencer Strategy',
              'Cross-Platform Storytelling',
              'Video Production',
              'Audience Perception Shaping',
              'Identity Building',
            ].map(s => (
              <span key={s} style={{ fontSize: 12, color: 'var(--white-50)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 400 }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Case Studies ── */}
      <section className="section">
        <div className="container">

          <CaseStudy
            tag="Brand Strategy · Repositioning · Cross-Market"
            client="Adanna"
            accent="gold"
            metrics={[
              { number: '2', label: 'Markets managed simultaneously' },
              { number: '1', label: 'Documentary produced end-to-end' },
              { number: '∞', label: 'Long-term brand positioning built' },
            ]}
            images={[
              { label: 'Adanna — campaign visual / editorial image', h: 300 },
              { label: 'Adanna — documentary still or press coverage', h: 200 },
            ]}
          >
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>The Problem.</strong> Adanna's transition from New York to Nigeria required more than a press release. Without the right framing, a founder returning home could read as a retreat. The brand needed a narrative that made the move feel intentional, culturally significant, and commercially valuable.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>What I Did.</strong> I developed a full repositioning strategy that reframed the relocation as a deliberate contribution to Africa's creative economy. The campaign combined PR, marketing, and documentary production into one cohesive rollout. I led end-to-end creative production across both markets — directing the visual language, overseeing the documentary that captured the migration journey, and ensuring every content piece aligned with the long-term brand positioning we were building.
            </p>
            <p>
              The documentary was not a brand film. It was a cultural statement. That distinction drove the entire creative direction and gave the brand genuine editorial credibility.
            </p>
          </CaseStudy>

          <CaseStudy
            tag="Brand Strategy · Cultural Campaign · Official Media Partner"
            client="Lagos Fashion Week"
            accent="gold"
            reverse
            metrics={[
              { number: '3M+', label: 'Reach online' },
              { number: '150K+', label: 'Likes across platforms' },
              { number: '100%', label: 'Organic amplification strategy' },
            ]}
            images={[
              { label: 'Lagos Fashion Week — runway TikTok screenshot', h: 300 },
              { label: 'Lagos Fashion Week — behind-the-scenes or editorial visual', h: 200 },
            ]}
          >
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>The Problem.</strong> As official media partner for Africa's biggest fashion event, Grix needed to dominate the digital conversation — not just cover the event but own the online narrative from opening to close.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>What I Did.</strong> I designed a layered content system combining runway coverage, behind-the-scenes moments, and street-style storytelling into a continuous publishing cycle built for high-frequency engagement. Platform-specific distribution across TikTok, Instagram, and editorial channels ensured content was formatted for where the audience lived, not just what happened on the runway. Real-time amplification kept the conversation active throughout the full event window.
            </p>
            <p>
              The result was sustained audience attention with zero dependence on paid distribution — proving that the right content architecture performs better than ad spend.
            </p>
          </CaseStudy>

          <CaseStudy
            tag="Brand Strategy · Milestone Campaign · African Fashion"
            client="Lanre Da Silva — 20-Year Anniversary"
            accent="gold"
            metrics={[
              { number: '1M+', label: 'Reach online' },
              { number: '80K+', label: 'Likes across platforms' },
              { number: '20yrs', label: 'Legacy positioned as cultural milestone' },
            ]}
            images={[
              { label: 'Lanre Da Silva — runway or show editorial', h: 340 },
            ]}
          >
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>The Problem.</strong> A 20-year milestone for one of Africa's most respected fashion designers risked being treated as just another fashion show. The goal was to make it feel like a historic cultural moment — the kind that gets referenced for years.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>What I Did.</strong> I structured the campaign around legacy, craftsmanship, and long-term impact. Through real-time runway coverage, curated editorial storytelling, and coordinated social amplification, I positioned the show not as a fashion event but as a defining moment within African fashion history. Every content piece was built to extend the cultural weight of the evening long after the final look walked the runway.
            </p>
            <p>
              The framing worked because it was true — and communicating that truth credibly required understanding both the cultural context and the media mechanics to deliver it.
            </p>
          </CaseStudy>

          <CaseStudy
            tag="Brand Strategy · Narrative Campaign · Music"
            client="BNXN — North America Tour Diaries"
            accent="gold"
            reverse
            metrics={[
              { number: '150K+', label: 'Reach online' },
              { number: '4K+', label: 'Likes across platforms' },
              { number: '1',    label: 'Narrative framework built from scratch' },
            ]}
            images={[
              { label: 'BNXN — Tour Diaries campaign visual', h: 300 },
            ]}
          >
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>The Problem.</strong> A standard tour announcement — poster, dates, link — would have gotten lost in the noise. The challenge was building anticipation in a way that made audiences feel emotionally connected before the tour even started.
            </p>
            <p>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>What I Did.</strong> I introduced a narrative-driven rollout framework titled "Tour Diaries." Instead of static announcements, I repurposed past performance footage to surface emotional connection — fan energy, live-show impact, the feeling of being in the room. The strategy turned an announcement into a story audiences could follow and engage with over time. Momentum was built before a single ticket was sold.
            </p>
          </CaseStudy>

          <CaseStudy
            tag="Brand Strategy · Album Campaign · Music"
            client="Odumodublvck — Album Launch"
            accent="gold"
            metrics={[
              { number: '400K+', label: 'Reach online' },
              { number: '30K+',  label: 'Likes across platforms' },
              { number: '2',     label: 'Cities — live at Lagos & Abuja parties' },
            ]}
            images={[
              { label: 'Odumodublvck — editorial campaign visual', h: 300 },
            ]}
          >
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>What I Did.</strong> I led the album campaign through Grix, developing multiple narrative editorials that built anticipation before the launch and maintained cultural conversation after. I was physically present and producing content live at listening parties in both Lagos and Abuja, turning those moments into distributed content in real time.
            </p>
            <p>
              An album launch in the Nigerian music space requires more than promotion — it requires cultural context, authentic positioning, and presence at the moments that matter. We delivered all three.
            </p>
          </CaseStudy>

          {/* ── Swypatune ── */}
          <CaseStudy
            tag="Brand Strategy · PR & Launch · Music Tech"
            client="Swypatune — App Launch Positioning"
            accent="gold"
            reverse
            metrics={[
              { number: '1K+',   label: 'Active signups' },
              { number: '200K+', label: 'Reach online' },
            ]}
            images={[
              { label: 'Swypatune — campaign visual / app launch creative', h: 280 },
            ]}
          >
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>The Problem.</strong> A newly launched music app needed to establish credibility and drive active signups among a youth audience that is highly resistant to inauthentic marketing.
            </p>
            <p>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>What I Did.</strong> I leveraged Grix's existing cultural reputation and trusted youth audience to position Swypatune as a genuine platform for emerging artists — not another tech product. I developed the PR amplification strategy and digital marketing approach in parallel, ensuring the messaging felt native to the culture rather than promotional. Authenticity was the strategy.
            </p>
          </CaseStudy>

        </div>
      </section>
    </div>
  )
}
