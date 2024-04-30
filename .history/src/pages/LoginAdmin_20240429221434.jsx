import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import '../style/Login.css';
import logo from '../assets/';

const LoginAdmin = () => {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // Usando o hook useWebSocket para receber dados do WebSocket
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
       
      } catch (error) {
       
      }
    };
  

    return (
      <div className="login-container">
        <div className="image-container">
          <img src={logo} alt="Logo da Empresa" />
        </div>
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">
                <FaUser />
                Usuario:
              </label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <FaLock /> Senha:
              </label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <button type="submit">
              <span className="transition"></span>
              <span className="gradient"></span>
              <span className="label">Login</span>
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default LoginAdmin;
  