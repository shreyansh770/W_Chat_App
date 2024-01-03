import { useEffect, useState } from "react"
import "../styles/global.css"
import * as api from "../api/axios"

/*
  on click con-user-pp a room should be created for the current user 
  and con-user and only these two should be able to chat in this room 
*/

let users = []
const Contacts = ({ socket, setPeople, setRoom, currRoom }) => {

  let getUsers = async ()=>{
     let res = await api.getUser() 
     users = res.data;
  }

  useEffect( ()=>{
     getUsers()     
     console.log(users);
     
  },[])

  const handlePeopleToTalk = (e) => {

    if (currRoom != "") {
      socket.emit("leave_conversation", currRoom)
    }

    let user_name = e.target.innerHTML

    setPeople(user_name)

    const room = "W" + "_" + user_name

    socket.emit("createroom", room)
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

          {
            users?.map((user, key) => {
              return (
                <div className="con-user" key={key}>
                  <div className="con-user-pp">
                    <img src={user.avatar_link} width="90%" height="80%" alt="user_avatar" />
                  </div>
                  <div className="con-user-msg">
                    <h3 onClick={(e) => handlePeopleToTalk(e)}>{user.userName}</h3>
                    <p>Some random message just for testing purpose</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Contacts