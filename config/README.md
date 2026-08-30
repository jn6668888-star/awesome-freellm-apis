# 免费 LLM API 配置大全

总计 **29 个提供商**，445+ 免费模型。

## 文件说明

| 文件 | 说明 |
|---|---|
| `providers.json` | 所有提供商的结构化数据（JSON） |
| `.env.example` | 环境变量模板，复制为 .env 后填入 API Key |
| `setup.ps1` | Windows PowerShell 一键配置脚本 |
| `setup.sh` | Linux/Mac Bash 一键配置脚本 |
| `tools/claude-code.md` | Claude Code 配置指南 |
| `tools/cursor.md` | Cursor 配置指南 |
| `tools/codex.md` | Codex CLI 配置指南 |
| `tools/aider.md` | Aider 配置指南 |

## 快速开始

### 1. 选择一个免信用卡提供商（推荐新手）

| 提供商 | 免费模型 | 最大上下文 | 推荐模型 |
|---|---|---|---|
| Cloudflare Workers AI | 40 | 10M | @cf/mistral/mistral-7b-instruct-v0.1 |
| Google Gemini | 17 | 1M | gemini-3.6-flash |
| GitHub Models | 16 | 1M | Phi-4 |
| LLM7.io | 16 | 1M | deepseek-r1-0528 |
| Groq | 12 | 262K | moonshotai/kimi-k2-instruct |
| Mistral AI | 12 | 256K | open-mistral-7b |
| Cohere | 12 | 436K | command-a-218b |
| Kilo Code | 12 | 1M | nvidia/nemotron-3-ultra-550b-a55b:free |
| Hugging Face | 7 | 131K | meta-llama-3-1-8b-instruct |
| Cerebras | 6 | 131K | llama3.1-70b |

### 2. 获取 API Key

点击对应提供商的链接，注册（大多只需邮箱），复制 API Key。

### 3. 配置环境变量

**Windows:**
```powershell
.\config\setup.ps1
$env:GROQ_API_KEY="your-key-here"
```

**Linux/Mac:**
```bash
source ./config/setup.sh
export GROQ_API_KEY="your-key-here"
```

### 4. 配置到你的工具

查看 `tools/` 目录下对应工具的配置指南。

## 所有提供商列表

| # | 提供商 | 免费模型 | 信用卡 | 最大上下文 | Base URL |
|---|---|---|---|---|---|
| 1 | NVIDIA NIM | 126 | Phone verification | 1M | https://integrate.api.nvidia.com/v1 |
| 2 | ModelScope | 59 | Registration | 1M | https://api-inference.modelscope.cn/v1 |
| 3 | Cloudflare Workers AI | 40 | No | 10M | https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run |
| 4 | Google Gemini | 17 | No | 1M | https://generativelanguage.googleapis.com/v1beta |
| 5 | GitHub Models | 16 | No | 1M | https://models.github.ai/inference |
| 6 | LLM7.io | 16 | No | 1M | https://api.llm7.io/v1 |
| 7 | Groq | 12 | No | 262K | https://api.groq.com/openai/v1 |
| 8 | Mistral AI | 12 | No | 256K | https://api.mistral.ai/v1 |
| 9 | Cohere | 12 | No | 436K | https://api.cohere.com/v2 |
| 10 | Kilo Code | 12 | No | 1M | https://api.kilo.ai/api/gateway |
| 11 | Hugging Face | 7 | No | 131K | https://router.huggingface.co/v1 |
| 12 | Cerebras | 6 | No | 131K | https://api.cerebras.ai/v1 |
| 13 | Z AI (Zhipu AI) | 4 | No | 200K | https://open.bigmodel.cn/api/paas/v4 |
| 14 | DeepSeek | 2 | Registration | 128K | https://api.deepseek.com/v1 |
| 15 | SiliconFlow | 3 | Registration | 131K | https://api.siliconflow.cn/v1 |
| 16 | OpenRouter | 29 | Free tier + $10 topup | 1M | https://openrouter.ai/api/v1 |
| 17 | OVHcloud AI Endpoints | 14 | Registration | 262K | https://oai.endpoints.kepler.ai.cloud.ovh.net/v1 |
| 18 | Ollama Cloud | 13 | Registration | 1M | https://api.ollama.com |
| 19 | OpenCode Zen | 12 | Registration | 1M | https://opencode.ai/zen/v1 |
| 20 | Aion Labs | 7 | Registration | 131K | https://api.aionlabs.ai/v1 |
| 21 | Agnes AI | 5 | Registration | 256K | https://apihub.agnes-ai.com/v1 |
| 22 | Alibaba Cloud Model Studio | 5 | Registration | 1M | https://dashscope-intl.aliyuncs.com/compatible-mode/v1 |
| 23 | SambaNova | 4 | Registration | 128K | https://api.sambanova.ai/v1 |
| 24 | xAI | 3 | Registration | 2M | https://api.x.ai/v1 |
| 25 | Chutes.ai | 2 | Registration | 131K | https://api.chutes.ai/v1 |
| 26 | Glhf.chat | 2 | Registration | 131K | https://glhf.chat/api/openai/v1 |
| 27 | AI21 Labs | 2 | Registration | 256K | https://api.ai21.com/studio/v1 |
| 28 | Nscale | 2 | Registration | 128K | https://inference.api.nscale.com/v1 |
| 29 | Nebius | 1 | Registration | 128K | https://api.studio.nebius.com/v1 |

## 数据来源

数据来自 [awesome-free-llm-apis](https://github.com/open-free-llm-api/awesome-freellm-apis)，每日更新。
