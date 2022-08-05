const express = require("express");
const router = express.Router();
const API = require("../controllers/api");
const multer = require("multer");

//multer middleware for image upload
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

router.get("/", API.fetchAllPosts);
router.get("/animal", API.fetchAllAnimalPosts);
router.get("/criancas", API.fetchAllChildrenPosts);
router.get("/diversidade", API.fetchAllDiversityPosts);
router.get("/educacao", API.fetchAllEducationPosts);
router.get("/idosos", API.fetchAllSeniorPosts);
router.get("/meio-ambiente", API.fetchAllEnvironmentPosts);
router.get("/:id", API.fetchPostByID);
router.post("/", upload, API.createPost);
router.patch("/:id", upload, API.updatePost);
router.delete("/:id", API.deletePost);

module.exports = router;
