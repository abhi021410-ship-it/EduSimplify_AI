import "./App.css";
import { useState } from "react";
import {
  FaFilePdf,
  FaRobot,
  FaPaperPlane,
  FaCloudUploadAlt,
} from "react-icons/fa";

function App() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(false);

  const uploadFile = async () => {
    if (!file) {
      alert("Please choose a PDF");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setMessage(data.message);
    } catch (err) {
      console.log(err);
      setMessage("Upload Failed");
    }
  };

  const askAI = async () => {
    if (!question) return;

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          question,
        }),
      });

      const data = await response.json();

      setAnswer(data.answer);
    } catch (err) {
      console.log(err);
      setAnswer("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="app">
      <div className="container">

        <div className="header">

          <h1 className="logo">EduSimplify AI</h1>

          <p className="subtitle">
            Learn Smarter with AI-Powered Notes
          </p>

        </div>

        <div className="card">

          <h2 className="cardTitle">
            <FaFilePdf /> Upload PDF
          </h2>

          <div className="uploadArea">

            <FaCloudUploadAlt
              size={70}
              color="#3b82f6"
            />

            <br />
            <br />

            <input
              type="file"
              accept=".pdf"
              onChange={(e) =>
                setFile(e.target.files[0])
              }
            />

            {file && (
              <p className="fileName">
                ✔ {file.name}
              </p>
            )}

            <button
              className="uploadButton"
              onClick={uploadFile}
            >
              Upload PDF
            </button>

            {message && (
              <p className="success">
                {message}
              </p>
            )}

          </div>

        </div>

        <hr />

        <div className="card">

          <h2 className="cardTitle">
            <FaRobot /> Ask EduSimplify
          </h2>

          <textarea
            placeholder="Ask anything from your PDF..."
            value={question}
            onChange={(e) =>
              setQuestion(e.target.value)
            }
          />

          <button
            className="askButton"
            onClick={askAI}
          >
            <FaPaperPlane />
            {" "}
            Ask AI
          </button>

          <div className="answerCard">

            <h3 className="answerTitle">
              AI Response
            </h3>

            {loading ? (
              <div className="answer">
                🤖 Thinking...
              </div>
            ) : (
              <div className="answer">
                {answer}
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;