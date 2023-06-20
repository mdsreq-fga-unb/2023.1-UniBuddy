import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import carro from '../img/carro.png';

const Register = () => {
    const [inputs, setInputs] = useState({
        nome: "",
        telefone: "",
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
            const res = await axios.post("http://20231-unibuddy-production.up.railway.app/usuarios/registro", inputs);
            console.log(res);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
        setError(err.res.data);
    };


    return (
        <div className="auth">
            <img className="carro" src={carro} alt="carro" />
            <h1>Crie o seu Perfil</h1>
            <form>
                <input required type="text" placeholder="Nome Completo" name="nome" onChange={handleInputChange}/>
                <input required type="text" placeholder="Endereço de Email" name="email"onChange={handleInputChange}/>
                <input required type="number" placeholder="Telefone" name="telefone" onChange={handleInputChange}/>
                <input required type="password" placeholder="Senha" name="senha"onChange={handleInputChange}/>
                <button className="authButton" onClick={handleSubmit}>Registrar</button>
                {err && <span>{err}</span>}
                <span>Você já possui conta? <Link to="/login">Entrar</Link> </span>
            </form>
        </div>
    
    )}

export default Register;