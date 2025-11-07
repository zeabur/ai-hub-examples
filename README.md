# Zeabur AI Hub Examples

Minimal Python and JavaScript scripts that stream responses from Zeabur AI Hub models.

## What is Zeabur AI Hub?

Zeabur AI Hub is the AI models Hub service in [Zeabur](https://zeabur.com), allowing you to access and integrate state-of-the-art AI models from multiple providers (like OpenAI, Anthropic, Google, and more) through a unified API and key. You can easily connect your applications to high-performance LLMs and deploy AI features globally with minimal setup.

Learn more in the official docs: [https://zeabur.com/docs/ai-hub](https://zeabur.com/docs/ai-hub)

## Prerequisites

- Grab your `ZEABUR_AI_HUB_API_KEY` from the Zeabur AI Hub dashboard at https://zeabur.com/ai-hub#api-keys .
- Pick the closest endpoint, for example `https://sfo1.aihub.zeabur.ai/`, and adjust each script if needed. You can find all available endpoints at https://zeabur.com/ai-hub#api-endpoints .

## Python

```shell
cd python
python3.13 -m venv venv
pip install -r requirements.txt
ZEABUR_AI_HUB_API_KEY=sk-xxxxxxxx python openai-stream-chat.py
```

## Node.js 

```shell
cd js
pnpm i
ZEABUR_AI_HUB_API_KEY=sk-xxxxxxxx node openai-stream-chat.js
```

All scripts stream responses to stdout; tweak the `model`, `base_url` or prompts as needed.
