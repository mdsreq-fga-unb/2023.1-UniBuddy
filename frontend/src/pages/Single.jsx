import React from "react";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className="create">
      <div className="card">
        <h1 className="Titulo">Carrona Selecionada</h1>
        <div className="container">
          <div className="img-wrapper">
            <img src="https://cdn-icons-png.flaticon.com/128/7790/7790136.png" alt="" />
          </div>
          <p className="descricao">Descrição do Motorista:</p>
        </div>
        <p>Nome do Motorista: </p>
        <p>Bairro do Motorista: </p>
        <p>Vagas Disponíveis : </p>
        <div className="button-wrapper">
          <a href="https://api.whatsapp.com" target="_blank" rel="noopener noreferrer" className="button-whatsapp">
            <span>Entrar em contato</span>
          </a>
          <button className="button">Solicitar Carona</button>
        </div>
      </div>
    </div>
  );
};

export default Single;
