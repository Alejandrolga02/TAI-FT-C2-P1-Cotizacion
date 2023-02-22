const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const app = express();

app.use(express.static(__dirname + "/public/"));
app.set("view engine", "ejs");
app.use(bodyParser(urlencoded({ extended: true })));

let datos = [
	{
		matricula: "2020030319",
		nombre: "Alejandro Iván Lizárraga Rojas",
		sexo: "M",
		materias: ["Ingles", "Base de datos", "Tecnología I"],
	},
	{
		matricula: "2020030232",
		nombre: "Jesus Daniel Lopez Robles",
		sexo: "M",
		materias: ["Ingles", "Base de datos", "Tecnología I"],
	},
	{
		matricula: "2020030309",
		nombre: "Guillermo Manuel Sanchez Lizarraga",
		sexo: "M",
		materias: ["Ingles", "Base de datos", "Tecnología I"],
	},
	{
		matricula: "2021030108",
		nombre: "Fabio Noriega Fitch",
		sexo: "M",
		materias: ["Ingles", "POO", "Redes"],
	},
];

app.get("/", (req, res) => {
	res.render("index", { titulo: "Mi primera aplicación hecha en Embedded JavaScript", nombre: "Alejandro Iván Lizárraga Rojas", grupo: "TCI 8-3", listado: datos });
});

app.get("/tabla", (req, res) => {
	const params = {
		numero: parseInt(req.body.numero) || null,
	};
	res.render("tabla", params);
});

app.post("/tabla", (req, res) => {
	const params = {
		numero: parseInt(req.body.numero) || null,
	};
	res.render("tabla", params);
});

app.get("/cotizacion", (req, res) => {
	const params = {
		valor: parseFloat(req.body.valor) || null,
		porcentaje: parseInt(req.body.porcentaje) || null,
		plazo: parseInt(req.body.plazo) || null,
	};
	res.render("cotizacion", params);
});

app.post("/cotizacion", (req, res) => {
	const params = {
		valor: parseFloat(req.body.valor) || null,
		porcentaje: parseInt(req.body.porcentaje) || null,
		plazo: parseInt(req.body.plazo) || null,
	};
	res.render("cotizacion", params);
});

// La pagina del error va al final de los get/post
app.use((req, res, next) => {
	res.status(404).sendFile(__dirname + "/public/error.html");
});

const puerto = 3000;
app.listen(puerto, () => {
	console.log("Iniciando puerto " + puerto);
});
