import { useState } from "react"
import "../styles/global.css"
import { io } from 'socket.io-client'
/*
  on click con-user-pp a room should be created for the current user 
  and con-user and only these two should be able to chat in this room 
*/


const Contacts = ({socket,setPeople,setRoom}) => {



  const handlePeopleToTalk = (e)=>{
    let user_name = e.target.innerHTML
    setPeople (user_name)

    const room = "W"+"_"+user_name
    socket.emit("createroom",room)
    setRoom(room)
  }

  return (
    <>
      <div className="con-container">
        <div className="con-search">
          <div className="search-box">
            <input placeholder="Search Conversations" type="text" />
          </div>
          <div className="add-contact">
            <button>ADD</button>
          </div>
        </div>
        <div className="contacts">
          <div className="con-user">
            <div className="con-user-pp">
            </div>
            <div className="con-user-msg">
              <h3 onClick={(e)=>handlePeopleToTalk(e)}>Joe Lagger</h3>
              <p>Some random message just for testing purpose</p>
            </div>
          </div>

          <div className="con-user">
            <div className="con-user-pp">
            </div>
            <div className="con-user-msg">
              <h3 onClick={(e)=>handlePeopleToTalk(e)}>John Cena</h3>
              <p>Some random message just for testing purpose</p>
            </div>
          </div>

          <div className="con-user">
            <div className="con-user-pp">
            </div>
            <div className="con-user-msg">
              <h3 onClick={(e)=>handlePeopleToTalk(e)}>Virat Kohli</h3>
              <p>Some random message just for testing purpose</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts