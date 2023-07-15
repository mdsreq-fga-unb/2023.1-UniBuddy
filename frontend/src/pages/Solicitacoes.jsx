import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Solicitacoes = () => {

  const token = localStorage.getItem("token");

  const [notificacoes, setNotificacoes] = useState([]); // Estado para armazenar as notificações
    
  useEffect(() => {
    const config = {
      headers: { token: token }
    };
    const fetchSolicitacoes = async () => {
      try {
        const response = await axios.get(`https://nice-puce-lovebird-cape.cyclic.app/notificacoes/buscar`, config);
        const data = response.data;
        console.log("data>>", data)
        setNotificacoes(data.notificacoes);
      } catch (error) {
        console.log("Erro ao buscar as notificacoes solicitadas:", error);
      }
    };

    fetchSolicitacoes();
  }, [token]);

  return (
    <div className="profile-solicitacao">
      <h1 className="solicitacao-h1">Notificações</h1>
      {notificacoes.map((notificacoes) => (
        <div key={notificacoes.id} className="solicitacao-div">
          <p>{notificacoes.conteudo}</p>
          <div className="button-container">
            <span className="edit-button-solicitacao">Aceitar</span>
            <span className="delete-button-solicitacao">Rejeitar</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Solicitacoes;