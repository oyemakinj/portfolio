import { useEffect, useRef } from 'react'

/* ── Image placeholder ─────────────────────────────────────────
   Replace these in your final site with:
   <img src="/images/your-file.jpg" alt="..." style={{ width:'100%', height:'100%', objectFit:'cover' }} />
   ────────────────────────────────────────────────────────────── */
export function ImageSlot({ label, minHeight = 240, style = {} }) {
  return (
    <div className="img-slot" style={{ minHeight, ...style }}>
      <span style={{ fontSize: 28, opacity: 0.3 }}>📷</span>
      <span className="img-slot-label">{label}</span>
      <span className="img-slot-hint">Replace with your image file</span>
    </div>
  )
}

/* ── Vimeo embed ──────────────────────────────────────────────
   Usage: <VimeoEmbed id="YOUR_VIDEO_ID" title="Demo" />
   ────────────────────────────────────────────────────────────── */
export function VimeoEmbed({ id, title = 'Video' }) {
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', background: '#111' }}>
      <iframe
        src={`https://player.vimeo.com/video/${id}?color=C4973A&title=0&byline=0&portrait=0`}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  )
}

/* ── Scroll fade-up hook ─────────────────────────────────────── */
export function useFadeUp() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ── Metric badge ────────────────────────────────────────────── */
export function Metric({ number, label, accent = 'gold' }) {
  const color = accent === 'blue' ? 'var(--blue)' : 'var(--gold)'
  return (
    <div style={{ borderTop: `1px solid ${color}22`, paddingTop: 20 }}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 42, fontWeight: 300, color, lineHeight: 1, marginBottom: 6 }}>
        {number}
      </div>
      <div style={{ fontSize: 12, color: 'var(--white-50)', fontWeight: 300, letterSpacing: '0.05em' }}>{label}</div>
    </div>
  )
}

/* ── Section header ──────────────────────────────────────────── */
export function SectionHeader({ label, heading, subheading, center = false }) {
  const ref = useFadeUp()
  return (
    <div ref={ref} className="fade-up" style={{ textAlign: center ? 'center' : 'left', marginBottom: 64 }}>
      <div className="label" style={{ justifyContent: center ? 'center' : 'flex-start' }}>
        {label}
      </div>
      <h2 className="display display-lg" style={{ marginBottom: subheading ? 20 : 0 }}>
        {heading}
      </h2>
      {subheading && <p className="body-lg" style={{ maxWidth: 600, margin: center ? '0 auto' : 0 }}>{subheading}</p>}
    </div>
  )
}

/* ── Case study card (homepage featured) ─────────────────────── */
export function CaseCard({ tag, client, description, metric, metricLabel, accent = 'gold', to, image }) {
  const color = accent === 'blue' ? 'var(--blue)' : 'var(--gold)'
  const ref   = useFadeUp()
  return (
    <div ref={ref} className="fade-up card" style={{ borderTop: `2px solid ${color}`, padding: 0, overflow: 'hidden' }}>
      {image
        ? <img src={image} alt={client} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
        : <ImageSlot label={`${client} visual`} minHeight={220} style={{ border: 'none', borderBottom: '1px solid var(--border)' }} />
      }
      <div style={{ padding: 32 }}>
        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color, marginBottom: 10 }}>
          {tag}
        </div>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 400, marginBottom: 10 }}>{client}</h3>
        <p style={{ fontSize: 14, color: 'var(--white-50)', lineHeight: 1.7, fontWeight: 300, marginBottom: 24 }}>{description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 36, color, fontWeight: 300, lineHeight: 1 }}>{metric}</div>
            <div style={{ fontSize: 11, color: 'var(--white-20)', marginTop: 4 }}>{metricLabel}</div>
          </div>
          <a href={to} className="link-arrow" style={{ color }}>View Case Study →</a>
        </div>
      </div>
    </div>
  )
}
