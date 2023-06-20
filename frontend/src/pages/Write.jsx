import React, { useState } from "react";
import { Link } from "react-router-dom";
import carro from '../img/carro.png';
import './styles/Write.css';

const Write = () => {
  const [vagas, setVagas] = useState("");
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const caronaData = {
      vagas,
      origem,
      destino,
      data,
      horario,
    };
  
    try {

      const token = localStorage.getItem("token"); // Obtenha o token armazenado
  
      console.log("Token:", token); // Adicione essa linha para exibir o token
  
      const response = await fetch("http://localhost:3000/caronas/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Inclua o token de autenticação no cabeçalho da solicitação
        },
        body: JSON.stringify(caronaData),
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Erro ao cadastrar carona:", error);
    }
  };

  return (
    <div className="create">
      <img className="carro" src={"https://cdn-icons-png.flaticon.com/128/2300/2300372.png"} alt="carro" />
      <h1>Crie a sua Carona</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          required
          type="number"
          placeholder="Quantidade de vagas"
          value={vagas}
          onChange={(e) => setVagas(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Origem da sua Carona"
          value={origem}
          onChange={(e) => setOrigem(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destino da sua Carona"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
        />
        <input
          type="date"
          placeholder="Data da Carona"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <input
          type="time"
          placeholder="Horario da Carona"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
        />
        <button type="submit">Criar Carona</button>
      </form>
    </div>
  );
};

export default Write;
