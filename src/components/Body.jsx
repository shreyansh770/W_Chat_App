import LeftMenu from './LeftMenu'
import Contacts from './Contacts'
import Chatbox from './Chatbox'
import { useState } from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')
const App = () => {

  const [people , setPeople] = useState("");
  const [room,setRoom] = useState("")

  return (
    <>
       <div className="main main-body">
         <LeftMenu/>
          <Contacts socket = {socket} setPeople={setPeople} setRoom={setRoom}/>
          <Chatbox socket = {socket} people = {people} room={room}/>
       </div>
    </>
  )
}

export default App