const express = require("express");
const router = express.Router();

const { loginUser, registerUser, profileUser } = require("../controllers/user");
const validateToken = require("../middleware/validateTokenHandler");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", validateToken, profileUser);

module.exports = router;
