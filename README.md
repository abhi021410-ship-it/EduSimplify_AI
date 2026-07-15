# 🎓 EduSimplify AI

**An AI learning assistant that lets you chat with any PDF.**  
Upload a document, ask questions in natural language, and get precise answers from the content — powered by **IBM Granite LLM** and **RAG (Retrieval-Augmented Generation)**.

[![Python](https://img.shields.io/badge/python-3.10+-blue.svg)](#)
[![FastAPI](https://img.shields.io/badge/fastapi-backend-green)](#)
[![React](https://img.shields.io/badge/react-frontend-blueviolet)](#)
[![IBM Watson](https://img.shields.io/badge/IBM-watsonx-orange)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

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
<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/5f05750a-e6c2-4233-8ed7-98b482f19772" />


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

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5b269f58-c72b-43cb-9022-56c040623669" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/672c9897-f30d-4624-bd70-1089672c547c" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/acb908e8-315a-42a1-bdc5-a3ff66af82f6" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2307c3fe-5c70-4d1d-9159-2b27ac5fd3b4" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c00389f3-9f7e-4719-8e4b-1c27a42bf3bd" />

Backend 
<img width="662" height="630" alt="image" src="https://github.com/user-attachments/assets/fdee6277-a5dd-438e-9d1d-fefec51eedd6" />


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
