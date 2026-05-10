const express = require("express");
const router = express.Router();

const { regiterUser } = require("../controllers/userController");

router.post("/register", registerUser);

module.exports = router;