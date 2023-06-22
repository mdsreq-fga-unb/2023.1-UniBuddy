import React, { useEffect, useState } from "react";
import ImagemExemplo from "../img/imagemExemplo.png";
import { Link } from "react-router-dom";

const Home = () => {
    const [caronas, setCaronas] = useState([]);

    useEffect(() => {
        // Função para buscar as caronas do back-end
        const fetchCaronas = async () => {
            try {
                const response = await fetch("https://20231-unibuddy-production.up.railway.app/caronas/vizualizar"); // Rota de visualização de caronas
                const data = await response.json();
                setCaronas(data.caronas);
            } catch (error) {
                console.log("Erro ao buscar as caronas:", error);
            }
        };

        fetchCaronas();
    }, []);

    return (
        <div className="home">
            <div className="test">
                <img src="https://cdn-icons-png.flaticon.com/128/5233/5233747.png" alt="" />
                <h1>Caronas Disponíveis</h1>
            </div>
            <div className="posts">
                {caronas.map((carona) => (
                    <div className="post" key={carona.id}>
                        <img
                            className="postImg"
                            src="https://cdn-icons-png.flaticon.com/128/2102/2102647.png"
                            alt="Imagem de exemplo"
                        />
                        <div className="postInfo">
                            <div className="postNome">
                                <span className="nome">{carona.origem}</span>
                                <span className="bairro">{carona.destino}</span>
                            </div>
                            <p className="desc">{carona.data}</p>
                            <p className="desc">{carona.horario}</p>
                            <hr />
                            <span className="postVaga">Vagas Disponíveis : {carona.vagas}</span>
                            <Link className="link" to={`/post/${carona.id}`}>Solicitar</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
