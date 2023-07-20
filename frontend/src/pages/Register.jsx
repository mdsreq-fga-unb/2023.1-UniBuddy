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

    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      const openModal = () => {
        setShowModal(true);
      };

      const closeModal = () => {
        setShowModal(false);
      };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!inputs.senha) {
          setError("Digite a senha antes de registrar.");
          return;
        }
        if (!inputs.email) {
          setError("Digite o email antes de registrar.");
          return;
        }
        if (!inputs.nomeCompleto) {
          setError("Digite o nome antes de registrar.");
          return;
        }
        console.log(inputs);
        try {
            const res = await axios.post("https://nice-puce-lovebird-cape.cyclic.app/usuarios/registro", inputs, config);
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

      //campos obrigatorios : nome, email, senha, telefone


    return (
        <div className="auth">
            <img className="carro" src={"https://cdn-icons-png.flaticon.com/128/2766/2766737.png"} alt="carro" />
            <div className="info-button">
              <button onClick={openModal}>ℹ</button>
            </div>
            {showModal && (
              <div className="modal">
                <div className="modal-content">
                  <h2>Regras dos Campos</h2>
                  <ul>
                    <li>
                      Nome Completo: Apenas letras e espaços são permitidos.
                    </li>
                    <li>
                      Email : Deve ser um email válido.
                    </li>
                    <li>
                      Telefone: Deve ser um número de telefone válido.
                    </li>
                    <li>
                      Senha : É um campo obrigatório.
                    </li>
                  </ul>
                  <button onClick={closeModal}>Fechar</button>
                </div>
              </div>
            )}
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