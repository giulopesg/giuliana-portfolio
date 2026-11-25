# Site de serviços — Giuliana Lopes Galvão
**Data:** Novembro 2026

---

## Contexto

O site é um **site de serviços** focado em empresas (negócios em crescimento, startups, agências e projetos públicos). Recrutadores têm página própria (`/recrutadores`), linkada no rodapé e no about.

Serviços oferecidos:
- Identidade visual
- Sites e plataformas
- Sistemas e apps com engenharia de IA
- Consultoria de UX
- UX em projetos públicos e licitações

---

## Mapa de páginas

| Página | Função |
|---|---|
| `index.html` | Home de serviços: hero + serviços/trabalhos + como trabalho + sobre (curto) + contato |
| `recrutadores.html` | Perfil profissional pra recrutador: expertise, metodologia completa, trajetória |
| `about.html` | Sobre (tema claro): bio, expertise, trajetória, formação, idiomas |
| `aprender.html` | Mentoria e cursos (fora do menu, `noindex`, fora do sitemap) |
| `*-case.html` | 11 cases publicados + 2 sem página (Caixalote, Meloon) + 1 sem página (Workshop SISP) |

---

## Regras para futuras edições

1. **Foco é serviço.** Recrutador tem página própria (`/recrutadores`), linkada no rodapé e no about.
2. **Nav global:** Serviços · Sobre · Recrutadores (sempre páginas) + botão Vamos conversar (ação, verde #5ECE8B com texto escuro). Âncoras nunca no menu. Escuro no index, recrutadores e cases; claro no about.
3. **Preço nunca aparece no site.**
4. **Sem "presencial".** Remota e global. Cidade só no rodapé.
5. **Clientes sob sigilo:** nunca citar órgão ou empresa contratante sem autorização. Na dúvida, usar descrição genérica (ex.: "Governo · segurança pública").
6. **Contato:** um único número, `wa.me/5511993862967`, **só WhatsApp** (nunca "telefone").
7. **Nenhum trabalho é removido.** Novo trabalho entra com tags de serviço (pode ter mais de uma).
8. **Grade de trabalhos:** no máximo 3 por linha. Card sem página (`hidden: true` ou sem `link`) nunca tem seta ↗ nem hover de link.
9. **Não escurecer o about.html** — imagens com fundo branco.
10. **Hero do index sem `.reveal`**; observer `threshold: 0.05`, `rootMargin: '0px 0px -20px 0px'`.
11. **Mentoria/`aprender` fora do menu** até voltar.

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
--green: #5ECE8B       /* tema escuro */
--green: #2D7A4F       /* tema claro (about.html) */
```
Accent colors por case: definidos localmente no `<style>` de cada HTML.

### Layout padrão
- Padding horizontal: `80px` desktop, `24px` mobile
- Sem `max-width` nos containers internos (conteúdo estica edge-to-edge)
- Seções: `padding: 120px 80px`
- Nav: `padding: 22px 80px` (escuro) / `20px 80px` (claro)
- Footer: `padding: 32px 80px`
- Hero: CSS Grid `1fr 1fr`, foto a 80% com mask-image fade

### Navegação entre cases (footer-nav)
Ordem circular:
```
Nudge → Solana WTF → Neuroot → Meu Oráculo Pessoal → Portfolio → Petrobras → TechBack BB → CPFL Soluções → BB Escola de Influenciadores → Previsul → (volta pro Nudge)
(Design System SISP: escondido até ser refeito — `hidden: true` no WORK, fora do git/deploy)
```
Ao adicionar novo case, atualizar o footer-nav dos vizinhos.

### SEO obrigatório em toda página nova
- title, meta description, keywords, author, robots, canonical, hreflang (en + pt-BR + x-default)
- Open Graph + Twitter Card
- JSON-LD com `@graph` (ProfessionalService ou Article + BreadcrumbList)
- Alt text descritivo + `loading="lazy"` em imagens below-the-fold
- Adicionar URL no `sitemap.xml`
- Adicionar entrada no `vite.config.js` rollupOptions

### Checklist de novo case
- [ ] Criar `[nome]-case.html` com accent color exclusiva
- [ ] Adicionar card no grid do `index.html` com tag(s) de serviço
- [ ] Atualizar footer-nav do case anterior e próximo (ordem circular)
- [ ] Adicionar imagens em `cases/[nome]/`
- [ ] Adicionar no `sitemap.xml` e `vite.config.js`
- [ ] Conteúdo bilíngue EN/PT em todos os spans
- [ ] CTA do case aponta pra `index.html#contato` + WhatsApp

### Regras gerais
- Imagens sempre como arquivo, nunca base64. Caminhos relativos.
- Google Fonts é o único CDN externo. Sem dependências de runtime.
- Projeto 100% estático e público. Sem `.env`, sem backend.
- Todo conteúdo novo usa classe `.reveal` (exceto hero do index.html).
- Único número de contato: `wa.me/5511993862967`. Nunca apresentar como telefone.
