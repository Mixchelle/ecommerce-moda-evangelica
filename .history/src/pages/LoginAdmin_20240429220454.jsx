import React from 'react';
import Header from '../components/Header';
import '../style/Login.css'; 
import logo from '../assets/Logotipo feminino esmalteria delicado rosa (1).png'
import imagenLogin from '../assets/OIG2.QVSjcK.BdFI.jpeg';

import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import '../../styles/LoginPage.css'; 
import logo from '../../assets/Coach Financeiro Logo (2).png';
import LoginService from '../../services/LoginService';
import useWebSocket from '../../websocket-server'; // Importando o hook useWebSocket

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const data = useWebSocket(); // Usando o hook useWebSocket para receber dados do WebSocket

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = await LoginService.login(username, password);
      console.log('Login successful. Token:', token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  if (data) {
    console.log('Dados recebidos do WebSocket:', data);
  }

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

export default LoginPage;
