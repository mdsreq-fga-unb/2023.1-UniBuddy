import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/authContext.jsx';
import './styles/Perfil.css';

const Perfil = () => {
  const token = localStorage.getItem("token");

  const [usuario, setUsuario] = useState(null);
  const [caronas, setCaronas] = useState([]);

  const config = {
    headers: { token: `${token}`}
  };

  useEffect(() => {
    console.log('token>>', token)
    const fetchUsuario = async () => {
      try {
        const response = await axios.get("http://localhost:3000/usuarios/perfil", config);
        const data = await response.data;
        setUsuario(data.usuario);
        console.log("data>>", data)
      } catch (error) {
        console.log("Erro ao buscar o usuário:", error);
      }
    };

    const fetchCarona = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/usuarios/caronas`, config);
        const data = await response.data;
        setCaronas(data);
        console.log("data2>>", data)
      } catch (error) {
        console.log("Erro ao buscar a carona:", error);
      }
    };

    fetchUsuario();
    fetchCarona();
  }, [token]);

  return (
    <>
      <div className="profile-screen">
        <h1 className="h1_perfil">Meu perfil</h1>
        {usuario && (
          <>
            <p><strong>Nome:</strong> {usuario.nomeCompleto}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
            <p><strong>Telefone:</strong> {usuario.telefone}</p>
          </>
        )}
      </div>
      <div className="profile-caronas">
        <h1>Minhas caronas criadas</h1>
        <div className="caronas-container">
          {caronas && caronas.length > 0 ? (
            caronas.map((carona) => (
              <div key={carona.id_usuario} className="carona-card">
                <div className="carona-info">
                  <p className="origem-destino">Origem: {carona.origem}</p>
                  <p className="origem-destino">Destino: {carona.destino}</p>
                  <p>Horário: {carona.horario}</p>
                  <p>Vagas: {carona.vagas}</p>
                  <p>Descrição: {carona.descricao}</p>
                </div>
                <div className="button-container">
                  <Link to={`/caronas/${carona.id}`} className="edit-button">Editar</Link>
                  <Link to={`/caronas/${carona.id}`} className="delete-button">Excluir</Link>
                </div>
              </div>
            ))
          ) : (
            <p>Não há caronas disponíveis.</p>
          )}
        </div>
      </div>
      <div className='button-container'>
        <Link to="/caronas/criar" className="criar-carona">Editar Perfil</Link>
        <Link to="/caronas/criar" className="criar-carona">Remover Perfil</Link>
      </div>
    </>
  );
};

export default Perfil;
