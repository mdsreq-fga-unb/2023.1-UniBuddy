import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext.jsx';

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    senha: '',
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://nice-puce-lovebird-cape.cyclic.app/usuarios/login', inputs);
      const { token } = response.data;
      if (token) {
        await login(inputs);
        navigate('/'); // Redireciona para a página de perfil após o login
      } else {
        setError('Email ou senha incorretos');
      }
    } catch (err) {
      console.log(err);
      setError('Erro ao efetuar o login');
    }
  };

  return (
    <div className="auth">
      <div className="entrar">
        <img src="https://cdn-icons-png.flaticon.com/128/3146/3146464.png" alt="" />
        <h1>Bem vindo a UniBuddy</h1>
      </div>
      <form>
        <input required type="email" placeholder="Endereço de Email" name="email" onChange={handleInputChange} />
        <input required type="password" placeholder="Senha" name="senha" onChange={handleInputChange} />
        <button className="authButton" onClick={handleSubmit}>Entrar</button>
        {err && <span>{err}</span>}
        <span>Você ainda não possui uma conta? <Link to="/register">Registrar</Link> </span>
      </form>
    </div>
  );
};

export default Login;
