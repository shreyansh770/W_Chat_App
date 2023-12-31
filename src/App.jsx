import "./styles/global.css"
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Body from "./components/Body"
import Enter from "./components/Enter"
import { useState } from "react"

function App() {
   const [userName, setUserName] = useState('');

  return (
    <>
       <Router>
          <Routes>
             <Route path="/enterchat" element={<Enter setUserName={setUserName}/>}/>
             <Route path='/' element={<Body userName={userName}/>}/>
          </Routes>
       </Router>
    </>
  )
}

export default App
