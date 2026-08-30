const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const languages = [
  { id: 'zh-CN', file: 'README.zh-CN.md', out: 'index.html',       name: '简体中文', title: 'awesome-free-llm-apis — 免费大模型 API 目录' },
  { id: 'en',    file: 'README.md',      out: 'index.en.html',    name: 'English',  title: 'awesome-free-llm-apis — Free LLM API Directory' },
  { id: 'ja',    file: 'README.ja.md',   out: 'index.ja.html',    name: '日本語',    title: 'awesome-free-llm-apis — 無料 LLM API ディレクトリ' },
  { id: 'ko',    file: 'README.ko.md',   out: 'index.ko.html',    name: '한국어',    title: 'awesome-free-llm-apis — 무료 LLM API 디렉토리' },
  { id: 'zh-TW', file: 'README.zh-TW.md',out: 'index.zh-TW.html', name: '繁體中文',  title: 'awesome-free-llm-apis — 免費大模型 API 目錄' },
];

const css = `
    :root {
      --color-canvas-default: #ffffff;
      --color-fg-default: #1f2328;
      --color-fg-muted: #656d76;
      --color-border-default: #d0d7de;
      --color-border-muted: #d8dee4;
      --color-canvas-subtle: #f6f8fa;
      --color-accent-fg: #0969da;
      --color-success-fg: #1a7f37;
      --color-danger-fg: #d1242f;
      --color-code-bg: #f6f8fa;
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --color-canvas-default: #0d1117;
        --color-fg-default: #e6edf3;
        --color-fg-muted: #8b949e;
        --color-border-default: #30363d;
        --color-border-muted: #21262d;
        --color-canvas-subtle: #161b22;
        --color-accent-fg: #4493f8;
        --color-success-fg: #3fb950;
        --color-danger-fg: #f85149;
        --color-code-bg: #161b22;
      }
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
      font-size: 16px;
      line-height: 1.5;
      color: var(--color-fg-default);
      background-color: var(--color-canvas-default);
    }
    .container {
      max-width: 980px;
      margin: 0 auto;
      padding: 32px 24px;
    }
    .markdown-body h1, .markdown-body h2, .markdown-body h3,
    .markdown-body h4, .markdown-body h5, .markdown-body h6 {
      margin-top: 24px;
      margin-bottom: 16px;
      font-weight: 600;
      line-height: 1.25;
    }
    .markdown-body h1 {
      font-size: 2em;
      padding-bottom: 0.3em;
      border-bottom: 1px solid var(--color-border-muted);
    }
    .markdown-body h2 {
      font-size: 1.5em;
      padding-bottom: 0.3em;
      border-bottom: 1px solid var(--color-border-muted);
    }
    .markdown-body h3 { font-size: 1.25em; }
    .markdown-body h4 { font-size: 1em; }
    .markdown-body p { margin-top: 0; margin-bottom: 16px; }
    .markdown-body a {
      color: var(--color-accent-fg);
      text-decoration: none;
    }
    .markdown-body a:hover { text-decoration: underline; }
    .markdown-body ul, .markdown-body ol {
      margin-top: 0;
      margin-bottom: 16px;
      padding-left: 2em;
    }
    .markdown-body li { margin-top: 0.25em; }
    .markdown-body table {
      border-spacing: 0;
      border-collapse: collapse;
      margin-top: 0;
      margin-bottom: 16px;
      display: block;
      width: max-content;
      max-width: 100%;
      overflow: auto;
    }
    .markdown-body table th, .markdown-body table td {
      padding: 6px 13px;
      border: 1px solid var(--color-border-default);
    }
    .markdown-body table th {
      font-weight: 600;
      background-color: var(--color-canvas-subtle);
    }
    .markdown-body table tr {
      background-color: var(--color-canvas-default);
      border-top: 1px solid var(--color-border-muted);
    }
    .markdown-body table tr:nth-child(2n) {
      background-color: var(--color-canvas-subtle);
    }
    .markdown-body code {
      padding: 0.2em 0.4em;
      font-size: 85%;
      background-color: var(--color-code-bg);
      border-radius: 6px;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
    }
    .markdown-body pre {
      padding: 16px;
      overflow: auto;
      font-size: 85%;
      line-height: 1.45;
      background-color: var(--color-code-bg);
      border-radius: 6px;
      margin-top: 0;
      margin-bottom: 16px;
    }
    .markdown-body pre code {
      padding: 0;
      background-color: transparent;
      border-radius: 0;
      font-size: 100%;
    }
    .markdown-body blockquote {
      padding: 0 1em;
      color: var(--color-fg-muted);
      border-left: 0.25em solid var(--color-border-default);
      margin: 0 0 16px 0;
    }
    .markdown-body hr {
      height: 0.25em;
      padding: 0;
      margin: 24px 0;
      background-color: var(--color-border-default);
      border: 0;
    }
    .markdown-body img { max-width: 100%; box-sizing: content-box; }
    .header-bar {
      background-color: var(--color-canvas-subtle);
      border-bottom: 1px solid var(--color-border-default);
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .header-bar .brand {
      font-weight: 600;
      font-size: 14px;
      color: var(--color-fg-default);
    }
    .header-bar .links a {
      margin-left: 16px;
      font-size: 14px;
      color: var(--color-accent-fg);
    }
    .lang-switch {
      margin-bottom: 24px;
      padding: 12px 16px;
      background-color: var(--color-canvas-subtle);
      border-radius: 6px;
      border: 1px solid var(--color-border-default);
      font-size: 14px;
    }
    .lang-switch a { margin-right: 12px; }
`;

function buildPage(lang) {
  const inputFile = path.join(__dirname, lang.file);
  const outputFile = path.join(__dirname, lang.out);
  if (!fs.existsSync(inputFile)) {
    console.log(`Skip ${lang.id}: ${lang.file} not found`);
    return;
  }
  const markdown = fs.readFileSync(inputFile, 'utf-8');
  const content = marked.parse(markdown);

  const langLinks = languages.map(l => {
    const active = l.id === lang.id
      ? ' style="font-weight:600;color:var(--color-fg-default)"'
      : '';
    return `<a href="${l.out}"${active}>${l.name}</a>`;
  }).join('');

  const html = `<!DOCTYPE html>
<html lang="${lang.id}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${lang.title}</title>
  <style>${css}</style>
</head>
<body>
  <div class="header-bar">
    <span class="brand">awesome-free-llm-apis</span>
    <span class="links">
      <a href="https://github.com/open-free-llm-api/awesome-freellm-apis" target="_blank">GitHub</a>
      <a href="https://freellm.net" target="_blank">freellm.net</a>
    </span>
  </div>
  <div class="container">
    <div class="lang-switch">
      <strong>语言：</strong>
      ${langLinks}
    </div>
    <div class="markdown-body">
${content}
    </div>
  </div>
</body>
</html>`;

  fs.writeFileSync(outputFile, html, 'utf-8');
  console.log(`Generated: ${lang.out} (${(html.length / 1024).toFixed(1)} KB)`);
}

languages.forEach(buildPage);
console.log('Done. All language versions generated.');
