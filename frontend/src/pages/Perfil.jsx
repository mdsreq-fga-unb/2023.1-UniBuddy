import React from "react";
import { Link } from "react-router-dom";

const Perfil = () => {
  return (
    <div className="profile">
        <img src="https://cdn-icons-png.flaticon.com/128/3135/3135768.png" alt="" />
      <h1>Meu perfil</h1>
      <p>Meus dados abaixo</p>
      <p>Nome: </p>
      <p>Matrícula: </p>
      <p>Endereço: </p>
      <p>Email: </p>

      <h2>Minhas caronas criadas</h2>
      <p>Minhas caronas abaixo</p>
      <div className="caronas-criadas">
        <div className="carona">
          <p className="title">Título da Carona</p>
          <p>Detalhes da Carona</p>
          <span className="delete-button">Excluir</span>
        </div>
        <div className="carona">
          <p className="title">Título da Carona</p>
          <p>Detalhes da Carona</p>
          <span className="delete-button">Excluir</span>
        </div>
      </div>

      <h2>Minhas caronas pegas</h2>
      <p>Minhas caronas pegas abaixo</p>
      <div className="caronas-pegas">
        <div className="carona">
          <p className="title">Título da Carona</p>
          <p>Detalhes da Carona</p>
        </div>
        <div className="carona">
          <p className="title">Título da Carona</p>
          <p>Detalhes da Carona</p>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
