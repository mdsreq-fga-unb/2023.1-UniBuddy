import Carro from "../img/carro.png";
import { Link } from "react-router-dom";
import Person from "../img/person.png";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext.jsx";
import HoverMenu from "./HoverMenu.jsx";

const Navbar = () => {
  const { currentUser, login, logout } = useContext(AuthContext);

  const [isHovered, setIsHovered] = useState(false); // Estado para controlar o hover

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <img src={Carro} alt="Logo" />
          </Link>
        </div>
        <p className="welcome">Bem vindo {currentUser?.nomeCompleto}</p>
        <div className="titulo">
          <p>UniBuddy</p>
        </div>
        <div className="links">
          <Link className="link" to="/write">
            Criar Caronas
          </Link>
          <Link className="link" to="/">
            Caronas
          </Link>
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
          <div className="profile-link" onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <p>Perfil</p>
            {isHovered && <HoverMenu />} {/* Renderize o submenu quando o mouse estiver sobre o botão */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
