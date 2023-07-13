import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/authContext.jsx';

const Perfil = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();

  const [usuario, setUsuario] = useState(null);

  //http://localhost:3000/usuarios/perfil

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/usuarios/perfil`, {
          headers: {
            Authorization:  `${token}`,
            },
            });
        const data = await response.data;
        setUsuario(data.usuario);
      } catch (error) {
        console.log('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchUsuario();
  }, [id, token]);

  return (
    <div className="profile">
      <h1>Meu perfil</h1>
      {usuario && (
        <>
          <p>Nome: {usuario.nomeCompleto}</p>
          <p>Email: {usuario.email}</p>
          <p>Telefone: {usuario.telefone}</p>
        </>
      )}
    </div>
  );
};

export default Perfil;
