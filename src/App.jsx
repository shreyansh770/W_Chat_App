import "./styles/global.css"
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Body from "./components/Body"
import Enter from "./components/Enter"
import { useState } from "react"

function App() {
   const [userName, setUserName] = useState('');
   const [avatar,setAvatar] = useState("")

  return (
    <>
       <Router>
          <Routes>
             <Route path="/enterchat" element={<Enter userName={userName} setUserName={setUserName} setAvatar={setAvatar}/>}/>
             <Route path='/' element={<Body userName={userName} avatar={avatar}/>}/>
          </Routes>
       </Router>
    </>
  )
}

export default App
