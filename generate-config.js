const fs = require('fs');
const path = require('path');

const configDir = path.join(__dirname, 'config');
const toolsDir = path.join(configDir, 'tools');

const providers = [
  {
    id: 'nvidia-nim',
    name: 'NVIDIA NIM',
    baseUrl: 'https://integrate.api.nvidia.com/v1',
    apiKeyUrl: 'https://build.nvidia.com/settings/api-keys',
    creditCard: 'Phone verification',
    freeModels: 126,
    maxContext: '1M',
    modalities: ['audio', 'embedding', 'image', 'reasoning', 'rerank', 'text', 'video', 'vision'],
    bestModels: [
      { name: 'z-ai/glm-5.2', id: 'z-ai/glm-5.2', context: '1M', rateLimit: 'Up to 40 RPM' },
      { name: 'poolside/laguna-xs-2.1', id: 'poolside/laguna-xs-2.1', context: '262K', rateLimit: 'Up to 40 RPM' },
      { name: 'z-ai/glm-5.1', id: 'z-ai/glm-5.1', context: '202K', rateLimit: 'Up to 40 RPM' },
    ],
    envPrefix: 'NVIDIA_NIM',
  },
  {
    id: 'modelscope',
    name: 'ModelScope',
    baseUrl: 'https://api-inference.modelscope.cn/v1',
    apiKeyUrl: 'https://modelscope.cn/my/myaccesstoken',
    creditCard: 'Registration',
    freeModels: 59,
    maxContext: '1M',
    modalities: ['audio', 'image', 'reasoning', 'text', 'video', 'vision'],
    bestModels: [
      { name: 'MiniMax-M2.5-highspeed', id: 'MiniMax/MiniMax-M2.5', context: '204K', rateLimit: 'See provider' },
      { name: 'Qwen/Qwen3.5-35B-A3B', id: 'qwen-qwen3-5-35b-a3b', context: '131K', rateLimit: '2,000 RPD total' },
      { name: 'Qwen/Qwen3.5-27B', id: 'qwen-qwen3-5-27b', context: '131K', rateLimit: '2,000 RPD total' },
    ],
    envPrefix: 'MODELSCOPE',
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare Workers AI',
    baseUrl: 'https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run',
    apiKeyUrl: 'https://dash.cloudflare.com/profile/api-tokens',
    creditCard: 'No',
    freeModels: 40,
    maxContext: '10M',
    modalities: ['code', 'image', 'reasoning', 'text', 'video'],
    bestModels: [
      { name: 'Mistral 7B', id: '@cf/mistral/mistral-7b-instruct-v0.1', context: '32K', rateLimit: 'See provider' },
      { name: 'Qwen 1.5 7B', id: '@cf/qwen/qwen1.5-7b-chat', context: '32K', rateLimit: 'See provider' },
      { name: 'Llama 3.3 70B', id: '@cf/meta/llama-3.3-70b-instruct-fp8-fast', context: '131K', rateLimit: '10K neurons/day' },
    ],
    envPrefix: 'CLOUDFLARE',
  },
  {
    id: 'google-gemini',
    name: 'Google Gemini',
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta',
    apiKeyUrl: 'https://aistudio.google.com/app/apikey',
    creditCard: 'No',
    freeModels: 17,
    maxContext: '1M',
    modalities: ['audio', 'image', 'pdf', 'reasoning', 'text', 'video', 'vision'],
    bestModels: [
      { name: 'Gemini 3.6 Flash', id: 'gemini-3.6-flash', context: '1M', rateLimit: '15 RPM, 1,500 RPD' },
      { name: 'Gemini 3.5 Flash', id: 'gemini-3.5-flash', context: '1M', rateLimit: '15 RPM, 1,500 RPD' },
      { name: 'Gemini 3.5 Flash-Lite', id: 'gemini-3.5-flash-lite', context: '1M', rateLimit: '30 RPM, 1,500 RPD' },
    ],
    envPrefix: 'GOOGLE_GEMINI',
  },
  {
    id: 'github-models',
    name: 'GitHub Models',
    baseUrl: 'https://models.github.ai/inference',
    apiKeyUrl: 'https://github.com/marketplace/models',
    creditCard: 'No',
    freeModels: 16,
    maxContext: '1M',
    modalities: ['image', 'pdf', 'reasoning', 'text'],
    bestModels: [
      { name: 'Phi-4', id: 'Phi-4', context: '131K', rateLimit: 'See provider' },
      { name: 'Mistral Large (24.11)', id: 'Mistral-large-2411', context: '131K', rateLimit: 'See provider' },
      { name: 'AI21 Jamba 1.5 Large', id: 'AI21-Jamba-1.5-Large', context: '256K', rateLimit: 'See provider' },
    ],
    envPrefix: 'GITHUB_MODELS',
  },
  {
    id: 'llm7',
    name: 'LLM7.io',
    baseUrl: 'https://api.llm7.io/v1',
    apiKeyUrl: 'https://token.llm7.io',
    creditCard: 'No',
    freeModels: 16,
    maxContext: '1M',
    modalities: ['audio', 'code', 'image', 'pdf', 'reasoning', 'text', 'video', 'vision'],
    bestModels: [
      { name: 'deepseek-r1-0528', id: 'deepseek-r1-0528', context: '131K', rateLimit: '30 RPM (120 with token)' },
      { name: 'deepseek-v3.2', id: 'deepseek-v3.2', context: '131K', rateLimit: '30 RPM (120 with token)' },
      { name: 'gpt-4o-mini', id: 'gpt-4o-mini', context: '131K', rateLimit: '30 RPM (120 with token)' },
    ],
    envPrefix: 'LLM7',
  },
  {
    id: 'groq',
    name: 'Groq',
    baseUrl: 'https://api.groq.com/openai/v1',
    apiKeyUrl: 'https://console.groq.com/keys',
    creditCard: 'No',
    freeModels: 12,
    maxContext: '262K',
    modalities: ['image', 'reasoning', 'text'],
    bestModels: [
      { name: 'Moonshot Kimi K2', id: 'moonshotai/kimi-k2-instruct', context: '131K', rateLimit: 'See provider' },
      { name: 'Moonshot Kimi K2 0905', id: 'moonshotai/kimi-k2-instruct-0905', context: '131K', rateLimit: 'See provider' },
      { name: 'groq/compound', id: 'groq/compound', context: '131K', rateLimit: '30 RPM, 250 RPD' },
    ],
    envPrefix: 'GROQ',
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    baseUrl: 'https://api.mistral.ai/v1',
    apiKeyUrl: 'https://console.mistral.ai/api-keys',
    creditCard: 'No',
    freeModels: 12,
    maxContext: '256K',
    modalities: ['code', 'image', 'text'],
    bestModels: [
      { name: 'Mistral 7B', id: 'open-mistral-7b', context: '32K', rateLimit: 'See provider' },
      { name: 'Mixtral 8x7B', id: 'open-mixtral-8x7b', context: '32K', rateLimit: 'See provider' },
      { name: 'Mistral Medium 3.5 (128B)', id: 'mistral-medium-3-5-128b', context: '256K', rateLimit: '~1 RPS, 500K TPM' },
    ],
    envPrefix: 'MISTRAL',
  },
  {
    id: 'cohere',
    name: 'Cohere',
    baseUrl: 'https://api.cohere.com/v2',
    apiKeyUrl: 'https://dashboard.cohere.com/api-keys',
    creditCard: 'No',
    freeModels: 12,
    maxContext: '436K',
    modalities: ['image', 'text'],
    bestModels: [
      { name: 'Command A+ (218B)', id: 'command-a-218b', context: '436K', rateLimit: '20 RPM' },
      { name: 'Command A (111B)', id: 'command-a-111b', context: '288K', rateLimit: '20 RPM' },
      { name: 'Command R+', id: 'command-r', context: '128K', rateLimit: '20 RPM' },
    ],
    envPrefix: 'COHERE',
  },
  {
    id: 'kilo-code',
    name: 'Kilo Code',
    baseUrl: 'https://api.kilo.ai/api/gateway',
    apiKeyUrl: 'https://kilo.ai',
    creditCard: 'No',
    freeModels: 12,
    maxContext: '1M',
    modalities: ['audio', 'code', 'image', 'reasoning', 'text', 'video'],
    bestModels: [
      { name: 'nvidia/nemotron-3-ultra-550b-a55b:free', id: 'nvidia/nemotron-3-ultra-550b-a55b:free', context: '1M', rateLimit: '~200 req/hr' },
      { name: 'stepfun/step-3.7-flash:free', id: 'stepfun/step-3.7-flash:free', context: '262K', rateLimit: '~200 req/hr' },
      { name: 'nvidia/nemotron-3-super-120b-a12b:free', id: 'nvidia/nemotron-3-super-120b-a12b:free', context: '262K', rateLimit: '~200 req/hr' },
    ],
    envPrefix: 'KILO_CODE',
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    baseUrl: 'https://router.huggingface.co/v1',
    apiKeyUrl: 'https://huggingface.co/settings/tokens',
    creditCard: 'No',
    freeModels: 7,
    maxContext: '131K',
    modalities: ['code', 'text'],
    bestModels: [
      { name: 'Meta-Llama-3.1-8B-Instruct', id: 'meta-llama-3-1-8b-instruct', context: '128K', rateLimit: 'Credit-metered' },
      { name: 'gemma-3-4b-it', id: 'gemma-3-4b-it', context: '131K', rateLimit: 'Credit-metered' },
      { name: 'Qwen2.5-Coder-7B-Instruct', id: 'qwen2-5-coder-7b-instruct', context: '131K', rateLimit: 'Credit-metered' },
    ],
    envPrefix: 'HUGGINGFACE',
  },
  {
    id: 'cerebras',
    name: 'Cerebras',
    baseUrl: 'https://api.cerebras.ai/v1',
    apiKeyUrl: 'https://cloud.cerebras.ai/',
    creditCard: 'No',
    freeModels: 6,
    maxContext: '131K',
    modalities: ['reasoning', 'text'],
    bestModels: [
      { name: 'Llama 3.1 70B', id: 'llama3.1-70b', context: '131K', rateLimit: 'See provider' },
      { name: 'zai-glm-4.7', id: 'zai-glm-4.7', context: '128K', rateLimit: '10 RPM, 100 RPD, 1M TPD' },
    ],
    envPrefix: 'CEREBRAS',
  },
  {
    id: 'zhipu',
    name: 'Z AI (Zhipu AI)',
    baseUrl: 'https://open.bigmodel.cn/api/paas/v4',
    apiKeyUrl: 'https://open.bigmodel.cn/usercenter/apikeys',
    creditCard: 'No',
    freeModels: 4,
    maxContext: '200K',
    modalities: ['image', 'reasoning', 'text', 'video'],
    bestModels: [
      { name: 'GLM-4.7-Flash', id: 'glm-4.7', context: '200K', rateLimit: '1 concurrent request' },
      { name: 'GLM-4.5-Flash', id: 'glm-4.5', context: '128K', rateLimit: '1 concurrent request' },
      { name: 'GLM-4.6V-Flash', id: 'glm-4.6', context: '128K', rateLimit: '1 concurrent request' },
    ],
    envPrefix: 'ZHIPU',
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    baseUrl: 'https://api.deepseek.com/v1',
    apiKeyUrl: 'https://platform.deepseek.com/api_keys',
    creditCard: 'Registration',
    freeModels: 2,
    maxContext: '128K',
    modalities: ['text'],
    bestModels: [
      { name: 'deepseek-chat (V3.2)', id: 'deepseek-chat-v3-2', context: '128K', rateLimit: 'Dynamic' },
      { name: 'deepseek-reasoner (R1)', id: 'deepseek-reasoner-r1', context: '128K', rateLimit: 'Dynamic' },
    ],
    envPrefix: 'DEEPSEEK',
  },
  {
    id: 'siliconflow',
    name: 'SiliconFlow',
    baseUrl: 'https://api.siliconflow.cn/v1',
    apiKeyUrl: 'https://cloud.siliconflow.cn/account/ak',
    creditCard: 'Registration',
    freeModels: 3,
    maxContext: '131K',
    modalities: ['text'],
    bestModels: [
      { name: 'DeepSeek-R1-Distill-Qwen-7B', id: 'deepseek-ai-deepseek-r1-distill-qwen-7b', context: '131K', rateLimit: '30 RPM, 60K TPM' },
      { name: 'DeepSeek-OCR', id: 'deepseek-ai-deepseek-ocr', context: '131K', rateLimit: '30 RPM, 60K TPM' },
    ],
    envPrefix: 'SILICONFLOW',
  },
  {
    id: 'openrouter',
    name: 'OpenRouter',
    baseUrl: 'https://openrouter.ai/api/v1',
    apiKeyUrl: 'https://openrouter.ai/workspaces/default/keys',
    creditCard: 'Free tier + $10 topup',
    freeModels: 29,
    maxContext: '1M',
    modalities: ['audio', 'code', 'embeddings', 'image', 'reasoning', 'rerank', 'speech', 'text', 'video'],
    bestModels: [
      { name: 'NVIDIA: Nemotron 3 Ultra (free)', id: 'nvidia/nemotron-3-ultra-550b-a55b:free', context: '1M', rateLimit: 'See provider' },
      { name: 'Poolside: Laguna M.1 (free)', id: 'poolside/laguna-m.1:free', context: '262K', rateLimit: 'See provider' },
      { name: 'NVIDIA: Nemotron 3 Super (free)', id: 'nvidia/nemotron-3-super-120b-a12b:free', context: '262K', rateLimit: 'See provider' },
    ],
    envPrefix: 'OPENROUTER',
  },
  {
    id: 'ovhcloud',
    name: 'OVHcloud AI Endpoints',
    baseUrl: 'https://oai.endpoints.kepler.ai.cloud.ovh.net/v1',
    apiKeyUrl: 'https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog/',
    creditCard: 'Registration',
    freeModels: 14,
    maxContext: '262K',
    modalities: ['audio', 'code', 'image', 'reasoning', 'text', 'video'],
    bestModels: [
      { name: 'Qwen3.5-397B-A17B', id: 'qwen3.5-397b-a17b', context: '131K', rateLimit: '2 RPM (anonymous)' },
      { name: 'Meta-Llama-3_3-70B-Instruct', id: 'meta-llama-3_3-70b-instruct', context: '131K', rateLimit: '2 RPM (anonymous)' },
    ],
    envPrefix: 'OVHCLOUD',
  },
  {
    id: 'ollama-cloud',
    name: 'Ollama Cloud',
    baseUrl: 'https://api.ollama.com',
    apiKeyUrl: 'https://ollama.com/settings/keys',
    creditCard: 'Registration',
    freeModels: 13,
    maxContext: '1M',
    modalities: ['code', 'image', 'reasoning', 'text', 'video', 'vision'],
    bestModels: [
      { name: 'minimax-m3', id: 'minimax-m3', context: '1M', rateLimit: 'Session/weekly limits' },
      { name: 'gpt-oss:20b', id: 'gpt-oss:20b', context: '131K', rateLimit: 'Session/weekly limits' },
    ],
    envPrefix: 'OLLAMA',
  },
  {
    id: 'opencode-zen',
    name: 'OpenCode Zen',
    baseUrl: 'https://opencode.ai/zen/v1',
    apiKeyUrl: 'https://opencode.ai/auth',
    creditCard: 'Registration',
    freeModels: 12,
    maxContext: '1M',
    modalities: ['audio', 'reasoning', 'vision'],
    bestModels: [
      { name: 'DeepSeek V4 Flash', id: 'deepseek-v4-flash-free', context: '1M', rateLimit: 'See provider' },
      { name: 'MiMo-V2.5', id: 'mimo-v2.5-free', context: '1M', rateLimit: 'See provider' },
    ],
    envPrefix: 'OPENCODE',
  },
  {
    id: 'aion-labs',
    name: 'Aion Labs',
    baseUrl: 'https://api.aionlabs.ai/v1',
    apiKeyUrl: 'https://www.aionlabs.ai',
    creditCard: 'Registration',
    freeModels: 7,
    maxContext: '131K',
    modalities: ['text'],
    bestModels: [
      { name: 'Aion 2.5', id: 'aion-2-5', context: '128K', rateLimit: '15 RPM, 20K TPD' },
      { name: 'Aion 2.0', id: 'aion-2-0', context: '128K', rateLimit: '15 RPM, 20K TPD' },
    ],
    envPrefix: 'AION',
  },
  {
    id: 'agnes-ai',
    name: 'Agnes AI',
    baseUrl: 'https://apihub.agnes-ai.com/v1',
    apiKeyUrl: 'https://platform.agnes-ai.com/settings/apiKeys',
    creditCard: 'Registration',
    freeModels: 5,
    maxContext: '256K',
    modalities: ['image', 'text', 'video', 'vision'],
    bestModels: [
      { name: 'agnes-1.5-flash', id: 'agnes-1.5-flash', context: '256K', rateLimit: '30 RPM' },
      { name: 'agnes-2.0-flash', id: 'agnes-2.0-flash', context: '256K', rateLimit: '30 RPM' },
    ],
    envPrefix: 'AGNES',
  },
  {
    id: 'alibaba',
    name: 'Alibaba Cloud Model Studio',
    baseUrl: 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1',
    apiKeyUrl: 'https://bailian.console.alibabacloud.com/?apiKey=1',
    creditCard: 'Registration',
    freeModels: 5,
    maxContext: '1M',
    modalities: ['code', 'image', 'text'],
    bestModels: [
      { name: 'Qwen3-Max', id: 'qwen3-max', context: '128K', rateLimit: 'Tiered by region' },
      { name: 'Qwen3-Plus', id: 'qwen3-plus', context: '1M', rateLimit: 'Tiered by region' },
    ],
    envPrefix: 'ALIBABA',
  },
  {
    id: 'sambanova',
    name: 'SambaNova',
    baseUrl: 'https://api.sambanova.ai/v1',
    apiKeyUrl: 'https://cloud.sambanova.ai/apis',
    creditCard: 'Registration',
    freeModels: 4,
    maxContext: '128K',
    modalities: ['image', 'reasoning', 'text'],
    bestModels: [
      { name: 'DeepSeek-V3.1', id: 'deepseek-v3-1', context: '128K', rateLimit: '20 RPM, 20 RPD, 200K TPD' },
      { name: 'DeepSeek-V3.2 (Preview)', id: 'deepseek-v3-2-preview', context: '128K', rateLimit: '20 RPM, 20 RPD, 200K TPD' },
    ],
    envPrefix: 'SAMBANOVA',
  },
  {
    id: 'xai',
    name: 'xAI',
    baseUrl: 'https://api.x.ai/v1',
    apiKeyUrl: 'https://console.x.ai',
    creditCard: 'Registration',
    freeModels: 3,
    maxContext: '2M',
    modalities: ['text'],
    bestModels: [
      { name: 'grok-4.3', id: 'grok-4-3', context: '1M', rateLimit: 'Credit-based' },
      { name: 'grok-4.1-fast', id: 'grok-4-1-fast', context: '2M', rateLimit: 'Credit-based' },
    ],
    envPrefix: 'XAI',
  },
  {
    id: 'chutes',
    name: 'Chutes.ai',
    baseUrl: 'https://api.chutes.ai/v1',
    apiKeyUrl: 'https://chutes.ai/',
    creditCard: 'Registration',
    freeModels: 2,
    maxContext: '131K',
    modalities: ['reasoning', 'text'],
    bestModels: [
      { name: 'DeepSeek-R1', id: 'deepseek-ai/DeepSeek-R1', context: '131K', rateLimit: 'Community-powered' },
      { name: 'Llama 3.1 70B', id: 'meta-llama/Meta-Llama-3.1-70B-Instruct', context: '131K', rateLimit: 'Community-powered' },
    ],
    envPrefix: 'CHUTES',
  },
  {
    id: 'glhf',
    name: 'Glhf.chat',
    baseUrl: 'https://glhf.chat/api/openai/v1',
    apiKeyUrl: 'https://glhf.chat/',
    creditCard: 'Registration',
    freeModels: 2,
    maxContext: '131K',
    modalities: ['text'],
    bestModels: [
      { name: 'Llama 3.1 70B', id: 'meta-llama/Meta-Llama-3.1-70B-Instruct', context: '131K', rateLimit: 'Unlimited for free models' },
      { name: 'Mixtral 8x7B', id: 'mistralai/Mixtral-8x7B-Instruct-v0.1', context: '32K', rateLimit: 'Unlimited for free models' },
    ],
    envPrefix: 'GLHF',
  },
  {
    id: 'ai21',
    name: 'AI21 Labs',
    baseUrl: 'https://api.ai21.com/studio/v1',
    apiKeyUrl: 'https://studio.ai21.com/account/api-key',
    creditCard: 'Registration',
    freeModels: 2,
    maxContext: '256K',
    modalities: ['text'],
    bestModels: [
      { name: 'Jamba Large 1.7', id: 'jamba-large-1-7', context: '256K', rateLimit: '200 RPM, 10 RPS' },
      { name: 'Jamba Mini 2', id: 'jamba-mini-2', context: '256K', rateLimit: '200 RPM, 10 RPS' },
    ],
    envPrefix: 'AI21',
  },
  {
    id: 'nscale',
    name: 'Nscale',
    baseUrl: 'https://inference.api.nscale.com/v1',
    apiKeyUrl: 'https://console.nscale.com/',
    creditCard: 'Registration',
    freeModels: 2,
    maxContext: '128K',
    modalities: ['text'],
    bestModels: [
      { name: 'Llama-3.3-70B-Instruct', id: 'llama-3-3-70b-instruct', context: '128K', rateLimit: 'Fair-use' },
      { name: 'DeepSeek-R1-Distill-Llama-70B', id: 'deepseek-r1-distill-llama-70b', context: '128K', rateLimit: 'Fair-use' },
    ],
    envPrefix: 'NSCALE',
  },
  {
    id: 'nebius',
    name: 'Nebius',
    baseUrl: 'https://api.studio.nebius.com/v1',
    apiKeyUrl: 'https://studio.nebius.com/settings/api-keys',
    creditCard: 'Registration',
    freeModels: 1,
    maxContext: '128K',
    modalities: ['text'],
    bestModels: [
      { name: 'Qwen3-235B-A22B', id: 'qwen3-235b-a22b', context: '128K', rateLimit: 'Tier-based' },
    ],
    envPrefix: 'NEBIUS',
  },
];

// 1. Generate providers.json
fs.writeFileSync(
  path.join(configDir, 'providers.json'),
  JSON.stringify({ generatedAt: new Date().toISOString(), total: providers.length, providers }, null, 2),
  'utf-8'
);
console.log(`Generated: config/providers.json (${providers.length} providers)`);

// 2. Generate .env.example
let envExample = '# Free LLM API Keys — 从对应链接获取后填入\n';
envExample += '# 总计 ' + providers.length + ' 个提供商\n\n';
providers.forEach(p => {
  envExample += `# ${p.name} (${p.freeModels} models, ${p.maxContext} context, ${p.creditCard})\n`;
  envExample += `# Get key: ${p.apiKeyUrl}\n`;
  envExample += `${p.envPrefix}_API_KEY=\n`;
  envExample += `${p.envPrefix}_BASE_URL=${p.baseUrl}\n`;
  envExample += `${p.envPrefix}_MODEL=${p.bestModels[0]?.id || ''}\n\n`;
});
fs.writeFileSync(path.join(configDir, '.env.example'), envExample, 'utf-8');
console.log('Generated: config/.env.example');

// 3. Generate setup.ps1 (Windows PowerShell)
let ps1 = '# Free LLM API 配置脚本 (Windows PowerShell)\n';
ps1 += '# 运行: .\\config\\setup.ps1\n';
ps1 += '# 总计 ' + providers.length + ' 个提供商\n\n';
ps1 += 'Write-Host "=== Free LLM API 配置 ===" -ForegroundColor Cyan\n';
ps1 += 'Write-Host "已加载 ' + providers.length + ' 个提供商配置"\n\n';
providers.forEach(p => {
  ps1 += `# ${p.name}\n`;
  ps1 += `$env:${p.envPrefix}_API_KEY = ""  # ${p.apiKeyUrl}\n`;
  ps1 += `$env:${p.envPrefix}_BASE_URL = "${p.baseUrl}"\n`;
  ps1 += `$env:${p.envPrefix}_MODEL = "${p.bestModels[0]?.id || ''}"\n\n`;
});
ps1 += 'Write-Host "配置完成！设置对应的 API_KEY 后即可使用。" -ForegroundColor Green\n';
fs.writeFileSync(path.join(configDir, 'setup.ps1'), ps1, 'utf-8');
console.log('Generated: config/setup.ps1');

// 4. Generate setup.sh (Linux/Mac Bash)
let sh = '#!/bin/bash\n';
sh += '# Free LLM API 配置脚本 (Linux/Mac)\n';
sh += '# 运行: source ./config/setup.sh\n';
sh += '# 总计 ' + providers.length + ' 个提供商\n\n';
sh += 'echo "=== Free LLM API 配置 ==="\n';
sh += 'echo "已加载 ' + providers.length + ' 个提供商配置"\n\n';
providers.forEach(p => {
  sh += `# ${p.name}\n`;
  sh += `export ${p.envPrefix}_API_KEY=""  # ${p.apiKeyUrl}\n`;
  sh += `export ${p.envPrefix}_BASE_URL="${p.baseUrl}"\n`;
  sh += `export ${p.envPrefix}_MODEL="${p.bestModels[0]?.id || ''}"\n\n`;
});
sh += 'echo "配置完成！设置对应的 API_KEY 后即可使用。"\n';
fs.writeFileSync(path.join(configDir, 'setup.sh'), sh, 'utf-8');
console.log('Generated: config/setup.sh');

// 5. Generate tool configs
// Claude Code
let claude = '# Claude Code 配置 — 免费 LLM API\n';
claude += '# 在 ~/.claude/settings.json 或环境变量中设置\n\n';
claude += '# 方式一：环境变量（推荐）\n';
const noCreditCard = providers.filter(p => p.creditCard === 'No');
claude += `# 免信用卡提供商（${noCreditCard.length}个）：\n`;
noCreditCard.forEach(p => {
  claude += `#   ${p.name}: ${p.bestModels[0]?.id || ''}\n`;
});
claude += '\n# 设置示例（Groq）：\n';
claude += 'export ANTHROPIC_BASE_URL="https://api.groq.com/openai/v1"\n';
claude += 'export ANTHROPIC_AUTH_TOKEN="your-groq-api-key"\n';
claude += 'export ANTHROPIC_API_KEY=""\n\n';
claude += '# 切换提供商只需修改 ANTHROPIC_BASE_URL 和 ANTHROPIC_AUTH_TOKEN\n';
fs.writeFileSync(path.join(toolsDir, 'claude-code.md'), claude, 'utf-8');
console.log('Generated: config/tools/claude-code.md');

// Cursor
let cursor = '# Cursor 配置 — 免费 LLM API\n\n';
cursor += '## 设置步骤\n';
cursor += '1. 打开 Cursor Settings → Models\n';
cursor += '2. 点击 Add Model\n';
cursor += '3. 填入以下信息\n\n';
cursor += '## 推荐配置（免信用卡）\n\n';
noCreditCard.slice(0, 8).forEach(p => {
  cursor += `### ${p.name}\n`;
  cursor += `- Model name: ${p.bestModels[0]?.id || ''}\n`;
  cursor += `- Base URL: ${p.baseUrl}\n`;
  cursor += `- API key: 从 ${p.apiKeyUrl} 获取\n\n`;
});
fs.writeFileSync(path.join(toolsDir, 'cursor.md'), cursor, 'utf-8');
console.log('Generated: config/tools/cursor.md');

// Codex CLI
let codex = '# Codex CLI 配置 — 免费 LLM API\n\n';
codex += '## 环境变量配置\n\n';
codex += '```bash\n';
codex += '# 选择一个提供商，设置以下变量\n';
codex += 'export OPENAI_BASE_URL="https://api.groq.com/openai/v1"\n';
codex += 'export OPENAI_API_KEY="your-api-key"\n';
codex += 'codex --model "llama-3.3-70b-versatile"\n';
codex += '```\n\n';
codex += '## 所有提供商 Base URL 速查\n\n';
providers.forEach(p => {
  codex += `- **${p.name}**: \`${p.baseUrl}\` (推荐模型: ${p.bestModels[0]?.id || ''})\n`;
});
fs.writeFileSync(path.join(toolsDir, 'codex.md'), codex, 'utf-8');
console.log('Generated: config/tools/codex.md');

// Aider
let aider = '# Aider 配置 — 免费 LLM API\n\n';
aider += '## .aider.conf.yml 配置\n\n';
aider += '```yaml\n';
aider += '# 选择一个提供商\n';
aider += 'openai-api-base: https://api.groq.com/openai/v1\n';
aider += 'openai-api-key: your-api-key\n';
aider += 'model: llama-3.3-70b-versatile\n';
aider += '```\n\n';
aider += '## 免信用卡提供商推荐\n\n';
noCreditCard.forEach(p => {
  aider += `- **${p.name}**: base=${p.baseUrl}, model=${p.bestModels[0]?.id || ''}\n`;
});
fs.writeFileSync(path.join(toolsDir, 'aider.md'), aider, 'utf-8');
console.log('Generated: config/tools/aider.md');

// 6. Generate config README
let readme = '# 免费 LLM API 配置大全\n\n';
readme += `总计 **${providers.length} 个提供商**，${providers.reduce((s, p) => s + p.freeModels, 0)}+ 免费模型。\n\n`;
readme += '## 文件说明\n\n';
readme += '| 文件 | 说明 |\n|---|---|\n';
readme += '| `providers.json` | 所有提供商的结构化数据（JSON） |\n';
readme += '| `.env.example` | 环境变量模板，复制为 .env 后填入 API Key |\n';
readme += '| `setup.ps1` | Windows PowerShell 一键配置脚本 |\n';
readme += '| `setup.sh` | Linux/Mac Bash 一键配置脚本 |\n';
readme += '| `tools/claude-code.md` | Claude Code 配置指南 |\n';
readme += '| `tools/cursor.md` | Cursor 配置指南 |\n';
readme += '| `tools/codex.md` | Codex CLI 配置指南 |\n';
readme += '| `tools/aider.md` | Aider 配置指南 |\n\n';
readme += '## 快速开始\n\n';
readme += '### 1. 选择一个免信用卡提供商（推荐新手）\n\n';
readme += '| 提供商 | 免费模型 | 最大上下文 | 推荐模型 |\n|---|---|---|---|\n';
noCreditCard.slice(0, 10).forEach(p => {
  readme += `| ${p.name} | ${p.freeModels} | ${p.maxContext} | ${p.bestModels[0]?.id || ''} |\n`;
});
readme += '\n### 2. 获取 API Key\n\n';
readme += '点击对应提供商的链接，注册（大多只需邮箱），复制 API Key。\n\n';
readme += '### 3. 配置环境变量\n\n';
readme += '**Windows:**\n';
readme += '```powershell\n.\\config\\setup.ps1\n$env:GROQ_API_KEY="your-key-here"\n```\n\n';
readme += '**Linux/Mac:**\n';
readme += '```bash\nsource ./config/setup.sh\nexport GROQ_API_KEY="your-key-here"\n```\n\n';
readme += '### 4. 配置到你的工具\n\n';
readme += '查看 `tools/` 目录下对应工具的配置指南。\n\n';
readme += '## 所有提供商列表\n\n';
readme += '| # | 提供商 | 免费模型 | 信用卡 | 最大上下文 | Base URL |\n|---|---|---|---|---|---|\n';
providers.forEach((p, i) => {
  readme += `| ${i + 1} | ${p.name} | ${p.freeModels} | ${p.creditCard} | ${p.maxContext} | ${p.baseUrl} |\n`;
});
readme += '\n## 数据来源\n\n';
readme += '数据来自 [awesome-free-llm-apis](https://github.com/open-free-llm-api/awesome-freellm-apis)，每日更新。\n';
fs.writeFileSync(path.join(configDir, 'README.md'), readme, 'utf-8');
console.log('Generated: config/README.md');

console.log('\n=== 全部配置文件生成完成 ===');
console.log(`总计: ${providers.length} 个提供商, ${providers.reduce((s, p) => s + p.freeModels, 0)}+ 免费模型`);
