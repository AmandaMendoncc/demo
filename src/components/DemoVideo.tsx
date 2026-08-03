interface DemoVideoProps {
  label?: string
  src?: string
  poster?: string
}

export default function DemoVideo({ label, src, poster }: DemoVideoProps) {
  if (src) {
    return (
      <video
        className="my-7 w-full max-w-prose border border-sky-300 bg-ink-900 shadow-soft"
        src={`${import.meta.env.BASE_URL}assets/img/${src}`}
        poster={poster ? `${import.meta.env.BASE_URL}assets/img/${poster}` : undefined}
        controls
        preload="metadata"
      />
    )
  }

  return (
    <div className="my-7 flex aspect-video w-full max-w-prose items-center justify-center border-2 border-dashed border-sky-300 bg-gradient-to-br from-sky-50 to-white transition-colors duration-300 ease-premium hover:border-sky-500">
      <div className="px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">Video</p>
        <p className="mt-2 text-sm font-medium text-ink-900/40">{label ?? 'Video placeholder, to be inserted'}</p>
      </div>
    </div>
  )
}
