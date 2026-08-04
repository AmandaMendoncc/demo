import type { Block } from '../content/types'
import { headingId } from '../lib/slug'
import { IMAGE_DIMS } from '../content/imageDims'
import DataTable from './DataTable'
import BoxList from './BoxList'
import BoxGrid from './BoxGrid'
import FigureBlock from './FigureBlock'
import DemoVideo from './DemoVideo'
import ReportLinks from './ReportLinks'
import ScadaLayers from './ScadaLayers'

function Heading({ level, text }: { level: 2 | 3 | 4; text: string }) {
  const id = headingId(text)

  if (level === 2) {
    return (
      <h2
        id={id}
        className="mt-16 mb-4 scroll-mt-24 border-b border-slate-200 pb-3 font-display text-2xl font-semibold text-navy-900 sm:text-3xl"
      >
        {text}
      </h2>
    )
  }

  if (level === 3) {
    return (
      <h3 id={id} className="mt-10 mb-2 scroll-mt-24 text-lg font-semibold text-navy-900 sm:text-xl">
        {text}
      </h3>
    )
  }

  return (
    <h4 id={id} className="mt-6 mb-1 scroll-mt-24 text-sm font-semibold uppercase tracking-wide text-sky-700">
      {text}
    </h4>
  )
}

export default function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="content-flow mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case 'heading':
            if (block.level === 1) return null
            return <Heading key={i} level={block.level} text={block.text} />
          case 'paragraph':
            return (
              <p key={i} className="my-4 leading-[1.75] text-ink-900/90">
                {block.text}
              </p>
            )
          case 'list':
            return block.ordered ? (
              <ol key={i} className="my-4 list-decimal space-y-2 pl-6 leading-[1.75] marker:font-semibold marker:text-sky-600">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="my-4 list-disc space-y-2 pl-6 leading-[1.75] marker:text-sky-500">
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
                className="my-6 rounded-r-md border-l-4 border-sky-400 bg-sky-50 px-5 py-4 text-ink-900/80"
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
          case 'scadaLayers':
            return <ScadaLayers key={i} />
          default:
            return null
        }
      })}
    </div>
  )
}
