import { useEffect } from 'react'
import type { PageContent } from '../content/types'
import { useReveal } from '../lib/useReveal'
import BlockRenderer from './BlockRenderer'

function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)
  }, [title, description])
}

export default function PageLayout({ meta, blocks }: PageContent) {
  useDocumentMeta(`${meta.title} | GridQ`, meta.subtitle)
  const contentReveal = useReveal<HTMLDivElement>()

  return (
    <article>
      <header className="relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy-700">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 80%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <h1
            className="max-w-prose font-bold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: 'clamp(2rem, 1.35rem + 2.8vw, 3.25rem)' }}
          >
            {meta.title}
          </h1>
          <p className="mt-4 max-w-prose text-lg text-slate-300">{meta.subtitle}</p>
          <div className="mt-8 h-1 w-20 bg-sky-400" aria-hidden="true" />
        </div>
      </header>

      <div ref={contentReveal.ref} className={`mx-auto max-w-4xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14 ${contentReveal.className}`}>
        <BlockRenderer blocks={blocks} />
      </div>
    </article>
  )
}
