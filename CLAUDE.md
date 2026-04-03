# Briefing de Atualizações do Site — Giuliana Lopes Galvão
**Data:** Março 2026  
**Status:** Implementado, aguardando commit no GitHub

---

## Contexto

O site passou por uma revisão estratégica completa focada em três públicos distintos:
- **Recrutadores** → CLT / PJ / início imediato
- **Founders e PMEs** → construção de produto com IA
- **Designers e PMs** → mentoria e cursos

Todas as páginas foram alinhadas visualmente e estrategicamente. As mudanças abaixo devem ser preservadas em qualquer edição futura.

---

## index.html — Home (portfólio)

### O que mudou

**Nav:**
- Removidos os links "Work with me" e "Learn"
- Adicionados 3 pills de audiência após o separador:
  - "I'm a recruiter / Sou recrutador" → ancora `#recruiter-cta`
  - "I have a project / Tenho um projeto" → `/trabalhe-comigo`
  - "I want to learn / Quero aprender" → `/aprender`
- CSS da classe `.nav-audience-link`: pill com borda, hover roxo

**Hero:**
- Badge verde pulsante adicionado ACIMA do `.hero-tag`:
  - Classe `.hero-available` com `.avail-dot` (animação `pulse-dot`)
  - Texto: "Available now · CLT · PJ · Freelance / Disponível agora · CLT · PJ · Freela"
- Terceiro botão nas `.hero-actions`: `.btn-recruiter` verde, ancora `#recruiter-cta`
- Elementos do hero NÃO têm classe `.reveal` — conteúdo aparece direto, sem depender do IntersectionObserver

**Nova seção `#recruiter-cta`** (inserida antes de `#contact`):
- Fundo `#050408`, borda sutil
- Badge verde + headline "Available now. *Let's talk.*"
- Specs: 8 anos · SP/Remoto · C1 · CLT·PJ·Freela · Início imediato
- CTAs: LinkedIn + WhatsApp
- Pills de stack: UX Strategy, Product Discovery, UX Research, Service Design, Design Engineering, AI-Native, React·Supabase, Figma, CLT·PJ·Freela, Início imediato
- Bilíngue: `.recruiter-headline.en/.pt` e `.recruiter-sub.en/.pt` com CSS explícito para troca de idioma

**JS — scroll reveal:**
- `threshold: 0.05`, `rootMargin: '0px 0px -20px 0px'`
- Sem disparo especial no hero (elementos não usam `.reveal`)

---

## trabalhe-comigo.html

### O que mudou

**Nav:**
- `.nav-logo` substituído por `.nav-back`: `← Home / ← Página Inicial` → `https://www.giulopesgalvao.com.br`
- CTA do nav aponta para `#contato`

**Serviços:**
- Bloco 03 (mentoria 1:1) **removido** — página agora tem apenas 2 serviços
- Título alterado: "Three ways" → "Two ways to get started"
- Grid de serviços: `grid-template-columns: 1fr 1fr` (era 3 colunas)
- Opção "quero aprender IA" removida do formulário (era o 4º option)

**Cross-link para /aprender:**
- Novo bloco `.learn-callout` adicionado após os serviços e antes do formulário
- Classe `.learn-banner`: fundo `var(--surface)`, borda roxa sutil
- Texto: "Para designers & PMs — quer aprender a usar IA no seu trabalho?"
- Botão `.btn-learn` → `/aprender`

**Footer:**
- "Learn / Aprender" → "Mentoring & courses / Mentoria & cursos"

**JS — scroll reveal:**
- Hero dispara imediatamente via `DOMContentLoaded`:
  ```js
  document.querySelectorAll('.hero .reveal,.hero .reveal-right,.hero .reveal-left')
    .forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 80));
  ```
- Observer: `threshold: 0.05`, `rootMargin: '0px 0px -20px 0px'`

---

## aprender.html

### O que mudou

**Nav:**
- `.nav-back`: `← Home / ← Página Inicial` → `https://www.giulopesgalvao.com.br`
- CTA do nav: "Book a session / Agendar sessão" → ancora `#mentoria`

**Hero:**
- CTAs reordenados: mentoria como primário, curso como secundário
- Botão primário: "Book 1:1 mentoring / Agendar mentoria 1:1"

**Seção mentoria — mudanças significativas:**

1. **Bloco de preço** (`.price-badge`) adicionado entre o título e os cards:
   - Preço: `R$250 / hora · U$50 / hora`
   - Sessão grátis: "First session free / Primeira sessão gratuita — sem compromisso"
   - CSS: `.price-badge`, `.price-main`, `.price-sub`, `.price-sep`, `.price-free`, `.price-free-label`, `.price-free-desc`

2. **Lista de resultados** (`.results-list`) adicionada após o price-badge:
   - 3 bullets com `.result-dot` (ponto roxo) + texto
   - "You leave with clarity and a concrete plan — not generic advice"
   - "Real AI workflow applied to your actual project or career situation"
   - "You know exactly what to do next and how to do it"

3. **CTA da mentoria** atualizado:
   - Botão: "Book free first session → / Agendar sessão gratuita →"
   - WhatsApp URL com texto pré-preenchido sobre sessão gratuita
   - Nota de rodapé: "Send a message on WhatsApp — I'll reply within 24h to schedule"
   - Layout: `.mentoria-cta` agora é flex com botão + nota

**Seção curso:**
- Badge "Coming soon / Em breve" adicionado antes do label
- CSS: `.curso-coming` (pill cinza com borda)

**CTA final (2 cards):**
- Card da mentoria: classe `featured` adicionada (borda roxa, fundo `var(--surface2)`)
- Card da mentoria mostra preço: "R$250 / hora · U$50 / hora — primeira sessão grátis"
- Label do card: "Mentoring · Available now / Mentoria · Disponível agora"
- Label do curso: "Course · Coming soon / Curso · Em breve"
- CSS: `.cta-card-price` (texto verde `var(--green)`)

**Waitlist:**
- Todos os formulários de waitlist usam o mesmo Formspree: `https://formspree.io/f/xyknoagr`
- Placeholders de nome e email definidos diretamente no HTML (não dependem só de JS)

**JS — scroll reveal:**
- Hero dispara imediatamente via `DOMContentLoaded` (mesmo padrão do trabalhe-comigo)
- Observer: `threshold: 0.05`, `rootMargin: '0px 0px -20px 0px'`

---

## about.html

### O que mudou

**Visual:**
- Mantido tema **CLARO** (fundo cream/branco) — as imagens usadas têm fundo branco
- Fontes originais preservadas: Cormorant Garamond + DM Sans + DM Mono
- Paleta original preservada: `--plum`, `--cream`, `--white`, `--ink`

**Nav:**
- `.nav-logo` substituído por `.nav-back`: `← Home / ← Página Inicial` → `index.html`
- Links internos de âncora mantidos (About, Expertise, Experience)
- Adicionado separador `.nav-sep` + 3 pills de audiência:
  - "I'm a recruiter" → `index.html#recruiter-cta`
  - "I have a project" → `/trabalhe-comigo`
  - "I want to learn" → `/aprender`
- CSS: `.nav-audience-link` adaptado para tema claro (cor `var(--plum)`, borda roxa leve)

**Hero:**
- Badge verde adicionado ACIMA do `.hero-eyebrow`:
  - Classe `.avail-badge` com `.avail-dot` (animação `pulse-dot` em verde escuro `#2D7A4F`)
  - Texto: "Available now · CLT · PJ · Freelance / Disponível agora · CLT · PJ · Freela"
- Stat "EN" substituído por "C1" (mais preciso e consistente com outras páginas)
- Botão "Download CV" adicionado como **primeiro** CTA:
  - Classe `.btn-cv` (roxo sólido, pill redondo)
  - Link: `/files/CV_Giuliana_Galvao_2026.pdf` com atributo `download`
  - Ícone SVG de download
- Botão WhatsApp: `.btn-wa` (verde)
- Botão LinkedIn: `.btn-outline` (borda cinza, hover roxo)

**Seção #contact-footer — completamente refeita:**
- Removido "Let's build something real" genérico
- Tag: badge verde pulsante + "Available for work — immediate start"
- Headline: "What are you looking for, *exactly?* / O que você está buscando, *exatamente?*"
- Grid de 3 cards de audiência (`.audience-grid`, `grid-template-columns: repeat(3,1fr)`):
  1. **Para recrutadores**: "Hire me · CLT or PJ" → Download CV + LinkedIn
  2. **Para founders**: "Build or consult" → `/trabalhe-comigo`
  3. **Para designers**: "Learn with me" → `/aprender` (menciona R$250/hora + 1ª sessão grátis)
- CSS: `.audience-card`, `.aud-label`, `.aud-title`, `.aud-desc`, `.aud-cta`
- Detalhes de contato: email + telefone + localização (linha horizontal)

**JS:**
- Observer padrão: `threshold: 0.08` (mesmo do original)
- Random hero photo mantido

---

## Arquivo CV

- `CV_Giuliana_Galvao_2026.pdf` deve estar em `/files/CV_Giuliana_Galvao_2026.pdf` no repositório
- Linkado no `about.html` (hero + card de recrutador)

---

## Variável CSS global nova: `--green`

Adicionada em todas as páginas onde aparece o badge de disponibilidade:
- `index.html`: `--green: #5ECE8B` (verde brilhante, tema escuro)
- `about.html`: `--green: #2D7A4F` (verde mais escuro, tema claro)
- `aprender.html`: `--green: #5ECE8B`

---

## Regras para futuras edições

1. **Não remover os pills de audiência do nav** — são a navegação principal entre públicos
2. **Não colocar mentoria de volta no trabalhe-comigo** — ela tem página própria em `/aprender`
3. **Não remover o preço da mentoria** — R$250/hora é decisão estratégica confirmada
4. **Não escurecer o about.html** — as imagens têm fundo branco, precisam de fundo claro
5. **Manter o badge "Available now"** em todas as páginas até situação mudar
6. **Hero elements nunca devem usar `.reveal`** no index.html — disparam direto
7. **Observer sempre com** `threshold: 0.05` e `rootMargin: '0px 0px -20px 0px'` — evita conteúdo invisível

---

## Regras de desenvolvimento

### Commits
Conventional commits: `feat:` (nova página/seção), `fix:` (bug), `style:` (visual), `content:` (texto/imagem), `chore:` (config), `docs:` (documentação)

### CSS variables (design system)
```css
--plum: #6B4FA0       /* accent principal */
--warm-cream: #FAF7F2  /* background */
--warm-stone: #EDE8E0  /* borders */
--ink: #1C1917         /* texto */
--ink-soft: #4A4542
--ink-muted: #8A8480
```
Accent colors por case: definidos localmente no `<style>` de cada HTML.

### Navegação entre cases (footer-nav)
Ordem atual:
```
Neuroot → Oráculo → Portfolio → TechBack → Petrobras → Previsul → CPFL → BB Influencer
```
Ao adicionar novo case, atualizar o footer-nav dos vizinhos.

### SEO obrigatório em toda página nova
- title, meta description, keywords, author, robots, canonical, hreflang (en + pt-BR + x-default)
- Open Graph + Twitter Card
- JSON-LD com `@graph` (Article + BreadcrumbList)
- Alt text descritivo + `loading="lazy"` em imagens below-the-fold
- Adicionar URL no `sitemap.xml`
- Adicionar entrada no `vite.config.js` rollupOptions

### Checklist de novo case
- [ ] Criar `[nome]-case.html` com accent color exclusiva
- [ ] Adicionar card no grid do `index.html`
- [ ] Atualizar footer-nav do case anterior e próximo
- [ ] Adicionar imagens em `cases/[nome]/`
- [ ] Adicionar no `sitemap.xml` e `vite.config.js`
- [ ] Conteúdo bilíngue EN/PT em todos os spans

### Regras gerais
- Imagens sempre como arquivo, nunca base64. Caminhos relativos.
- Google Fonts é o único CDN externo. Sem dependências de runtime.
- Projeto 100% estático e público. Sem `.env`, sem backend.
- Todo conteúdo novo usa classe `.reveal` (exceto hero do index.html).
