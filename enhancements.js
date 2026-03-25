/**
 * giuliana-portfolio — enhancements.js
 * 
 * 4 melhorias:
 *  1. Magnetic hover nos case cards
 *  2. Scroll animations alternadas esq/dir nos cards
 *  3. Nav aprimorada (scroll + active section highlight)
 *  4. Acessibilidade completa (skip link, aria, prefers-reduced-motion)
 * 
 * Como usar: <script src="enhancements.js" defer></script> antes de </body>
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     UTILITÁRIOS
  ───────────────────────────────────────────── */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice  = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  /* ─────────────────────────────────────────────
     1. ACESSIBILIDADE
        - Skip link "pular para o conteúdo"
        - aria-labels em elementos interativos sem texto
        - aria-current nas seções ativas
        - role="main" no <main>
        - prefers-reduced-motion: desativa animações
        - lang já existe no HTML, garantimos que não muda
  ───────────────────────────────────────────── */
  function initAccessibility() {

    /* Skip link */
    const skip = document.createElement('a');
    skip.href = '#main-content';
    skip.className = 'skip-link';
    skip.textContent = 'Pular para o conteúdo';
    skip.setAttribute('lang', 'pt');
    const skipStyle = document.createElement('style');
    skipStyle.textContent = `
      .skip-link {
        position: fixed;
        top: -100%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
        background: #6B4FA0;
        color: #fff;
        padding: 12px 24px;
        border-radius: 0 0 8px 8px;
        font-family: 'DM Sans', sans-serif;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        transition: top 0.2s ease;
        outline: none;
      }
      .skip-link:focus {
        top: 0;
      }
      /* Foco visível em todos os elementos interativos */
      a:focus-visible,
      button:focus-visible,
      [role="button"]:focus-visible,
      input:focus-visible,
      select:focus-visible,
      textarea:focus-visible {
        outline: 2px solid #8B6FC0 !important;
        outline-offset: 3px !important;
        border-radius: 4px;
      }
      /* prefers-reduced-motion: remove todas as animações */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
        .reveal {
          opacity: 1 !important;
          transform: none !important;
        }
      }
    `;
    document.head.appendChild(skipStyle);
    document.body.insertBefore(skip, document.body.firstChild);

    /* ID no main para o skip link funcionar */
    const main = document.querySelector('main');
    if (main) {
      main.id = 'main-content';
      main.setAttribute('role', 'main');
    }

    /* aria-label nos botões de idioma */
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
      const lang = btn.textContent.trim();
      btn.setAttribute('aria-label', lang === 'EN' ? 'Switch to English' : 'Mudar para Português');
      btn.setAttribute('role', 'radio');
    });
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
      langToggle.setAttribute('role', 'radiogroup');
      langToggle.setAttribute('aria-label', 'Seletor de idioma');
    }

    /* aria-label nos case cards (link sem texto descritivo suficiente) */
    const caseCards = document.querySelectorAll('.case-card');
    caseCards.forEach(card => {
      const title = card.querySelector('.case-title');
      if (title && !card.getAttribute('aria-label')) {
        card.setAttribute('aria-label', `Ver case: ${title.textContent.trim()}`);
      }
    });

    /* aria-label no botão de dark mode se existir */
    const darkToggle = document.querySelector('.dark-toggle');
    if (darkToggle) {
      darkToggle.setAttribute('aria-label', 'Alternar modo escuro');
      darkToggle.setAttribute('role', 'switch');
      darkToggle.setAttribute('aria-checked', 'false');
      darkToggle.addEventListener('click', () => {
        const checked = darkToggle.getAttribute('aria-checked') === 'true';
        darkToggle.setAttribute('aria-checked', String(!checked));
      });
    }

    /* Nav links — aria-current página ativa */
    const navLinks = document.querySelectorAll('.nav-links a:not(.nav-audience-link)');
    navLinks.forEach(link => {
      if (link.getAttribute('href') === '#hero' || link.getAttribute('href') === window.location.pathname) {
        link.setAttribute('aria-current', 'page');
      }
    });

    /* Disponibilidade badge — semântica */
    const avail = document.querySelector('.hero-available');
    if (avail) avail.setAttribute('aria-label', 'Status: disponível agora para CLT, PJ ou freela');

    /* Stat cards — aria-label descritivo */
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
      const num   = card.querySelector('.stat-num');
      const label = card.querySelector('.stat-label:not([style*="display: none"]), .stat-label.pt, .stat-label.en');
      if (num && label) {
        card.setAttribute('aria-label', `${num.textContent.trim()} ${label.textContent.trim()}`);
      }
    });

    /* Imagem do hero — alt já existe, garantir que está presente */
    const heroImg = document.querySelector('.hero-photo img');
    if (heroImg && !heroImg.getAttribute('alt')) {
      heroImg.setAttribute('alt', 'Giuliana Lopes Galvão — UX Designer Sênior');
    }

    /* nav role */
    const navbar = document.getElementById('navbar');
    if (navbar && !navbar.getAttribute('aria-label')) {
      navbar.setAttribute('aria-label', 'Navegação principal');
    }
  }

  /* ─────────────────────────────────────────────
     2. NAV APRIMORADA
        - Scroll: já existe .scrolled, mas melhora a transição
        - Active section: destaca o link da seção visível
        - Logo shrink suave
        - Indicador de progresso de leitura na borda inferior
  ───────────────────────────────────────────── */
  function initNav() {
    const navbar   = document.getElementById('navbar');
    if (!navbar) return;

    /* Estilos extras da nav */
    const s = document.createElement('style');
    s.textContent = `
      /* Indicador de progresso de leitura */
      #read-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 2px;
        width: 0%;
        background: linear-gradient(90deg, #6B4FA0, #8B6FC0, #D4C8EF);
        z-index: 100;
        transition: width 0.1s linear;
        pointer-events: none;
      }

      /* Nav link ativo */
      .nav-links a.nav-active {
        color: var(--plum-pale) !important;
      }
      .nav-links a.nav-active::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: var(--plum-pale);
        margin-top: 2px;
        border-radius: 1px;
        animation: ${prefersReduced ? 'none' : 'navUnderline 0.3s ease forwards'};
      }
      @keyframes navUnderline {
        from { width: 0; opacity: 0; }
        to   { width: 100%; opacity: 1; }
      }

      /* Nav scrolled — mais sólida, logo menor */
      nav.scrolled .nav-name {
        font-size: 15px;
        transition: font-size 0.4s ease;
      }
      nav .nav-name {
        transition: font-size 0.4s ease;
      }
    `;
    document.head.appendChild(s);

    /* Barra de progresso */
    const progress = document.createElement('div');
    progress.id = 'read-progress';
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-label', 'Progresso de leitura da página');
    progress.setAttribute('aria-valuenow', '0');
    progress.setAttribute('aria-valuemin', '0');
    progress.setAttribute('aria-valuemax', '100');
    document.body.appendChild(progress);

    /* Seções para active tracking */
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY  = window.scrollY;
        const docH     = document.documentElement.scrollHeight - window.innerHeight;
        const pct      = docH > 0 ? Math.round((scrollY / docH) * 100) : 0;

        /* progresso */
        progress.style.width = pct + '%';
        progress.setAttribute('aria-valuenow', pct);

        /* scrolled */
        navbar.classList.toggle('scrolled', scrollY > 40);

        /* active section */
        if (!prefersReduced) {
          let activeId = '';
          sections.forEach(sec => {
            const top = sec.getBoundingClientRect().top;
            if (top <= 120) activeId = sec.id;
          });
          navAnchors.forEach(a => {
            const href = a.getAttribute('href').replace('#', '');
            a.classList.toggle('nav-active', href === activeId);
            if (href === activeId) {
              a.setAttribute('aria-current', 'true');
            } else {
              a.removeAttribute('aria-current');
            }
          });
        }

        ticking = false;
      });
    }, { passive: true });
  }

  /* ─────────────────────────────────────────────
     3. SCROLL ANIMATIONS — entrada alternada
        Cards ímpares entram da esquerda, pares da direita.
        Seções de texto sobem com fade.
        Usa IntersectionObserver (já existe .reveal, só melhora).
  ───────────────────────────────────────────── */
  function initScrollAnimations() {
    if (prefersReduced) return;

    const s = document.createElement('style');
    s.textContent = `
      /* Reset do reveal existente — vamos sobrescrever */
      .reveal {
        opacity: 0;
        transition:
          opacity  0.85s cubic-bezier(0.16, 1, 0.3, 1),
          transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .reveal.visible {
        opacity: 1 !important;
        transform: none !important;
      }

      /* Cards entram da esquerda por padrão */
      .cases-grid .case-card.reveal {
        transform: translateX(-40px) translateY(20px);
      }
      /* Cards pares entram da direita */
      .cases-grid .case-card.reveal.from-right {
        transform: translateX(40px) translateY(20px);
      }

      /* Section titles — sobem com blur */
      .section-title.reveal {
        transform: translateY(32px);
        filter: blur(4px);
        transition:
          opacity  0.9s cubic-bezier(0.16, 1, 0.3, 1),
          transform 0.9s cubic-bezier(0.16, 1, 0.3, 1),
          filter   0.9s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .section-title.reveal.visible {
        filter: blur(0) !important;
      }

      /* Section labels — deslizam da esquerda */
      .section-label.reveal {
        transform: translateX(-20px);
      }

      /* Aside blocks — sobem */
      .about-aside.reveal {
        transform: translateY(40px);
      }

      /* Stagger nos cards */
      .cases-grid .case-card.reveal:nth-child(1) { transition-delay: 0s; }
      .cases-grid .case-card.reveal:nth-child(2) { transition-delay: 0.08s; }
      .cases-grid .case-card.reveal:nth-child(3) { transition-delay: 0.04s; }
      .cases-grid .case-card.reveal:nth-child(4) { transition-delay: 0.12s; }
      .cases-grid .case-card.reveal:nth-child(5) { transition-delay: 0.06s; }
      .cases-grid .case-card.reveal:nth-child(6) { transition-delay: 0.10s; }
      .cases-grid .case-card.reveal:nth-child(7) { transition-delay: 0.02s; }
    `;
    document.head.appendChild(s);

    /* Marcar cards pares para entrar da direita */
    const caseCards = document.querySelectorAll('.cases-grid .case-card.reveal');
    caseCards.forEach((card, i) => {
      if (i % 2 !== 0) card.classList.add('from-right');
    });

    /* Resetar os que já foram marcados como visible pelo observer anterior */
    document.querySelectorAll('.reveal.visible').forEach(el => {
      /* Só reseta se ainda não está na viewport */
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight) {
        el.classList.remove('visible');
      }
    });

    /* Novo observer com threshold mais alto para efeito mais dramático */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          /* Não observar mais depois de revelar */
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  /* ─────────────────────────────────────────────
     4. MAGNETIC HOVER NOS CASE CARDS
        O .case-inner segue o mouse dentro do card
        com uma força suave (6%).
        No mobile/touch: desativado.
        prefers-reduced-motion: desativado.
  ───────────────────────────────────────────── */
  function initMagneticCards() {
    if (prefersReduced || isTouchDevice) return;

    /* Estilos extras para o efeito */
    const s = document.createElement('style');
    s.textContent = `
      .case-card .case-inner {
        will-change: transform;
      }
      /* Sombra suave aparece no hover magnético */
      .case-card:hover .case-inner {
        filter: drop-shadow(0 8px 32px rgba(107, 79, 160, 0.15));
      }
      /* Cursor pointer explícito */
      .case-card {
        cursor: pointer;
      }
    `;
    document.head.appendChild(s);

    const cards = document.querySelectorAll('.case-card');

    cards.forEach(card => {
      const inner = card.querySelector('.case-inner');
      if (!inner) return;

      let targetX = 0, targetY = 0;
      let currentX = 0, currentY = 0;
      let rafId = null;
      let isHovering = false;

      /* Lerp suave */
      function lerp(a, b, t) { return a + (b - a) * t; }

      function animate() {
        currentX = lerp(currentX, targetX, 0.1);
        currentY = lerp(currentY, targetY, 0.1);

        inner.style.transform = `translateY(-4px) translate(${currentX}px, ${currentY}px)`;

        /* Parar o loop quando estiver próximo do destino */
        if (isHovering || Math.abs(currentX - targetX) > 0.1 || Math.abs(currentY - targetY) > 0.1) {
          rafId = requestAnimationFrame(animate);
        } else {
          rafId = null;
        }
      }

      card.addEventListener('mouseenter', () => {
        isHovering = true;
        if (!rafId) rafId = requestAnimationFrame(animate);
      });

      card.addEventListener('mousemove', e => {
        const rect   = card.getBoundingClientRect();
        const cx     = e.clientX - rect.left;
        const cy     = e.clientY - rect.top;
        const relX   = cx - rect.width  / 2;
        const relY   = cy - rect.height / 2;
        const force  = 0.06;

        targetX = relX * force;
        targetY = relY * force;
      });

      card.addEventListener('mouseleave', () => {
        isHovering = false;
        targetX = 0;
        targetY = 0;
        /* Continua animando até voltar para 0 */
        if (!rafId) rafId = requestAnimationFrame(animate);
      });
    });
  }

  /* ─────────────────────────────────────────────
     INIT — ordem importa:
     1. acessibilidade primeiro (DOM changes)
     2. nav
     3. scroll animations
     4. magnetic cards
  ───────────────────────────────────────────── */
  function init() {
    initAccessibility();
    initNav();
    initScrollAnimations();
    initMagneticCards();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
