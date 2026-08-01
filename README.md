# Sharika SpinTech — Site institucional/técnico

Site estático de 4 páginas para a solução Sharika SpinTech (SCADA · ADMS · OMS),
construído com Vite + React + TypeScript + Tailwind CSS + React Router. Sem backend,
sem CMS — pronto para deploy em Netlify/Vercel/GitHub Pages.

## Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento (http://localhost:5173)
npm run build     # build de produção em ./dist
npm run preview   # serve o build de produção localmente
```

## Onde editar o conteúdo

Todo o texto das páginas vive em `src/content/*.ts` (`home.ts`, `scada.ts`, `adms.ts`,
`oms.ts`), como arrays de "blocos" tipados (`src/content/types.ts`): `heading`,
`paragraph`, `list`, `table`, `box`, `boxgrid`, `figure`, `note`. O texto é baseado no
conteúdo do documento fonte (`conteudo-sharika-spintech.md`), com pequenos ajustes de
pontuação (sem travessões) e sem numeração de seção/figura visível no site (ver
"Observações para o revisor"). Para editar um parágrafo ou tabela, edite o bloco
correspondente no módulo de conteúdo da página; a renderização (tipografia, espaçamento,
tabela responsiva, etc.) é feita automaticamente por `src/components/BlockRenderer.tsx`.

As dimensões (`width`/`height`) de cada imagem, usadas para evitar layout shift, ficam
em `src/content/imageDims.ts`.

## Estrutura

```
src/
├─ main.tsx, App.tsx        — bootstrap e rotas (/, /scada, /adms, /oms)
├─ components/
│  ├─ Header.tsx            — header fixo navy (glass/blur), nav desktop (sublinhado ativo) + menu mobile
│  ├─ PageLayout.tsx         — capa (hero navy) + seção de demo do produto + conteúdo
│  ├─ ProductDemo.tsx        — placeholder de vídeo/demo, logo após a capa de cada página
│  ├─ BlockRenderer.tsx      — mapeia blocos de conteúdo -> componentes visuais
│  ├─ DataTable.tsx          — tabela com header navy e scroll horizontal
│  ├─ BoxList.tsx / BoxGrid.tsx — blocos "caixa" (listas com título, 1 a 4 colunas)
│  ├─ FigureBlock.tsx        — figura sobre fundo cream, borda azul clara, scroll + Enlarge
│  └─ Lightbox.tsx           — modal fullscreen com zoom/pinch para diagramas grandes
├─ content/                  — texto por página + tipos + dimensões de imagem
└─ pages/                    — Home, Scada, Adms, Oms (montam PageLayout + conteúdo)
```

Não há mais `Footer.tsx` nem navegação lateral "On this page" — ambos foram removidos
a pedido do cliente (ver observações abaixo). Não há dependência de ícones (`lucide-react`
foi removida do projeto); toda a UI usa apenas tipografia, cor e bordas.

## Mapeamento de figuras por página

| Origem no documento | Arquivo | Página | Seção |
|---|---|---|---|
| Figura 11 (Arquitetura da solução ADMS, ISR removido) | `arquitetura-solucao-adms.png` | `/` (Home) | Product Overview |
| Figura 17 (Telas do instrutor DTS) | `dts-telas-instrutor.png` | `/` (Home) | SpinTech DTS |
| Figura 21 (Arquitetura geral / Centro de Controle Principal) | `arquitetura-centro-controle.png` | `/` (Home) | Overall Architecture |
| Figura 41 (Camadas do SCADA) | `scada-camadas.png` | `/scada` | SCADA Module Overview |
| Figura 42 (Ambiente de scripts) | `scada-ambiente-scripts.png` | `/scada` | Programming Language and Automation |
| Figura 43 (Tendências RT/histórico) | `scada-tendencias.png` | `/scada` | Historical Storage and Operational Playback |
| Figura 44 (Resumo de eventos) | `scada-resumo-eventos.png` | `/scada` | Sequence of Events (SOE) |
| Figura 61 (Arquitetura do DMS) | `adms-arquitetura-dms.png` | `/adms` | Overview |
| Figura 12 (Display da rede de distribuição) | `adms-rede-distribuicao-b.png` | `/adms` | System Screens (galeria) |
| Figura 13 (Critérios do localizador de faltas) | `adms-criterios-localizacao-falta.png` | `/adms` | System Screens (galeria) |
| Figura 14 (Gestão de faltas e restauração) | `adms-gestao-falta-restauracao.png` | `/adms` | System Screens (galeria) |
| Figura 71 (Arquitetura funcional OMS) | `oms-arquitetura-funcional.png` | `/oms` | Overview |
| Figura 15 (Janela de gestão de eventos) | `oms-janela-gestao-eventos.png` | `/oms` | System Screens (galeria) |
| Figura 16 (Relatórios SAIDI/SAIFI) | `oms-relatorios-saidi-saifi.png` | `/oms` | System Screens (galeria) |
| Logo Software OEM (ícone recortado, fundo transparente) | `logo-sharika-spintech-icon.png` | Todas | Header |

Os números de figura acima são apenas para conferência interna contra o inventário do
`conteudo-sharika-spintech.md` — no site publicado, as legendas mostram só a descrição,
sem "Figura NN" (ver observações).

Não utilizados na UI (mantidos em `public/assets/img/` por completude do inventário):
- `adms-rede-distribuicao-a.png` — recorte auxiliar da Figura 12, opcional.
- `logo-sharika-spintech.png` e `logo-sharika-spintech-dark.png` — originais completos
  (393×144, com a área "spin" em branco sólido, sem texto visível). Mantidos intactos
  no inventário; não usados diretamente no layout — servem apenas de base para os
  recortes derivados abaixo.

## Logo e favicon (assets derivados)

Ambos os originais têm uma característica de fabricação: a área à direita do ícone,
onde a palavra "spin" deveria aparecer, é um bloco sólido de cor (branco em um arquivo,
navy `#163E64` no outro) sem nenhum texto visível — confirmado por inspeção de pixel.
Exibir o arquivo completo (393×144) deixava essa área "morta" visível como uma caixa
de cor destacada do fundo real da página. Para resolver isso **sem redesenhar ou
regenerar o logo**, foram gerados dois PNGs derivados por recorte de pixel (crop) +
chroma-key (a cor de fundo sólida virou transparente, o ícone em si não foi alterado):

- `public/assets/img/logo-sharika-spintech-icon.png` — só o ícone, fundo transparente.
  Usado no header, acompanhado do nome "Sharika SpinTech" em texto (HTML/CSS) ao lado,
  já que o PNG nunca trouxe essa palavra de forma visível.
- `public/favicon.png` — mesmo tratamento (recorte + fundo transparente), a partir da
  variante clara, para o ícone da aba do navegador.

Os arquivos originais (`logo-sharika-spintech.png` e `logo-sharika-spintech-dark.png`)
permanecem no inventário sem qualquer edição.

## Observações para o revisor

- **Logo:** ver seção "Logo e favicon" acima — a ausência da palavra "spin" nos
  arquivos originais é uma característica do asset fonte, não algo introduzido por
  este site.
- **Rótulo "GridQ" nos diagramas:** conforme nota conhecida do briefing, as figuras de
  arquitetura (`arquitetura-solucao-adms.png`, `adms-arquitetura-dms.png`, etc.) ainda
  exibem "GridQ" na barra de título. O texto do site já usa "SpinTech" em todo lugar;
  o rebranding das imagens em si é uma edição pontual fora do escopo deste trabalho.
- Nenhum diagrama, fluxo ou tela de sistema foi gerado, redesenhado ou substituído.
- **Ajustes pedidos pelo cliente nesta rodada**, aplicados em todo o site:
  - Site 100% em inglês (inclusive tabelas que tinham rótulos em português no
    documento fonte, como "Módulo/Função", "Etapa", "Modo", "Indicador", "Nome").
  - Travessões (`–`/`—`) substituídos por dois-pontos, vírgula ou reformulação —
    nunca aparecem no site.
  - Números de seção (1.1, 6.3.5, 7.10 etc.) e de figura ("Figura NN") não são mais
    exibidos; o campo `number` ainda existe nos dados de conteúdo (uso interno/futuro)
    mas não é renderizado.
  - Citações internas ao documento fonte (ex. "MTS §2.2.2", "MTS §3.1") foram removidas
    do texto exibido.
  - Navegação lateral "On this page", footer e o selo "Volume I/II" foram removidos.
  - Nenhum ícone de biblioteca (`lucide-react`) é usado; toda a interface (menu,
    botões de zoom/fechar, cards) usa apenas texto, cor e tipografia.
  - Logo/depois da capa de cada página, uma seção "See [produto] in action": um
    placeholder (moldura tracejada) reservado para um vídeo/demo real do produto,
    a ser adicionado futuramente — posicionada em destaque, não ao final da página.
- Testado em 360px de largura (mobile) e 1280px (desktop) via Playwright headless —
  sem overflow horizontal e sem erros de console em nenhuma das 4 rotas.
