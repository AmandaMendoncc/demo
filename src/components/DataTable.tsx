interface DataTableProps {
  headers: string[]
  rows: string[][]
  caption?: string
}

export default function DataTable({ headers, rows, caption }: DataTableProps) {
  return (
    <div className="my-6">
      {caption && (
        <p className="mb-2 inline-flex items-center gap-2 font-semibold text-navy-900">
          <span className="h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
          {caption}
        </p>
      )}
      <div className="relative overflow-x-auto border border-slate-200 shadow-[inset_-12px_0_8px_-8px_rgba(20,24,28,0.12),0_1px_2px_0_rgba(22,62,100,0.04),0_1px_3px_0_rgba(22,62,100,0.06)] transition-shadow duration-300 ease-premium hover:shadow-[inset_-12px_0_8px_-8px_rgba(20,24,28,0.12),0_8px_24px_-6px_rgba(22,62,100,0.14),0_4px_10px_-4px_rgba(22,62,100,0.10)]">
        <table className="w-full min-w-[480px] border-collapse text-left text-sm sm:text-[15px]">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead>
            <tr className="border-b-2 border-sky-500 bg-navy-900 text-white">
              {headers.map((h, i) => (
                <th key={i} scope="col" className="px-3 py-3 font-semibold sm:px-4">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className={`transition-colors duration-200 hover:bg-sky-100/70 ${ri % 2 === 1 ? 'bg-sky-50/50' : 'bg-white'}`}>
                {row.map((cell, ci) => (
                  <td key={ci} className="border-t border-slate-200 px-3 py-3 align-top sm:px-4">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
