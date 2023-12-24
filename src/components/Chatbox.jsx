import { useEffect, useState } from "react"
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')
const Chatbox = () => {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        
        socket.on('message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        })
        return () => {
            socket.off('message');
        }
    }, [])

    const sendMessage = (e) => {
        socket.emit('message', messages[messages.length - 1])
    }

    return (
        <div className="chat-box">
            <div className="chat-user">
                <div className="user-display">
                    <div className="user-pic">

                    </div>
                    <div className="user-online-info">
                        <h4>Sam Sullek</h4>
                        <p>Online</p>
                    </div>
                </div>
                <div className="user-box">
                </div>
            </div>



            <div className="chat-message">
                {messages.map((msg, idx) => {
                    return <p key={idx}>{msg}</p>
                })}
            </div>


            <div className="send-message">
                <div className="send-file"></div>
                <div className="message-box">
                    <input
                        placeholder="Send you message"
                        onBlur={(e) =>
                            setMessages([...messages, e.target.value])
                        }
                    ></input>
                </div>
                <div className="btn-send">
                    <button type="button" onClick={(e) => { sendMessage(e) }}>SEND TEXT</button>
                </div>
            </div>
        </div>
    )
}

export default Chatbox