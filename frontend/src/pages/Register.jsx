import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import carro from '../img/carro.png';
import "./../style.scss";



const Register = () => {
    const [inputs, setInputs] = useState({
        nomeCompleto: "",
        telefone: "",
        email: "",
        senha: "",
    });
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputs);
        try {
            const res = await axios.post("https://20231-unibuddy-production.up.railway.app/usuarios/registro", inputs, config);
            console.log("entrou no try")
            console.log(res);
            navigate("/login"); 
        } catch (error) {
          console.log(error);
          if (error.response) {
            setError(error.response.data.error);
          } else {
            setError("Erro ao registrar usuário.");
          }
        }
      };


    return (
        <div className="auth">
            <img className="carro" src={"https://cdn-icons-png.flaticon.com/128/2766/2766737.png"} alt="carro" />
            <h1>Crie o seu Perfil</h1>
            <form>
                <input required type="text" placeholder="Nome Completo" name="nomeCompleto" onChange={handleInputChange}/>
                <input required type="email" placeholder="Endereço de Email" name="email"onChange={handleInputChange}/>
                <input required type="tel" placeholder="Telefone" name="telefone" onChange={handleInputChange}/>
                <input required type="password" placeholder="Senha" name="senha"onChange={handleInputChange}/>
                <button className="authButton" onClick={handleSubmit}>Registrar</button>
                {err && <span>{err}</span>}
                <span>Você já possui conta? <Link to="/login">Entrar</Link> </span>
            </form>
        </div>
    
    )}

export default Register;