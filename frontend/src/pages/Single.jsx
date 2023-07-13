import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './styles/Single.css';
import whats from '../img/whats_app.png';
import { useNavigate } from "react-router-dom";

const Single = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [caronasComNome, setCaronasComNome] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();

  const removerCarona = async () => {
    try {
      const response = await fetch(`http://localhost:3000/caronas/remover/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
      });

      if (response.ok) {
        console.log("Carona removida com sucesso")
        navigate("/") 
      } else {
        console.log("Erro ao remover a carona")
        // Lógica de tratamento de erro em caso de falha na remoção da carona
      }
      navigate("/")
    } catch (error) {
      console.log("Erro ao remover a carona:", error);
    }

  };
  


  useEffect(() => {
    const fetchCarona = async () => {
      try {
        const response = await fetch(`http://localhost:3000/caronas/vizualizar/${id}`)
        
        const data = await response.json();
        setCaronasComNome(data.caronasComNome);
      } catch (error) {
        console.log("Erro ao buscar a carona:", error);
      }
    };

    fetchCarona();
  }, [id]);


  const handleSolicitarCarona = async () => {
    

    try {
      const response = await fetch(`http://localhost:3000/caronas/solicitar/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
          },
        });
      

      if (response.ok) {
        console.log("Carona solicitada com sucesso")
        // Lógica de sucesso após solicitar a carona
      } else {
        console.log("Erro ao solicitar a carona")
        // Lógica de tratamento de erro em caso de falha na solicitação da carona
      }
      navigate("/")
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
        <p>Nome do Motorista: {caronasComNome.nome}</p>
        <p>Origem da Carona: {caronasComNome.origem}</p>
        <p>Destino da Carona: {caronasComNome.destino}</p>
        <p>Vagas Disponíveis: {caronasComNome.vagas}</p>
        <p>Data da Carona: {caronasComNome.data}</p>
        <p>Horário da Carona: {caronasComNome.horario}</p>
        <div className="container">
          <p className="descricao">
            Descrição do motorista : 
            {caronasComNome.descricao}
          </p>
        </div>
        <div className="button-wrapper">
          <a href={`https://wa.me/${caronasComNome.telefone}?text=Ola,%20eu%20vim%20atraves%20do%20UniBuddy%20e%20quero%20uma%20carona`} target="_blank" rel="noopener noreferrer" className="button-whatsapp">
            <img className="whatsapp" src={whats} alt="whatsapp" />
            <span className="span">Entrar em contato</span>
          </a>
          <button className="button" onClick={removerCarona}>Excluir Carrona</button>
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