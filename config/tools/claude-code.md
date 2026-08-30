# Claude Code 配置 — 免费 LLM API
# 在 ~/.claude/settings.json 或环境变量中设置

# 方式一：环境变量（推荐）
# 免信用卡提供商（11个）：
#   Cloudflare Workers AI: @cf/mistral/mistral-7b-instruct-v0.1
#   Google Gemini: gemini-3.6-flash
#   GitHub Models: Phi-4
#   LLM7.io: deepseek-r1-0528
#   Groq: moonshotai/kimi-k2-instruct
#   Mistral AI: open-mistral-7b
#   Cohere: command-a-218b
#   Kilo Code: nvidia/nemotron-3-ultra-550b-a55b:free
#   Hugging Face: meta-llama-3-1-8b-instruct
#   Cerebras: llama3.1-70b
#   Z AI (Zhipu AI): glm-4.7

# 设置示例（Groq）：
export ANTHROPIC_BASE_URL="https://api.groq.com/openai/v1"
export ANTHROPIC_AUTH_TOKEN="your-groq-api-key"
export ANTHROPIC_API_KEY=""

# 切换提供商只需修改 ANTHROPIC_BASE_URL 和 ANTHROPIC_AUTH_TOKEN
