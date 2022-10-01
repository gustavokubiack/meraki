const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const userController = require("../controllers/user.controllers");

// rotas do usuário

router.post("/registerUser", userController.registerNewUser); // cadastro usuário
router.post("/loginUser", userController.loginUser); // login usuário
router.get("/userProfile", auth, userController.returnUserProfile); // informações do usuário ==> Perfil
router.post("/addPost/:id", auth, userController.addPost); // adicionar post da ong no perfil do usuário

module.exports = router;
