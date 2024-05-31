var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/bancar", function (req, res) {
    usuarioController.bancar(req, res);
});

router.post("/mostrarQuiz", function (req, res) {
    usuarioController.mostrarQuiz(req, res);
});

router.get("/procurarQuiz", function (req, res) {
    usuarioController.procurarQuiz(req, res);
});

router.get("/quizatual", function (req, res) {
    usuarioController.quizatual(req, res);
});


module.exports = router;