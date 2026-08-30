# Aider 配置 — 免费 LLM API

## .aider.conf.yml 配置

```yaml
# 选择一个提供商
openai-api-base: https://api.groq.com/openai/v1
openai-api-key: your-api-key
model: llama-3.3-70b-versatile
```

## 免信用卡提供商推荐

- **Cloudflare Workers AI**: base=https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run, model=@cf/mistral/mistral-7b-instruct-v0.1
- **Google Gemini**: base=https://generativelanguage.googleapis.com/v1beta, model=gemini-3.6-flash
- **GitHub Models**: base=https://models.github.ai/inference, model=Phi-4
- **LLM7.io**: base=https://api.llm7.io/v1, model=deepseek-r1-0528
- **Groq**: base=https://api.groq.com/openai/v1, model=moonshotai/kimi-k2-instruct
- **Mistral AI**: base=https://api.mistral.ai/v1, model=open-mistral-7b
- **Cohere**: base=https://api.cohere.com/v2, model=command-a-218b
- **Kilo Code**: base=https://api.kilo.ai/api/gateway, model=nvidia/nemotron-3-ultra-550b-a55b:free
- **Hugging Face**: base=https://router.huggingface.co/v1, model=meta-llama-3-1-8b-instruct
- **Cerebras**: base=https://api.cerebras.ai/v1, model=llama3.1-70b
- **Z AI (Zhipu AI)**: base=https://open.bigmodel.cn/api/paas/v4, model=glm-4.7
