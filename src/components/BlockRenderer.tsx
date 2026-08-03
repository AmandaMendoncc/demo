import type { Block } from '../content/types'
import { headingId } from '../lib/slug'
import { IMAGE_DIMS } from '../content/imageDims'
import DataTable from './DataTable'
import BoxList from './BoxList'
import BoxGrid from './BoxGrid'
import FigureBlock from './FigureBlock'
import DemoVideo from './DemoVideo'
import ReportLinks from './ReportLinks'

function Heading({ level, text }: { level: 2 | 3 | 4; text: string }) {
  const id = headingId(text)

  if (level === 2) {
    return (
      <h2
        id={id}
        className="mt-16 mb-6 scroll-mt-24 border-b-2 border-sky-200 pb-3 text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl"
      >
        <span className="mr-3 inline-block h-2.5 w-2.5 bg-sky-500 align-middle" aria-hidden="true" />
        {text}
      </h2>
    )
  }

  if (level === 3) {
    return (
      <h3
        id={id}
        className="mt-12 mb-4 scroll-mt-24 border-l-4 border-sky-400 pl-4 text-xl font-bold text-navy-900 sm:text-2xl"
      >
        {text}
      </h3>
    )
  }

  return (
    <h4
      id={id}
      className="mt-8 mb-2 scroll-mt-24 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-sky-700 sm:text-base"
    >
      <span className="h-1.5 w-1.5 shrink-0 bg-sky-500" aria-hidden="true" />
      {text}
    </h4>
  )
}

export default function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case 'heading':
            if (block.level === 1) return null
            return <Heading key={i} level={block.level} text={block.text} />
          case 'paragraph':
            return (
              <p key={i} className="my-5 max-w-prose leading-[1.75] text-ink-900/90">
                {block.text}
              </p>
            )
          case 'list':
            return block.ordered ? (
              <ol key={i} className="my-5 max-w-prose list-decimal space-y-2 pl-6 marker:font-semibold marker:text-sky-600">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="my-5 max-w-prose list-disc space-y-2 pl-6 marker:text-sky-500">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )
          case 'table':
            return <DataTable key={i} headers={block.headers} rows={block.rows} caption={block.caption} />
          case 'box':
            return <BoxList key={i} title={block.title} items={block.items} />
          case 'boxgrid':
            return <BoxGrid key={i} columns={block.columns} />
          case 'note':
            return (
              <blockquote
                key={i}
                className="my-6 max-w-prose rounded-r-md border-l-4 border-sky-400 bg-sky-50 px-4 py-3 text-ink-900/80"
              >
                {block.text}
              </blockquote>
            )
          case 'figure': {
            const dims = IMAGE_DIMS[block.src] ?? { width: 1200, height: 700 }
            return (
              <FigureBlock
                key={i}
                src={block.src}
                alt={block.alt}
                caption={block.caption}
                width={dims.width}
                height={dims.height}
              />
            )
          }
          case 'video':
            return <DemoVideo key={i} label={block.label} src={block.src} poster={block.poster} />
          case 'reportLinks':
            return <ReportLinks key={i} items={block.items} />
          default:
            return null
        }
      })}
    </>
  )
}
