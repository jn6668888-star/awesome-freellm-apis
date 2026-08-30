# 部署说明

本项目已从纯 Markdown 文档转换为可直接部署的静态网站。

## 本地预览

项目根目录下已生成 5 种语言的 HTML 页面：

- `index.html` — 简体中文（默认首页）
- `index.en.html` — English
- `index.ja.html` — 日本語
- `index.ko.html` — 한국어
- `index.zh-TW.html` — 繁體中文

### 方式一：直接打开

双击 `index.html` 即可在浏览器中查看。

### 方式二：本地 HTTP 服务器（推荐）

```bash
# Python
python -m http.server 8765

# 或 Node.js
npx serve .
```

然后访问 http://localhost:8765

## 重新构建

如果修改了 README 文件，重新生成 HTML：

```bash
npm install marked
node build.js
```

## 部署到公网

### 方案一：GitHub Pages（推荐，免费）

1. 将本项目推送到 GitHub 仓库
2. 进入仓库 Settings → Pages
3. Source 选择 "Deploy from a branch"
4. Branch 选择 `main`，文件夹选择 `/ (root)`
5. 保存后约 1 分钟，网站即可通过 `https://<你的用户名>.github.io/<仓库名>/` 访问

一键命令：

```bash
git init
git add .
git commit -m "Deploy awesome-free-llm-apis static site"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

### 方案二：Vercel（免费，自动 HTTPS）

```bash
npm i -g vercel
vercel --prod
```

按提示登录并确认，Vercel 会自动检测为静态站点并部署。

### 方案三：Netlify（免费，拖拽部署）

1. 访问 https://app.netlify.com/drop
2. 将整个项目文件夹拖入浏览器
3. 立即获得一个 `https://xxx.netlify.app` 的公网地址

### 方案四：Cloudflare Pages（免费，全球 CDN）

1. 访问 https://dash.cloudflare.com/ → Pages → Create a project
2. 连接 GitHub 仓库或直接上传文件夹
3. 构建命令留空，输出目录填 `/`
4. 部署后获得 `https://xxx.pages.dev` 地址

### 方案五：任意 Nginx / Apache 服务器

将所有 HTML 文件上传到网站根目录即可，无需任何后端依赖。

## 文件结构

```
awesome-freellm-apis/
├── index.html          # 简体中文首页
├── index.en.html       # English
├── index.ja.html       # 日本語
├── index.ko.html       # 한국어
├── index.zh-TW.html    # 繁體中文
├── build.js            # 构建脚本（Markdown → HTML）
├── README.md           # 原始英文文档
├── README.zh-CN.md     # 原始中文文档
├── README.ja.md        # 原始日文文档
├── README.ko.md        # 原始韩文文档
├── README.zh-TW.md     # 原始繁体文档
├── code-examples/      # 配置示例
├── assets/             # 静态资源
└── DEPLOY.md           # 本文件
```

## 特性

- 5 种语言切换（中/英/日/韩/繁中）
- GitHub 风格排版，支持深色模式（跟随系统）
- 响应式布局，移动端适配
- 纯静态，零后端依赖，加载快
- 表格横向滚动，代码块语法高亮容器
