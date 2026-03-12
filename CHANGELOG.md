# CHANGELOG — Giuliana Galvao Portfolio

## [2.0.0] — 2026-03-11

### Adicionado (SEO)
- Meta tags em todas as 8 paginas: title, description, keywords, author, robots
- Canonical URLs + hreflang (en, pt-BR, x-default) em todas as paginas
- Open Graph + Twitter Card em todas as paginas
- JSON-LD structured data: Person, WebSite, Article, BreadcrumbList, ProfilePage
- `robots.txt` com regras de crawl
- `sitemap.xml` com todas as 8 URLs
- Alt text descritivo em todas as imagens
- `loading="lazy"` em imagens below-the-fold
- Tag `<main>` semantica em todas as paginas

### Adicionado (GEO — Generative Engine Optimization)
- Schema `Article` com headline, datePublished, dateModified, mainEntityOfPage nos 6 case studies
- `SpeakableSpecification` em todas as 8 paginas
- `BreadcrumbList` schema nas 7 paginas internas
- `ProfilePage` schema na about.html

### Adicionado (Infra)
- `vercel.json` com headers de seguranca (X-Content-Type-Options, X-Frame-Options, Referrer-Policy)
- Cache de longa duracao para assets estaticos (images/, cases/)

### Atualizado
- README.md — estrutura, deploy Vercel, secao SEO/GEO, casos atualizados
- RULES.md — deploy Vercel, regras SEO, navegacao e casos atualizados
- CHANGELOG.md — historico completo desde 1.0.0

---

## [1.4.0] — 2026-03-10

### Adicionado
- `vercel.json` para configuracao de static file serving
- Deploy migrado de FTP para Vercel

---

## [1.3.0] — 2026-03-09

### Corrigido
- BB Influencer: correcoes de conteudo
- Neuroot: metricas atualizadas
- Padronizacao de icones em todas as paginas
- Preparacao para deploy

---

## [1.2.0] — 2026-03-08

### Atualizado
- Layout padronizado em todos os case studies (consistencia visual)

### Corrigido
- Nomes de participantes censurados no case Petrobras (privacidade)

---

## [1.1.0] — 2026-03-08

### Adicionado
- `cpfl-case.html` — Case study CPFL Solucoes (accent: blue-mid)
- `bb-influencer-case.html` — Case study BB Influencer School (accent: amber)

---

## [1.0.0] — 2026-03-07

### Adicionado
- `index.html` — Home com hero animado, work grid, process section, contact
- `about.html` — Pagina sobre com bio e skills
- `neuroot-case.html` — Case study Neuroot (accent: plum)
- `techback-case.html` — Case study TechBack BB (accent: green-deep)
- `previsul-case.html` — Case study Previsul (accent: blue-deep, imagens reais do S3)
- `petrobras-case.html` — Case study Petrobras PCD (accent: petro-deep)
- `public/images/techback/` — 15 screenshots do field research
- `vite.config.js` — Build multi-page
- `RULES.md` — Regras de desenvolvimento
- `README.md` — Documentacao completa
