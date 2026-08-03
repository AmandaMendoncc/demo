import type { Block } from '../content/types'
import { headingId } from '../lib/slug'
import { IMAGE_DIMS } from '../content/imageDims'
import DataTable from './DataTable'
import BoxList from './BoxList'
import BoxGrid from './BoxGrid'
import FigureBlock from './FigureBlock'
import DemoVideo from './DemoVideo'
import ReportLinks from './ReportLinks'

const HEADING_CLASSES: Record<2 | 3 | 4, string> = {
  2: 'mt-14 mb-5 border-b-2 border-sky-200 pb-3 text-2xl font-bold text-navy-900 sm:text-3xl',
  3: 'mt-10 mb-3 text-xl font-bold text-navy-900 sm:text-2xl',
  4: 'mt-8 mb-2 text-lg font-semibold text-navy-700 sm:text-xl',
}

function Heading({ level, text }: { level: 2 | 3 | 4; text: string }) {
  const id = headingId(text)
  const className = `${HEADING_CLASSES[level]} scroll-mt-24`
  if (level === 2) return <h2 id={id} className={className}>{text}</h2>
  if (level === 3) return <h3 id={id} className={className}>{text}</h3>
  return <h4 id={id} className={className}>{text}</h4>
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
              <p key={i} className="my-4 max-w-prose leading-[1.7]">
                {block.text}
              </p>
            )
          case 'list':
            return block.ordered ? (
              <ol key={i} className="my-4 max-w-prose list-decimal space-y-1.5 pl-6 marker:font-semibold marker:text-sky-600">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="my-4 max-w-prose list-disc space-y-1.5 pl-6 marker:text-sky-500">
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
