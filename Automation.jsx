import { ImageSlot, VimeoEmbed, useFadeUp, Metric } from '../components/Shared'

function CaseStudy({ tag, client, children, metrics = [], images = [], vimeoId, reverse = false }) {
  const ref = useFadeUp()
  return (
    <article ref={ref} className="fade-up" style={{ borderTop: '1px solid rgba(46,107,230,0.2)', paddingTop: 64, marginBottom: 80 }}>
      <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--blue)' }}>{tag}</span>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start', marginTop: 24 }}>
        <div style={{ order: reverse ? 2 : 1 }}>
          <h2 className="display display-md" style={{ marginBottom: 28, lineHeight: 1.1 }}>{client}</h2>
          <div style={{ fontSize: 15, color: 'var(--white-50)', lineHeight: 1.85, fontWeight: 300 }}>
            {children}
          </div>
          {metrics.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(metrics.length, 3)}, 1fr)`, gap: 24, marginTop: 40 }}>
              {metrics.map((m, i) => <Metric key={i} {...m} accent="blue" />)}
            </div>
          )}
        </div>
        <div style={{ order: reverse ? 1 : 2, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {vimeoId
            ? <VimeoEmbed id={vimeoId} title={client} />
            : null
          }
          {images.length > 0
            ? images.map((img, i) =>
                typeof img === 'string'
                  ? <img key={i} src={img} alt={`${client}`} style={{ width: '100%' }} />
                  : <ImageSlot key={i} label={img.label} minHeight={img.h || 240} />
              )
            : !vimeoId && <ImageSlot label={`${client} — workflow screenshot or demo`} minHeight={300} />
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

function ToolBadge({ name }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '6px 14px',
      background: 'rgba(46,107,230,0.08)',
      border: '1px solid rgba(46,107,230,0.2)',
      borderRadius: 2,
      fontSize: 12,
      color: 'rgba(46,107,230,0.9)',
      fontWeight: 500,
      letterSpacing: '0.05em',
    }}>
      {name}
    </span>
  )
}

export default function Automation() {
  return (
    <div>
      {/* ── Page Header ── */}
      <div style={{
        paddingTop: 'calc(var(--nav-h) + 80px)', paddingBottom: 80,
        background: 'linear-gradient(180deg, rgba(46,107,230,0.05) 0%, transparent 100%)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <div className="label" style={{ color: 'var(--blue)' }}>Pillar 03</div>
          <h1 className="display display-xl" style={{ marginBottom: 24, maxWidth: 760 }}>
            Automation<br />&amp; Systems
          </h1>
          <p className="body-lg" style={{ maxWidth: 620 }}>
            For founders, operators, and business leaders who need intelligent systems built — not basic integrations, but end-to-end workflows with real logic, real error handling, and real business outcomes.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 48 }}>
            {['Make.com', 'N8N', 'Zapier', 'GoHighLevel', 'HubSpot', 'Vapi', 'AI Voice Agents', 'OpenAI', 'CRM Architecture', 'Lead Systems', 'Content Automation'].map(t => (
              <ToolBadge key={t} name={t} />
            ))}
          </div>

          {/* Note about Vimeo videos */}
          <div style={{
            marginTop: 48, padding: '16px 24px',
            background: 'rgba(46,107,230,0.06)', border: '1px solid rgba(46,107,230,0.15)',
            fontSize: 13, color: 'var(--white-50)', lineHeight: 1.7,
          }}>
            📹 <strong style={{ color: 'var(--white)', fontWeight: 500 }}>Video walkthroughs available.</strong> Add your Vimeo video IDs to the <code style={{ color: 'var(--blue)', fontSize: 12 }}>vimeoId</code> prop on each case study to embed your automation demos directly on this page.
          </div>
        </div>
      </div>

      {/* ── Case Studies ── */}
      <section className="section">
        <div className="container">

          {/* ── DJMC ── */}
          <CaseStudy
            tag="Lead Automation · CRM · Events · San Diego, California"
            client="DJMC Events — Full Lead Management System"
            /* vimeoId="YOUR_DJMC_VIDEO_ID" */
            images={[
              { label: 'DJMC — GoHighLevel pipeline screenshot', h: 260 },
              { label: 'DJMC — Make.com workflow screenshot', h: 220 },
            ]}
            metrics={[
              { number: '70%',  label: 'Conversion rate via 2-week nurture framework' },
              { number: '0',    label: 'Manual follow-ups required' },
              { number: '100%', label: 'Pipeline automated from lead to onboarding' },
            ]}
          >
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>The Problem.</strong> DJMC was capturing leads from Google Ads but losing them in the follow-up gap. Leads were going cold before anyone had a chance to engage them, and the manual follow-up process was inconsistent and unscalable.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>What I Built.</strong> A comprehensive marketing and sales automation system handling the entire customer journey — from the moment an ad form was submitted to a closed deal and into onboarding.
            </p>
            <ul style={{ paddingLeft: 20, color: 'var(--white-50)', fontSize: 14, lineHeight: 2.1, marginBottom: 16 }}>
              <li>Google Ads form submissions connect directly into GoHighLevel in real time</li>
              <li>Immediate SMS outreach triggered automatically on submission</li>
              <li>Intelligent appointment booking flow with missed appointment reminders</li>
              <li>Multi-stage nurture sequence over 2 weeks with escalating touchpoints</li>
              <li>Closed clients automatically moved to onboarding — no manual pipeline management</li>
              <li>System built to scale with increased lead volume and multiple campaign sources</li>
            </ul>
          </CaseStudy>

          {/* ── Coverfy ── */}
          <CaseStudy
            tag="Lead Automation · Compliance · Insurance · New Zealand"
            client="Coverfy.nz — Insurance Lead & Compliance System"
            reverse
            /* vimeoId="YOUR_COVERFY_VIDEO_ID" */
            images={[
              { label: 'Coverfy — Make.com workflow canvas screenshot', h: 280 },
              { label: 'Coverfy — compliance document output or lead dashboard', h: 200 },
            ]}
            metrics={[
              { number: '<2min', label: 'Lead contact time from submission' },
              { number: '0',     label: 'Manual follow-up effort required' },
              { number: '100%',  label: 'Compliance docs auto-generated per engagement' },
            ]}
          >
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>The Problem.</strong> An insurance advisory business in New Zealand needed a system that could contact new leads rapidly, respect local calling hour regulations, manage intelligent follow-up sequences, and generate compliance documentation — all without manual input from the adviser team.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>What I Built.</strong> A complete insurance lead system on Make.com with the following logic:
            </p>
            <ul style={{ paddingLeft: 20, color: 'var(--white-50)', fontSize: 14, lineHeight: 2.1, marginBottom: 16 }}>
              <li>Contacts new leads within <span style={{ color: 'var(--blue)' }}>2 minutes</span> of submission</li>
              <li>Checks New Zealand calling hours before any outreach — no compliance violations</li>
              <li>Escalating follow-up sequences until contact is established</li>
              <li>If a lead remains unreachable beyond threshold, <span style={{ color: 'var(--blue)' }}>automatically requests a replacement lead</span></li>
              <li>Appointments booked seamlessly with calendar integration</li>
              <li>Compliance documents auto-generated for every engagement</li>
              <li>Pre-call adviser briefings with recommended cover calculations</li>
              <li>Edge-case handling for name variations and preferred contact time logic</li>
            </ul>
          </CaseStudy>

          {/* ── AI Voice Agent ── */}
          <CaseStudy
            tag="AI Voice Agent · Appointment Booking · 24/7 System"
            client="AI Voice Receptionist — Inbound Booking Agent"
            /* vimeoId="YOUR_VOICE_AGENT_VIDEO_ID" */
            images={[
              { label: 'AI Voice Agent — Make.com + Vapi workflow screenshot', h: 280 },
              { label: 'AI Voice Agent — Google Calendar integration or call log', h: 200 },
            ]}
            metrics={[
              { number: '24/7',  label: 'Inbound call handling — no staffing cost' },
              { number: '0',     label: 'Human intervention required for bookings' },
              { number: '100%',  label: 'Auto-confirmation sent after every appointment' },
            ]}
          >
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>The Problem.</strong> Small businesses and service providers were missing inbound calls and losing appointments outside of business hours. The cost of a human receptionist wasn't justifiable — but the cost of missed bookings was.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>What I Built.</strong> An AI voice receptionist on Make.com, integrating Vapi for voice interactions and Google Calendar for real-time scheduling.
            </p>
            <ul style={{ paddingLeft: 20, color: 'var(--white-50)', fontSize: 14, lineHeight: 2.1 }}>
              <li>Answers inbound calls with human-like conversation quality</li>
              <li>Checks live calendar availability in real time</li>
              <li>Confirms or reschedules appointments based on availability</li>
              <li>Sends automated follow-up confirmation after every booking</li>
              <li>Operates 24/7 with zero human oversight</li>
            </ul>
          </CaseStudy>

          {/* ── AI Video Content ── */}
          <CaseStudy
            tag="Content Automation · AI Video Production · Workflow"
            client="AI Video Content Workflow — Idea to Video Automatically"
            reverse
            /* vimeoId="YOUR_VIDEO_WORKFLOW_VIDEO_ID" */
            images={[
              { label: 'Video automation — N8N workflow screenshot', h: 280 },
              { label: 'Video automation — Google Sheet input or output sample', h: 200 },
            ]}
            metrics={[
              { number: '1',    label: 'Spreadsheet row = 1 complete video produced' },
              { number: '0',    label: 'Manual handoffs between script, voice & edit' },
              { number: '100%', label: 'Human time removed post-ideation' },
            ]}
          >
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>The Problem.</strong> Content production was consuming time that should have been spent on strategy. The process of going from idea to script to voiceover to finished video involved too many manual handoffs across too many tools.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>What I Built.</strong> An automated content production workflow that takes content ideas entered into a Google Sheet and moves them through the entire production chain automatically:
            </p>
            <ul style={{ paddingLeft: 20, color: 'var(--white-50)', fontSize: 14, lineHeight: 2.1 }}>
              <li>Idea entered into Google Sheet as a single row</li>
              <li>AI generates the full script automatically</li>
              <li>N8N creates the voiceover from the script</li>
              <li>Finished video produced — no human in the loop</li>
              <li>Consistent output quality regardless of team availability</li>
            </ul>
          </CaseStudy>

          {/* ── Multi-Platform Content ── */}
          <CaseStudy
            tag="Content Automation · Multi-Platform · AI Publishing"
            client="Multi-Platform Content Automation — One Input, Four Platforms"
            /* vimeoId="YOUR_MULTIPLATFORM_VIDEO_ID" */
            images={[
              { label: 'Multi-platform — Make.com scenario screenshot', h: 280 },
              { label: 'Multi-platform — Google Sheet content input', h: 200 },
            ]}
            metrics={[
              { number: '4',   label: 'Platform-native posts from one spreadsheet row' },
              { number: '0',   label: 'Manual writing, design requests, or copy-pasting' },
              { number: '∞',   label: 'Scalable posting volume with consistent brand voice' },
            ]}
          >
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>The Problem.</strong> A business needed to maintain consistent posting across X (Twitter), Instagram, LinkedIn, and Facebook — with content genuinely formatted and toned for each platform, not the same post copy-pasted everywhere. They also needed platform-appropriate visuals without a design team bottleneck.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 500 }}>What I Built.</strong> An automated content creation system on Make.com that transforms simple post ideas from a Google Sheet into platform-optimised content for all four channels simultaneously:
            </p>
            <ul style={{ paddingLeft: 20, color: 'var(--white-50)', fontSize: 14, lineHeight: 2.1 }}>
              <li>One row in a spreadsheet triggers the entire workflow</li>
              <li>AI generates copy tailored to each platform's format, tone, and character limits</li>
              <li>For Instagram and Facebook — custom images generated matching brand direction</li>
              <li>No manual writing, no design requests, no platform switching</li>
              <li>Consistent brand voice maintained at scale</li>
            </ul>
          </CaseStudy>

        </div>
      </section>

      {/* ── How I Work ── */}
      <section style={{ background: 'var(--bg-3)', borderTop: '1px solid var(--border)', padding: '80px 0' }}>
        <div className="container">
          <div className="label" style={{ color: 'var(--blue)' }}>How I Work</div>
          <h2 className="display display-md" style={{ marginBottom: 48 }}>
            I don't build workflows.<br />I build outcomes.
          </h2>
          <div className="grid-3">
            {[
              { n: '01', title: 'Understand the Business First', desc: 'Every system I build starts with understanding what the business actually needs — not what the client thinks they need. The tool follows the logic, not the other way around.' },
              { n: '02', title: 'Build for Failure, Not Just Success', desc: 'Real automation handles edge cases, errors, and exceptions. Most workflow builders only plan for the happy path. I design for what happens when things go wrong.' },
              { n: '03', title: 'Hand Over a System, Not a Black Box', desc: 'When I deliver a system, the client understands what it does and why. Documentation, walkthrough, and clean architecture — because a system nobody understands is a liability.' },
            ].map(s => (
              <div key={s.n} style={{ background: 'var(--bg-2)', border: '1px solid rgba(46,107,230,0.1)', padding: '36px 28px' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 48, fontWeight: 300, color: 'var(--blue)', opacity: 0.2, lineHeight: 1, marginBottom: 20 }}>{s.n}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 400, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--white-50)', lineHeight: 1.75, fontWeight: 300 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
