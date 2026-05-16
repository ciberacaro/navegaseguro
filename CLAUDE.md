# NavegaSeguro — Notas para Claude

## Workflow de Git (SEMPRE)

Depois de concluir cada tarefa que envolva alterações ao código:

1. Commit no branch de trabalho (ex: `claude/project-status-review-gxZax`)
2. Push para o remote desse branch
3. **Fazer fast-forward merge para `main` e push para `origin/main`** — sem perguntar

Sequência completa após cada tarefa:
```bash
git add -A
git commit -m "..."
git push -u origin <branch-actual>
git checkout main
git merge --ff-only <branch-actual>
git push origin main
git checkout <branch-actual>
```

O `main` é o branch de produção (Cloudflare Pages auto-deploy para navegaseguro.pages.dev). O utilizador quer que esta sincronização aconteça sempre, sem confirmação adicional.

## Princípios do projecto

- **Acessibilidade primeiro**: todas as alterações têm de respeitar WCAG 2.1 AA. Contraste, focus-visible, ARIA, navegação por teclado, semântica.
- **Português europeu** (PT-PT) em todo o conteúdo visível.
- **Sem alarmismo**: tom honesto, prático, sem catastrofismo.
- **Conteúdo contextualizado para Portugal**: exemplos reais (CTT, AT, MEO, MB Way, EMEL, etc.).
- **Sem tracking, sem publicidade**: nenhuma dependência externa que recolha dados; analisadores são 100% client-side.

## Stack

- SvelteKit + adapter-static (output prerenderizado)
- Svelte 5 runes (`$state`, `$derived`, `$derived.by`, `$effect`, `$props`)
- Cloudflare Pages
- PWA via `static/sw.js` (bump `CACHE` quando se adicionam rotas novas)

## Temas visuais

Detecção automática por rota em `+layout.svelte`:
- **Brutalist** (cores fortes, bordas grossas): `/pre-escolar`, `/primeiro-ciclo`, `/segundo-ciclo`, `/terceiro-ciclo`, `/secundario`
- **Editorial** (Playfair Display, serenidade): `/adultos`, `/seniores`
- **Neutro**: homepage e páginas partilhadas
