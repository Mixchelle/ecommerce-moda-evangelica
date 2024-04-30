import React from 'react';
import Header from '../components/Header';
import '../style/Login.css'; 
import logo from '../assets/ // Corrigi o nome do arquivo de logotipo
import imagenLogin from '../assets/OIG2.QVSjcK.BdFI.jpeg';

const LoginAdmin = () => {
  return (
    <div>
      <Header />
      <div className="login-container">
        <h2>Login de Administrador</h2>
        <div className="login-form-container">
          <div className="login-image">
            <img src={imagenLogin} alt="Login" />
          </div>
          <form className="login-form">
            <div className="form-group">
            <img src={logo} alt="Login" />
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
    </div>
  );
}

export default LoginAdmin;
