import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import Logo from "../../assets/img/Logo.png"
import Finanzas from "../../assets/img/LoginFinanzas.jpg" 

  const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [apellido, setApellido] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3200/api/login', {
        correo: email,
        contrasenia: password,
      });
  
      // Aquí puedes manejar la respuesta del servidor
      console.log('Login exitoso:', response.data);
      // Luego, puedes llamar a la función onLogin con el usuario autenticado.
      onLogin({ name, email });
    } catch (error) {
      // Manejo de errores
      console.error('Error al iniciar sesión:', error.response ? error.response.data : error.message);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3200/api/usuarios/crear', {
        nombres: name,
        apellidos: apellido,
        correo: email,
        contrasenia: password,
      });
  
      // Aquí puedes manejar la respuesta del servidor
      console.log('Registro exitoso:', response.data);
      // Luego, puedes llamar a la función onLogin con el nuevo usuario registrado.
      onLogin({ name, apellido, email });
    } catch (error) {
      // Manejo de errores
      console.error('Error al registrarse:', error.response ? error.response.data : error.message);
    }
  };  

  return (
    <div className="login-container">
    <div className="TituloLogin">
      <img src={Logo} alt="Logo" />
      <h1>ThreeM</h1>
    </div>
    <div className="panels-container">
      <div className="left-panel">
        <h2>Es hora de controlar tus finanzas</h2>
        <img src={Finanzas} alt="Finanzas" />
        <p>¡Transforma tus sueños en realidad! Sé el arquitecto de tu futuro financiero. Construye, ahorra y alcanza tus metas con inteligencia financiera. Tu bienestar financiero comienza hoy.</p>
      </div>
    <div className="right-panel">
      <div className="form-container">
        <h3>{isRegistering ? 'Registro' : 'Inicia Sesión en Money Minder Management'}</h3>
        {isRegistering && (
          <div>
            <label>Nombre:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>Apellido:</label>
            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
          </div>
        )}
        <div>
          <label>Correo Electrónico:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={isRegistering ? handleRegister : handleLogin}>
          {isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
        </button>
        <p onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? '¿Ya tienes una cuenta? Inicia Sesión' : '¿No tienes cuenta? Regístrate'}
        </p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;