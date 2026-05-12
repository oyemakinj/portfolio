import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/strategy',   label: 'Brand Strategy' },
  { to: '/campaigns',  label: 'Campaigns' },
  { to: '/automation', label: 'Automation' },
  { to: '/grix',       label: 'Grix Studio' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const { pathname }            = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        height: 'var(--nav-h)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 48px',
        background: scrolled ? 'rgba(9,9,9,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
      }}>
        {/* Logo */}
        <Link to="/" style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500, letterSpacing: '0.02em', color: 'var(--white)' }}>
          VO<span style={{ color: 'var(--gold)' }}>.</span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="d-flex-nav">
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 500,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: pathname === l.to ? 'var(--gold)' : 'var(--white-50)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => { if(pathname !== l.to) e.target.style.color = 'var(--white)' }}
            onMouseLeave={e => { if(pathname !== l.to) e.target.style.color = 'var(--white-50)' }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a href="mailto:Victoroye2020@gmail.com" className="btn-gold" style={{ padding: '10px 24px', fontSize: 11 }}>
          Hire Me
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          style={{
            display: 'none', background: 'none', border: 'none',
            padding: 8, flexDirection: 'column', gap: 5,
          }}
          className="burger"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 1.5,
              background: open && i === 1 ? 'transparent' : open ? 'var(--gold)' : 'var(--white)',
              transform: open && i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                       : open && i === 2 ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              transition: 'all 0.3s',
            }}/>
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed', top: 72, left: 0, right: 0, zIndex: 199,
        background: 'rgba(9,9,9,0.97)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
        padding: open ? '28px 28px 32px' : '0 28px',
        display: 'flex', flexDirection: 'column', gap: open ? 20 : 0,
        overflow: 'hidden',
        maxHeight: open ? '400px' : '0px',
        transition: 'max-height 0.4s ease, padding 0.3s ease',
      }}>
        {links.map(l => (
          <Link key={l.to} to={l.to} style={{
            fontFamily: 'var(--sans)', fontSize: 15, fontWeight: 400,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: pathname === l.to ? 'var(--gold)' : 'var(--white)',
            opacity: open ? 1 : 0, transition: 'opacity 0.3s 0.1s',
          }}>
            {l.label}
          </Link>
        ))}
        <a href="mailto:Victoroye2020@gmail.com" className="btn-gold" style={{
          marginTop: 8, alignSelf: 'flex-start', fontSize: 11, padding: '10px 22px',
          opacity: open ? 1 : 0, transition: 'opacity 0.3s 0.15s',
        }}>
          Hire Me
        </a>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .d-flex-nav { display: none !important; }
          .btn-gold.desktop-cta { display: none !important; }
          .burger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
