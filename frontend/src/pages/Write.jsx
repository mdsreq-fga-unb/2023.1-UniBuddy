import React, { useState } from "react";
import { Link } from "react-router-dom";
import carro from '../img/carro.png';
import './styles/Write.css';
import { useNavigate } from "react-router-dom";

const Write = () => {
  const [vagas, setVagas] = useState("");
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [descricao, setDescricao] = useState("");

  const navigate = useNavigate();


  const [inputsCarona, setInputsCarona] = useState({
    vagas: "",
    origem: "",
    destino: "",
    data: "",
    horario: "",
    descricao: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputsCarona({ ...inputsCarona, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
        console.log(inputsCarona);
     // Adicione essa linha para exibir o token
    
        const response = await fetch("http://localhost:3000/caronas/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer`, // Inclua o token de autenticação no cabeçalho da solicitação
        },
        body: JSON.stringify(inputsCarona),
      });
  
      const data = await response.json();
      console.log(data);
      navigate("/")
    } catch (error) {
      console.log("Erro ao cadastrar carona:", error);
    }
  };

  return (
    <div className="create">
      <img className="carro" src={"https://cdn-icons-png.flaticon.com/128/2300/2300372.png"} alt="carro" />
      <h1>Crie a sua Carona</h1>
      <form className="form">
        <input
          required
          type="number"
          placeholder="Quantidade de vagas"
          name="vagas"
          onChange={handleInputChange}
        />
        <input
          required
          type="text"
          placeholder="Origem da sua Carona"
          name="origem"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Destino da sua Carona"
          name="destino"
          onChange={handleInputChange}
        />
        <input
          type="date"
          placeholder="Data da Carona"
          name="data"
          onChange={handleInputChange}
        />
        <input
          type="time"
          placeholder="Horario da Carona"
          name="horario"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Descrição"
          name="descricao"
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Criar Carona</button>
      </form>
    </div>
  );
};

export default Write;
