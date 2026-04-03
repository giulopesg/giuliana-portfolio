# Giuliana Galvão — Portfolio

Portfolio de UX Design. HTML estatico hospedado na Vercel.

**Dominio:** [giulopesgalvao.com.br](https://www.giulopesgalvao.com.br)

## Stack
- HTML5 + CSS3 + Vanilla JS
- Vite (build tool)
- Google Fonts: Cormorant Garamond, DM Sans, DM Mono
- Deploy: Vercel (static)

## Estrutura
```
/
├── index.html                ← Home
├── about.html                ← Sobre
├── neuroot-case.html         ← Case: Neuroot (accent: plum)
├── techback-case.html        ← Case: TechBack BB (accent: green-deep)
├── petrobras-case.html       ← Case: Petrobras PCD (accent: petro-deep)
├── previsul-case.html        ← Case: Previsul (accent: blue-deep)
├── cpfl-case.html            ← Case: CPFL Solucoes (accent: blue-mid)
├── bb-influencer-case.html   ← Case: BB Influencer School (accent: amber)
├── robots.txt                ← SEO: crawl rules
├── sitemap.xml               ← SEO: sitemap for search engines
├── vercel.json               ← Vercel config: headers, caching
├── images/                   ← Fotos da Giuliana
├── cases/                    ← Assets dos cases
│   ├── neuroot/
│   ├── techback/
│   ├── previsul/
│   ├── cpflsolucoes/
│   └── bancodobrasil-escoladeinfluenciadores/
├── public/images/techback/   ← Field research screenshots (field-01..15.png)
├── vite.config.js
└── package.json
```

## Comandos

### Instalar dependencias
```bash
npm install
```

### Dev local (com hot reload)
```bash
npm run dev
```
Abre em http://localhost:5173

### Build para producao
```bash
npm run build
```
Gera a pasta `dist/` pronta para deploy.

### Preview do build
```bash
npm run preview
```

## Deploy (Vercel)
O deploy e automatico via Vercel. Cada push na `main` dispara um novo deploy.
- Dashboard: Vercel project settings
- Dominio: giulopesgalvao.com.br (configurado na Vercel)

## SEO & GEO
Todas as paginas incluem:
- Meta tags: title, description, keywords, author, robots
- Canonical URLs + hreflang (en, pt-BR, x-default)
- Open Graph + Twitter Card
- JSON-LD structured data (Article, BreadcrumbList, ProfilePage, Person, WebSite)
- Speakable schema (GEO — Generative Engine Optimization)
- robots.txt + sitemap.xml
- Alt text descritivo em todas as imagens
- `loading="lazy"` em imagens below-the-fold
- Vercel headers: security + cache de longa duracao para assets

## Navegacao entre cases (footer-nav)
```
← Neuroot → TechBack → Petrobras → Previsul → CPFL → BB Influencer →
```

## Cases pendentes (sem HTML ainda)
- [ ] Investe Brasil
- [ ] Banco PAN — Intranet Redesign
