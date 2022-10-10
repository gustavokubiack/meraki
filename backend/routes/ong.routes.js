const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const ongController = require("../controllers/ong.controllers");
const postController = require("../controllers/posts.controllers");
const multer = require("multer");

// upload da imagem com multer
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single("image");

router.post("/register", ongController.registerNewOng);
router.post("/login", ongController.loginOng);
router.get("/ongProfile", auth, ongController.returnOngProfile);
router.post("/addPost", upload, auth, ongController.ongAddPost);
router.delete("/deletePost/:id", upload, auth, ongController.ongDeletePost);
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
