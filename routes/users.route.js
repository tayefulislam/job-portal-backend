const express = require("express");

const router = express.Router();
const userController = require("../Controllers/Users.Controller");

router.route("/signup").post(userController.createUser);
router.route("/login").get(userController.loginUser);

router.route("/").get(userController.getAllUser);

module.exports = router;
