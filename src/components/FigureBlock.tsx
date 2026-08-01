import { useState } from 'react'
import Lightbox from './Lightbox'

interface FigureBlockProps {
  src: string
  alt: string
  caption: string
  width: number
  height: number
  /** Wide diagrams get an enlarge button + horizontal scroll on narrow screens */
  wide?: boolean
}

export default function FigureBlock({ src, alt, caption, width, height, wide = true }: FigureBlockProps) {
  const [open, setOpen] = useState(false)
  const fullSrc = `/assets/img/${src}`

  return (
    <figure className="group my-7 overflow-hidden border border-sky-300 bg-cream-50 shadow-soft transition-shadow duration-300 ease-premium hover:shadow-elevated">
      <div className="relative overflow-hidden p-3 sm:p-4">
        <div className={wide ? 'overflow-x-auto' : ''}>
          <img
            src={fullSrc}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            className={`transition-transform duration-500 ease-premium group-hover:scale-[1.015] ${
              wide ? 'h-auto max-w-none sm:max-w-full' : 'h-auto w-full'
            }`}
            style={wide ? { minWidth: Math.min(width, 640) } : undefined}
          />
        </div>
        {wide && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="absolute right-5 top-5 flex h-11 items-center border border-navy-900 bg-white/95 px-4 text-xs font-semibold text-navy-900 shadow-soft transition-colors duration-300 ease-premium hover:bg-navy-900 hover:text-white focus-ring sm:h-9"
          >
            Enlarge
          </button>
        )}
      </div>
      <figcaption className="border-t border-sky-200/70 bg-white px-4 py-2.5 text-sm italic text-ink-900/60">
        {caption}
      </figcaption>
      {open && <Lightbox src={fullSrc} alt={alt} onClose={() => setOpen(false)} />}
    </figure>
  )
}
