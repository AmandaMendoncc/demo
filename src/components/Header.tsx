import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Overview' },
  { to: '/scada', label: 'SCADA' },
  { to: '/adms', label: 'ADMS / DMS' },
  { to: '/oms', label: 'OMS' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 text-sm font-semibold tracking-wide transition-colors duration-300 ease-premium focus-ring after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-full after:transition-all after:duration-300 after:ease-premium ${
      isActive
        ? 'text-white after:w-full after:bg-sky-400'
        : 'text-slate-300 after:w-0 hover:text-white hover:after:w-full hover:after:bg-sky-400/70'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-navy-700/80 bg-navy-900/95 shadow-lg shadow-navy-900/30 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <NavLink to="/" className="flex items-center gap-2.5 focus-ring" onClick={() => setOpen(false)}>
          <img
            src="/assets/img/logo-sharika-spintech-icon.png"
            alt=""
            className="h-8 w-8 sm:h-9 sm:w-9"
            width={132}
            height={130}
          />
          <span className="text-base font-bold tracking-tight text-white sm:text-lg">
            Sharika <span className="text-sky-400">SpinTech</span>
          </span>
        </NavLink>

        <nav className="hidden md:flex md:items-center md:gap-8" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} className={desktopLinkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-11 items-center rounded px-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors duration-300 ease-premium hover:text-sky-300 focus-ring md:hidden"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-30 bg-ink-900/50 backdrop-blur-[2px] transition-opacity duration-300 ease-premium md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Dropdown panel */}
      <div
        id="mobile-drawer"
        className={`fixed inset-x-0 top-16 z-30 origin-top border-b border-navy-700 bg-navy-900 shadow-2xl transition-all duration-300 ease-premium md:hidden ${
          open ? 'visible scale-y-100 opacity-100' : 'invisible scale-y-95 opacity-0'
        }`}
      >
        <nav className="flex flex-col divide-y divide-navy-700/70 px-4" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `py-4 text-lg font-semibold transition-all duration-300 ease-premium ${
                  isActive ? 'text-sky-400' : 'text-white/90 hover:text-sky-400'
                } ${open ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'}`
              }
              style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
