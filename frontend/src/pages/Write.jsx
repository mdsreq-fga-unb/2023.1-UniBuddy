

import React from "react";
import { Link } from "react-router-dom";

const Write = () => {
    return (
         <div className="create">
            <img src="https://cdn-icons-png.flaticon.com/128/3085/3085411.png" alt="" />
            <h1>Crie a sua Carrona</h1>
            <form>
                
                <input required type="number" placeholder="Quantidade de vagas" />
                <input required type="text" placeholder="Origem da sua Carrona" />
                <input type="text" placeholder="Destino da sua Carrona"/>
                <input type="text" placeholder="Data da Carrona"/>
                <input type="text" placeholder="Horario da Carrona"/>
                <button>Criar Carrona</button>
            </form>
        </div>
    
    )}

export default Write;