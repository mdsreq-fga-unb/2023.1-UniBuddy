import Carro from "../img/carro.png";
import { Link } from "react-router-dom";
import Person from "../img/person.png";
import React, { useContext } from "react"; // Importe o hook useContext
import { AuthContext } from "../context/authContext.jsx";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext); // Use useContext dentro da função de componente

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
          <img src={Carro} alt="Logo" />

          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/write">
            Criar Caronas
          </Link>
          <Link className="link" to="/">
            Caronas
          </Link>
          <Link className="link" to="/perfil">
            Perfil
          </Link>
          <p className="link">Bem vindo{currentUser?.nomeCompleto}</p>
          {currentUser ? (
            <span className="logout" onClick={logout}>
              <Link className="link" to="/Login">
                Sair
              </Link>
            </span>
          ) : (
            <Link className="link" to="/Login">
              Entrar
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
