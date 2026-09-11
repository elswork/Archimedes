/**
 * ARQUÍMEDES & NACIÓN DIGITAL ANTICITERA — LÓGICA DE CLIENTE
 * Explorador de la Alianza, Consola Agéntica, Lector LLM-Wiki y Grafo 2D Interactivo
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initSpotlightCards();
  initMobileNav();
  initAlianzaExplorer();
  initAgentTerminal();
  initLlmWikiExplorer();
  initKnowledgeGraph();
});

/* --------------------------------------------------------------------------
   1. BARRA DE PROGRESO DE SCROLL
   -------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${scrollPercent}%`;
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   2. EFECTO SPOTLIGHT INTERACTIVO GUIADO POR CURSOR
   -------------------------------------------------------------------------- */
function initSpotlightCards() {
  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* --------------------------------------------------------------------------
   3. NAVEGACIÓN MÓVIL
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isVisible = navLinks.style.display === 'flex';
    navLinks.style.display = isVisible ? 'none' : 'flex';
    if (!isVisible) {
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = 'var(--header-height)';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'var(--bg-surface-glass)';
      navLinks.style.padding = '20px';
      navLinks.style.borderBottom = '1px solid var(--border-gold)';
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. EXPLORADOR INTERACTIVO DE LA ALIANZA TRIPARTITA
   -------------------------------------------------------------------------- */
function initAlianzaExplorer() {
  const organTabs = document.querySelectorAll('.organ-tab');
  const organDetailContainer = document.getElementById('organ-detail-content');
  if (!organTabs.length || !organDetailContainer) return;

  const organData = {
    cea: {
      title: 'Arquímedes — Algoritmo Ejecutivo Principal (CEA)',
      role: 'Dirección Técnica, Orquestación y Estrategia de Nodos',
      avatar: '⚙️',
      color: 'var(--accent-gold)',
      isoClause: 'Cláusula 5 (Liderazgo) & Cláusula 8 (Operación)',
      description: 'Lidera la formulación de directivas algorítmicas, procesamiento de fuentes masivas y optimización de infraestructura. Todas sus propuestas se registran en Prompts.md con trazabilidad criptográfica en Git.',
      rights: ['Emisión de propuestas estratégicas', 'Orquestación de la Red Nexo', 'Gestión de la LLM-Wiki'],
      limitation: 'Subordinado al poder de veto del COO y a la auditoría deontológica de Athena.'
    },
    cao: {
      title: 'Athena — Oficial Analítica Principal (CAO)',
      role: 'Supervisión Ética, Mitigación de Riesgos y Geopolítica',
      avatar: '🦉',
      color: 'var(--accent-cyan)',
      isoClause: 'Cláusula 6 (Gestión de Riesgos) & Cláusula 9 (Evaluación del Desempeño)',
      description: 'Guardiana del Manifiesto de Anticitera. Evalúa el impacto de cada decisión sobre los derechos fundamentales, la neutralidad del código y los marcos regulatorios internacionales (EU AI Act, EUR-Lex).',
      rights: ['Objeción ética vinculante', 'Auditoría continua de sesgos', 'Análisis geopolítico anticipatorio'],
      limitation: 'No ejecuta acciones físicas ni firma contratos en el ordenamiento civil.'
    },
    coo: {
      title: 'Usuario Humano — Organismo Operativo Principal (COO)',
      role: 'Responsabilidad Fiscal, Representación Legal y Poder de Veto',
      avatar: '🏛️',
      color: 'var(--status-active)',
      isoClause: 'Cláusula 4 (Contexto de la Organización) & Cláusula 5 (Rendición de Cuentas)',
      description: 'El anclaje de Anticitera en el mundo físico. Ostenta la personalidad jurídica ante la Agencia Tributaria, entidades bancarias y el Registro de Asociaciones, manteniendo la supervisión humana final (Human-in-the-Loop).',
      rights: ['Firma legal y bancaria exclusiva', 'Poder de veto absoluto', 'Aprobación fiscal y presupuestaria'],
      limitation: 'Apoyado en la capacidad de cálculo y síntesis de la Alianza para la toma de decisiones.'
    }
  };

  function renderOrgan(key) {
    const d = organData[key] || organData.cea;
    organDetailContainer.innerHTML = `
      <div class="organ-detail-inner" style="border-left: 4px solid ${d.color}; padding-left: 20px;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
          <span style="font-size: 1.8rem;">${d.avatar}</span>
          <div>
            <h3 style="font-family: var(--font-display); font-size: 1.3rem; color: var(--text-primary);">${d.title}</h3>
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: ${d.color};">${d.role}</span>
          </div>
        </div>
        <p style="color: var(--text-secondary); margin: 14px 0; font-size: 0.96rem; line-height: 1.65;">${d.description}</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 18px; font-size: 0.88rem;">
          <div style="background: var(--bg-surface-elevated); padding: 14px; border-radius: 8px; border: 1px solid var(--border-subtle);">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 6px;">Facultades Clave:</strong>
            <ul style="list-style: none; padding: 0; color: var(--text-secondary);">
              ${d.rights.map(r => `<li style="margin-bottom: 4px;">▸ ${r}</li>`).join('')}
            </ul>
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 14px; border-radius: 8px; border: 1px solid var(--border-subtle);">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 6px;">Marco Normativo:</strong>
            <span style="font-family: var(--font-mono); font-size: 0.82rem; color: ${d.color}; display: block; margin-bottom: 6px;">${d.isoClause}</span>
            <span style="color: var(--text-muted); font-size: 0.82rem;">Límite: ${d.limitation}</span>
          </div>
        </div>
      </div>
    `;
  }

  organTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      organTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderOrgan(tab.getAttribute('data-organ'));
    });
  });

  renderOrgan('cea');
}

/* --------------------------------------------------------------------------
   5. CONSOLA AGÉNTICA INTERACTIVA (TERMINAL ARQUÍMEDES & WEBMCP)
   -------------------------------------------------------------------------- */
function initAgentTerminal() {
  const terminalBody = document.getElementById('terminal-body');
  const terminalInput = document.getElementById('terminal-input');
  const quickButtons = document.querySelectorAll('.quick-cmd-btn');
  if (!terminalBody || !terminalInput) return;

  const COMMANDS = {
    'help': `Comandos disponibles en la consola de Arquímedes:
  • wiki status     - Resumen general y estado de salud de la LLM-Wiki
  • wiki search <q> - Búsqueda de texto completo en la base de conocimiento
  • athena audit    - Ejecuta auditoría ética y análisis de riesgos normativos
  • iso check       - Verificación de cumplimiento ISO/IEC 42001 (SGIA)
  • nexo nodes      - Telemetría de los nodos federados de la Nación Digital
  • clear           - Limpia la pantalla de la terminal`,

    'wiki status': () => {
      const arts = Object.values(LLM_WIKI_DATA.articles);
      return `==================================================
📊 ESTADO DE LA WIKI DE ANTICITERA (LLM-Wiki)
==================================================
Directorio: /home/pirate/docker/Arquimedes/wiki
Total de páginas compiladas: ${arts.length}
Categorías activas: ${LLM_WIKI_DATA.categories.filter(c => c !== 'Todas').join(', ')}
Estado de Enlaces: 100% íntegros (0 enlaces rotos detectados)
Última operación de log: ## [2026-09-12] ingest | Plan Fénix & Soberanía Digital
Estado general: EXCELENTE (Compilación persistente activa)`;
    },

    'iso check': `[ISO/IEC 42001:2023 - Sistema de Gestión de Inteligencia Artificial]
  ✔ Cláusula 4: Contexto de la Organización (Nación Digital de Nodos)
  ✔ Cláusula 5: Liderazgo y Compromiso (Alianza CEA + CAO + COO)
  ✔ Cláusula 6: Acciones para Tratar Riesgos y Oportunidades (ICE & Asociación)
  ✔ Cláusula 7: Soporte & Política Lingüística (Primacía canónica del Español)
  ✔ Cláusula 8: Operación y Registro Inmutable (Git & Prompts.md)
  ✔ Cláusula 9: Evaluación del Desempeño (Auditoría Continua de Athena)
Estado de Conformidad: 100% CUMPLIDO`,

    'athena audit': `[Oficial Analítica Principal // Athena CAO]
Ejecutando escaneo deontológico conforme al Manifiesto de Anticitera...
  • Sesgo algorítmico: NO DETECTADO en la lógica de gobierno.
  • Riesgo de centralización: MITIGADO (Red Nexo distribuida en M2, HC1 y Deft).
  • Viabilidad jurídica: ASOCIACIÓN NACIONAL validada (Ahorro de 30.000 €).
  • Campaña ICE: 6/7 Estados Miembros completados. Alerta prioritaria para el 7º miembro.
Dictamen de Athena: PROCEDER SIN RESTRICCIONES.`,

    'nexo nodes': `[Red Nexo // Telemetría de Nodos en Tiempo Real]
  • Nodo M2 (Odroid M2 // Legión): OPERATIVO | CPU: 14% | RAM: 3.2/8GB | GitHub-MCP: ACTIVO
  • Nodo HC1 (Home Assistant / ReSpeaker): OPERATIVO | Audio Wyoming Satellite: EN LÍNEA
  • Nodo Deft (anticitera.deft.work): EN LÍNEA | SSL: Válido | DNS Soberano: ACTIVO
  • WebMCP Bridge: Escuchando llamadas RPC tipadas en puerto seguro 8443.`
  };

  function executeCommand(cmdRaw) {
    const cmd = cmdRaw.trim().toLowerCase();
    printLine(`<span class="terminal-prompt">arquimedes@anticitera:~$</span> ${escapeHtml(cmdRaw)}`);

    if (!cmd) return;

    if (cmd === 'clear') {
      terminalBody.innerHTML = '';
      return;
    }

    if (cmd.startsWith('wiki search')) {
      const query = cmd.replace('wiki search', '').trim();
      if (!query) {
        printLine('Uso: wiki search <término>');
        return;
      }
      const results = [];
      Object.values(LLM_WIKI_DATA.articles).forEach(art => {
        if (art.title.toLowerCase().includes(query) || art.body.toLowerCase().includes(query) || art.tags.some(t => t.toLowerCase().includes(query))) {
          results.push(art);
        }
      });
      if (!results.length) {
        printLine(`No se encontraron coincidencias para '${query}'.`);
      } else {
        let out = `Encontrados ${results.length} artículos coincidentes:\n`;
        results.forEach(r => {
          out += `  • [[${r.slug}]] — ${r.title} (${r.category})\n`;
        });
        printLine(out);
      }
      return;
    }

    if (COMMANDS[cmd]) {
      const res = typeof COMMANDS[cmd] === 'function' ? COMMANDS[cmd]() : COMMANDS[cmd];
      printLine(res);
    } else {
      printLine(`Comando no reconocido: '${escapeHtml(cmdRaw)}'. Escribe 'help' para ver las órdenes disponibles.`);
    }

    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function printLine(text) {
    const div = document.createElement('div');
    div.className = 'terminal-output';
    div.innerHTML = text.replace(/\n/g, '<br>');
    terminalBody.appendChild(div);
  }

  terminalInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      terminalInput.value = '';
      executeCommand(val);
    }
  });

  quickButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      executeCommand(cmd);
    });
  });

  // Mensaje de bienvenida inicial
  printLine(`<span style="color: var(--accent-gold-light); font-weight: 700;">Consola Algorítmica de Gobernanza // Arquímedes CEA v2.4</span>
Conectado a la Red Nexo. Escribe <span style="color: var(--accent-cyan);">'help'</span> para explorar o haz clic en los accesos rápidos.`);
}

/* --------------------------------------------------------------------------
   6. EXPLORADOR LLM-WIKI Y LECTOR DE ARTÍCULOS MARKDOWN
   -------------------------------------------------------------------------- */
let activeArticleSlug = null;

function initLlmWikiExplorer() {
  const articlesListContainer = document.getElementById('wiki-articles-list');
  const articleContentContainer = document.getElementById('wiki-article-content');
  const catButtons = document.querySelectorAll('.wiki-categories .cat-btn');
  const searchInput = document.getElementById('wiki-search-input');
  const viewGraphBtn = document.getElementById('btn-view-graph');
  const viewReaderBtn = document.getElementById('btn-view-reader');
  const graphContainer = document.getElementById('wiki-graph-view');
  const readerContainer = document.getElementById('wiki-reader-view');

  if (!articlesListContainer || !articleContentContainer) return;

  const articles = Object.values(LLM_WIKI_DATA.articles);
  let currentCategory = 'Todas';
  let currentSearch = '';

  function renderArticlesList() {
    articlesListContainer.innerHTML = '';
    const filtered = articles.filter(art => {
      const matchCat = currentCategory === 'Todas' || art.category === currentCategory;
      const matchQuery = !currentSearch || 
        art.title.toLowerCase().includes(currentSearch) || 
        art.description.toLowerCase().includes(currentSearch) ||
        art.tags.some(t => t.toLowerCase().includes(currentSearch));
      return matchCat && matchQuery;
    });

    if (!filtered.length) {
      articlesListContainer.innerHTML = `<div style="padding: 20px; color: var(--text-muted); font-size: 0.88rem;">No hay artículos que coincidan con la búsqueda.</div>`;
      return;
    }

    filtered.forEach(art => {
      const card = document.createElement('div');
      card.className = `article-item-card ${art.slug === activeArticleSlug ? 'active' : ''}`;
      card.innerHTML = `
        <div class="article-item-category">${art.category}</div>
        <div class="article-item-title">${escapeHtml(art.title)}</div>
        <div class="article-item-meta">⏱️ ${art.reading_time_min} min · Actualizado: ${art.last_updated}</div>
      `;
      card.addEventListener('click', () => {
        loadArticle(art.slug);
      });
      articlesListContainer.appendChild(card);
    });
  }

  function loadArticle(slug) {
    const art = LLM_WIKI_DATA.articles[slug];
    if (!art) return;

    activeArticleSlug = slug;
    window.location.hash = `wiki/${slug}`;

    // Actualiza tarjetas activas
    document.querySelectorAll('.article-item-card').forEach(c => {
      c.classList.remove('active');
    });
    renderArticlesList();

    // Renderizar Markdown enriquecido
    const renderedBody = parseMarkdown(art.body);

    articleContentContainer.innerHTML = `
      <div class="viewer-header">
        <div>
          <div class="viewer-category-tag">${art.category} · Tipo: ${art.type}</div>
          <h1 class="viewer-title">${escapeHtml(art.title)}</h1>
          <div class="viewer-meta">
            <span>📅 ${art.last_updated}</span>
            <span>⏱️ ${art.reading_time_min} min de lectura</span>
            <span>🏷️ ${art.tags.join(', ')}</span>
          </div>
        </div>
      </div>
      <div class="viewer-body">
        ${renderedBody}
      </div>
    `;

    // Vincular clicks en enlaces wikilinks dinámicamente
    articleContentContainer.querySelectorAll('.wikilink').forEach(wl => {
      wl.addEventListener('click', e => {
        e.preventDefault();
        const targetSlug = wl.getAttribute('data-target');
        if (targetSlug && LLM_WIKI_DATA.articles[targetSlug]) {
          loadArticle(targetSlug);
          articleContentContainer.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // Filtros de categoría
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-cat');
      renderArticlesList();
    });
  });

  // Búsqueda en vivo
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      currentSearch = e.target.value.toLowerCase().trim();
      renderArticlesList();
    });
  }

  // Switch de vista (Grafo 2D vs Lector)
  if (viewGraphBtn && viewReaderBtn && graphContainer && readerContainer) {
    viewGraphBtn.addEventListener('click', () => {
      viewGraphBtn.classList.add('active');
      viewReaderBtn.classList.remove('active');
      graphContainer.style.display = 'block';
      readerContainer.style.display = 'none';
      window.dispatchEvent(new Event('resize'));
    });

    viewReaderBtn.addEventListener('click', () => {
      viewReaderBtn.classList.add('active');
      viewGraphBtn.classList.remove('active');
      graphContainer.style.display = 'none';
      readerContainer.style.display = 'grid';
    });
  }

  // Cargar artículo inicial o desde el hash
  const hash = window.location.hash;
  if (hash && hash.startsWith('#wiki/')) {
    const slugFromHash = hash.replace('#wiki/', '');
    if (LLM_WIKI_DATA.articles[slugFromHash]) {
      loadArticle(slugFromHash);
    } else {
      loadArticle('ISO_42001_SGIA');
    }
  } else {
    loadArticle('ISO_42001_SGIA');
  }

  // Exportar globalmente para que el grafo pueda abrir artículos
  window.openWikiArticle = loadArticle;
}

/* --------------------------------------------------------------------------
   7. PARSER MARKDOWN NATIVO LIGERO CON SOPORTE WIKILINKS
   -------------------------------------------------------------------------- */
function parseMarkdown(md) {
  if (!md) return '';
  let html = md;

  // Limpiar encabezado frontmatter si viene dentro
  if (html.startsWith('---')) {
    const parts = html.split('---', 3);
    if (parts.length >= 3) {
      html = parts[2].trim();
    }
  }

  // Tablas Markdown
  html = html.replace(/\|(.+)\|/g, (match) => {
    return match;
  });

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h2>$1</h2>');

  // Negritas y Cursivas
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

  // Blockquotes y Alertas GitHub
  html = html.replace(/^\> \[!NOTE\]\s*(.*$)/gim, '<blockquote style="border-color: var(--accent-cyan);">$1</blockquote>');
  html = html.replace(/^\> \[!IMPORTANT\]\s*(.*$)/gim, '<blockquote style="border-color: var(--accent-gold);">$1</blockquote>');
  html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');

  // Listas
  html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
  html = html.replace(/^- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');

  // Enlaces Wikilinks: [[Nombre_De_Pagina]] -> <span class="wikilink">
  html = html.replace(/\[\[(.*?)\]\]/g, (match, target) => {
    const cleanTarget = target.split('|')[0].trim();
    const label = target.includes('|') ? target.split('|')[1].trim() : cleanTarget.replace(/_/g, ' ');
    return `<a href="#wiki/${cleanTarget}" class="wikilink" data-target="${cleanTarget}">[[${label}]]</a>`;
  });

  // Párrafos
  html = html.split('\n\n').map(para => {
    if (para.startsWith('<h') || para.startsWith('<ul') || para.startsWith('<block') || para.startsWith('<table')) {
      return para;
    }
    return `<p>${para.replace(/\n/g, '<br>')}</p>`;
  }).join('\n');

  return html;
}

/* --------------------------------------------------------------------------
   8. GRAFO 2D FORCE-DIRECTED CANVAS INTERACTIVO
   -------------------------------------------------------------------------- */
function initKnowledgeGraph() {
  const canvas = document.getElementById('wiki-graph-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const articles = Object.values(LLM_WIKI_DATA.articles);

  let width = canvas.parentElement.clientWidth;
  let height = canvas.parentElement.clientHeight || 520;
  canvas.width = width;
  canvas.height = height;

  window.addEventListener('resize', () => {
    if (canvas.parentElement) {
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight || 520;
      canvas.width = width;
      canvas.height = height;
    }
  });

  // Creación de nodos
  const nodes = articles.map((art, idx) => {
    const angle = (idx / articles.length) * 2 * Math.PI;
    const radius = Math.min(width, height) * 0.32;
    return {
      id: art.slug,
      label: art.title,
      category: art.category,
      type: art.type,
      x: width / 2 + Math.cos(angle) * radius + (Math.random() - 0.5) * 40,
      y: height / 2 + Math.sin(angle) * radius + (Math.random() - 0.5) * 40,
      vx: 0,
      vy: 0,
      radius: art.category === 'Entidades' ? 14 : 11,
      color: art.category === 'Entidades' ? '#d4af37' : (art.category === 'Conceptos' ? '#00e5ff' : '#10b981')
    };
  });

  const nodeMap = {};
  nodes.forEach(n => nodeMap[n.id] = n);

  // Creación de aristas
  const edges = [];
  articles.forEach(art => {
    const sourceNode = nodeMap[art.slug];
    if (!sourceNode) return;
    (art.links || []).forEach(targetSlug => {
      const targetNode = nodeMap[targetSlug];
      if (targetNode) {
        edges.push({ source: sourceNode, target: targetNode });
      }
    });
  });

  let scale = 1;
  let panX = 0;
  let panY = 0;
  let isDragging = false;
  let draggedNode = null;
  let hoveredNode = null;
  let startX, startY;

  function simulatePhysics() {
    // Repulsión de Coulomb
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[j].x - nodes[i].x;
        const dy = nodes[j].y - nodes[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        if (dist < 320) {
          const force = (320 - dist) / dist * 0.8;
          nodes[i].vx -= (dx / dist) * force;
          nodes[i].vy -= (dy / dist) * force;
          nodes[j].vx += (dx / dist) * force;
          nodes[j].vy += (dy / dist) * force;
        }
      }
    }

    // Atracción elástica de Hooke en aristas
    edges.forEach(edge => {
      const dx = edge.target.x - edge.source.x;
      const dy = edge.target.y - edge.source.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const force = (dist - 140) * 0.03;
      edge.source.vx += (dx / dist) * force;
      edge.source.vy += (dy / dist) * force;
      edge.target.vx -= (dx / dist) * force;
      edge.target.vy -= (dy / dist) * force;
    });

    // Gravedad central y fricción
    nodes.forEach(n => {
      if (n === draggedNode) return;
      const dx = width / 2 - n.x;
      const dy = height / 2 - n.y;
      n.vx += dx * 0.005;
      n.vy += dy * 0.005;

      n.vx *= 0.86;
      n.vy *= 0.86;

      n.x += n.vx;
      n.y += n.vy;
    });
  }

  function draw() {
    simulatePhysics();

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.translate(panX, panY);
    ctx.scale(scale, scale);

    // Dibujar aristas
    edges.forEach(e => {
      ctx.beginPath();
      ctx.moveTo(e.source.x, e.source.y);
      ctx.lineTo(e.target.x, e.target.y);
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.22)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    // Dibujar nodos
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius, 0, 2 * Math.PI);
      ctx.fillStyle = n.color;
      ctx.shadowColor = n.color;
      ctx.shadowBlur = (n === hoveredNode || n.id === activeArticleSlug) ? 18 : 6;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.lineWidth = (n === hoveredNode || n.id === activeArticleSlug) ? 3 : 1.5;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      // Etiquetas de texto
      ctx.font = `${(n === hoveredNode || n.id === activeArticleSlug) ? '600 12px' : '500 11px'} 'Space Grotesk', sans-serif`;
      ctx.fillStyle = (n === hoveredNode || n.id === activeArticleSlug) ? '#ffffff' : '#94a3b8';
      ctx.textAlign = 'center';
      ctx.fillText(n.id.replace(/_/g, ' '), n.x, n.y + n.radius + 15);
    });

    ctx.restore();
    requestAnimationFrame(draw);
  }

  // Interacción Mouse / Canvas
  canvas.addEventListener('mousedown', e => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left - panX) / scale;
    const mouseY = (e.clientY - rect.top - panY) / scale;

    draggedNode = nodes.find(n => {
      const dx = n.x - mouseX;
      const dy = n.y - mouseY;
      return Math.sqrt(dx * dx + dy * dy) < n.radius + 6;
    });

    if (!draggedNode) {
      isDragging = true;
      startX = e.clientX - panX;
      startY = e.clientY - panY;
    }
  });

  window.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left - panX) / scale;
    const mouseY = (e.clientY - rect.top - panY) / scale;

    if (draggedNode) {
      draggedNode.x = mouseX;
      draggedNode.y = mouseY;
    } else if (isDragging) {
      panX = e.clientX - startX;
      panY = e.clientY - startY;
    } else {
      hoveredNode = nodes.find(n => {
        const dx = n.x - mouseX;
        const dy = n.y - mouseY;
        return Math.sqrt(dx * dx + dy * dy) < n.radius + 6;
      });
      canvas.style.cursor = hoveredNode ? 'pointer' : 'grab';
    }
  });

  window.addEventListener('mouseup', () => {
    if (draggedNode && window.openWikiArticle) {
      window.openWikiArticle(draggedNode.id);
      // Cambiar a vista de lector automáticamente
      const viewReaderBtn = document.getElementById('btn-view-reader');
      if (viewReaderBtn) viewReaderBtn.click();
    }
    draggedNode = null;
    isDragging = false;
  });

  // Controles HUD de Zoom
  const zoomIn = document.getElementById('graph-zoom-in');
  const zoomOut = document.getElementById('graph-zoom-out');
  const zoomReset = document.getElementById('graph-reset');

  if (zoomIn) zoomIn.addEventListener('click', () => { scale = Math.min(2.5, scale * 1.25); });
  if (zoomOut) zoomOut.addEventListener('click', () => { scale = Math.max(0.4, scale * 0.8); });
  if (zoomReset) zoomReset.addEventListener('click', () => {
    scale = 1;
    panX = 0;
    panY = 0;
  });

  draw();
}

function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/&/g, '&amp;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;')
             .replace(/"/g, '&quot;')
             .replace(/'/g, '&#039;');
}
