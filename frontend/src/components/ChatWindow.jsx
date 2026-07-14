import Message from "./Message";

export default function ChatWindow({ messages }) {

    return (

        <div
            style={{

                background:"#1e293b",

                borderRadius:"18px",

                padding:"25px",

                minHeight:"350px",

                maxHeight:"450px",

                overflowY:"auto",

                marginTop:"30px"

            }}
        >

            {

                messages.length===0 ?

                (

                    <p
                        style={{
                            textAlign:"center",
                            color:"#94a3b8"
                        }}
                    >

                        🤖 Upload a PDF and ask your first question.

                    </p>

                )

                :

                messages.map((msg,index)=>

                    <Message

                        key={index}

                        sender={msg.sender}

                        text={msg.text}

                    />

                )

            }

        </div>

    );

}