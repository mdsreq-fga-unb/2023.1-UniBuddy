import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
         <div className="auth">
            <h1>Crie o seu Perfil</h1>
            <form>
                <input required type="text" placeholder="Nome Completo" />
                <input required type="number" placeholder="Matricula" />
                <input type="text" placeholder="Endereço"/>
                <input required type="text" placeholder="Endereço de Email" />
                <input required type="password" placeholder="Senha" />
                <button className="authButton">Register</button>
                <p>Error</p>
                <span>Você já possui conta??? <Link to="/login">Login</Link> </span>
            </form>
        </div>
    
    )}

export default Register;