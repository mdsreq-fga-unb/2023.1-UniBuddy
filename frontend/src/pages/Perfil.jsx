import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/authContext.jsx';

const Perfil = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const [usuario, setUsuario] = useState(null);


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
