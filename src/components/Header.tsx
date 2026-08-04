import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Overview' },
  { to: '/fep', label: 'FEP' },
  { to: '/scada', label: 'SCADA' },
  { to: '/dms', label: 'DMS' },
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
    `relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 ease-premium focus-ring after:absolute after:inset-x-4 after:-bottom-px after:h-[2px] after:origin-left after:bg-sky-400 after:transition-transform after:duration-300 after:ease-premium ${
      isActive
        ? 'text-white after:scale-x-100'
        : 'text-slate-300 hover:text-white after:scale-x-0 hover:after:scale-x-100'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-20 border-b border-navy-700/80 bg-navy-900/95 shadow-lg shadow-navy-900/30 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <NavLink to="/" className="flex items-center gap-3 focus-ring" onClick={() => setOpen(false)}>
          <img
            src={`${import.meta.env.BASE_URL}assets/img/logo-sharika-spintech-icon.png`}
            alt=""
            className="h-9 w-9 sm:h-10 sm:w-10"
            width={132}
            height={130}
          />
          <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
            Spin<span className="text-sky-400"> Engenharia</span>
          </span>
        </NavLink>

        <nav className="hidden md:flex md:items-center md:gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} className={desktopLinkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] focus-ring md:hidden"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ease-premium ${
              open ? 'translate-y-[8px] rotate-45 bg-sky-400' : ''
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-opacity duration-200 ease-premium ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ease-premium ${
              open ? '-translate-y-[8px] -rotate-45 bg-sky-400' : ''
            }`}
          />
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
        className={`fixed inset-x-0 top-20 z-30 origin-top border-b border-navy-700 bg-navy-900 shadow-2xl transition-all duration-300 ease-premium md:hidden ${
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
