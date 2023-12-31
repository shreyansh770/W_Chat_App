import LeftMenu from './LeftMenu'
import Contacts from './Contacts'
import Chatbox from './Chatbox'
import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import {  useNavigate } from 'react-router-dom'

const socket = io('http://localhost:3000')
const Body = ({ userName }) => {

  const navigate = useNavigate()

  useEffect(()=>{

      if(userName==""){
        navigate("/enterchat")
        return
      } 
    
  },[])

  const [people, setPeople] = useState("");
  const [room, setRoom] = useState("")



  return (
    <>
      

        <div className="main main-body">
          <LeftMenu />
          <Contacts socket={socket} setPeople={setPeople} setRoom={setRoom} currRoom={room} />
          <Chatbox socket={socket} people={people} room={room} />
        </div>
      

    </>
  )
}

export default Body