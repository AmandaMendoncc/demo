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

const CORE = [
  'OPCUA', 'Drivers', 'SQL', 'Graphics', 'Alarms',
  'Tags', 'Scripts', 'Dashboards\nReporting', 'HTML5', 'MQTT',
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
      <div className="border-b border-slate-200 px-5 py-4">
        <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
          {CORE.map(item => (
            <div key={item} className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-sky-400 bg-sky-50 text-[10px] font-bold text-sky-700 leading-none">
                {item.split('\n')[0].substring(0, 4)}
              </div>
              <span className="text-[11px] leading-tight text-slate-600 whitespace-pre-line">{item}</span>
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
