import os
from dotenv import load_dotenv

from ibm_watsonx_ai.foundation_models import ModelInference

# Load .env
load_dotenv(os.path.join(os.path.dirname(__file__), "..", ".env"))

IBM_API_KEY = os.getenv("IBM_API_KEY")
IBM_PROJECT_ID = os.getenv("IBM_PROJECT_ID")
IBM_URL = os.getenv("IBM_URL")

print("========== IBM Credentials ==========")
print("Project ID :", IBM_PROJECT_ID)
print("URL        :", IBM_URL)
print("API Key    :", "Loaded ✅" if IBM_API_KEY else "Not Found ❌")
print("=====================================")

# Instruction model (supports chat/text generation)
model = ModelInference(
    model_id="meta-llama/llama-3-3-70b-instruct",
    credentials={
        "apikey": IBM_API_KEY,
        "url": IBM_URL,
    },
    project_id=IBM_PROJECT_ID,
)

def ask_granite(prompt: str):
    response = model.generate_text(prompt=prompt)
    return response