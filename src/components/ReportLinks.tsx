interface ReportLinksProps {
  items: { label: string; file: string }[]
}

export default function ReportLinks({ items }: ReportLinksProps) {
  return (
    <ul className="my-4 max-w-prose list-disc space-y-1.5 pl-6 marker:text-sky-500">
      {items.map((item, i) => (
        <li key={i}>
          <a
            href={`${import.meta.env.BASE_URL}assets/relatorios/${item.file}`}
            download
            className="text-sky-700 underline decoration-sky-300 underline-offset-2 transition-colors duration-200 ease-premium hover:text-sky-600 focus-ring"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
