// src/pages/LoginAdmin.js
import React from 'react';
import Header from '../components/Header';
import '../style/Login.css'; 
import logo from '../assets/Logotipo feminino esmalteria delicado rosa (1).png';
import imagenLogin from '../assets/OIG2.QVSjcK.BdFI.'
const LoginAdmin = () => {
  return (
    <div>
      <Header />
      <div className="login-container">
        <h2>Login de Administrador</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Nome de usuário:</label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginAdmin;
