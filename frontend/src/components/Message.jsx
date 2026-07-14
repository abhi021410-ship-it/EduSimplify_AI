export default function Message({ sender, text }) {

    const isUser = sender === "user";

    return (

        <div
            style={{
                display: "flex",
                justifyContent: isUser ? "flex-end" : "flex-start",
                marginBottom: "18px"
            }}
        >

            <div
                style={{
                    background: isUser ? "#2563eb" : "#1e293b",

                    padding: "18px",

                    borderRadius: "18px",

                    maxWidth: "70%",

                    color: "white",

                    lineHeight: "1.7"
                }}
            >

                <b>

                    {isUser ? "🙂 You" : "🤖 EduSimplify"}

                </b>

                <br /><br />

                {text}

            </div>

        </div>

    );

}