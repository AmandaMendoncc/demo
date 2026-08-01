interface BoxGridProps {
  columns: { title: string; items: string[] }[]
}

export default function BoxGrid({ columns }: BoxGridProps) {
  const colsClass =
    columns.length >= 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : columns.length === 3
        ? 'sm:grid-cols-2 lg:grid-cols-3'
        : columns.length === 2
          ? 'sm:grid-cols-2'
          : 'sm:grid-cols-1'

  return (
    <div className={`my-6 grid grid-cols-1 gap-4 ${colsClass}`}>
      {columns.map((col, i) => (
        <div
          key={i}
          className="border border-slate-200 border-t-4 border-t-sky-500 bg-white p-4 shadow-soft transition-all duration-300 ease-premium hover:border-slate-300 hover:border-t-sky-600 hover:shadow-elevated sm:p-5"
        >
          <p className="mb-2 font-semibold text-navy-900">{col.title}</p>
          <ul className="list-disc space-y-1.5 pl-5 text-sm marker:text-sky-500 sm:text-[15px]">
            {col.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
