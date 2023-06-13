const express = require("express");
const app = express();
const path = require("path");

const userController = require("./controller/UserController.js");

app.use(express.json());

app.use("/", userController);

app.listen(process.env.port || 3000);
console.log("Aplicação servindo na porta 3000")