import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Solicitacoes = () => {
  const [solicitacoes, setSolicitacoes] = useState([]); // Estado para armazenar as solicitações

  useEffect(() => {
    const fetchSolicitacoes = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/caronas/caronas/${id}`); // Substitua a URL pela rota correta do seu backend
        const data = response.data;
        setSolicitacoes(data.caronas);
      } catch (error) {
        console.log("Erro ao buscar as caronas solicitadas:", error);
      }
    };

    fetchSolicitacoes();
  }, []);

  return (
    <div className="profile-solicitacao">

      
      <h1 className="solicitacao-h1">Caronas solicitadas</h1>
      <div  className="solicitacao-div">
          <p>Nome:  solicitou carona com você</p>
          <p>Origem: Asa Norte</p>
          <p> Destino: FGA </p>
          <div className="button-container">
            <span className="edit-button-solicitacao">Aceitar</span>
            <span className="delete-button-solicitacao">Rejeitar</span>
          </div>
      </div>


      {solicitacoes.map((solicitacao) => (
        <div key={solicitacao.id} className="solicitacao-div">
          <p>Nome: {solicitacao.nome} solicitou carona com você</p>
          <p>Origem: {solicitacao.origem} - Destino: {solicitacao.destino}</p>
          <span className="edit-button-solicitacao">Aceitar</span>
          <span className="delete-button-solicitacao">Recusar</span>
        </div>
      ))}
    </div>
  );
};

export default Solicitacoes;
