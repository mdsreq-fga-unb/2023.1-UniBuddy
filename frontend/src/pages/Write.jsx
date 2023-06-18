import React from "react";
import { Link } from "react-router-dom";
import carro from '../img/carro.png';
import './styles/Write.css';

const Write = () => {
    return (
         <div className="create">
            <img className="carro" src={carro} alt="carro" />
            <h1>Crie a sua Carona</h1>
            <form className="form">
                
                <input required type="number" placeholder="Quantidade de vagas" />
                <input required type="text" placeholder="Origem da sua Carona" />
                <input type="text" placeholder="Destino da sua Carona"/>
                <input type="text" placeholder="Data da Carona"/>
                <input type="text" placeholder="Horario da Carona"/>
                <button>Criar Carona</button>
            </form>
        </div>
    )}

export default Write;