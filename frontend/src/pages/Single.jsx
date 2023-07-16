import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import whats from '../img/whats_app.png';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './styles/Single.css';

const Single = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [caronasComNome, setCaronasComNome] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [motoristaSelecionado, setMotoristaSelecionado] = useState(null);


  const navigate = useNavigate();

  const config = {
    headers: { token: `${token}`}
  };

  const buscarMotorista = async (idUsuario) => {
    try {
      const response = await axios.get(`https://nice-puce-lovebird-cape.cyclic.app/usuarios/perfil/${idUsuario}`, config);
      const { usuario } = response.data;
      setMotoristaSelecionado(usuario);
    } catch (error) {
      console.log("Erro ao buscar perfil do motorista:", error);
    }
  };

  useEffect(() => {
    const fetchCarona = async () => {
      try {
        const response = await fetch(`https://nice-puce-lovebird-cape.cyclic.app/caronas/vizualizar/${id}`)
        const data = await response.json();
        setCaronasComNome(data.caronasComNome);
        console.log("CARONA ESPECIFICADA", data.caronasComNome)
      } catch (error) {
        console.log("Erro ao buscar a carona:", error);
      }
    };

    fetchCarona();
  }, [id]);

  const [solicitacao, setSolicitacao] = useState({
    vaga: "",
    message: ""
  });

  const handleSolicitarCarona = async (e) => {
    e.preventDefault();
    const config = {
      headers: { token: `${token}`}
    };
    try {
      const response = await axios.post(

        `https://nice-puce-lovebird-cape.cyclic.app/caronas/solicitar/${id}`,
        solicitacao, config
      );
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log("Erro ao cadastrar a carona:", error);
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
        <button className="profile-button-single" onClick={() => buscarMotorista(caronasComNome.id_usuario)}>Perfil do Motorista</button>
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
      {motoristaSelecionado && (
        <div className="modal">
          <h2>Perfil do Motorista desta Carona</h2>
          <p>Nome: {motoristaSelecionado.nomeCompleto}</p>
          <p>Email: {motoristaSelecionado.email}</p>
          <p>Telefone: {motoristaSelecionado.telefone}</p>
          <button onClick={() => setMotoristaSelecionado(null)}>Fechar</button>
          {/* Outras informações do perfil do motorista */}
        </div>
      )}
    </div>
  );
};

export default Single;
