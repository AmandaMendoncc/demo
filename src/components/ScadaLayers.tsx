const CAPABILITIES = [
  'Alerts & Notifications',
  'Dashboards & Reports',
  'Interface to ERP',
  'Trend Analysis',
  'Historian',
  'Mobile Applications',
  'Data Hub Capabilities',
  'OEE & Downtime',
]

// Each core item: label shown below the badge + SVG icon path (24×24 outline, stroke-width 1.6)
const CORE: { label: string; multiline?: string; icon: React.ReactNode }[] = [
  {
    label: 'OPCUA',
    icon: (
      // Server / network nodes
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="2" y="3" width="7" height="5" rx="1"/>
        <rect x="2" y="11" width="7" height="5" rx="1"/>
        <circle cx="18" cy="6" r="3"/>
        <circle cx="18" cy="18" r="3"/>
        <line x1="9" y1="5.5" x2="15" y2="5.5"/>
        <line x1="9" y1="13.5" x2="15" y2="18"/>
      </svg>
    ),
  },
  {
    label: 'Drivers',
    icon: (
      // Cog / gear
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
      </svg>
    ),
  },
  {
    label: 'SQL',
    icon: (
      // Database / cylinders
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
  {
    label: 'Graphics',
    icon: (
      // Pie chart
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21.21 15.89A10 10 0 118 2.83"/>
        <path d="M22 12A10 10 0 0012 2v10z"/>
      </svg>
    ),
  },
  {
    label: 'Alarms',
    icon: (
      // Bell
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 01-3.46 0"/>
      </svg>
    ),
  },
  {
    label: 'Tags',
    icon: (
      // Tag / label
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
  },
  {
    label: 'Scripts',
    icon: (
      // Code brackets </>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    label: 'Dashboards',
    multiline: 'Dashboards\nReporting',
    icon: (
      // Bar chart
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
  {
    label: 'HTML5',
    icon: (
      // HTML document / code file
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <polyline points="4 7 4 4 20 4 20 7"/>
        <line x1="9" y1="20" x2="15" y2="20"/>
        <line x1="12" y1="4" x2="12" y2="20"/>
      </svg>
    ),
  },
  {
    label: 'MQTT',
    icon: (
      // Cloud / wireless publish-subscribe
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M17.5 19H9a7 7 0 113.47-13.12A5.5 5.5 0 1118 19h-.5z"/>
      </svg>
    ),
  },
]

const PLATFORM_COLS = [
  ['Integrated Development', 'Scripting', 'Built-in SQL', 'Smart Symbols'],
  ['Real-Time DB', 'OPC UA', 'Data Logging'],
  ['Alarms', 'Audit Trail', 'Store Forward', 'Trending'],
  ['Security', 'Open API', 'Web Server'],
  ['.NET', 'HTML5', 'Redundancy'],
]

export default function ScadaLayers() {
  return (
    <div className="my-8 overflow-hidden rounded border border-slate-200 bg-white shadow-soft text-sm">

      {/* ── Row 1: Real-Time Functionality ─────────────────── */}
      <div className="border-b border-slate-200 px-5 py-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-sky-600">
          Real-Time Functionality
        </p>
        <p className="text-center text-base font-semibold text-navy-900 sm:text-lg">
          SCADA, HMI, MES, IIoT Edge and Gateway
        </p>
      </div>

      {/* ── Row 2: Enabled by ActionNET ────────────────────── */}
      <div className="border-b border-slate-200 px-5 py-4">
        <p className="mb-3 font-semibold text-navy-800">Enabled by ActionNET</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4">
          {CAPABILITIES.map(cap => (
            <div
              key={cap}
              className="rounded border border-slate-200 px-3 py-1.5 text-center text-xs font-medium text-navy-700"
            >
              {cap}
            </div>
          ))}
        </div>
      </div>

      {/* ── Row 3: Core Functionalities ────────────────────── */}
      <div className="border-b border-slate-100 bg-navy-800 px-5 py-2">
        <p className="font-semibold text-white">Core Functionalities</p>
      </div>
      <div className="border-b border-slate-200 px-5 py-5">
        <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
          {CORE.map(item => (
            <div key={item.label} className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-sky-400 bg-sky-50 text-sky-600">
                {item.icon}
              </div>
              <span className="text-[11px] leading-tight text-slate-600 whitespace-pre-line">
                {item.multiline ?? item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Row 4: Platform ────────────────────────────────── */}
      <div className="flex flex-col gap-4 bg-sky-50/60 px-5 py-4 sm:flex-row sm:items-start">
        <div className="shrink-0">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Platform</p>
          <p className="mt-0.5 text-xl font-bold text-navy-900 leading-none">
            Grid<span className="text-sky-500">Q</span>
          </p>
          <p className="text-xs text-slate-500">(Action.Net)</p>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-0.5 sm:grid-cols-5">
          {PLATFORM_COLS.map((col, ci) => (
            <ul key={ci} className="space-y-0.5">
              {col.map(item => (
                <li key={item} className="flex items-start gap-1 text-xs text-slate-700">
                  <span className="mt-0.5 text-sky-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

    </div>
  )
}
