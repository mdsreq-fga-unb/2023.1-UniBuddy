import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CadastrarCarona = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const [carona, setCarona] = useState({
    vagas: "",
    origem: "",
    destino: "",
    data: "",
    horario: "",
    descricao: "",
    carro: "",
    cor: "",
    placa: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setCarona({ ...carona, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: { token: `${token}` },
    };
    try {
      const response = await axios.post(
        "https://nice-puce-lovebird-cape.cyclic.app/caronas/cadastrar",
        carona,
        config
      );

      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log("Erro ao cadastrar a carona:", error);
      // Lógica de tratamento de erro em caso de falha no cadastro da carona
    }
  };

  const validateFields = () => {
    const { vagas, origem, destino, data, horario } = carona;

    // Validação da quantidade de vagas (deve ser um número entre 1 e 4)
    if (!/^[1-4]$/.test(vagas)) {
      alert("A quantidade de vagas deve ser um número entre 1 e 4.");
      return false;
    }

    // Validação da origem e destino (apenas letras e espaços são permitidos)
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(origem) || !/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(destino)) {
      alert("A origem e o destino devem conter apenas letras e espaços.");
      return false;
    }

    // Validação da data (deve ser maior ou igual à data atual)
    const currentDate = new Date().toISOString().split("T")[0];
    if (data < currentDate) {
      alert("A data da carona não pode ser anterior à data atual.");
      return false;
    }

    // Validação do horário (deve estar no formato de horas, sem limite de 24 horas)
    if (!/^([01]\d|2[0-3]):([0-5]\d)$/.test(horario)) {
      alert("O horário da carona deve estar no formato de horas (HH:MM).");
      return false;
    }

    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      handleSubmit(e);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="create">
      <img
        className="carro"
        src="https://cdn-icons-png.flaticon.com/128/2300/2300372.png"
        alt="carro"
      />
      <h1>Crie a sua Carona</h1>
      <div className="info-button">
        <button onClick={openModal}>ℹ</button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Regras dos Campos</h2>
            <ul>
              <li>
                Quantidade de vagas (1-4): Deve ser um número entre 1 e 4.
              </li>
              <li>Origem e Destino: Apenas letras e espaços são permitidos.</li>
              <li>
                Data da Carona: Deve ser maior ou igual à data atual.
              </li>
              <li>
                Horário da Carona: Deve estar no formato de horas (HH:MM).
              </li>
            </ul>
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          required
          type="text"
          placeholder="Quantidade de vagas (1-4)"
          name="vagas"
          value={carona.vagas}
          onChange={handleInputChange}
          pattern="[1-4]"
        />
        <input
          required
          type="text"
          placeholder="Origem da sua Carona"
          name="origem"
          value={carona.origem}
          onChange={handleInputChange}
          pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]+"
        />
        <input
          required
          type="text"
          placeholder="Destino da sua Carona"
          name="destino"
          value={carona.destino}
          onChange={handleInputChange}
          pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]+"
        />
        <input
          required
          type="date"
          placeholder="Data da Carona"
          name="data"
          value={carona.data}
          onChange={handleInputChange}
          min={new Date().toISOString().split("T")[0]}
        />
        <input
          required
          type="time"
          placeholder="Horário da Carona"
          name="horario"
          value={carona.horario}
          onChange={handleInputChange}
          pattern="^([01]\d|2[0-3]):([0-5]\d)$"
        />
        <input
          type="text"
          placeholder="Descrição"
          name="descricao"
          value={carona.descricao}
          onChange={handleInputChange}
        />
        <input 
          type="text"
          placeholder="Modelo do Carro"
          name="carro"
          value={carona.carro}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Cor do Carro"
          name="cor"
          value={carona.cor}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Placa do Carro"
          name="placa"
          value={carona.placa}
          onChange={handleInputChange}
        />

        <button type="submit">Criar Carona</button>
      </form>
      
    </div>
  );
};

export default CadastrarCarona;
