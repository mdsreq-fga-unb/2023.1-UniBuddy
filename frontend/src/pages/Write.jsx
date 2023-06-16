

import React from "react";
import { Link } from "react-router-dom";

const Write = () => {
    return (
         <div className="create">
            <img src="https://cdn-icons-png.flaticon.com/128/3085/3085411.png" alt="" />
            <h1>Crie a sua Carrona</h1>
            <form>
                <input required type="text" placeholder="Origem da sua Carrona" />
                <input required type="number" placeholder="Destino da Carrona" />
                <input type="text" placeholder="Data da Carrona da Ida"/>
                <input type="text" placeholder="Horario da Carrona da Ida"/>
                <input type="text" placeholder="Data da Carrona da Volta"/>
                <input type="text" placeholder="Horario da Carrona da Volta"/>
                <button>Criar Carrona</button>
            </form>
        </div>
    
    )}

export default Write;