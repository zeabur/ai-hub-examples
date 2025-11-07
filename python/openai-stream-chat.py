import os

from openai import OpenAI

def main():
    client = OpenAI(
        # The endpoint of Zeabur AI Hub, can be one of the following:
        # - https://hnd1.aihub.zeabur.ai/
        # - https://sfo1.aihub.zeabur.ai/
        # 
        # Get a full list of endpoints from https://zeabur.com/ai-hub#api-endpoints
        base_url="https://sfo1.aihub.zeabur.ai/",
        
        # The API key of Zeabur AI Hub, you can get it from the Zeabur AI Hub dashboard.
        # In the following format: sk-xxxxxxxxxxxxxxxx
        # 
        # Get the API key from https://zeabur.com/ai-hub#api-keys
        api_key=os.getenv("ZEABUR_AI_HUB_API_KEY"),
    )
    
    stream = client.chat.completions.create(
        # The model id in Zeabur AI Hub, can be one of the following:
        # - claude-haiku-4-5, claude-sonnet-4-5
        # - gpt-5, gpt-5-mini, gpt-4.1, gpt-4.1-mini, gpt-4o, gpt-4o-mini
        # - gemini-2.5-pro, gemini-2.5-flash, gemini-2.5-flash-lite, gemini-2.5-flash-image
        # - deepseek-v3.2-exp, glm-4.6, llama-3.3-70b, gpt-oss-120b, qwen-3-32 
        #
        # Get a full list of models from https://zeabur.com/ai-hub#models
        model="claude-haiku-4-5",
        
        messages=[{"role": "user", "content": "Tell me a story about a cat"}],
        stream=True,
    )
    
    for chunk in stream:
        content = chunk.choices[0].delta.content or ''
        if content:
            print(content, end='', flush=True)

if __name__ == "__main__":
    main()

