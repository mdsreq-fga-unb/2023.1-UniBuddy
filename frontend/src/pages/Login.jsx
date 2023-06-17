import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
         <div className="auth">
            <div className="entrar">
                <img src="https://cdn-icons-png.flaticon.com/128/3085/3085339.png" alt="" />
                <h1>Bem vindo a UniBuddy</h1>
            </div>
            <form>
                <input required type="text" placeholder="Endereço de Email" />
                <input required type="password" placeholder="Senha" />
                <button className="authButton">Entrar</button>
                <span>Você ainda não possui conta? <Link to="/register">Registrar</Link> </span>
            </form>
        </div>
    
    )}

export default Login;