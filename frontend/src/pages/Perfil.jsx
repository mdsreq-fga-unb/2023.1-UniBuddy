import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles/Perfil.css';

const Perfil = () => {
  const token = localStorage.getItem("token");

  const [usuario, setUsuario] = useState(null);
  const [caronas, setCaronas] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [perfilEditado, setPerfilEditado] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [caronaEditada, setCaronaEditada] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteCaronaModal, setShowDeleteCaronaModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const config = {
    headers: { token: `${token}`}
  };

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await axios.get("http://localhost:3000/usuarios/perfil", config);
        const data = await response.data;
        setUsuario(data.usuario);
      } catch (error) {
        console.log("Erro ao buscar o usuário:", error);
      }
    };

    const fetchCarona = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:3000/usuarios/caronas", config);
        const data = await response.data;
        setCaronas(data);
      } catch (error) {
        console.log("Erro ao buscar a carona:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsuario();
    fetchCarona();
  }, [token]);

  const handleEditarPerfil = () => {
    setIsEditing(true);
    setPerfilEditado(usuario);
  };

  const handleCancelarEdicao = () => {
    setIsEditing(false);
    setPerfilEditado(null);
  };

  const handleSalvarEdicao = async () => {
    try {
      const response = await axios.put("http://localhost:3000/usuarios/editar", perfilEditado, config);
      const data = response.data;
      console.log("data editar> ", data);
      setIsEditing(false);
      await fetchUsuario(); // Atualiza as informações do perfil
    } catch (error) {
      console.log("Erro ao editar o usuário:", error);
    }
  };

  const handleDeletarPerfil = async () => {
    try {
      const response = await axios.delete("http://localhost:3000/usuarios/deletar", config);
      const data = response.data;
      console.log("data deletar> ", data);
      setIsEditing(false);
    } catch (error) {
      console.log("Erro ao deletar o usuário:", error);
    }
  };

  const handleEditarCarona = (carona) => {
    setCaronaEditada(carona);
    setShowEditModal(true);
  };

  const handleCancelarEdicaoCarona = () => {
    setShowEditModal(false);
    setCaronaEditada(null);
  };

  const handleSalvarEdicaoCarona = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/caronas/editar/${caronaEditada.id}`, caronaEditada, config);
      const data = response.data;
      console.log("data editar carona> ", data);
      setShowEditModal(false);
      setIsLoading(true); // Ativa o loading
      await fetchCarona(); // Atualiza a lista de caronas
      setIsLoading(false); // Desativa o loading
    } catch (error) {
      console.log("Erro ao editar a carona:", error);
    }
  };

  const handleDeletarCarona = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/caronas/deletar/${caronaEditada.id}`, config);
      const data = response.data;
      console.log("data deletar carona> ", data);
      setShowDeleteCaronaModal(false);
      setIsLoading(true); // Ativa o loading
      await fetchCarona(); // Atualiza a lista de caronas
      setIsLoading(false); // Desativa o loading
    } catch (error) {
      console.log("Erro ao deletar a carona:", error);
    }
  };

  const handleOpenDeleteCaronaModal = (carona) => {
    setCaronaEditada(carona);
    setShowDeleteCaronaModal(true);
  };

  const handleCloseDeleteCaronaModal = () => {
    setShowDeleteCaronaModal(false);
  };

  const fetchUsuario = async () => {
    try {
      const response = await axios.get("http://localhost:3000/usuarios/perfil", config);
      const data = await response.data;
      setUsuario(data.usuario);
    } catch (error) {
      console.log("Erro ao buscar o usuário:", error);
    }
  };

  const fetchCarona = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:3000/usuarios/caronas", config);
      const data = await response.data;
      setCaronas(data);
    } catch (error) {
      console.log("Erro ao buscar a carona:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="profile-screen">
        <h1 className="h1_perfil">Meu perfil</h1>
        {usuario && (
          <>
            <p><strong>Nome:</strong> {usuario.nomeCompleto}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
            <p><strong>Telefone:</strong> {usuario.telefone}</p>
            <button className="editar-perfil-button" onClick={handleEditarPerfil}>Editar Perfil</button>
            <button className="delete-profile-button" onClick={handleDeletarPerfil}>Deletar Perfil</button>
          </>
        )}
      </div>
      <div className="profile-caronas">
        <h1>Minhas caronas criadas</h1>
        {isLoading ? (
          <p>Carregando caronas...</p>
        ) : (
          <div className="caronas-container">
            {caronas && caronas.length > 0 ? (
              caronas.map((carona) => (
                <div key={carona.id_usuario} className="carona-card">
                  <div className="carona-info">
                    <p className="origem-destino-origem">{carona.origem} - {carona.destino}</p>
                    <p className="origem-destino">Origem: {carona.origem} </p>
                    <p className="origem-destino">Destino: {carona.destino}</p>
                    <p>Horário: {carona.horario}</p>
                    <p>Vagas: {carona.vagas}</p>
                    <p>Descrição: {carona.descricao}</p>
                  </div>
                  <div className="button-container">
                    <button className="edit-button" onClick={() => handleEditarCarona(carona)}>Editar</button>
                    <button className="delete-button" onClick={() => handleOpenDeleteCaronaModal(carona)}>Excluir</button>
                  </div>
                </div>
              ))
            ) : (
              <p>Não há caronas disponíveis.</p>
            )}
          </div>
        )}
      </div>
      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edição de Perfil</h2>
            <input
              type="text"
              value={perfilEditado?.nomeCompleto || ''}
              onChange={(e) => setPerfilEditado({ ...perfilEditado, nomeCompleto: e.target.value })}
              placeholder="Nome"
            />
            <input
              type="text"
              value={perfilEditado?.email || ''}
              onChange={(e) => setPerfilEditado({ ...perfilEditado, email: e.target.value })}
              placeholder="Email"
            />
            <input
              type="text"
              value={perfilEditado?.telefone || ''}
              onChange={(e) => setPerfilEditado({ ...perfilEditado, telefone: e.target.value })}
              placeholder="Telefone"
            />
            <div className="modal-buttons">
              <button className="cancel-button" onClick={handleCancelarEdicao}>Cancelar</button>
              <button className="save-button" onClick={handleSalvarEdicao}>Salvar</button>
            </div>
          </div>
        </div>
      )}
      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Exclusão de Perfil</h2>
            <input
              type="text"
              value={usuario?.nomeCompleto || ''}
              disabled
            />
            <input
              type="text"
              value={usuario?.email || ''}
              disabled
            />
            <input
              type="text"
              value={usuario?.telefone || ''}
              disabled
            />
            <div className="modal-buttons">
              <button className="cancel-button-delete" onClick={() => setShowDeleteModal(false)}>Cancelar</button>
              <button className="confirm-button-delete" onClick={handleDeletarPerfil}>Confirmar</button>
            </div>
          </div>
        </div>
      )}
      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edição de Carona</h2>
            <input
              type="text"
              value={caronaEditada?.origem || ''}
              onChange={(e) => setCaronaEditada({ ...caronaEditada, origem: e.target.value })}
              placeholder="Origem"
            />
            <input
              type="text"
              value={caronaEditada?.destino || ''}
              onChange={(e) => setCaronaEditada({ ...caronaEditada, destino: e.target.value })}
              placeholder="Destino"
            />
            {/* Adicione mais campos de input para as outras informações da carona */}
            <div className="modal-buttons">
              <button className="cancel-button" onClick={handleCancelarEdicaoCarona}>Cancelar</button>
              <button className="save-button" onClick={handleSalvarEdicaoCarona}>Salvar</button>
            </div>
          </div>
        </div>
      )}
      {showDeleteCaronaModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Exclusão de Carona</h2>
            <input
              type="text"
              value={caronaEditada?.origem || ''}
              disabled
            />
            <input
              type="text"
              value={caronaEditada?.destino || ''}
              disabled
            />
            <div className="modal-buttons">
              <button className="cancel-button-delete" onClick={handleCloseDeleteCaronaModal}>Cancelar</button>
              <button className="confirm-button-delete" onClick={handleDeletarCarona}>Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Perfil;
