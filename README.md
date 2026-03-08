# Giuliana Galvão — Portfolio

Portfolio de UX Design. HTML estático + Vite para build.

## Stack
- HTML5 + CSS3 + Vanilla JS
- Vite (build tool)
- Google Fonts: Cormorant Garamond, DM Sans, DM Mono

## Estrutura
```
/
├── index.html              ← Home
├── about.html              ← Sobre
├── neuroot-case.html       ← Case: Neuroot
├── techback-case.html      ← Case: TechBack BB
├── previsul-case.html      ← Case: Previsul
├── petrobras-case.html     ← Case: Petrobras PCD
├── public/
│   └── images/
│       ├── techback/       ← Screenshots do case TechBack (field-01..15.png)
│       ├── previsul/       ← (reservado)
│       └── about/          ← Foto da Giuliana (pendente)
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
Gera a pasta `dist/` pronta para upload.

### Preview do build
```bash
npm run preview
```

## Deploy (hospedagem do irmão)
1. Rodar `npm run build`
2. Fazer upload de TODA a pasta `dist/` via FTP/cPanel
3. Apontar o domínio para a pasta onde o `index.html` está

## Cases pendentes (sem HTML ainda)
- [ ] CPFL Solutions
- [ ] Investe Brasil
- [ ] Banco PAN — Intranet
- [ ] BB Influencer School Gamification

## Pendências visuais
- [ ] Foto da Giuliana → `public/images/about/giuliana.jpg`
- [ ] Substituir placeholder no `about.html`
