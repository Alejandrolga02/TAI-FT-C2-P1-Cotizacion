const http = require("http");
const express = require("express");

const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const rutas = require("./router/index");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/public/"));
app.set("view engine", "ejs");
app.use(bodyParser(urlencoded({ extended: true })));
app.use(rutas);

const puerto = 3000;
app.listen(puerto, () => {
	console.log("Iniciando puerto " + puerto);
});
