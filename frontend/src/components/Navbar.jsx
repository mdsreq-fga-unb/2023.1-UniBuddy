import React from "react";
import Carro from "../img/carro.png";
import { Link } from "react-router-dom";
import Person from "../img/person.png";
import './styles.scss'

const Navbar = () => {
    return (
       <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={Carro} alt="Logo" />
                    </Link>
                </div>
                <div className="links">
                    <Link className="link" to="/write">Criar Caronas</Link>  
                    <Link className="link" to="/">Caronas</Link>
                    <Link className="imagen-link" to="/perfil">
                        <img src={Person} alt="Perfil" />
                    </Link>
                    <Link className="link" to="/Login">Sair</Link>
                </div>
            </div>
       </div>
    );
    }

export default Navbar;