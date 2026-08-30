const fs = require('fs');
const path = require('path');

const configDir = path.join(__dirname, 'config');
const providers = JSON.parse(fs.readFileSync(path.join(configDir, 'providers.json'), 'utf-8')).providers;

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
    .container { max-width: 1200px; margin: 0 auto; padding: 32px 24px; }
    .header-bar {
      background-color: var(--color-canvas-subtle);
      border-bottom: 1px solid var(--color-border-default);
      padding: 12px 24px;
      display: flex; align-items: center; justify-content: space-between;
    }
    .header-bar .brand { font-weight: 600; font-size: 14px; }
    .header-bar .links a { margin-left: 16px; font-size: 14px; color: var(--color-accent-fg); text-decoration: none; }
    .header-bar .links a:hover { text-decoration: underline; }
    h1 { font-size: 2em; padding-bottom: 0.3em; border-bottom: 1px solid var(--color-border-muted); }
    h2 { font-size: 1.5em; padding-bottom: 0.3em; border-bottom: 1px solid var(--color-border-muted); margin-top: 32px; }
    .stats { display: flex; gap: 24px; margin: 24px 0; flex-wrap: wrap; }
    .stat-card {
      background: var(--color-canvas-subtle);
      border: 1px solid var(--color-border-default);
      border-radius: 8px;
      padding: 16px 24px;
      text-align: center;
      min-width: 140px;
    }
    .stat-card .num { font-size: 2em; font-weight: 700; color: var(--color-accent-fg); }
    .stat-card .label { font-size: 14px; color: var(--color-fg-muted); }
    .filter-bar { margin: 16px 0; display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
    .filter-bar input, .filter-bar select {
      padding: 8px 12px;
      border: 1px solid var(--color-border-default);
      border-radius: 6px;
      background: var(--color-canvas-default);
      color: var(--color-fg-default);
      font-size: 14px;
    }
    .filter-bar input { flex: 1; min-width: 200px; }
    table {
      border-spacing: 0; border-collapse: collapse;
      width: 100%; margin: 16px 0;
      display: block; overflow-x: auto;
    }
    th, td { padding: 10px 14px; border: 1px solid var(--color-border-default); text-align: left; font-size: 14px; }
    th { font-weight: 600; background: var(--color-canvas-subtle); position: sticky; top: 0; }
    tr:nth-child(2n) { background: var(--color-canvas-subtle); }
    code {
      padding: 0.2em 0.4em; font-size: 85%;
      background: var(--color-code-bg); border-radius: 6px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    }
    .badge {
      display: inline-block; padding: 2px 8px; border-radius: 12px;
      font-size: 12px; font-weight: 600;
    }
    .badge-free { background: #dafbe1; color: #1a7f37; }
    .badge-reg { background: #fff8c5; color: #9a6700; }
    .badge-phone { background: #ffebe9; color: #d1242f; }
    @media (prefers-color-scheme: dark) {
      .badge-free { background: #0f2e1a; color: #3fb950; }
      .badge-reg { background: #2e2410; color: #d29922; }
      .badge-phone { background: #2d1210; color: #f85149; }
    }
    a { color: var(--color-accent-fg); text-decoration: none; }
    a:hover { text-decoration: underline; }
    .copy-btn {
      padding: 4px 10px; font-size: 12px; cursor: pointer;
      border: 1px solid var(--color-border-default); border-radius: 4px;
      background: var(--color-canvas-subtle); color: var(--color-fg-default);
    }
    .copy-btn:hover { background: var(--color-border-muted); }
`;

const noCreditCount = providers.filter(p => p.creditCard === 'No').length;
const totalModels = providers.reduce((s, p) => s + p.freeModels, 0);

function badgeClass(cc) {
  if (cc === 'No') return 'badge-free';
  if (cc === 'Phone verification') return 'badge-phone';
  return 'badge-reg';
}

let rows = '';
providers.forEach((p, i) => {
  const bestModel = p.bestModels[0]?.id || '-';
  rows += `<tr>
    <td>${i + 1}</td>
    <td><strong>${p.name}</strong></td>
    <td>${p.freeModels}</td>
    <td><span class="badge ${badgeClass(p.creditCard)}">${p.creditCard}</span></td>
    <td>${p.maxContext}</td>
    <td><code>${p.baseUrl}</code></td>
    <td><code>${bestModel}</code></td>
    <td><a href="${p.apiKeyUrl}" target="_blank">获取 Key →</a></td>
  </tr>`;
});

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>免费 LLM API 配置速查 — awesome-free-llm-apis</title>
  <style>${css}</style>
</head>
<body>
  <div class="header-bar">
    <span class="brand">awesome-free-llm-apis</span>
    <span class="links">
      <a href="index.html">首页</a>
      <a href="https://github.com/jn6668888-star/awesome-freellm-apis" target="_blank">GitHub</a>
      <a href="https://freellm.net" target="_blank">freellm.net</a>
    </span>
  </div>
  <div class="container">
    <h1>免费 LLM API 配置速查</h1>
    <p>所有免费大模型 API 的配置信息，支持搜索筛选。点击"获取 Key"跳转注册页面。</p>

    <div class="stats">
      <div class="stat-card"><div class="num">${providers.length}</div><div class="label">提供商</div></div>
      <div class="stat-card"><div class="num">${totalModels}+</div><div class="label">免费模型</div></div>
      <div class="stat-card"><div class="num">${noCreditCount}</div><div class="label">免信用卡</div></div>
      <div class="stat-card"><div class="num">5</div><div class="label">语言版本</div></div>
    </div>

    <div class="filter-bar">
      <input type="text" id="search" placeholder="搜索提供商、模型、Base URL..." oninput="filterTable()">
      <select id="creditFilter" onchange="filterTable()">
        <option value="">全部验证方式</option>
        <option value="No">免信用卡</option>
        <option value="Registration">仅注册</option>
        <option value="Phone verification">需手机验证</option>
      </select>
    </div>

    <table id="providerTable">
      <thead>
        <tr>
          <th>#</th>
          <th>提供商</th>
          <th>免费模型</th>
          <th>验证方式</th>
          <th>最大上下文</th>
          <th>Base URL</th>
          <th>推荐模型</th>
          <th>API Key</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>

    <h2>配置文件下载</h2>
    <ul>
      <li><a href="config/providers.json" download>providers.json</a> — 所有提供商结构化数据（JSON）</li>
      <li><a href="config/.env.example" download>.env.example</a> — 环境变量模板</li>
      <li><a href="config/setup.ps1" download>setup.ps1</a> — Windows PowerShell 配置脚本</li>
      <li><a href="config/setup.sh" download>setup.sh</a> — Linux/Mac Bash 配置脚本</li>
      <li><a href="config/README.md" download>config/README.md</a> — 配置使用说明</li>
    </ul>

    <h2>工具配置指南</h2>
    <ul>
      <li><a href="config/tools/claude-code.md" target="_blank">Claude Code 配置</a></li>
      <li><a href="config/tools/cursor.md" target="_blank">Cursor 配置</a></li>
      <li><a href="config/tools/codex.md" target="_blank">Codex CLI 配置</a></li>
      <li><a href="config/tools/aider.md" target="_blank">Aider 配置</a></li>
    </ul>
  </div>

  <script>
    function filterTable() {
      const search = document.getElementById('search').value.toLowerCase();
      const credit = document.getElementById('creditFilter').value;
      const rows = document.querySelectorAll('#providerTable tbody tr');
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        const creditCell = row.cells[3].textContent.trim();
        const matchSearch = !search || text.includes(search);
        const matchCredit = !credit || creditCell === credit;
        row.style.display = matchSearch && matchCredit ? '' : 'none';
      });
    }
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'config.html'), html, 'utf-8');
console.log(`Generated: config.html (${(html.length / 1024).toFixed(1)} KB)`);
