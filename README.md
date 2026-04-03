# Giuliana Galvão — Portfolio

Portfolio de UX Design. HTML estático hospedado na Vercel.

**Domínio:** [giulopesgalvao.com.br](https://www.giulopesgalvao.com.br)

## Stack
- HTML5 + CSS3 + Vanilla JS (sem framework)
- Vite (build tool)
- Google Fonts: Cormorant Garamond, DM Sans, DM Mono
- Deploy: Vercel (static) — automático via push na `main`

## Estrutura
```
/
├── index.html                ← Home
├── about.html                ← Sobre
├── trabalhe-comigo.html      ← Serviços (2 opções)
├── aprender.html             ← Mentoria + Curso
├── neuroot-case.html         ← Case: Neuroot (accent: plum)
├── oraculo-case.html         ← Case: Meu Oráculo Pessoal (accent: gold)
├── portfolio-case.html       ← Case: This Portfolio (accent: plum)
├── techback-case.html        ← Case: TechBack BB (accent: green-deep)
├── petrobras-case.html       ← Case: Petrobras PCD (accent: petro-deep)
├── previsul-case.html        ← Case: Previsul (accent: blue-deep)
├── cpfl-case.html            ← Case: CPFL Soluções (accent: blue-mid)
├── bb-influencer-case.html   ← Case: BB Influencer School (accent: amber)
├── robots.txt                ← SEO: crawl rules
├── sitemap.xml               ← SEO: sitemap
├── vercel.json               ← Vercel config: headers, caching
├── images/                   ← Fotos da Giuliana
├── cases/                    ← Assets dos cases (por pasta)
├── files/                    ← CV para download
├── vite.config.js
└── package.json
```

## Comandos
```bash
npm install          # Instalar dependências
npm run dev          # Dev local (hot reload)
npm run build        # Build para produção (gera dist/)
npm run preview      # Preview do build
```

## Deploy
Automático via Vercel. Cada push na `main` dispara deploy.
- Domínio: giulopesgalvao.com.br (configurado na Vercel)
- `cleanUrls: true` — páginas servidas sem extensão .html

## Navegação entre cases (footer-nav)
```
Neuroot → Oráculo → Portfolio → TechBack → Petrobras → Previsul → CPFL → BB Influencer
```

## SEO & GEO
Todas as páginas incluem: meta tags, canonical URLs, hreflang (en/pt-BR), Open Graph, Twitter Card, JSON-LD, speakable schema, robots.txt, sitemap.xml, alt text descritivo, `loading="lazy"`.
