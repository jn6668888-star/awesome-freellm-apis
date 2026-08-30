#!/bin/bash
# Free LLM API 配置脚本 (Linux/Mac)
# 运行: source ./config/setup.sh
# 总计 29 个提供商

echo "=== Free LLM API 配置 ==="
echo "已加载 29 个提供商配置"

# NVIDIA NIM
export NVIDIA_NIM_API_KEY=""  # https://build.nvidia.com/settings/api-keys
export NVIDIA_NIM_BASE_URL="https://integrate.api.nvidia.com/v1"
export NVIDIA_NIM_MODEL="z-ai/glm-5.2"

# ModelScope
export MODELSCOPE_API_KEY=""  # https://modelscope.cn/my/myaccesstoken
export MODELSCOPE_BASE_URL="https://api-inference.modelscope.cn/v1"
export MODELSCOPE_MODEL="MiniMax/MiniMax-M2.5"

# Cloudflare Workers AI
export CLOUDFLARE_API_KEY=""  # https://dash.cloudflare.com/profile/api-tokens
export CLOUDFLARE_BASE_URL="https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run"
export CLOUDFLARE_MODEL="@cf/mistral/mistral-7b-instruct-v0.1"

# Google Gemini
export GOOGLE_GEMINI_API_KEY=""  # https://aistudio.google.com/app/apikey
export GOOGLE_GEMINI_BASE_URL="https://generativelanguage.googleapis.com/v1beta"
export GOOGLE_GEMINI_MODEL="gemini-3.6-flash"

# GitHub Models
export GITHUB_MODELS_API_KEY=""  # https://github.com/marketplace/models
export GITHUB_MODELS_BASE_URL="https://models.github.ai/inference"
export GITHUB_MODELS_MODEL="Phi-4"

# LLM7.io
export LLM7_API_KEY=""  # https://token.llm7.io
export LLM7_BASE_URL="https://api.llm7.io/v1"
export LLM7_MODEL="deepseek-r1-0528"

# Groq
export GROQ_API_KEY=""  # https://console.groq.com/keys
export GROQ_BASE_URL="https://api.groq.com/openai/v1"
export GROQ_MODEL="moonshotai/kimi-k2-instruct"

# Mistral AI
export MISTRAL_API_KEY=""  # https://console.mistral.ai/api-keys
export MISTRAL_BASE_URL="https://api.mistral.ai/v1"
export MISTRAL_MODEL="open-mistral-7b"

# Cohere
export COHERE_API_KEY=""  # https://dashboard.cohere.com/api-keys
export COHERE_BASE_URL="https://api.cohere.com/v2"
export COHERE_MODEL="command-a-218b"

# Kilo Code
export KILO_CODE_API_KEY=""  # https://kilo.ai
export KILO_CODE_BASE_URL="https://api.kilo.ai/api/gateway"
export KILO_CODE_MODEL="nvidia/nemotron-3-ultra-550b-a55b:free"

# Hugging Face
export HUGGINGFACE_API_KEY=""  # https://huggingface.co/settings/tokens
export HUGGINGFACE_BASE_URL="https://router.huggingface.co/v1"
export HUGGINGFACE_MODEL="meta-llama-3-1-8b-instruct"

# Cerebras
export CEREBRAS_API_KEY=""  # https://cloud.cerebras.ai/
export CEREBRAS_BASE_URL="https://api.cerebras.ai/v1"
export CEREBRAS_MODEL="llama3.1-70b"

# Z AI (Zhipu AI)
export ZHIPU_API_KEY=""  # https://open.bigmodel.cn/usercenter/apikeys
export ZHIPU_BASE_URL="https://open.bigmodel.cn/api/paas/v4"
export ZHIPU_MODEL="glm-4.7"

# DeepSeek
export DEEPSEEK_API_KEY=""  # https://platform.deepseek.com/api_keys
export DEEPSEEK_BASE_URL="https://api.deepseek.com/v1"
export DEEPSEEK_MODEL="deepseek-chat-v3-2"

# SiliconFlow
export SILICONFLOW_API_KEY=""  # https://cloud.siliconflow.cn/account/ak
export SILICONFLOW_BASE_URL="https://api.siliconflow.cn/v1"
export SILICONFLOW_MODEL="deepseek-ai-deepseek-r1-distill-qwen-7b"

# OpenRouter
export OPENROUTER_API_KEY=""  # https://openrouter.ai/workspaces/default/keys
export OPENROUTER_BASE_URL="https://openrouter.ai/api/v1"
export OPENROUTER_MODEL="nvidia/nemotron-3-ultra-550b-a55b:free"

# OVHcloud AI Endpoints
export OVHCLOUD_API_KEY=""  # https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog/
export OVHCLOUD_BASE_URL="https://oai.endpoints.kepler.ai.cloud.ovh.net/v1"
export OVHCLOUD_MODEL="qwen3.5-397b-a17b"

# Ollama Cloud
export OLLAMA_API_KEY=""  # https://ollama.com/settings/keys
export OLLAMA_BASE_URL="https://api.ollama.com"
export OLLAMA_MODEL="minimax-m3"

# OpenCode Zen
export OPENCODE_API_KEY=""  # https://opencode.ai/auth
export OPENCODE_BASE_URL="https://opencode.ai/zen/v1"
export OPENCODE_MODEL="deepseek-v4-flash-free"

# Aion Labs
export AION_API_KEY=""  # https://www.aionlabs.ai
export AION_BASE_URL="https://api.aionlabs.ai/v1"
export AION_MODEL="aion-2-5"

# Agnes AI
export AGNES_API_KEY=""  # https://platform.agnes-ai.com/settings/apiKeys
export AGNES_BASE_URL="https://apihub.agnes-ai.com/v1"
export AGNES_MODEL="agnes-1.5-flash"

# Alibaba Cloud Model Studio
export ALIBABA_API_KEY=""  # https://bailian.console.alibabacloud.com/?apiKey=1
export ALIBABA_BASE_URL="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
export ALIBABA_MODEL="qwen3-max"

# SambaNova
export SAMBANOVA_API_KEY=""  # https://cloud.sambanova.ai/apis
export SAMBANOVA_BASE_URL="https://api.sambanova.ai/v1"
export SAMBANOVA_MODEL="deepseek-v3-1"

# xAI
export XAI_API_KEY=""  # https://console.x.ai
export XAI_BASE_URL="https://api.x.ai/v1"
export XAI_MODEL="grok-4-3"

# Chutes.ai
export CHUTES_API_KEY=""  # https://chutes.ai/
export CHUTES_BASE_URL="https://api.chutes.ai/v1"
export CHUTES_MODEL="deepseek-ai/DeepSeek-R1"

# Glhf.chat
export GLHF_API_KEY=""  # https://glhf.chat/
export GLHF_BASE_URL="https://glhf.chat/api/openai/v1"
export GLHF_MODEL="meta-llama/Meta-Llama-3.1-70B-Instruct"

# AI21 Labs
export AI21_API_KEY=""  # https://studio.ai21.com/account/api-key
export AI21_BASE_URL="https://api.ai21.com/studio/v1"
export AI21_MODEL="jamba-large-1-7"

# Nscale
export NSCALE_API_KEY=""  # https://console.nscale.com/
export NSCALE_BASE_URL="https://inference.api.nscale.com/v1"
export NSCALE_MODEL="llama-3-3-70b-instruct"

# Nebius
export NEBIUS_API_KEY=""  # https://studio.nebius.com/settings/api-keys
export NEBIUS_BASE_URL="https://api.studio.nebius.com/v1"
export NEBIUS_MODEL="qwen3-235b-a22b"

echo "配置完成！设置对应的 API_KEY 后即可使用。"
