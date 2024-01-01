import LeftMenu from './LeftMenu'
import Contacts from './Contacts'
import Chatbox from './Chatbox'
import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import {  useNavigate } from 'react-router-dom'

const socket = io('http://localhost:3000')
const Body = ({ userName,avatar }) => {

  const navigate = useNavigate()
  const [people, setPeople] = useState("");
  const [room, setRoom] = useState("")


  useEffect(()=>{
      if(userName==""){
        navigate("/enterchat")
        return
      } 
  },[])
  return (
    <>
      

        <div className="main main-body">
          <LeftMenu avatar={avatar}/>
          <Contacts socket={socket} setPeople={setPeople} setRoom={setRoom} currRoom={room} />
          <Chatbox socket={socket} people={people} room={room} />
        </div>
      

    </>
  )
}

export default Body