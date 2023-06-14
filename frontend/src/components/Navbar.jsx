import React from "react";
import Carro from "../img/carro.png";
import { Link } from "react-router-dom";
import Person from "../img/person.png";

//Colocar conteudo abaixo na linha 17
//<img src={Person} alt="Perfil" />


const Navbar = () => {
    return (
       <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={Carro} alt="Logo" />
                </div>
                <div className="links">
                    <Link className="link" to="/Criar">Criar Caronas</Link>  
                    <Link className="link" to="/Lista">Caronas</Link>
                    <Link className="link" to="/Perfil">
                        Perfil
                    </Link>
                    <span className="logout">
                        <Link className="link" to="/Login">Sair</Link>
                    </span>
                </div>
            </div>
       </div>
    );
    }

export default Navbar;