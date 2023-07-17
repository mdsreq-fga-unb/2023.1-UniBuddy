import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './styles/Solicitacoes.css';

const Solicitacoes = () => {
  const token = localStorage.getItem("token");
  const [notificacoes, setNotificacoes] = useState([]);

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

  const handleAceitarNotificacao = (id) => {
    // Atualiza o status da notificação para true
    const updatedNotificacoes = notificacoes.map((notificacao) => {
      if (notificacoes.id === id) {
        return {
          ...notificacao,
          status: notificacoes.status ? false : true
        };
      }
      return notificacao;
    }
    )
  };

  const handleRejeitarNotificacao = (id) => {
    // Atualiza o status da notificação para false
    const updatedNotificacoes = notificacoes.map((notificacao) => {
      if (notificacoes.id === id) {
        return {
          ...notificacao,
          status: notificacoes.status ? false : true
        };
      }
      return notificacao;
    });
  };

  return (
    <div className="profile-solicitacao">
      <h1 className="solicitacao-h1">Notificações</h1>
      {notificacoes.map((notificacao) => (
        <div key={notificacao.id} className="solicitacao-div">
          <p className="p_solicitacao">{notificacao.conteudo}</p>
          <div className="button-container">
            <button className="edit-button-solicitacao" onClick={() => handleAceitarNotificacao(notificacao.id)}>
              Aceitar
            </button>
            <button className="delete-button-solicitacao" onClick={() => handleRejeitarNotificacao(notificacao.id)}>
              Rejeitar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Solicitacoes;
