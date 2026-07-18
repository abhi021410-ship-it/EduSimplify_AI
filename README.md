# 🎓 EduSimplify AI

### AI-Powered PDF Learning Assistant using IBM watsonx.ai Granite & Retrieval-Augmented Generation (RAG)

Upload any PDF, ask questions in natural language, and receive intelligent, context-aware answers directly from your document. EduSimplify AI transforms static study materials into an interactive AI learning experience using IBM Granite Foundation Models and Retrieval-Augmented Generation (RAG).

![Python](https://img.shields.io/badge/Python-3.10+-blue.svg)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green.svg)
![React](https://img.shields.io/badge/React-Frontend-61DAFB.svg)
![IBM watsonx.ai](https://img.shields.io/badge/IBM-watsonx.ai-052FAD.svg)
![Granite](https://img.shields.io/badge/IBM-Granite_3.3-orange.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

---

# 📌 Project Overview

EduSimplify AI is an AI-powered web application that enables students to interact with PDF documents through natural language conversations. Instead of manually searching through lengthy notes, users can simply upload a PDF and ask questions to receive accurate answers generated using IBM Granite Foundation Models.

The project combines modern web technologies with Retrieval-Augmented Generation (RAG) to provide a faster, smarter, and more engaging learning experience.

---

# 🎯 Project Domain

**Domain:** Artificial Intelligence (AI) • Generative AI • Educational Technology (EdTech)

### IBM Technologies Used

- IBM watsonx.ai
- IBM Granite 3.3 Foundation Model
- Retrieval-Augmented Generation (RAG)

Developed as part of the **IBM SkillsBuild AICTE Internship**.

---

# ❗ Problem Statement

Students often spend a significant amount of time searching through lecture notes, textbooks, and research papers to find relevant information. Traditional PDF readers only support keyword searches and cannot understand natural language questions.

EduSimplify AI solves this problem by allowing users to upload PDFs and interact with them using conversational AI.

---

# 💡 Solution

The application extracts text from uploaded PDFs, intelligently splits the content into searchable chunks, retrieves the most relevant information using Retrieval-Augmented Generation (RAG), and generates accurate answers with IBM Granite.

---

# ✨ Key Features

- 📄 Upload any PDF document
- 🤖 Ask questions in natural language
- 🧠 IBM Granite 3.3 Foundation Model
- 📚 Retrieval-Augmented Generation (RAG)
- ⚡ Intelligent PDF chunking
- 🎨 Modern React Interface
- 🚀 FastAPI Backend
- 📖 Context-aware AI responses
- 📱 Responsive design

---

# 🛠️ Technology Stack

## Frontend

- React.js
- Vite
- CSS

## Backend

- FastAPI
- Python

## Artificial Intelligence

- IBM watsonx.ai
- IBM Granite 3.3
- Retrieval-Augmented Generation (RAG)

## Libraries

- PyMuPDF
- ibm-watsonx-ai
- python-dotenv

---

# 🏗️ System Architecture

```text
                 User
                   │
                   ▼
          React Frontend
                   │
                   ▼
            FastAPI Backend
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
   PDF Upload          Text Extraction
        │                     │
        └──────────┬──────────┘
                   ▼
         Intelligent Text Chunking
                   │
                   ▼
 Retrieval-Augmented Generation (RAG)
                   │
                   ▼
     IBM Granite 3.3 Foundation Model
                   │
                   ▼
        AI Generated Response
                   │
                   ▼
                 User
```

---

# 📸 Project Screenshots

## 🏠 Home Page

> 📷 **Paste Screenshot 1 here**

<img width="1920" height="1080" alt="Screenshot 2026-07-14 093549" src="https://github.com/user-attachments/assets/df3c8250-2513-4097-9d07-a3be7df85536" />


---

## 📄 Upload PDF

<img width="1920" height="1080" alt="Screenshot 2026-07-14 093638" src="https://github.com/user-attachments/assets/7d9d9108-6d99-45ff-bb1e-59cfd7b344c6" />
<img width="1920" height="1080" alt="Screenshot 2026-07-14 093659" src="https://github.com/user-attachments/assets/08990d57-d0a3-4ab8-9de4-fbc071df52ec" />


---

## 💬 Ask Questions


<img width="1920" height="1080" alt="Screenshot 2026-07-14 093751" src="https://github.com/user-attachments/assets/865b4329-0a62-4fe5-aa98-34c93c146bcf" />
<img width="1920" height="1080" alt="Screenshot 2026-07-14 093759" src="https://github.com/user-attachments/assets/5a58a055-b699-4c0f-b0e1-1f10febfb9c8" />

## 🤖 AI Generated Response

<img width="1920" height="1080" alt="Screenshot 2026-07-14 093819" src="https://github.com/user-attachments/assets/31af83d0-d858-43dd-8de5-a731223dc91b" />

---

## ⚙️ Backend Running

<img width="662" height="630" alt="Screenshot 2026-07-14 093841" src="https://github.com/user-attachments/assets/62af3825-794d-467c-b1fe-c1e423a944f6" />
<img width="1918" height="975" alt="image" src="https://github.com/user-attachments/assets/50066716-9fe0-4deb-b890-27e4c53e7c51" />
<img width="1918" height="975" alt="image" src="https://github.com/user-attachments/assets/1415d08a-a519-4af2-bd09-d76c1982e165" />


---



# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/abhi021410-ship-it/EduSimplify_AI.git
cd EduSimplify_AI
```

## Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 🚀 How It Works

1. Upload a PDF document.
2. Extract text using PyMuPDF.
3. Split text into meaningful chunks.
4. Retrieve relevant context using RAG.
5. Send the context to IBM Granite.
6. Generate accurate AI responses.
7. Display answers in the chat interface.

---

# 🚀 Future Enhancements

- 🌍 Multi-language support
- 🎤 Voice interaction
- 📚 Multiple PDF knowledge base
- 📝 AI-generated summaries
- ☁️ Cloud deployment
- 🔐 User authentication
- 📱 Mobile optimization

---

# 🌟 Project Highlights

- Built using IBM watsonx.ai
- Powered by IBM Granite Foundation Models
- Implements Retrieval-Augmented Generation (RAG)
- Interactive PDF-based AI learning assistant
- Modern React + FastAPI architecture
- Designed for education and knowledge retrieval

---

# 👨‍💻 Author

**M. Abhiram Reddy**

B.Tech – Artificial Intelligence & Data Science

📧 LinkedIn: https://www.linkedin.com/in/abhiram-reddy-7470b6344/

💻 GitHub: https://github.com/abhi021410-ship-it

---

⭐ If you found this project useful, consider giving it a **Star** on GitHub!
