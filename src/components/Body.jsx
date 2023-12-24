import LeftMenu from './LeftMenu'
import Contacts from './Contacts'
import Chatbox from './Chatbox'

const App = () => {
  return (
    <>
       <div className="main main-body">
         <LeftMenu/>
          <Contacts/>
          <Chatbox/>
       </div>
    </>
  )
}

export default App