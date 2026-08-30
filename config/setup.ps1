# Free LLM API 配置脚本 (Windows PowerShell)
# 运行: .\config\setup.ps1
# 总计 29 个提供商

Write-Host "=== Free LLM API 配置 ===" -ForegroundColor Cyan
Write-Host "已加载 29 个提供商配置"

# NVIDIA NIM
$env:NVIDIA_NIM_API_KEY = ""  # https://build.nvidia.com/settings/api-keys
$env:NVIDIA_NIM_BASE_URL = "https://integrate.api.nvidia.com/v1"
$env:NVIDIA_NIM_MODEL = "z-ai/glm-5.2"

# ModelScope
$env:MODELSCOPE_API_KEY = ""  # https://modelscope.cn/my/myaccesstoken
$env:MODELSCOPE_BASE_URL = "https://api-inference.modelscope.cn/v1"
$env:MODELSCOPE_MODEL = "MiniMax/MiniMax-M2.5"

# Cloudflare Workers AI
$env:CLOUDFLARE_API_KEY = ""  # https://dash.cloudflare.com/profile/api-tokens
$env:CLOUDFLARE_BASE_URL = "https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run"
$env:CLOUDFLARE_MODEL = "@cf/mistral/mistral-7b-instruct-v0.1"

# Google Gemini
$env:GOOGLE_GEMINI_API_KEY = ""  # https://aistudio.google.com/app/apikey
$env:GOOGLE_GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta"
$env:GOOGLE_GEMINI_MODEL = "gemini-3.6-flash"

# GitHub Models
$env:GITHUB_MODELS_API_KEY = ""  # https://github.com/marketplace/models
$env:GITHUB_MODELS_BASE_URL = "https://models.github.ai/inference"
$env:GITHUB_MODELS_MODEL = "Phi-4"

# LLM7.io
$env:LLM7_API_KEY = ""  # https://token.llm7.io
$env:LLM7_BASE_URL = "https://api.llm7.io/v1"
$env:LLM7_MODEL = "deepseek-r1-0528"

# Groq
$env:GROQ_API_KEY = ""  # https://console.groq.com/keys
$env:GROQ_BASE_URL = "https://api.groq.com/openai/v1"
$env:GROQ_MODEL = "moonshotai/kimi-k2-instruct"

# Mistral AI
$env:MISTRAL_API_KEY = ""  # https://console.mistral.ai/api-keys
$env:MISTRAL_BASE_URL = "https://api.mistral.ai/v1"
$env:MISTRAL_MODEL = "open-mistral-7b"

# Cohere
$env:COHERE_API_KEY = ""  # https://dashboard.cohere.com/api-keys
$env:COHERE_BASE_URL = "https://api.cohere.com/v2"
$env:COHERE_MODEL = "command-a-218b"

# Kilo Code
$env:KILO_CODE_API_KEY = ""  # https://kilo.ai
$env:KILO_CODE_BASE_URL = "https://api.kilo.ai/api/gateway"
$env:KILO_CODE_MODEL = "nvidia/nemotron-3-ultra-550b-a55b:free"

# Hugging Face
$env:HUGGINGFACE_API_KEY = ""  # https://huggingface.co/settings/tokens
$env:HUGGINGFACE_BASE_URL = "https://router.huggingface.co/v1"
$env:HUGGINGFACE_MODEL = "meta-llama-3-1-8b-instruct"

# Cerebras
$env:CEREBRAS_API_KEY = ""  # https://cloud.cerebras.ai/
$env:CEREBRAS_BASE_URL = "https://api.cerebras.ai/v1"
$env:CEREBRAS_MODEL = "llama3.1-70b"

# Z AI (Zhipu AI)
$env:ZHIPU_API_KEY = ""  # https://open.bigmodel.cn/usercenter/apikeys
$env:ZHIPU_BASE_URL = "https://open.bigmodel.cn/api/paas/v4"
$env:ZHIPU_MODEL = "glm-4.7"

# DeepSeek
$env:DEEPSEEK_API_KEY = ""  # https://platform.deepseek.com/api_keys
$env:DEEPSEEK_BASE_URL = "https://api.deepseek.com/v1"
$env:DEEPSEEK_MODEL = "deepseek-chat-v3-2"

# SiliconFlow
$env:SILICONFLOW_API_KEY = ""  # https://cloud.siliconflow.cn/account/ak
$env:SILICONFLOW_BASE_URL = "https://api.siliconflow.cn/v1"
$env:SILICONFLOW_MODEL = "deepseek-ai-deepseek-r1-distill-qwen-7b"

# OpenRouter
$env:OPENROUTER_API_KEY = ""  # https://openrouter.ai/workspaces/default/keys
$env:OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1"
$env:OPENROUTER_MODEL = "nvidia/nemotron-3-ultra-550b-a55b:free"

# OVHcloud AI Endpoints
$env:OVHCLOUD_API_KEY = ""  # https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog/
$env:OVHCLOUD_BASE_URL = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1"
$env:OVHCLOUD_MODEL = "qwen3.5-397b-a17b"

# Ollama Cloud
$env:OLLAMA_API_KEY = ""  # https://ollama.com/settings/keys
$env:OLLAMA_BASE_URL = "https://api.ollama.com"
$env:OLLAMA_MODEL = "minimax-m3"

# OpenCode Zen
$env:OPENCODE_API_KEY = ""  # https://opencode.ai/auth
$env:OPENCODE_BASE_URL = "https://opencode.ai/zen/v1"
$env:OPENCODE_MODEL = "deepseek-v4-flash-free"

# Aion Labs
$env:AION_API_KEY = ""  # https://www.aionlabs.ai
$env:AION_BASE_URL = "https://api.aionlabs.ai/v1"
$env:AION_MODEL = "aion-2-5"

# Agnes AI
$env:AGNES_API_KEY = ""  # https://platform.agnes-ai.com/settings/apiKeys
$env:AGNES_BASE_URL = "https://apihub.agnes-ai.com/v1"
$env:AGNES_MODEL = "agnes-1.5-flash"

# Alibaba Cloud Model Studio
$env:ALIBABA_API_KEY = ""  # https://bailian.console.alibabacloud.com/?apiKey=1
$env:ALIBABA_BASE_URL = "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
$env:ALIBABA_MODEL = "qwen3-max"

# SambaNova
$env:SAMBANOVA_API_KEY = ""  # https://cloud.sambanova.ai/apis
$env:SAMBANOVA_BASE_URL = "https://api.sambanova.ai/v1"
$env:SAMBANOVA_MODEL = "deepseek-v3-1"

# xAI
$env:XAI_API_KEY = ""  # https://console.x.ai
$env:XAI_BASE_URL = "https://api.x.ai/v1"
$env:XAI_MODEL = "grok-4-3"

# Chutes.ai
$env:CHUTES_API_KEY = ""  # https://chutes.ai/
$env:CHUTES_BASE_URL = "https://api.chutes.ai/v1"
$env:CHUTES_MODEL = "deepseek-ai/DeepSeek-R1"

# Glhf.chat
$env:GLHF_API_KEY = ""  # https://glhf.chat/
$env:GLHF_BASE_URL = "https://glhf.chat/api/openai/v1"
$env:GLHF_MODEL = "meta-llama/Meta-Llama-3.1-70B-Instruct"

# AI21 Labs
$env:AI21_API_KEY = ""  # https://studio.ai21.com/account/api-key
$env:AI21_BASE_URL = "https://api.ai21.com/studio/v1"
$env:AI21_MODEL = "jamba-large-1-7"

# Nscale
$env:NSCALE_API_KEY = ""  # https://console.nscale.com/
$env:NSCALE_BASE_URL = "https://inference.api.nscale.com/v1"
$env:NSCALE_MODEL = "llama-3-3-70b-instruct"

# Nebius
$env:NEBIUS_API_KEY = ""  # https://studio.nebius.com/settings/api-keys
$env:NEBIUS_BASE_URL = "https://api.studio.nebius.com/v1"
$env:NEBIUS_MODEL = "qwen3-235b-a22b"

Write-Host "配置完成！设置对应的 API_KEY 后即可使用。" -ForegroundColor Green
