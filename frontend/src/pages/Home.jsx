import React from "react";
import ImagemExemplo from "../img/imagemExemplo.png";
import { Link } from "react-router-dom";
import './styles/home.scss'

const Home = () => {
    const posts = [
        {
            title: "Destino : FGA",
            bairro: "Gama",
            img: { ImagemExemplo },
            description: "Segunda, Quarta e sexta vou 10h volto 16h Terça e Quinta vou 8h e volto 14h Ofereço carona",
        },
        {
            title: "Destino : UNB",
            bairro: "Asa Norte",
            img: { ImagemExemplo },
            description: "Segunda, Quarta e sexta vou 10h volto 16h Terça e Quinta vou 8h e volto 14h Ofereço carona",
        },
        {
            title: "Destino: FCE",
            bairro: "Asa Sul",
            img: { ImagemExemplo },
            description: "Segunda, Quarta e sexta vou 10h volto 16h Terça e Quinta vou 8h e volto 14h Ofereço carona",
        },
        {
            title: "Destino: FGA",
            bairro: "Gama",
            img: { ImagemExemplo },
            description: "Segunda, Quarta e sexta vou 10h volto 16h Terça e Quinta vou 8h e volto 14h Ofereço carona",
        },
        {
            title: "Destino: FCE",
            bairro: "Asa Sul",
            img: { ImagemExemplo },
            description: "Segunda, Quarta e sexta vou 10h volto 16h Terça e Quinta vou 8h e volto 14h Ofereço carona",
        },
        {
            title: "Destino : FGA",
            bairro: "Gama",
            img: { ImagemExemplo },
            description: "Segunda, Quarta e sexta vou 10h volto 16h Terça e Quinta vou 8h e volto 14h Ofereço carona",
        },
    ];

    return (
        <div className="home">
            <div className="test">
                <img src="https://cdn-icons-png.flaticon.com/128/5233/5233747.png" alt="" />
                <h1>Caronas Disponíveis</h1>
            </div>
            <div className="posts">
                {posts.map((p) => (
                    <div className="post" key={p.id}>
                        <img
                            className="postImg"
                            src="https://cdn-icons-png.flaticon.com/128/2102/2102647.png"
                        />
                        <div className="postInfo" >
                            <div className="postNome">
                                <span className="nome">{p.title}</span>
                                <span className="bairro">{p.bairro}</span>
                            </div>
                            <p className="desc">
                                {p.description}
                            </p>
                            <hr />
                            <span className="postVaga">Vagas Disponiveis</span>
                            <Link className="link" to={`/post/${p.id}`}>Solicitar</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
    }

export default Home;