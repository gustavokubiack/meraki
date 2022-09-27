const express = require("express");
const router = express.Router();
const API = require("../controllers/post.controllers");
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

// rotas dos posts

router.get("/:id", API.fetchPostByID);
router.patch("/:id", upload, API.updatePost);
router.delete("/:id", API.deletePost);

module.exports = router;
