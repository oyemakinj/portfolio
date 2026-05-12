import { ImageSlot, useFadeUp, Metric } from '../components/Shared'

function CaseStudy({ tag, client, children, metrics = [], images = [], reverse = false }) {
  const ref = useFadeUp()
  return (
    <article ref={ref} className="fade-up" style={{ borderTop: '1px solid var(--border)', paddingTop: 64, marginBottom: 80 }}>
      <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>{tag}</span>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start', marginTop: 24 }}>
        <div style={{ order: reverse ? 2 : 1 }}>
          <h2 className="display display-md" style={{ marginBottom: 28, lineHeight: 1.1 }}>{client}</h2>
          <div style={{ fontSize: 15, color: 'var(--white-50)', lineHeight: 1.85, fontWeight: 300 }}>
            {children}
          </div>
          {metrics.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(metrics.length, 3)}, 1fr)`, gap: 24, marginTop: 40 }}>
              {metrics.map((m, i) => <Metric key={i} {...m} accent="gold" />)}
            </div>
          )}
        </div>
        <div style={{ order: reverse ? 1 : 2, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {images.length === 0
            ? <ImageSlot label={`${client} — dashboard or campaign screenshot`} minHeight={300} />
            : images.map((img, i) =>
                typeof img === 'string'
                  ? <img key={i} src={img} alt={`${client} ${i}`} style={{ width: '100%', objectFit: 'cover' }} />
                  : <ImageSlot key={i} label={img.label} minHeight={img.h || 240} />
              )
          }
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) {
          article > div:last-child { grid-template-columns: 1fr !important; }
          article > div:last-child > div { order: unset !important; }
        }
      `}</style>
    </article>
  )
}

/* Before/after comparison table */
function BeforeAfter({ rows }) {
  return (
    <div style={{ marginTop: 36, border: '1px solid var(--border)', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'var(--bg-3)' }}>
        {['Metric', 'Before', 'After'].map(h => (
          <div key={h} style={{ padding: '12px 20px', fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--white-50)', borderBottom: '1px solid var(--border)' }}>
            {h}
          </div>
        ))}
      </div>
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: i < rows.length - 1 ? '1px solid var(--border)' : 'none' }}>
          <div style={{ padding: '14px 20px', fontSize: 13, color: 'var(--white-50)', fontWeight: 300 }}>{r[0]}</div>
          <div style={{ padding: '14px 20px', fontSize: 13, color: 'var(--white-20)', fontFamily: 'var(--sans)', fontWeight: 300 }}>{r[1]}</div>
          <div style={{ padding: '14px 20px', fontSize: 14, color: 'var(--gold)', fontFamily: 'var(--serif)', fontWeight: 400 }}>{r[2]}</div>
        </div>
      ))}
    </div>
  )
}

export default function Campaigns() {
  return (
    <div>
      {/* ── Page Header ── */}
      <div style={{
        paddingTop: 'calc(var(--nav-h) + 80px)', paddingBottom: 80,
        background: 'linear-gradient(180deg, rgba(196,151,58,0.04) 0%, transparent 100%)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <div className="label">Pillar 02</div>
          <h1 className="display display-xl" style={{ marginBottom: 24, maxWidth: 760 }}>
            Campaign Management<br />&amp; Growth
          </h1>
          <p className="body-lg" style={{ maxWidth: 620 }}>
            For marketing teams, growth-focused founders, and businesses that need campaigns planned, executed, and optimised — with measurable results across paid, organic, and influencer channels.
          </p>

          <div style={{ display: 'flex', gap: 40, marginTop: 56, flexWrap: 'wrap' }}>
            {[
              'Meta · Google · TikTok · Snapchat Ads',
              'Campaign Audits',
              'Funnel Design',
              'Conversion Tracking',
              'Influencer Management',
              'Organic Social Growth',
              'Cross-Platform Distribution',
              'Analytics & Reporting',
            ].map(s => (
              <span key={s} style={{ fontSize: 12, color: 'var(--white-50)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
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
            tag="Campaign Management · Google Ads · Publishing"
            client="Sensei Publishing — Ad Account Overhaul"
            images={[
              { label: 'Sensei Publishing — Google Ads dashboard screenshot (the one in your PDF)', h: 320 },
            ]}
          >
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>The Problem.</strong> Sensei Publishing had an active Google Ads account spending real money — and producing zero conversions. The account had no proper tracking in place, which meant decisions were being made completely blind.
            </p>
            <p style={{ marginBottom: 24 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>What I Did.</strong> I conducted a full audit of the existing account — campaign structure, keyword strategy, ad performance, and budget allocation. I identified where spend was being wasted, restructured the campaigns, and implemented proper Google Ads and website conversion tracking from scratch. Every lead could now be measured accurately. From there, I optimised bids, refined targeting, and rewrote ad copy to match intent at each stage of the funnel.
            </p>
            <BeforeAfter rows={[
              ['CTR',               '0.63%', '3.12%'],
              ['Avg. CPC',          '$0.73', '$0.45'],
              ['Conversion Rate',   '0%',    '11.45%'],
            ]} />
          </CaseStudy>

          <CaseStudy
            tag="Campaign Management · Organic Social · Platform Growth"
            client="Organic Social Growth"
            reverse
            metrics={[
              { number: '85.7%', label: 'Follower growth in 30 days' },
              { number: '0.2%',  label: 'Ad spend contribution to views (down from 10%)' },
              { number: '250%',  label: 'Account reach increase' },
            ]}
            images={[
              { label: 'Followers dashboard — 14,876 followers, +85.7% screenshot', h: 220 },
              { label: 'Views dashboard — 963K views, 0.2% from ads screenshot', h: 200 },
            ]}
          >
            <p style={{ marginBottom: 16 }}>
              When managing social platforms directly, the goal was never to rely on paid distribution as a crutch. The proof is in the numbers: 99.8% of all views and reach came from organic content quality alone.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>30-Day Performance Snapshot:</strong>
            </p>
            <ul style={{ paddingLeft: 20, color: 'var(--white-50)', fontSize: 14, lineHeight: 2 }}>
              <li>Followers grew by <span style={{ color: 'var(--gold)' }}>14,876 in a single month</span> (+85.7%)</li>
              <li>Ad spend contribution to views dropped from 10% to <span style={{ color: 'var(--gold)' }}>0.2%</span></li>
              <li>Account reach increased by <span style={{ color: 'var(--gold)' }}>266.4%</span> (240,314 accounts reached)</li>
              <li>Profile activity increased by <span style={{ color: 'var(--gold)' }}>79.6%</span></li>
              <li>Total views: <span style={{ color: 'var(--gold)' }}>963,072</span></li>
            </ul>
          </CaseStudy>

          <CaseStudy
            tag="Campaign Management · Event Media · Official Partner"
            client="Lagos Fashion Week — Digital Campaign"
            metrics={[
              { number: '3M+',   label: 'Reach online' },
              { number: '150K+', label: 'Likes across platforms' },
            ]}
            images={[
              { label: 'Lagos Fashion Week — TikTok analytics screenshot', h: 280 },
              { label: 'Lagos Fashion Week — content visual or reel screenshot', h: 220 },
            ]}
          >
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>The Problem.</strong> Dominate the digital conversation around Africa's biggest fashion event — without a paid amplification budget to fall back on.
            </p>
            <p>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>What I Did.</strong> I designed a layered content system combining runway coverage, behind-the-scenes, and street-style storytelling into a continuous publishing cycle built for high-frequency engagement. Real-time amplification and platform-specific formatting across TikTok, Instagram, and editorial channels kept the audience engaged throughout the entire event window. The result: 3M+ reach with organic content architecture doing the heavy lifting.
            </p>
          </CaseStudy>

          <CaseStudy
            tag="Campaign Management · App Launch · Music"
            client="Swypatune — Launch Campaign"
            reverse
            metrics={[
              { number: '1K+',   label: 'Active signups' },
              { number: '200K+', label: 'Reach online' },
            ]}
            images={[
              { label: 'Swypatune — campaign creative / ad visual', h: 300 },
            ]}
          >
            <p style={{ marginBottom: 16 }}>
              Built and executed both the PR amplification strategy and digital marketing campaign simultaneously for a newly launched music app targeting emerging artists. The approach leaned into Grix's cultural credibility to make the brand feel authentic rather than promotional — because a youth audience will reject anything that feels manufactured.
            </p>
          </CaseStudy>

          <CaseStudy
            tag="Campaign Management · Cross-Platform Distribution · Brand"
            client="Spotify Africa — Event Extension Campaign"
            metrics={[
              { number: '500K+', label: 'Reach online' },
              { number: '40K+',  label: 'Likes across platforms' },
            ]}
            images={[
              { label: 'Spotify Africa — Grix Magazine editorial visual', h: 300 },
            ]}
          >
            <p style={{ marginBottom: 16 }}>
              Led the cross-platform distribution strategy through Grix Magazine to extend a Spotify Africa on-ground event into sustained digital reach. The strategy created cultural relevance online that matched the weight of the Spotify brand — through editorial pieces, platform-specific visuals, and cross-posting across Instagram, TikTok, and the Grix Magazine editorial platform.
            </p>
          </CaseStudy>

          <CaseStudy
            tag="Campaign Management · Multi-Platform Ads"
            client="Grix Media — Full-Platform Ads Management"
            reverse
            images={[
              { label: 'Multi-platform ad dashboards — Meta, Google, TikTok, Snapchat', h: 280 },
            ]}
          >
            <p style={{ marginBottom: 16 }}>
              Across all Grix client work, I managed digital advertising across every major platform simultaneously — Meta Ads, Google Ads, TikTok Ads, and Snapchat Ads. This included campaign setup, creative briefs, A/B testing, budget allocation, and ongoing optimisation for clients spanning fashion, music, events, and consumer tech.
            </p>
            <p>
              The work wasn't just buying media — it was ensuring every pound of ad spend worked together with the organic content strategy, the influencer programme, and the editorial narrative. Campaign management without strategic alignment is just burning money.
            </p>
          </CaseStudy>

        </div>
      </section>
    </div>
  )
}
