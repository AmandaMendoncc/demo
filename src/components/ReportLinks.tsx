interface ReportLinksProps {
  items: string[]
}

export default function ReportLinks({ items }: ReportLinksProps) {
  return (
    <ul className="my-4 max-w-prose list-disc space-y-1.5 pl-6 marker:text-sky-500">
      {items.map((item, i) => (
        <li key={i}>
          <span
            className="cursor-not-allowed text-sky-700 underline decoration-sky-300 underline-offset-2"
            title="Report placeholder, file to be attached"
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}
