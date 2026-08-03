import { useEffect } from 'react'
import type { PageContent } from '../content/types'
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

  return (
    <article>
      <header className="relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy-700">
        {meta.heroImage && (
          <img
            aria-hidden="true"
            src={`${import.meta.env.BASE_URL}assets/img/${meta.heroImage}`}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-sm"
          />
        )}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/75 to-navy-900/40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <h1
            className="max-w-prose font-display font-bold leading-[1.1] text-white"
            style={{ fontSize: 'clamp(2.25rem, 1.6rem + 2.6vw, 3.5rem)' }}
          >
            {meta.title}
          </h1>
          <p className="mt-5 max-w-prose text-lg text-slate-300">{meta.subtitle}</p>
          <div className="mt-7 h-1 w-16 bg-sky-400" aria-hidden="true" />
        </div>
      </header>

      <BlockRenderer blocks={blocks} />
    </article>
  )
}
