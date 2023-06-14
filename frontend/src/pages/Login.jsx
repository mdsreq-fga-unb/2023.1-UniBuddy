import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
         <div className="auth">
            <h1>Bem vindo a UniBuddy</h1>
            <form>
                <input required type="text" placeholder="Endereço de Email" />
                <input required type="password" placeholder="Senha" />
                <button className="authButton">Entrar</button>
                <button className="authButton">Register</button>
                <p>Error</p>
                <span>Você não possui conta??? <Link to="/register">Registrar</Link> </span>
            </form>
        </div>
    
    )}

export default Login;