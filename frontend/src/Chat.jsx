import { useState } from "react";
import axios from "axios";

export default function Chat() {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    async function askQuestion() {

        if (!question.trim()) return;

        setLoading(true);

        try {

            const res = await axios.post(
                "http://127.0.0.1:8000/chat",
                {
                    question
                }
            );

            setAnswer(res.data.answer);

        } catch (err) {

            console.log(err);
            setAnswer("Something went wrong.");

        }

        setLoading(false);
    }

    return (

        <div style={{ marginTop: 40 }}>

            <h2>Ask AI</h2>

            <textarea
                rows="4"
                cols="70"
                placeholder="Ask anything about the uploaded PDF..."
                value={question}
                onChange={(e)=>setQuestion(e.target.value)}
            />

            <br /><br />

            <button onClick={askQuestion}>
                Ask AI
            </button>

            <br /><br />

            {loading && <p>Thinking...</p>}

            <div>

                <h3>Answer</h3>

                <p>{answer}</p>

            </div>

        </div>

    );

}