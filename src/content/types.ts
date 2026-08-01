export type Block =
  | { kind: 'heading'; level: 1 | 2 | 3 | 4; number?: string; text: string }
  | { kind: 'paragraph'; text: string }
  | { kind: 'list'; ordered?: boolean; items: string[] }
  | { kind: 'table'; caption?: string; headers: string[]; rows: string[][] }
  | { kind: 'box'; title?: string; items: string[] }
  | { kind: 'boxgrid'; columns: { title: string; items: string[] }[] }
  | { kind: 'figure'; src: string; alt: string; caption: string }
  | { kind: 'note'; text: string }

export interface PageMeta {
  route: string
  title: string
  subtitle: string
  navLabel: string
  demoLabel: string
}

export interface PageContent {
  meta: PageMeta
  blocks: Block[]
}
