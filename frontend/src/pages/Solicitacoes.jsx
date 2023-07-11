import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Solicitacoes = () => {
  const [notificacoes, setNotificacoes] = useState([]); // Estado para armazenar as solicitações
  const { id } = useParams();

  useEffect(() => {
    const fetchSolicitacoes = async () => {
      try {
        const response = await fetch(`http://localhost:3000/notificacoes/buscar/${id}`); // Substitua a URL pela rota correta do seu backend
        const data = response.json();
        setNotificacoes(data.notificacoes);
        console.log("data notificacao", data.notificacoes)
      } catch (error) {
        console.log("Erro ao buscar as notificacoes solicitadas:", error);
      }
    };

    fetchSolicitacoes();
  }, [id]);

  if(!notificacoes) {
    return <p>Carregando...</p>
  }

  return (
    <div className="profile-solicitacao">

      
      <h1 className="solicitacao-h1">Caronas solicitadas</h1>
      <div  className="solicitacao-div">
          <p>Nome:  solicitou carona com você{notificacoes.usuario.id}</p>
          <p>Origem:  - Destino:</p>
          <span className="edit-button-solicitacao">Aceitar</span>
          <span className="delete-button-solicitacao">Recusar</span>
      </div>

    
      
    </div>
  );
};

export default Solicitacoes;
