import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CadastrarCarona = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();


  const [carona, setCarona] = useState({
    vagas: "",
    origem: "",
    destino: "",
    data: "",
    horario: "",
    descricao: "",
    token: token
  });

  const handleInputChange = (e) => {
    setCarona({ ...carona, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/caronas/cadastrar",
        carona
      );

      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log("Erro ao cadastrar a carona:", error);
      // Lógica de tratamento de erro em caso de falha no cadastro da carona
    }
  };

  return (
    <div className="create">
      <img
        className="carro"
        src="https://cdn-icons-png.flaticon.com/128/2300/2300372.png"
        alt="carro"
      />
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

export default CadastrarCarona;