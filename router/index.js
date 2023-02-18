const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

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

router.get("/", (req, res) => {
	res.render("index", {
		titulo: "Mi primera aplicación hecha en Embedded JavaScript",
		nombre: "Alejandro Iván Lizárraga Rojas",
		grupo: "TCI 8-3",
		listado: datos,
	});
});

router.get("/tabla", (req, res) => {
	const params = {
		numero: parseInt(req.body.numero) || null,
	};
	res.render("tabla", params);
});

router.post("/tabla", (req, res) => {
	const params = {
		numero: parseInt(req.body.numero) || null,
	};
	res.render("tabla", params);
});

router.get("/cotizacion", (req, res) => {
	const params = {
		valor: parseFloat(req.body.valor) || undefined,
		porcentaje: parseInt(req.body.porcentaje) || undefined,
		plazo: parseInt(req.body.plazo) || undefined,
	};
	res.render("cotizacion", params);
});

router.post("/cotizacion", (req, res) => {
	const params = {
		valor: parseFloat(req.body.valor) || undefined,
		porcentaje: parseInt(req.body.porcentaje) || undefined,
		plazo: parseInt(req.body.plazo) || undefined,
	};

	res.render("cotizacion", params);
});

// La pagina del error va al final de los get/post
router.use((req, res, next) => {
	res.status(404).render("error");
	// res.status(404).sendFile(__dirname + "/public/error.html");
});

module.exports = router;
