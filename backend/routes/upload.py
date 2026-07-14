from fastapi import APIRouter, UploadFile, File
from services.pdf_reader import extract_text
from services.rag import chunk_text
import shutil
import os

router = APIRouter()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Shared list used by chat.py
pdf_chunks = []


@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract text
    text = extract_text(file_path)

    # Split into chunks
    chunks = chunk_text(text)

    # IMPORTANT:
    # Update the existing list instead of replacing it
    pdf_chunks.clear()
    pdf_chunks.extend(chunks)

    print("\n========== PDF CONTENT ==========\n")
    print(text[:1000])

    print("\n========== CHUNKS ==========\n")
    print("Total Chunks:", len(pdf_chunks))

    return {
        "message": "PDF Uploaded Successfully",
        "chunks": len(pdf_chunks)
    }