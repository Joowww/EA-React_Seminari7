import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './AuthForm.css'; 
import { toast } from 'react-toastify';


export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password); 
      toast.success('¡Bienvenido '+username+'!');
      navigate('/events', { replace: true });
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <div className="auth-container">
      <form className="form" onSubmit={submit}>
        <p className="title">Login</p>
        <p className="message">Inicia sesión para ver los eventos.</p>

        <label>
          <input
            className="input"
            type="text"
            placeholder=" "
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span>Username</span>
        </label>

        <label>
          <input
            className="input"
            type="password"
            placeholder=" "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>

        <button type="submit" className="submit">Entrar</button>

        <p className="signin">
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </form>
    </div>
  );
};