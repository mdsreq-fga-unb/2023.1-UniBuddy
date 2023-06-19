import React from "react";
import Carro from "../img/carro.png";
import './styles.scss'

const Footer = () => {
    return  (
        <footer>
            <img src={Carro} alt="Logo" />
            <span> UniBuddy - UnB </span>
        </footer>
    )
    }

export default Footer;