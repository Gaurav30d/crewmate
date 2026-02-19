import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")
if not API_KEY:
    raise RuntimeError("GEMINI_API_KEY not found in environment variables")

client = genai.Client(api_key=API_KEY)

def generate_ai_output(prompt: str) -> str:
    """
    Core AI service function.
    """
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )
    return response.text



