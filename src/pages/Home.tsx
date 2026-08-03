import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { home } from '../content/home'

const NAV_CARDS = [
  {
    to: '/fep',
    title: 'FEP',
    description: 'Field data acquisition, multivendor protocol engine, and communication reliability.',
  },
  {
    to: '/scada',
    title: 'SCADA',
    description: 'Real-time supervision, remote control, alarms, events, and operational history.',
  },
  {
    to: '/dms',
    title: 'DMS',
    description: 'Single electrical model, power flow, FLISR, Volt/VAR, and network reconfiguration.',
  },
  {
    to: '/oms',
    title: 'OMS',
    description: 'Outage management, consumer calls, field crews, and SAIDI/SAIFI indicators.',
  },
]

export default function Home() {
  return (
    <>
      <PageLayout {...home} />
      <section
        className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 to-white py-20 sm:py-28"
        aria-labelledby="nav-cards-heading"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-navy-700/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-sky-600">Explore the modules</p>
          <h2 id="nav-cards-heading" className="mb-3 font-display text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
            Technical Detail
          </h2>
          <p className="mb-12 max-w-prose text-ink-900/70">
            Explore the complete functional design of each module in the GridQ platform.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {NAV_CARDS.map((card) => (
              <Link
                key={card.to}
                to={card.to}
                className="group relative flex flex-col overflow-hidden border border-slate-200 bg-white p-8 shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-sky-400 hover:shadow-elevated focus-ring"
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-sky-500" />
                <h3 className="relative mb-2 mt-1 text-lg font-bold text-navy-900">{card.title}</h3>
                <p className="relative mb-6 flex-1 text-sm text-ink-900/70">{card.description}</p>
                <span className="relative text-sm font-semibold text-navy-700 underline-offset-4 group-hover:text-sky-600 group-hover:underline">
                  View details
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
