const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const ongController = require("../controllers/ong.controllers");

router.post("/register", ongController.registerNewOng); // ==> rota responsável por criar uma nova ong: (POST) localhost:3339/api/ong/register

router.post("/login", ongController.loginOng); // ==> rota responsável por fazer o login da ong: (POST) localhost:3339/api/ong/login

router.get("/ongProfile", auth, ongController.returnOngProfile); // ==> rota responsável por retornar o perfil da ong: (GET) localhost:3339/api/ong/ongProfile

module.exports = router;
