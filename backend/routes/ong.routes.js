const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const ongController = require("../controllers/ong.controllers");
const multer = require("multer");

// upload da imagem com multer
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.filename + "_" + Date.now() + "_" + file.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single("image");

router.post("/register", ongController.registerNewOng); // ==> rota responsável por criar uma nova ong: (POST) localhost:3339/api/ong/register

router.post("/login", ongController.loginOng); // ==> rota responsável por fazer o login da ong: (POST) localhost:3339/api/ong/login

router.get("/ongProfile", auth, ongController.returnOngProfile); // ==> rota responsável por retornar o perfil da ong: (GET) localhost:3339/api/ong/ongProfile

router.post("/addPost", auth, upload, ongController.ongAddPost); // ==> rota responsável por adicionar um post: (POST) localhost:3339/api/ong/addPost

module.exports = router;
