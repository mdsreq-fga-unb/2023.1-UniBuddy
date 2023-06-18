const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const userController = require("./controller/UserController.js");
const caronaController = require("./controller/CaronaController.js");
const notifiController = require("./controller/NotificacoesController.js");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "UniBuddy"
    });
});

app.use("/usuarios", userController);
app.use("/caronas", caronaController);
app.use("/notificacoes", notifiController);

app.listen(process.env.port || 3000);
console.log("Aplicação servindo na porta 3000")