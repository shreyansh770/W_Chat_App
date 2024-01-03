import { useNavigate } from 'react-router-dom';
import '../styles/Enter.css'; 
import * as api from '../api/axios'

const Enter = ({ userName, setUserName ,setAvatar}) => {


  const navigate = useNavigate()
  const handleJoin =  async () => {

    const options = {
      set: 'set1', // Different sets provide different styles of robots
      bgset: 'bg2', // You can choose different background styles
      size: 200,
      format: 'png',
      seed: Math.random().toString(),
    };

    const queryParams = new URLSearchParams(options).toString();
    const avatar = `https://robohash.org/${queryParams}`

    setAvatar(avatar)

    let res =  await api.enterUser({userName,avatar_link:avatar})

    navigate("/")
  };

  return (
    <div className="enter-container">
      <h1>Welcome to W_Chat</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your W_Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleJoin}>Join</button>
      </div>
    </div>
  );
};

export default Enter;
