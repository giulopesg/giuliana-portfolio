# Giuliana Galvão — Site de Serviços

Site de serviços de UX Design e engenharia de IA. HTML estático hospedado na Vercel.

**Domínio:** [giulopesgalvao.com.br](https://www.giulopesgalvao.com.br)

## Stack
- HTML5 + CSS3 + Vanilla JS
- Vite (build tool)
- Google Fonts: Cormorant Garamond, DM Sans, DM Mono
- Deploy: Vercel (static)

## Estrutura
```
/
├── index.html                ← Home de serviços
├── recrutadores.html         ← Perfil profissional (recrutadores)
├── about.html                ← Sobre (tema claro)
├── aprender.html             ← Mentoria e cursos (noindex, fora do menu)
├── design-system-case.html   ← Case: Design System SISP (Projetos públicos + Sistemas)
├── nudge-case.html           ← Case: Nudge (Sistemas e apps)
├── solana-wtf-case.html      ← Case: Solana WTF (Sites e plataformas)
├── neuroot-case.html         ← Case: Neuroot (Sistemas e apps)
├── oraculo-case.html         ← Case: Meu Oráculo Pessoal (Sistemas e apps)
├── portfolio-case.html       ← Case: Portfolio com IA (Sites e plataformas)
├── petrobras-case.html       ← Case: Petrobras acessibilidade (Consultoria UX)
├── techback-case.html        ← Case: TechBack BB (Consultoria UX)
├── cpfl-case.html            ← Case: CPFL Soluções (Consultoria UX)
├── bb-influencer-case.html   ← Case: BB Escola de Influenciadores (Sistemas e apps)
├── previsul-case.html        ← Case: Previsul (Consultoria UX)
├── robots.txt                ← SEO: crawl rules
├── sitemap.xml               ← SEO: sitemap
├── vercel.json               ← Vercel config: redirects, headers, cache
├── images/                   ← Fotos da Giuliana
├── cases/                    ← Assets dos cases
│   ├── design-system/
│   ├── nudge/
│   ├── solanawtf/
│   ├── neuroot/
│   ├── meuoraculopessoal/
│   ├── portfolio/
│   ├── techback/
│   ├── previsul/
│   ├── cpflsolucoes/
│   └── bancodobrasil-escoladeinfluenciadores/
├── files/                    ← CV e documentos
├── vite.config.js
└── package.json
```

## Comandos

### Instalar dependências
```bash
npm install
```

### Dev local (com hot reload)
```bash
npm run dev
```
Abre em http://localhost:5173

### Build para produção
```bash
npm run build
```
Gera a pasta `dist/` pronta para deploy.

### Preview do build
```bash
npm run preview
```

## Deploy (Vercel)
O deploy é automático via Vercel. Cada push na `main` dispara um novo deploy.
- Dashboard: Vercel project settings
- Domínio: giulopesgalvao.com.br (configurado na Vercel)

## SEO
Todas as páginas incluem:
- Meta tags: title, description, keywords, author, robots
- Canonical URLs + hreflang (en, pt-BR, x-default)
- Open Graph + Twitter Card
- JSON-LD structured data (ProfessionalService, BreadcrumbList, WebSite)
- robots.txt + sitemap.xml
- Alt text descritivo em todas as imagens
- `loading="lazy"` em imagens below-the-fold
- Vercel headers: security + cache de longa duração para assets

## Navegação entre cases (footer-nav)
Ordem circular:
```
Design System SISP → Nudge → Solana WTF → Neuroot → Meu Oráculo Pessoal → Portfolio → Petrobras → TechBack BB → CPFL Soluções → BB Escola de Influenciadores → Previsul → (volta)
```

## Cases pendentes (sem página HTML)
- [ ] Caixalote (Identidade visual) — falta imagem
- [ ] Meloon (Identidade visual) — falta imagem
- [ ] Workshop de Discovery SISP (Consultoria UX + Projetos públicos) — falta imagem
