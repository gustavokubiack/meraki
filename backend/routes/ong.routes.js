const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const ongController = require("../controllers/ong.controllers");
const postController = require("../controllers/posts.controllers");
const multer = require('multer')
const multerConfig = require('../middlewares/multer')


router.post("/register", ongController.registerNewOng);
router.post("/login", ongController.loginOng);
router.get("/ongProfile", auth, ongController.returnOngProfile);
router.post('/addPost', auth, multer(multerConfig).single("file"), ongController.addPost); // rota s3
router.delete("/deletePost/:id", auth, ongController.ongDeletePost); // rota s3
router.get("/getPosts", auth, ongController.allPostsByOng);

// Sem autenticação
router.get("/post/:id", ongController.findPostById);
router.get("/agedPost", postController.agedPost);
router.get("/animalPost", postController.animalPost);
router.get("/childrenPost", postController.childrenPost);
router.get("/diversityPost", postController.diversityPost);
router.get("/educationPost", postController.educationPost);
router.get("/environmentPost", postController.environmentPost);

module.exports = router;
