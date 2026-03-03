import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

let renderNonce = 0;
let renderChain = Promise.resolve();

function detectMode() {
  const themeKey = document.documentElement.getAttribute('data-theme') || '';
  return themeKey.endsWith('-light') ? 'light' : 'dark';
}

function ensureContainers() {
  const codeBlocks = document.querySelectorAll('pre > code');

  for (const codeBlock of codeBlocks) {
    const pre = codeBlock.parentElement;
    if (!pre || pre.tagName.toLowerCase() !== 'pre') continue;

    const language = pre.getAttribute('data-language') || '';
    if (language.toLowerCase() !== 'mermaid') continue;

    const source = codeBlock.textContent?.trim();
    if (!source) continue;

    const container = document.createElement('div');
    container.className = 'mermaid-diagram';
    container.dataset.mermaidSource = source;
    pre.replaceWith(container);
  }
}

async function renderDiagrams() {
  const mode = detectMode();

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    theme: mode === 'dark' ? 'dark' : 'default',
  });

  const containers = document.querySelectorAll('.mermaid-diagram[data-mermaid-source]');
  for (const container of containers) {
    const source = container.dataset.mermaidSource;
    if (!source) continue;

    try {
      const id = `aiandi-mermaid-${renderNonce++}`;
      const { svg } = await mermaid.render(id, source);
      container.innerHTML = svg;
      container.dataset.mermaidRendered = 'true';
      delete container.dataset.mermaidError;
    } catch {
      container.dataset.mermaidError = 'true';
      container.innerHTML = '<p>Mermaid diagram failed to render.</p>';
    }
  }
}

function enqueueRender() {
  renderChain = renderChain.then(async () => {
    ensureContainers();
    await renderDiagrams();
  });
  return renderChain;
}

function initMermaid() {
  void enqueueRender();
}

initMermaid();

if (!window.__aiandiMermaidBound) {
  document.addEventListener('astro:after-swap', initMermaid);
  window.addEventListener('aiandi:theme-mode-changed', initMermaid);
  window.__aiandiMermaidBound = true;
}
