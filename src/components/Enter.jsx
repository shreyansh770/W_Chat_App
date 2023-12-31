import { useNavigate } from 'react-router-dom';
import '../styles/Enter.css'; 

const Enter = ({ setUserName }) => {


  const navigate = useNavigate()
  const handleJoin = () => {
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
