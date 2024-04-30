import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import Header from '../components/Header';
import '../style/Login.css';
import logo from '../assets/Logotipo feminino esmalteria delicado rosa (1).png';
import imagenLogin from '../assets/OIG2.QVSjcK.BdFI.jpeg';

const LoginAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aqui você colocaria a lógica para lidar com o login
    } catch (error) {
      console.error('Login falhou:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <h2>Login de Administrador</h2>
        <div className="login-form-container">
          <div className="login-image">
            <img src={imagenLogin} alt="Login" />
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <img src={logo} alt="Login" />
              <label htmlFor="username">
                <FaUser />
                Nome de usuário:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <FaLock />
                Senha:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
