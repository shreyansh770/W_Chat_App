import { useCallback, useEffect, useState } from "react"
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')
const Chatbox = () => {
    const [messages, setMessages] = useState([])
    const [mts , setMts] = useState("")

    const handleMessage = useCallback((msg)=>{
        setMessages((prevMessages) => [...prevMessages, msg]);
    },[])

    useEffect(()=>{
          socket.on('message',handleMessage)

          return ()=>{
             socket.off('message',handleMessage)
          }
    },[handleMessage])

    const sendMessage = () => {
        socket.emit('message', mts)
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
                            setMts(e.target.value)
                        }
                    ></input>
                </div>
                <div className="btn-send">
                    <button type="button" onClick={sendMessage}>SEND TEXT</button>
                </div>
            </div>
        </div>
    )
}

export default Chatbox