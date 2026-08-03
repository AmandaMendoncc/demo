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
      <header className="relative overflow-hidden bg-navy-900">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <h1
            className="max-w-prose font-display font-bold leading-[1.1] text-white"
            style={{ fontSize: 'clamp(2.25rem, 1.6rem + 2.6vw, 3.5rem)' }}
          >
            {meta.title}
          </h1>
          <p className="mt-5 max-w-prose text-lg text-slate-300">{meta.subtitle}</p>
        </div>
      </header>

      <div ref={contentReveal.ref} className={contentReveal.className}>
        <BlockRenderer blocks={blocks} />
      </div>
    </article>
  )
}
