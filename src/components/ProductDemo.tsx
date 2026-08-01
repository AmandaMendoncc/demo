interface ProductDemoProps {
  product: string
}

export default function ProductDemo({ product }: ProductDemoProps) {
  return (
    <section className="border-t-4 border-sky-500 bg-white py-14 sm:py-20" aria-labelledby="product-demo-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-14">
          <div>
            <span className="inline-block bg-navy-900 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sky-400">
              Demo
            </span>
            <h2 id="product-demo-heading" className="mt-4 text-2xl font-bold leading-tight tracking-tight text-navy-900 sm:text-3xl">
              See {product} in action
            </h2>
            <p className="mt-4 max-w-prose text-ink-900/70">
              A guided walkthrough of {product} will be featured here, showing real screens and workflows in motion.
            </p>
            <span className="mt-6 inline-flex cursor-not-allowed items-center gap-2 border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-ink-900/40 shadow-soft">
              Watch demo
            </span>
          </div>
          <div className="group relative flex aspect-video w-full items-center justify-center overflow-hidden border-2 border-dashed border-sky-300 bg-gradient-to-br from-sky-50 to-white transition-all duration-300 ease-premium hover:border-sky-500 hover:shadow-elevated">
            <p className="px-6 text-center text-sm font-medium text-ink-900/40">Video preview coming soon</p>
          </div>
        </div>
      </div>
    </section>
  )
}
