# 🤖 Regras de Desenvolvimento AI — Giuliana Galvão Portfolio
*Versão:* 1.0.0
*Adaptado para: Portfolio estático — HTML + Vite + deploy via FTP*

---

## CONTEXTO DO PROJETO

Este é um **portfolio estático** de UX Design. Stack:
- HTML5 + CSS3 + Vanilla JS (sem framework)
- Vite (build tool — gera `dist/` para upload via FTP)
- Google Fonts: Cormorant Garamond, DM Sans, DM Mono
- Deploy: hospedagem compartilhada (FTP/cPanel) com domínio via Cloudflare DNS
- Sem backend. Sem banco de dados. Sem `.env`. Sem autenticação.

---

## 🔍 VERIFICAÇÃO E ANÁLISE

**Regra 1 — Nunca suponha nada sobre arquivos**
Sempre abra e examine o arquivo completo antes de sugerir qualquer mudança, bug fix ou melhoria.

**Regra 2 — Consulte a documentação primeiro**
Verifique os arquivos `RULES.md`, `README.md` e `CHANGELOG.md` para entender contexto antes de alterar.

**Regra 3 — Analise dependências**
Antes de modificar qualquer HTML, verifique os links entre páginas: `index.html`, `about.html`, `*-case.html`. Uma mudança em navegação afeta todos os arquivos.

**Regra 4 — Entenda o sistema visual**
Todos os arquivos compartilham o mesmo sistema de design via CSS variables. Mudanças de cor, fonte ou animação devem ser aplicadas consistentemente em todos os HTMLs afetados.

**Regra 5 — Valide após implementar**
Sempre confirme que as modificações foram aplicadas corretamente e não quebraram links, imagens ou estilos em outras páginas.

---

## 🎯 EXECUÇÃO E COMUNICAÇÃO

**Regra 6 — Análise antes da ação**
Forneça uma análise clara do que será feito ANTES de executar qualquer modificação.

**Regra 7 — Explique uma vez, de forma objetiva**
Sem repetições. Sem resumos do que já foi feito. Direto ao ponto.

**Regra 8 — Instruções precisas**
Indique EXATAMENTE onde fazer mudanças: "no arquivo `techback-case.html`, abaixo da linha que contém `.case-footer-nav`, substitua X por Y".

**Regra 9 — Ações específicas**
Deixe claro se deve ADICIONAR, SUBSTITUIR ou DELETAR. Nunca deixe ambiguidade.

**Regra 10 — Confirmação pós-implementação**
Após cada mudança, indique o que deve ser testado no browser para confirmar que funcionou.

---

## ⚙️ CONFIGURAÇÃO E AMBIENTE

**Regra 11 — Versionamento no package.json e CHANGELOG**
A versão do projeto vive em `package.json` e no `CHANGELOG.md`. Não repita versão no cabeçalho de cada arquivo HTML — isso é redundante com Git.

**Regra 12 — Não existe `.env` neste projeto**
O portfolio é 100% estático e público. Não há secrets, tokens ou configurações sensíveis. Se no futuro houver formulário de contato (ex: EmailJS, Formspree), as chaves públicas vão diretamente no HTML. `.env` não se aplica aqui.

**Regra 13 — Caminhos de imagem são relativos**
Todas as imagens vivem em `public/images/`. Sempre use caminhos relativos (`images/techback/field-01.png`), nunca absolutos. O Vite resolve automaticamente no build.

**Regra 14 — Google Fonts é o único CDN externo**
Não adicione dependências externas (npm packages, CDNs de JS) sem aprovação explícita. O projeto é intencionalmente sem dependências de runtime.

**Regra 15 — Antes de qualquer `npm run build`**
Verificar que todos os links internos entre páginas estão corretos. Após o build, confirmar que a pasta `dist/` contém todos os HTMLs e a pasta `images/`. O upload via FTP deve ser da pasta `dist/` inteira, nunca de arquivos individuais.

---

## 📚 DOCUMENTAÇÃO E VERSIONAMENTO

**Regra 16 — CHANGELOG sempre atualizado**
Mantenha `CHANGELOG.md` atualizado a cada mudança significativa com versionamento semântico.

**Regra 17 — README sincronizado**
O `README.md` deve refletir o estado atual do projeto: quais páginas existem, quais cases estão pendentes, como rodar e fazer build.

**Regra 18 — Commits com conventional commits**
Use o padrão:
- `feat:` nova página ou seção
- `fix:` correção de bug ou link quebrado
- `style:` ajuste visual sem mudança de conteúdo
- `content:` atualização de texto/imagem de um case
- `chore:` atualização de dependências ou config
- `docs:` atualização de README, CHANGELOG, RULES

**Regra 19 — Branch por feature**
Trabalhe em branches descritivas:
- `feat/case-cpfl` para novo case
- `fix/links-navegacao` para correção de links
- `style/hero-animacao` para ajustes visuais

**Regra 20 — Tag ao publicar**
Crie uma tag Git sempre que fizer upload para produção:
`v1.0.0`, `v1.1.0`, etc. Isso marca exatamente o que está no ar.

---

## 🧩 ARQUITETURA DO PROJETO

**Regra 21 — Um arquivo por página**
Cada página é um HTML independente. Não há componentes compartilhados em runtime — o CSS variables system garante a consistência visual.

```
index.html              ← Home
about.html              ← Sobre
neuroot-case.html       ← Case: Neuroot
techback-case.html      ← Case: TechBack BB
previsul-case.html      ← Case: Previsul
petrobras-case.html     ← Case: Petrobras PCD
public/images/
  techback/             ← field-01.png … field-15.png
  previsul/             ← (reservado)
  about/                ← giuliana.jpg (pendente)
```

**Regra 22 — Sistema de design via CSS variables**
As variáveis abaixo são o único "design system" do projeto. Nunca hardcode cores ou fontes fora delas:

```css
--plum: #6B4FA0
--warm-cream: #FAF7F2    /* background padrão */
--warm-stone: #EDE8E0    /* borders */
--ink: #1C1917           /* texto principal */
--ink-soft: #4A4542
--ink-muted: #8A8480
/* Accent por case: definido localmente em cada arquivo */
```

**Regra 23 — Accent color por case**
Cada case tem sua própria cor de destaque, definida como variável local no topo do `<style>`:
- Neuroot: `--plum: #6B4FA0`
- Previsul: `--blue-deep: #2A3F65`
- TechBack: `--green-deep: #1A3D2B`
- Petrobras: `--petro-deep: #0A2A3A`

**Regra 24 — Navegação entre cases (footer-nav)**
Ordem obrigatória dos cases no footer-nav:
```
← Neuroot → TechBack → Petrobras → Previsul →
```
Ao adicionar novos cases, atualizar o footer-nav dos vizinhos.

**Regra 25 — Scroll reveal é padrão obrigatório**
Todo conteúdo novo deve usar a classe `.reveal` para animação de entrada:
```html
<div class="reveal">conteúdo</div>
```
O IntersectionObserver já está implementado em todos os arquivos.

---

## 🧪 QUALIDADE E PERFORMANCE

**Regra 26 — Imagens sempre como arquivo, nunca base64**
Nunca embute imagens como base64 nos HTMLs. Coloque em `public/images/[case]/` e referencie com caminho relativo. O Vite otimiza no build.

**Regra 27 — Arquivos HTML menores que 500 linhas**
Se um HTML ultrapassar 500 linhas, avalie se há seções que podem ser simplificadas. O limite é mais alto que em projetos com componentes porque aqui cada arquivo é autocontido.

**Regra 28 — Teste visual antes de commitar**
Rode `npm run dev` e abra cada página modificada no browser antes de qualquer commit. Verifique especialmente: links de navegação, imagens carregando, animações funcionando.

**Regra 29 — Linguagem direta para Dev Jr**
Instrua de forma clara e específica. Sem jargão desnecessário. Sem repetir o que já foi explicado. Se algo pode ser feito em 1 passo, não transforme em 3.

---

## 📋 CASES PENDENTES

Ao construir qualquer novo case, seguir este checklist:

- [ ] Receber briefing completo (contexto, método, resultados, imagens)
- [ ] Criar `[nome]-case.html` com accent color exclusiva
- [ ] Adicionar imagens em `public/images/[nome]/`
- [ ] Atualizar footer-nav do case anterior e próximo
- [ ] Adicionar card no work grid do `index.html`
- [ ] Atualizar `README.md` e `CHANGELOG.md`

**Cases em fila:**
- [ ] CPFL Solutions
- [ ] Investe Brasil
- [ ] Banco PAN — Intranet Redesign
- [ ] BB Influencer School Gamification

---

## 🚀 FLUXO DE DEPLOY

```bash
# 1. Desenvolver e testar local
npm run dev

# 2. Verificar todos os links internos

# 3. Gerar build
npm run build

# 4. Conferir pasta dist/ gerada
# dist/ deve conter: index.html, about.html, *-case.html, images/

# 5. Upload via FTP
# Fazer upload de TODO o conteúdo de dist/ para a raiz do domínio
# NUNCA fazer upload de arquivos individuais fora do build

# 6. Criar tag Git
git tag v1.x.x
git push origin v1.x.x
```
