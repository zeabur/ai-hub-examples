import os

from google.genai import Client, types


API_KEY = os.getenv("ZEABUR_AI_HUB_API_KEY")
if not API_KEY:
    raise RuntimeError("ZEABUR_AI_HUB_API_KEY is required")

client = Client(
    api_key=API_KEY,
    vertexai=True,
    http_options=types.HttpOptions(
        # The endpoint of Zeabur AI Hub, can be one of the following:
        # - https://hnd1.aihub.zeabur.ai/
        # - https://sfo1.aihub.zeabur.ai/
        #
        # Get a full list of endpoints from https://zeabur.com/ai-hub#api-endpoints
        base_url="https://sfo1.aihub.zeabur.ai/gemini",
        headers={
            # The API key of Zeabur AI Hub, you can get it from the Zeabur AI Hub dashboard.
            # In the following format: sk-xxxxxxxxxxxxxxxx
            #
            # Get the API key from https://zeabur.com/ai-hub#api-keys
            "Authorization": API_KEY,
        },
    )
)


def main():
    response_1 = client.models.generate_content_stream(
        model="gemini-2.5-flash",
        contents="Hello",
    )

    for chunk in response_1:
        print(chunk.text, end="", flush=True)


if __name__ == "__main__":
    main()

