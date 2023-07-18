import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './styles/Solicitacoes.css';

const Solicitacoes = () => {
  const token = localStorage.getItem("token");
  const [notificacoes, setNotificacoes] = useState([]);
  const [notificacao, setNotificacao] = useState({});

  useEffect(() => {
    const config = {
      headers: { token: token }
    };

    const fetchSolicitacoes = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/notificacoes/buscar`, config);
        const data = response.data;
        console.log("data>>", data)
        setNotificacoes(data.notificacoes);
      } catch (error) {
        console.log("Erro ao buscar as notificacoes solicitadas:", error);
      } 
    };

    fetchSolicitacoes();
  }, [token]);

  const handleAceitarNotificacao = async (idCarona, idCorrespondente) => {
    const config = {
      headers: { token: token }
    };

    const body = {
      idCarona : idCarona,
      idPassageiro : idCorrespondente
    }

    try {
      const response = await axios.post(`http://localhost:3000/caronas/aceitar-solicitacao`, body, config);
      const data = response.data;
      console.log("data>>", data)
      setNotificacao(data);
    } catch (error) {
      console.log("Erro ao buscar as notificacoes solicitadas:", error);
    } finally {
      console.log("finally")
    }

  };

  const handleRejeitarNotificacao = async (idCarona, idCorrespondente) => {
    const config = {
      headers: { token: token }
    };

    const body = {
      idCarona : idCarona,
      idPassageiro : idCorrespondente
    }

    try {
      const response = await axios.post(`http://localhost:3000/caronas/recusar-solicitacao`, body, config);
      const data = response.data;
      console.log("data>>", data)
      setNotificacao(data);
    } catch (error) {
      console.log("Erro ao buscar as notificacoes solicitadas:", error);
    } finally {
      console.log("finally")
    }
  };

  return (
    <div className="profile-solicitacao">
      <h1 className="solicitacao-h1">Notificações</h1>
      {notificacoes.map((notificacao) => (
        <div key={notificacao.id} className="solicitacao-div">
          <p className="p_solicitacao">{notificacao.conteudo}</p>
          <div className="button-container">
            <button className="edit-button-solicitacao" onClick={() => handleAceitarNotificacao(notificacao.idCarona, notificacao.idCorrespondente)}>
              Aceitar
            </button>
            <button className="delete-button-solicitacao" onClick={() => handleRejeitarNotificacao(notificacao.idCarona, notificacao.idCorrespondente)}>
              Rejeitar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Solicitacoes;
