interface DemoVideoProps {
  label?: string
  src?: string
  poster?: string
}

export default function DemoVideo({ label, src, poster }: DemoVideoProps) {
  return (
    <div className="my-7 border border-sky-300 bg-cream-50 p-3 shadow-soft transition-shadow duration-300 ease-premium hover:shadow-elevated sm:p-4">
      <div className="flex aspect-video w-full items-center justify-center overflow-hidden bg-ink-900">
        {src ? (
          <video
            className="h-full w-full object-contain"
            src={`${import.meta.env.BASE_URL}assets/img/${src}`}
            poster={poster ? `${import.meta.env.BASE_URL}assets/img/${poster}` : undefined}
            controls
            preload="metadata"
          />
        ) : (
          <div className="px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">Video</p>
            <p className="mt-2 text-sm font-medium text-white/40">{label ?? 'Video placeholder, to be inserted'}</p>
          </div>
        )}
      </div>
    </div>
  )
}
