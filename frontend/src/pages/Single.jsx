import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './styles/Single.css';
import whats from '../img/whats_app.png';

const Single = () => {
  const { id } = useParams();
  const [caronasComNome, setCaronasComNome] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const fetchCarona = async () => {
      try {
        const response = await fetch(`http://localhost:3000/caronas/vizualizar/${id}`);
        const data = await response.json();
        setCaronasComNome(data.caronasComNome);
      } catch (error) {
        console.log("Erro ao buscar a carona:", error);
      }
    };

    fetchCarona();
  }, [id]);

  const handleSolicitarCarona = async () => {
    const token = JSON.parse(localStorage.getItem("user")).token;
    console.log("Token:", token)

    try {
      const response = await fetch(`http://localhost:3000/caronas/solicitar/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
      });

      if (response.ok) {
        // Lógica de sucesso após solicitar a carona
      } else {
        // Lógica de tratamento de erro em caso de falha na solicitação da carona
      }
    } catch (error) {
      console.log("Erro ao solicitar a carona:", error);
    }
  };

  const showConfirmationPopup = () => {
    setShowConfirmation(true);
  };

  const hideConfirmationPopup = () => {
    setShowConfirmation(false);
  };

  if (!caronasComNome) {
    return <div>Loading...</div>; // Ou qualquer indicador de carregamento desejado
  }

  return (
    <div className="create">
      <div className="card">
        <h1 className="Titulo">Carona Selecionada</h1>
        <div className="container">
          <div className="img-wrapper">
            <img src="https://cdn-icons-png.flaticon.com/128/2102/2102647.png" alt="" />
          </div>
          <p className="descricao">
            {caronasComNome.descricao}
          </p>
        </div>
        <p>Nome do Motorista: {caronasComNome.nome}</p>
        <p>Origem da Carona: {caronasComNome.origem}</p>
        <p>Destino da Carona: {caronasComNome.destino}</p>
        <p>Vagas Disponíveis: {caronasComNome.vagas}</p>
        <p>Data da Carona: {caronasComNome.data}</p>
        <p>Horário da Carona: {caronasComNome.horario}</p>
        <div className="button-wrapper">
          <a href={`https://wa.me/${caronasComNome.telefone}?text=Ola,%20eu%20vim%20atraves%20do%20UniBuddy%20e%20quero%20uma%20carona`} target="_blank" rel="noopener noreferrer" className="button-whatsapp">
            <img className="whatsapp" src={whats} alt="whatsapp" />
            <span className="span">Entrar em contato</span>
          </a>
          <button className="button" onClick={showConfirmationPopup}>Solicitar Carona</button>
          {showConfirmation && (
            <div className="confirmation-popup">
              <h2>Tem certeza que deseja solicitar essa carona?</h2>
              <button onClick={handleSolicitarCarona} className="confirm">Confirmar</button>
              <button onClick={hideConfirmationPopup}>Cancelar</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Single;
