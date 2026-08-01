import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { useReveal } from '../lib/useReveal'
import { home } from '../content/home'

const NAV_CARDS = [
  {
    to: '/scada',
    code: 'SC',
    title: 'SCADA',
    description: 'Real-time supervision, remote control, alarms, events, and operational history.',
  },
  {
    to: '/adms',
    code: 'AD',
    title: 'ADMS / DMS',
    description: 'Single electrical model, power flow, FLISR, Volt/VAR, and network reconfiguration.',
  },
  {
    to: '/oms',
    code: 'OM',
    title: 'OMS',
    description: 'Outage management, consumer calls, field crews, and SAIDI/SAIFI indicators.',
  },
]

export default function Home() {
  const cardsReveal = useReveal<HTMLElement>()

  return (
    <>
      <PageLayout {...home} />
      <section
        ref={cardsReveal.ref}
        className={`relative overflow-hidden bg-gradient-to-b from-sky-50/70 to-white py-16 sm:py-20 ${cardsReveal.className}`}
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
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-sky-600">Explore the modules</p>
          <h2 id="nav-cards-heading" className="mb-2 text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
            Technical Detail
          </h2>
          <p className="mb-10 max-w-prose text-ink-900/70">
            Explore the complete functional design of each module in the Sharika SpinTech platform.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {NAV_CARDS.map((card) => (
              <Link
                key={card.to}
                to={card.to}
                className="group relative flex flex-col overflow-hidden border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-sky-400 hover:shadow-elevated focus-ring"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-sky-500 transition-transform duration-300 ease-premium group-hover:scale-x-100"
                />
                <span className="mb-4 flex h-11 w-11 items-center justify-center bg-navy-900 text-sm font-bold text-sky-400 transition-colors duration-300 ease-premium group-hover:bg-sky-500 group-hover:text-white">
                  {card.code}
                </span>
                <h3 className="mb-2 text-lg font-bold text-navy-900">{card.title}</h3>
                <p className="mb-4 flex-1 text-sm text-ink-900/70">{card.description}</p>
                <span className="text-sm font-semibold text-navy-700 underline-offset-4 group-hover:text-sky-600 group-hover:underline">
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
