# Codex CLI 配置 — 免费 LLM API

## 环境变量配置

```bash
# 选择一个提供商，设置以下变量
export OPENAI_BASE_URL="https://api.groq.com/openai/v1"
export OPENAI_API_KEY="your-api-key"
codex --model "llama-3.3-70b-versatile"
```

## 所有提供商 Base URL 速查

- **NVIDIA NIM**: `https://integrate.api.nvidia.com/v1` (推荐模型: z-ai/glm-5.2)
- **ModelScope**: `https://api-inference.modelscope.cn/v1` (推荐模型: MiniMax/MiniMax-M2.5)
- **Cloudflare Workers AI**: `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run` (推荐模型: @cf/mistral/mistral-7b-instruct-v0.1)
- **Google Gemini**: `https://generativelanguage.googleapis.com/v1beta` (推荐模型: gemini-3.6-flash)
- **GitHub Models**: `https://models.github.ai/inference` (推荐模型: Phi-4)
- **LLM7.io**: `https://api.llm7.io/v1` (推荐模型: deepseek-r1-0528)
- **Groq**: `https://api.groq.com/openai/v1` (推荐模型: moonshotai/kimi-k2-instruct)
- **Mistral AI**: `https://api.mistral.ai/v1` (推荐模型: open-mistral-7b)
- **Cohere**: `https://api.cohere.com/v2` (推荐模型: command-a-218b)
- **Kilo Code**: `https://api.kilo.ai/api/gateway` (推荐模型: nvidia/nemotron-3-ultra-550b-a55b:free)
- **Hugging Face**: `https://router.huggingface.co/v1` (推荐模型: meta-llama-3-1-8b-instruct)
- **Cerebras**: `https://api.cerebras.ai/v1` (推荐模型: llama3.1-70b)
- **Z AI (Zhipu AI)**: `https://open.bigmodel.cn/api/paas/v4` (推荐模型: glm-4.7)
- **DeepSeek**: `https://api.deepseek.com/v1` (推荐模型: deepseek-chat-v3-2)
- **SiliconFlow**: `https://api.siliconflow.cn/v1` (推荐模型: deepseek-ai-deepseek-r1-distill-qwen-7b)
- **OpenRouter**: `https://openrouter.ai/api/v1` (推荐模型: nvidia/nemotron-3-ultra-550b-a55b:free)
- **OVHcloud AI Endpoints**: `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` (推荐模型: qwen3.5-397b-a17b)
- **Ollama Cloud**: `https://api.ollama.com` (推荐模型: minimax-m3)
- **OpenCode Zen**: `https://opencode.ai/zen/v1` (推荐模型: deepseek-v4-flash-free)
- **Aion Labs**: `https://api.aionlabs.ai/v1` (推荐模型: aion-2-5)
- **Agnes AI**: `https://apihub.agnes-ai.com/v1` (推荐模型: agnes-1.5-flash)
- **Alibaba Cloud Model Studio**: `https://dashscope-intl.aliyuncs.com/compatible-mode/v1` (推荐模型: qwen3-max)
- **SambaNova**: `https://api.sambanova.ai/v1` (推荐模型: deepseek-v3-1)
- **xAI**: `https://api.x.ai/v1` (推荐模型: grok-4-3)
- **Chutes.ai**: `https://api.chutes.ai/v1` (推荐模型: deepseek-ai/DeepSeek-R1)
- **Glhf.chat**: `https://glhf.chat/api/openai/v1` (推荐模型: meta-llama/Meta-Llama-3.1-70B-Instruct)
- **AI21 Labs**: `https://api.ai21.com/studio/v1` (推荐模型: jamba-large-1-7)
- **Nscale**: `https://inference.api.nscale.com/v1` (推荐模型: llama-3-3-70b-instruct)
- **Nebius**: `https://api.studio.nebius.com/v1` (推荐模型: qwen3-235b-a22b)
