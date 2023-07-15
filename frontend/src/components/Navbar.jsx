import Carro from "../img/carro.png";
import { Link } from "react-router-dom";
import Person from "../img/person.png";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext.jsx";
import HoverMenu from "./HoverMenu.jsx";
import LogoUnibuddy from "../img/logoUniBuddy.png";

const Navbar = () => {
  const { currentUser, token, logout } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false); // Estado para controlar o hover

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleLogout = () => {
    logout(); // Chame a função logout para fazer o logout do usuário
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <img src={Carro} alt="Logo" />
          </Link>
        </div>
        <div className="titulo">
          <p>UniBuddy</p>
          <p>{currentUser}</p>
        </div>
        <div className="links">
          <Link className="link" to="/write">
            Criar Caronas
          </Link>
          <Link className="link" to="/">
            Caronas
          </Link>
          <div className="profile-link" onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <Link className="link">Perfil</Link>
            {isHovered && <HoverMenu />} {/* Renderize o submenu quando o mouse estiver sobre o botão */}
          </div>
          
          {token ? (
            <Link className="link" to="/" onClick={handleLogout}>
              Sair
            </Link>
          ) : (
            <Link className="link" to="/login">
              Entrar
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
