const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const userController = require("../controllers/user.controllers");

// rotas do usuário
router.post("/registerUser", userController.registerNewUser);
router.post("/loginUser", userController.loginUser);
router.get("/userProfile", auth, userController.returnUserProfile);
router.post("/addPost/:id", auth, userController.addPost);
router.get("/returnPost", auth, userController.returnPost);
router.delete("/deletePost/:id", auth, userController.deletePost);


module.exports = router;
