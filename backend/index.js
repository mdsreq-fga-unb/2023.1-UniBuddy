const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userController = require("./controller/UserController.js");
const caronaController = require("./controller/CaronaController.js");
const notifiController = require("./controller/NotificacoesController.js");

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "UniBuddy"
    });
});

app.use("/usuarios", userController);
app.use("/caronas", caronaController);
app.use("/notificacoes", notifiController);

app.listen(process.env.PORT || 3000, () => {
    console.log("Aplicação servindo na porta 3000");
});
