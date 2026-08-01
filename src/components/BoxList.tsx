interface BoxListProps {
  title?: string
  items: string[]
}

export default function BoxList({ title, items }: BoxListProps) {
  return (
    <div className="my-6 border border-slate-200 border-l-4 border-l-sky-500 bg-white p-4 shadow-soft transition-all duration-300 ease-premium hover:border-slate-300 hover:border-l-sky-600 hover:shadow-elevated sm:p-5">
      {title && <p className="mb-2.5 font-semibold text-navy-900">{title}</p>}
      <ul className="list-disc space-y-1.5 pl-5 marker:text-sky-500">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
