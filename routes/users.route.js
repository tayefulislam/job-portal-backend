const express = require("express");

const router = express.Router();
const userController = require("../Controllers/Users.Controller");

router.route("/signup").post(userController.createUser);

module.exports = router;
