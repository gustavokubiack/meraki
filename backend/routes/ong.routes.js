const express = require("express");
const router = express.Router();
const ongController = require("../controllers/ong.controllers");

// ==> rota responsável por criar uma nova ong: (POST) localhost:3339/api/ong/register
router.post("/register", ongController.registerNewOng);

router.post("/login", ongController.loginUser);

router.get("/ongProfile", ongController.returnOngProfile);

module.exports = router;
