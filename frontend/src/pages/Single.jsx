import React from "react";
import { Link } from "react-router-dom";
import './styles/Single.css';
import whats from '../img/whats_app.png';

const Single = () => {
  return (
    <div className="create">
      <div className="card">
        <h1 className="Titulo">Carona Selecionada</h1>
        <div className="container">
          <div className="img-wrapper">
            <img src="https://cdn-icons-png.flaticon.com/128/7790/7790136.png" alt="" />
          </div>
          <p className="descricao">
            Descrição do Motorista: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam maiores, vitae nam iure nemo impedit officia quisquam nobis pariatur natus, eum porro libero aperiam tempore, quam possimus sint modi. Provident.
          </p>
        </div>
        <p>Nome do Motorista: Fulano </p>
        <p>Bairro do Motorista: Asa Norte </p>
        <p>Vagas Disponíveis : 4 </p>
        <div className="button-wrapper">
         
          <a href="https://api.whatsapp.com" target="_blank" rel="noopener noreferrer" className="button-whatsapp">
            <img className="whatsapp" src={whats} alt="whatsapp" />
            <span className="span">Entrar em contato</span>
          </a>
          <button className="button">Solicitar Carona</button>
        </div>
      </div>
    </div>
  );
};

export default Single;
