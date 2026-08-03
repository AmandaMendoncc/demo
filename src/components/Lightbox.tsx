import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface LightboxProps {
  src: string
  alt: string
  onClose: () => void
}

const EXIT_DURATION = 200

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  const [zoom, setZoom] = useState(1)
  const [visible, setVisible] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  function requestClose() {
    setVisible(false)
    window.setTimeout(onClose, EXIT_DURATION)
  }

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true))
    closeButtonRef.current?.focus()
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') requestClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      cancelAnimationFrame(raf)
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex flex-col bg-ink-900/95 backdrop-blur-sm transition-opacity duration-200 ease-premium ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={requestClose}
    >
      <div className="flex items-center justify-end gap-2 p-3 sm:p-4" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="flex h-11 items-center border border-white/20 bg-navy-900 px-4 text-sm font-semibold text-white transition-colors duration-200 ease-premium hover:border-sky-400 hover:bg-sky-600 focus-ring"
          onClick={() => setZoom((z) => Math.min(z + 0.5, 4))}
        >
          Zoom in
        </button>
        <button
          type="button"
          className="flex h-11 items-center border border-white/20 bg-navy-900 px-4 text-sm font-semibold text-white transition-colors duration-200 ease-premium hover:border-sky-400 hover:bg-sky-600 focus-ring"
          onClick={() => setZoom((z) => Math.max(z - 0.5, 1))}
        >
          Zoom out
        </button>
        <button
          ref={closeButtonRef}
          type="button"
          className="flex h-11 items-center border border-white/20 bg-navy-900 px-4 text-sm font-semibold text-white transition-colors duration-200 ease-premium hover:border-sky-400 hover:bg-sky-600 focus-ring"
          onClick={requestClose}
        >
          Close
        </button>
      </div>
      <div
        className="flex-1 overflow-auto p-4"
        style={{ touchAction: 'pinch-zoom' }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className={`mx-auto transition-all duration-200 ease-premium ${visible ? 'scale-100' : 'scale-95'} ${
            zoom === 1 ? 'h-full max-h-full w-auto max-w-full object-contain' : 'h-auto max-w-none'
          }`}
          style={zoom === 1 ? undefined : { width: `${zoom * 100}%`, minWidth: '100%' }}
        />
      </div>
    </div>,
    document.body,
  )
}
