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
router.get("/getPosts", upload, auth, ongController.ongGetPosts);
router.get("/animalPost", ongController.animalPost);
router.get("/childrenPost", ongController.childrenPost);
router.get("/diversityPost", ongController.diversityPost);
router.get("/educationPost", ongController.educationPost);
router.get("/agedPost", ongController.agedPost);
router.get("/environmentPost", ongController.environmentPost);

module.exports = router;
