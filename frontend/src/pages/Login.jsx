import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import carro from '../img/carro.png';
import './styles/Login.css';


const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        senha: "",
    });
    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputs);
        try {
            const res = await axios.post("http://20231-unibuddy-production.up.railway.app/usuarios/login", inputs);
            console.log(res);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
        setError(err.res.data);
    };
    return (
         <div className="auth">
            <div className="bem-vindo">
                <img className="carro" src={carro} alt="Imagem da Carona" />
                <h1>Bem vindo ao UniBuddy</h1>
            </div>
            <form>
                <input required type="text" placeholder="Endereço de Email" name="email" onChange={handleInputChange}/>
                <input required type="password" placeholder="Senha" name="senha" onChange={handleInputChange}/>
                <button className="authButton" onClick={handleSubmit}>Entrar</button>
                {err && <span>{err}</span>}
                <span>Você ainda não possui conta? <Link to="/register">Cadastrar</Link> </span>
            </form>
        </div>
    
    )}

export default Login;