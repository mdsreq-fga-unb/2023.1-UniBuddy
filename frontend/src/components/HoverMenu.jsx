import React from "react";
import { Link } from "react-router-dom";

const HoverMenu = () => {
  return (
    <div className="hover-menu">
      <ul>
        <li>
          <Link to="/perfil">Minhas caronas</Link>
        </li>
        <li>
          <Link to="/solicitacoes">Solicitações de carona</Link>
        </li>
      </ul>
    </div>
  );
};

export default HoverMenu;
