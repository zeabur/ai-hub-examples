import { GoogleGenerativeAI } from "@google/generative-ai";

const modelParams = {
    // The model id in Zeabur AI Hub, can be one of the following:
    // - gemini-2.5-pro, gemini-2.5-flash, gemini-2.5-flash-lite, gemini-2.5-flash-image
    //
    // Get a full list of models from https://zeabur.com/ai-hub#models
    // When using @google/generative-ai, you can only use models which are supported by the library (like Gemini models).
    model: 'gemini-2.5-flash',
};
  
const requestOptions = {
    // The endpoint of Zeabur AI Hub, can be one of the following:
    // - https://hnd1.aihub.zeabur.ai/
    // - https://sfo1.aihub.zeabur.ai/
    // 
    // Get a full list of endpoints from https://zeabur.com/ai-hub#api-endpoints
    baseUrl: 'https://hnd1.aihub.zeabur.ai/gemini',
};
  
// The API key of Zeabur AI Hub, you can get it from the Zeabur AI Hub dashboard.
// In the following format: sk-xxxxxxxxxxxxxxxx
// 
// Get the API key from https://zeabur.com/ai-hub#api-keys
const genAI = new GoogleGenerativeAI(process.env.ZEABUR_AI_HUB_API_KEY);

const model = genAI.getGenerativeModel(modelParams, requestOptions);

async function main() {
    try {
        const streamingResult = await model.generateContentStream("Explain how AI works");
        for await (const chunk of streamingResult.stream) {
            if (chunk.candidates[0].content.parts[0].text) {
                console.log(chunk.candidates[0].content.parts[0].text);
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

main();