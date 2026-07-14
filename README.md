# 🎓 EduSimplify AI

An AI-powered PDF learning assistant built using IBM Granite LLM and Retrieval-Augmented Generation (RAG).

---

## 🚀 Features

- 📄 Upload any PDF
- 🤖 Ask questions in natural language
- 📚 AI answers only from the uploaded document
- ⚡ FastAPI backend
- 🎨 React frontend
- 🧠 IBM Granite Foundation Model
- 📑 Automatic PDF chunking for better context retrieval

---

## 🛠 Tech Stack

Frontend
- React.js
- Vite
- CSS

Backend
- FastAPI
- Python

AI
- IBM watsonx.ai
- Granite 3.3
- RAG

Libraries
- PyMuPDF
- ibm-watsonx-ai
- python-dotenv

---

## 📸 Screenshots

(Add screenshots here)

---

## ⚙️ Installation

Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📖 How it works

1. Upload a PDF
2. Extract text
3. Split into chunks
4. Send relevant chunks to IBM Granite
5. Receive AI-generated answers

---

## 👨‍💻 Author

Abhiram Reddy
