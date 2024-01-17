import React, { useState } from 'react';
import './Login.css';
import Logo from "../../assets/img/Logo.png"
import Finanzas from "../../assets/img/LoginFinanzas.jpg" 

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [apellido, setApellido] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    // Aquí deberías implementar la lógica de autenticación
    // Puedes hacer una solicitud a un servidor para verificar las credenciales
    // y obtener un token de autenticación si es exitoso.
    // Por ahora, simplemente imprimiremos los datos en la consola.
    console.log('Iniciar sesión con:', email, password);
    // Luego, puedes llamar a la función onLogin con el usuario autenticado.
    onLogin({ name, email });
  };

  const handleRegister = () => {
    // Aquí deberías implementar la lógica de registro
    // Puedes hacer una solicitud a un servidor para crear una nueva cuenta.
    // Por ahora, simplemente imprimiremos los datos en la consola.
    console.log('Registrarse con:', name, apellido, email, password);
    // Luego, puedes llamar a la función onLogin con el nuevo usuario registrado.
    onLogin({ name, apellido, email });
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