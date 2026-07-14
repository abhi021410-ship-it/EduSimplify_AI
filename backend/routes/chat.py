from fastapi import APIRouter
from pydantic import BaseModel

from routes.upload import pdf_chunks
from services.granite import ask_granite

router = APIRouter()


class Question(BaseModel):
    question: str


@router.post("/chat")
async def chat(data: Question):

    if len(pdf_chunks) == 0:
        return {
            "answer": "Please upload a PDF first."
        }

    context = "\n".join(pdf_chunks[:10])

    prompt = f"""
You are EduSimplify AI.

Answer ONLY using the information from the uploaded PDF.

If the answer is not found in the PDF, reply:
"I couldn't find that information in the uploaded PDF."

PDF Content:
{context}

Question:
{data.question}

Answer:
"""

    response = ask_granite(prompt)

    return {
        "answer": response
    }