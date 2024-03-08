const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getCurentUser,
} = require("../controllers/auth-controllers");

router.post("/register", register);

router.post("/login", login);

router.get("/currentUser", getCurentUser);

module.exports = router;
