import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Perfil = () => {
  const { id } = useParams();

  const [usuario, setUsuario] = useState(null);
  const [caronas, setCaronas] = useState([]);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/perfil/${id}`); // Substitua a URL pela rota correta do seu backend
        const data = response.data;
        setUsuario(data.usuario);
      } catch (error) {
        console.log("Erro ao buscar dados do usuário:", error);
      }
    };

    const fetchCaronas = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/caronas/${id}`); // Substitua a URL pela rota correta do seu backend
        const data = response.data;
        setCaronas(data.caronas);
      } catch (error) {
        console.log("Erro ao buscar caronas do usuário:", error);
      }
    };

    fetchUsuario();
    fetchCaronas();
  }, []);

  return (
    <div className="profile">
      <h1>Meu perfil</h1>
      {usuario && (
        <>
          <p>Nome: {usuario.nomeCompleto}</p>
          <p>Matrícula: {usuario.matricula}</p>
          <p>Endereço: {usuario.endereco}</p>
          <p>Email: {usuario.email}</p>
        </>
      )}

      <h2>Minhas caronas criadas</h2>
      <div className="caronas-criadas">
        {caronas.map((carona) => (
          <div className="carona" key={carona.id}>
            <p className="title">Destino: {carona.destino}</p>
            <p>Detalhes da Carona: {carona.descricao}</p>
            <p>Vagas: {carona.vagas}</p>
            <div className="button-container">
              <span className="edit-button">Editar</span>
              <span className="delete-button">Excluir</span>
            </div>
          </div>
        ))}
      </div>
      <div className="button-container-geral">
        <Link className="linkEdit" to="/write">
          Editar Perfil
        </Link>
        <Link className="linkDelete" to="/write">
          Deletar Perfil
        </Link>
      </div>

    </div>
  );
};

export default Perfil;
