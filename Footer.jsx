import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#060606', borderTop: '1px solid var(--border)', padding: '64px 0 40px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48, marginBottom: 56 }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 400, marginBottom: 12 }}>
              Victor Oyemakin<span style={{ color: 'var(--gold)' }}>.</span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--white-50)', lineHeight: 1.7, fontWeight: 300, maxWidth: 260 }}>
              Brand Systems Architect operating at the intersection of cultural strategy and intelligent automation.
            </p>
          </div>

          {/* Work */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>
              Work
            </div>
            {[
              { to: '/strategy',   label: 'Brand Strategy' },
              { to: '/campaigns',  label: 'Campaign Management' },
              { to: '/automation', label: 'Automation & Systems' },
              { to: '/grix',       label: 'Grix Studio' },
            ].map(l => (
              <div key={l.to} style={{ marginBottom: 12 }}>
                <Link to={l.to} style={{ fontSize: 13, color: 'var(--white-50)', fontWeight: 300, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--white)'}
                  onMouseLeave={e => e.target.style.color = 'var(--white-50)'}>
                  {l.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>
              Let's Work
            </div>
            <p style={{ fontSize: 13, color: 'var(--white-50)', fontWeight: 300, marginBottom: 20, lineHeight: 1.7 }}>
              Available for full-time roles, retainers, and project-based engagements.
            </p>
            <a href="mailto:Victoroye2020@gmail.com" style={{ fontSize: 13, color: 'var(--white)', display: 'block', marginBottom: 8 }}>
              Victoroye2020@gmail.com
            </a>
            <a href="https://linkedin.com/in/oyemakin-jesutofunmi-victor"
              target="_blank" rel="noreferrer"
              style={{ fontSize: 13, color: 'var(--white-50)', fontWeight: 300 }}>
              LinkedIn →
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'var(--white-20)' }}>
            © {year} Victor Oyemakin. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: 'var(--white-20)' }}>
            Lagos, Nigeria
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </footer>
  )
}
