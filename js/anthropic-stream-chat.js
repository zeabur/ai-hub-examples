import Anthropic from '@anthropic-ai/sdk';

async function main() {
    const anthropic = new Anthropic({
        // The endpoint of Zeabur AI Hub, can be one of the following:
        // - https://hnd1.aihub.zeabur.ai/
        // - https://sfo1.aihub.zeabur.ai/
        // 
        // Get a full list of endpoints from https://zeabur.com/ai-hub#api-endpoints
        baseURL: "https://hnd1.aihub.zeabur.ai/",

        // The API key of Zeabur AI Hub, you can get it from the Zeabur AI Hub dashboard.
        // In the following format: sk-xxxxxxxxxxxxxxxx
        // 
        // Get the API key from https://zeabur.com/ai-hub#api-keys
        apiKey: process.env.ZEABUR_AI_HUB_API_KEY,
    });

    const stream = await anthropic.messages.create({
        // The model id in Zeabur AI Hub, can be one of the following:
        // - claude-haiku-4-5, claude-sonnet-4-5
        // - gpt-5, gpt-5-mini, gpt-4.1, gpt-4.1-mini, gpt-4o, gpt-4o-mini
        // - gemini-2.5-pro, gemini-2.5-flash, gemini-2.5-flash-lite, gemini-2.5-flash-image
        // - deepseek-v3.2-exp, glm-4.6, llama-3.3-70b, gpt-oss-120b, qwen-3-32 
        //
        // Get a full list of models from https://zeabur.com/ai-hub#models
        model: "claude-sonnet-4-5",
        max_tokens: 1024,
        messages: [{ role: "user", content: "Tell me a story about a cat." }],
        stream: true,
    });

    for await (const chunk of stream) {
        if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
            const content = chunk.delta.text || '';
            if (content) {
                console.log(content);
            }
        }
    }
}

main();

