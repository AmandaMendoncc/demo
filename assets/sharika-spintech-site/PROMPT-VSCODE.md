# Prompt para VSCode (Copilot / Claude Code / Cursor)

Cole o bloco abaixo no agente do VSCode, com os arquivos `conteudo-sharika-spintech.md`
e a pasta `assets/img/` já presentes na raiz do projeto.

---

## PROMPT

Você vai construir um site institucional/técnico de 4 páginas para a solução
**Sharika SpinTech** (plataforma integrada SCADA · ADMS · OMS para redes de distribuição
de energia elétrica), responsivo para desktop e mobile.

### Fonte de conteúdo — leia antes de qualquer código

Todo o texto está em `conteudo-sharika-spintech.md`. Leia o arquivo **inteiro** antes de
começar. Ele está dividido em blocos `<!-- PÁGINA N -->` e traz, no topo, as regras de
conteúdo e um inventário completo dos assets.

**O texto é conteúdo aprovado de um Functional Design Document.** Não reescreva, não
resuma, não parafraseie, não traduza e não invente seções. Transporte o texto como está,
inclusive tabelas e listas. Você pode ajustar apenas hierarquia visual, espaçamento e
agrupamento em componentes.

### Regras absolutas sobre imagens

1. Use **exclusivamente** os arquivos em `assets/img/`. Todos vieram do documento original.
2. **Proibido gerar, redesenhar, recriar ou substituir** qualquer diagrama de arquitetura,
   diagrama de fluxo ou captura de tela do sistema — nem com SVG, nem com CSS, nem com
   biblioteca de gráficos, nem com IA de imagem. Se uma figura parecer de baixa resolução
   ou desalinhada com o layout, mantenha-a assim.
3. Você **pode** criar livremente elementos puramente decorativos: gradientes, formas de
   fundo, divisores, ícones de interface (setas, menu, fechar), badges e ilustrações
   abstratas que não representem o produto.
4. **Logo:** use apenas `logo-sharika-spintech-dark.png`. A palavra "spin" do logotipo é
   branca, então ele **só funciona sobre fundo escuro** (navy `#163E64`). Nunca coloque o
   logo sobre fundo claro. Não use nenhum outro logotipo — os logos de UPCL, East India
   Udyog, Sharika Enterprises e RDSS/PFC estão fora do escopo e não devem aparecer.
5. Diagramas grandes (arquiteturas, telas) precisam de tratamento mobile: em telas
   estreitas, renderize dentro de um container com scroll horizontal ou com um botão
   "ampliar" que abre a imagem em lightbox com pinch-zoom. **Nunca** encolha um diagrama
   a ponto de o texto interno ficar ilegível.

### Estrutura de páginas

| Rota | Selo | Título |
|------|------|--------|
| `/` | **Volume I** | A Solução Sharika SpinTech |
| `/scada` | **Volume II** | SCADA |
| `/adms` | **Volume II** | ADMS / DMS |
| `/oms` | **Volume II** | OMS |

A página inicial (`/`) é o **resumo da solução como um todo** — Volume I. As outras três
são o **detalhamento técnico** — Volume II. Cada página exibe um selo/badge visível com o
volume correspondente, próximo ao título. Trate isso como parte da identidade da página,
não como uma nota de rodapé.

A home deve terminar com três cards de navegação levando a SCADA, ADMS e OMS.

### Stack

- Vite + React + TypeScript
- Tailwind CSS
- React Router para as 4 rotas
- Sem backend, sem CMS, sem banco de dados. Site 100% estático, pronto para deploy em
  Netlify/Vercel/GitHub Pages.
- Sem dependências de UI pesadas. `lucide-react` é permitido para ícones de interface.

### Design

Tom: engenharia elétrica séria, documento técnico de alto padrão — não startup, não
"AI-generated landing page". Sóbrio, denso, muita informação legível.

Paleta extraída dos próprios diagramas do documento (use exatamente estes valores):

```
--navy-900: #163E64   /* barra de título dos diagramas, header, footer */
--navy-700: #1F5183
--amber-500: #F7A809  /* borda de destaque dos diagramas, acentos */
--cream-50: #FEF7E9   /* fundo dos painéis de diagrama */
--slate-400: #B8C4D0
--ink-900:  #14181C   /* texto */
--paper:    #FFFFFF
```

- Tipografia: uma sans-serif de leitura técnica (Inter, IBM Plex Sans ou Source Sans 3),
  carregada localmente ou via `@fontsource`. Corpo de texto em 16–17px, altura de linha
  generosa (1.7), largura máxima de coluna ~72ch.
- Header fixo, fundo `--navy-900`, com o logo à esquerda e navegação das 4 rotas à direita.
  Em mobile, menu hambúrguer em drawer.
- Cada página com um "on this page" (índice das seções numeradas) — sticky na lateral em
  desktop, colapsável no topo em mobile.
- Numeração das seções (4.1, 6.3.5, 7.10…) **deve permanecer visível** nos títulos. É um
  documento de engenharia; a numeração é referência cruzada.
- Tabelas: cabeçalho em `--navy-900` com texto branco, zebra striping sutil. Em mobile,
  scroll horizontal com sombra indicando corte — não empilhar células.
- Blocos de figura: imagem sobre fundo `--cream-50`, borda 1px `--amber-500` com raio
  suave, legenda em itálico abaixo, menor e em cinza.

### Responsividade

- Breakpoints: mobile `<640px`, tablet `640–1024px`, desktop `>1024px`.
- Mobile-first de verdade: escreva o CSS base para telas estreitas e use `sm: md: lg:`
  para ampliar.
- Alvos de toque com no mínimo 44×44px.
- Testar em 360px de largura sem overflow horizontal em nenhuma página.
- Imagens com `loading="lazy"`, `width`/`height` explícitos para evitar layout shift, e
  `alt` descritivo em português.

### Acessibilidade e qualidade

- Hierarquia de headings correta e sem saltos (um `<h1>` por página).
- Contraste mínimo AA. Atenção especial ao logo, que exige fundo escuro.
- Navegação por teclado funcional, incluindo o drawer mobile e o lightbox.
- `<title>` e `<meta name="description">` por rota.

### Entregáveis

```
/
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ src/
│  ├─ main.tsx
│  ├─ App.tsx
│  ├─ components/    (Header, Footer, VolumeBadge, FigureBlock, Lightbox, TOC, DataTable)
│  ├─ pages/         (Home, Scada, Adms, Oms)
│  └─ content/       (o texto extraído do MD, um módulo por página)
├─ public/assets/img/  (todas as imagens, sem renomear)
└─ README.md          (como rodar, como buildar, onde editar o conteúdo)
```

### Ordem de trabalho

1. Ler `conteudo-sharika-spintech.md` por completo.
2. Fazer o scaffold do Vite e configurar Tailwind com os tokens de cor acima.
3. Copiar `assets/img/` para `public/assets/img/` sem renomear nada.
4. Construir Header, Footer, VolumeBadge e FigureBlock primeiro.
5. Construir a página `/` (Volume I) inteira e revisar em 360px antes de seguir.
6. Construir `/scada`, `/adms`, `/oms`.
7. Rodar `npm run build` e confirmar que compila sem erros e sem overflow horizontal.

Ao terminar, liste no README qual figura ficou em qual página, para conferência contra o
inventário de assets do arquivo de conteúdo.

---

## Nota conhecida (repassar ao revisor, não ao agente)

Os diagramas de arquitetura ainda trazem o rótulo "GridQ" na barra de título, porque não
podem ser redesenhados. O texto do site usa "SpinTech". Se o rebranding precisar chegar
às figuras, isso é uma edição pontual das imagens existentes, feita à parte.
