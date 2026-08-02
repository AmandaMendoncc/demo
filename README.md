# GridQ — Site institucional/técnico

Site estático de 5 páginas para a plataforma GridQ (FEP · SCADA · DMS · OMS),
construído com Vite + React + TypeScript + Tailwind CSS + React Router. Sem backend,
sem CMS — pronto para deploy em Netlify/Vercel/GitHub Pages.

> **Nota de rebranding:** o conteúdo textual foi originalmente extraído com a marca
> "Sharika SpinTech"; uma rodada de feedback do cliente (`WEB-feedback01.pdf`) pediu a
> reversão para a marca original **GridQ**, a inclusão de uma página dedicada ao módulo
> **FEP** (antes só mencionado dentro da Home) e a substituição do conteúdo técnico de
> várias seções por texto novo, incluindo blocos reais de "Aplicação Demonstrativa"
> (Demo Application) com contexto de implantações reais. Este README reflete o estado
> atual (pós-feedback).

## Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento (http://localhost:5173/demo/)
npm run build     # build de produção em ./dist (gera também dist/404.html, ver Deploy)
npm run preview   # serve o build de produção localmente, já respeitando o base path
```

O `base: '/demo/'` (ver Deploy) vale também em dev: acesse `http://localhost:5173/demo/`,
não a raiz.

## Deploy (GitHub Pages)

O site está configurado para publicar em `https://<seu-usuário>.github.io/demo/`
via GitHub Actions, sem precisar de branch `gh-pages` nem de nenhum passo manual de
build/push.

**Passo único e manual, na primeira vez:** no GitHub, abra o repositório → **Settings
→ Pages** → em "Build and deployment", mude **Source** para **"GitHub Actions"**
(se ainda estiver em "Deploy from a branch"). Depois disso, todo `git push` na
branch `main` builda e publica o site automaticamente — acompanhe em **Actions**.

Detalhes técnicos do que foi configurado (só necessário entender se for renomear
o repositório ou trocar de host):

- `vite.config.ts` define `base: '/demo/'` — precisa bater com o nome do repositório
  (`https://usuário.github.io/<nome-do-repo>/`). Se o repo for renomeado, atualize
  aqui também.
- `src/main.tsx` passa `basename="/demo"` para o `<BrowserRouter>`, para as 5 rotas
  resolverem sob esse mesmo prefixo.
- Como `base` não é mais `/`, referências diretas a arquivos de `public/` no código
  usam `import.meta.env.BASE_URL` (em `Header.tsx` e `FigureBlock.tsx`) e o HTML usa
  o placeholder `%BASE_URL%` (em `index.html`) em vez de caminhos como `/favicon.png`
  — sem isso, imagens e favicon quebrariam em produção.
- `npm run build` roda um `postbuild` (`cp dist/index.html dist/404.html`): GitHub
  Pages não tem rewrite de servidor, então sem isso, acessar `/scada` diretamente
  (ou dar refresh) resultaria em 404. Com o 404.html idêntico ao index.html, o
  React Router assume a partir da URL e renderiza a rota certa.
- `.github/workflows/deploy.yml` builda (`npm ci && npm run build`) e publica a
  pasta `dist/` a cada push em `main`, usando as actions oficiais do GitHub Pages
  (`upload-pages-artifact` + `deploy-pages`).

Para hospedar em Vercel/Netlify/Cloudflare Pages em vez disso, esses três (ao
contrário do GitHub Pages) servem SPAs na raiz do domínio com rewrite automático
de rotas — nesse caso, reverta `base` para `/` no `vite.config.ts`, remova o
`basename` do `BrowserRouter` e o `postbuild` deixa de ser necessário (mas não atrapalha
se ficar).

## Onde editar o conteúdo

Todo o texto das páginas vive em `src/content/*.ts` (`home.ts`, `fep.ts`, `scada.ts`,
`dms.ts`, `oms.ts`), como arrays de "blocos" tipados (`src/content/types.ts`):
`heading`, `paragraph`, `list`, `table`, `box`, `boxgrid`, `figure`, `note`, `video`
(placeholder de vídeo, com `label` opcional) e `reportLinks` (lista de "links" de
relatório, estilizados em azul, ainda sem arquivo real anexado). Para editar um
parágrafo ou tabela, edite o bloco correspondente no módulo de conteúdo da página;
a renderização (tipografia, espaçamento, tabela responsiva, etc.) é feita
automaticamente por `src/components/BlockRenderer.tsx`.

As dimensões (`width`/`height`) de cada imagem, usadas para evitar layout shift, ficam
em `src/content/imageDims.ts`.

## Estrutura

```
src/
├─ main.tsx, App.tsx        — bootstrap e rotas (/, /fep, /scada, /dms, /oms)
├─ components/
│  ├─ Header.tsx            — header fixo navy (glass/blur), nav desktop (sublinhado ativo) + menu mobile
│  ├─ PageLayout.tsx         — capa (hero navy) + conteúdo da página
│  ├─ BlockRenderer.tsx      — mapeia blocos de conteúdo -> componentes visuais
│  ├─ DataTable.tsx          — tabela com header navy e scroll horizontal
│  ├─ BoxList.tsx / BoxGrid.tsx — blocos "caixa" (listas com título, 1 a 4 colunas)
│  ├─ FigureBlock.tsx        — figura sobre fundo cream, borda azul clara, scroll + Enlarge
│  ├─ Lightbox.tsx           — modal fullscreen com zoom/pinch para diagramas grandes
│  ├─ VideoPlaceholder.tsx   — moldura tracejada "Video" para as seções de Demo Application
│  └─ ReportLinks.tsx        — lista de links de relatório (placeholder, sem arquivo anexado)
├─ content/                  — texto por página + tipos + dimensões de imagem
└─ pages/                    — Home, Fep, Scada, Dms, Oms (montam PageLayout + conteúdo)
```

Não há `Footer.tsx`, navegação lateral "On this page" nem o selo "Volume I/II" —
removidos a pedido do cliente em uma rodada anterior de feedback (ver observações).
Não há dependência de ícones (`lucide-react` foi removida do projeto); toda a UI usa
apenas tipografia, cor e bordas. Também não há mais o componente `ProductDemo`
("Watch demo" genérico no topo da página) — cada página agora traz sua própria seção
"Demo Application" com texto real e placeholders de vídeo posicionados no meio do
conteúdo, onde o documento fonte os indica.

## Mapeamento de figuras por página

| Origem no documento | Arquivo | Página | Seção |
|---|---|---|---|
| Figura 11 (Arquitetura da solução ADMS) | `arquitetura-solucao-adms.png` | `/` (Home) | Main Platform Modules |
| Figura 41 (Camadas do SCADA) | `scada-camadas.png` | `/scada` | Início da página |
| Figura 61/71 (Arquitetura funcional OMS) | `oms-arquitetura-funcional.png` | `/oms` | Switching and Topology Monitoring |
| Logo (ícone recortado, fundo transparente) | `logo-sharika-spintech-icon.png` | Todas | Header |

Figuras do inventário original não usadas no texto reescrito desta rodada
(`dts-telas-instrutor.png`, `arquitetura-centro-controle.png`,
`scada-ambiente-scripts.png`, `scada-tendencias.png`, `scada-resumo-eventos.png`,
`adms-arquitetura-dms.png` e as galerias antigas de ADMS/OMS) permanecem em
`public/assets/img/` por completude do inventário, mas não aparecem em nenhuma rota
no momento — o conteúdo novo fornecido no feedback não as referencia.

## Diagrama editado: `arquitetura-solucao-adms.png`

O documento pediu explicitamente a remoção de uma parte marcada em azul no diagrama
de arquitetura (o bloco de banco de dados **ISR**, as 4 setas **ODBC** que chegavam
nele, e o rótulo residual). Diferente de todas as outras figuras do site, esta edição
foi **autorizada explicitamente pelo cliente** neste feedback, então foi feita uma
edição pontual de pixels (preenchimento da área com a cor de fundo do próprio
diagrama, sem redesenhar nenhum elemento) diretamente no arquivo original. Nenhuma
outra figura do site foi gerada, redesenhada ou alterada.

## Logo e favicon (assets derivados)

O logo original (`logo-sharika-spintech.png` / `logo-sharika-spintech-dark.png`, ambos
mantidos intactos no inventário) tem uma área sólida de cor onde a palavra "spin"
deveria aparecer, sem texto visível (característica do arquivo fonte, confirmada por
inspeção de pixel). Para evitar essa área aparecer como uma caixa de cor destacada do
fundo real da página, foram gerados dois PNGs derivados por recorte de pixel + chroma-key
(fundo sólido → transparente, ícone não alterado): `logo-sharika-spintech-icon.png`
(usado no header, ao lado do nome "GridQ" em texto HTML/CSS) e `public/favicon.png`
(mesmo tratamento, para a aba do navegador).

## Observações para o revisor

- Nenhum diagrama, fluxo ou tela de sistema foi gerado ou redesenhado, com a única
  exceção documentada acima (remoção pontual e autorizada do bloco ISR/ODBC).
- **Ajustes de estilo mantidos de rodadas anteriores de feedback**, aplicados também
  ao conteúdo novo desta rodada:
  - Site 100% em inglês.
  - Travessões (`–`/`—`) substituídos por dois-pontos, vírgula ou reformulação —
    nunca aparecem no site.
  - Números de seção e de figura não são exibidos no texto renderizado.
  - Nenhuma navegação lateral, footer, selo de volume, ou ícone de biblioteca.
- Testado em 360px de largura (mobile) e 1280px (desktop) via Playwright headless —
  sem overflow horizontal e sem erros de console em nenhuma das 5 rotas.
