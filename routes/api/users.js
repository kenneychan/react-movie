const express = require("express");
const router = express.Router();
const userCtrl = require("../../controllers/api/users");

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post("/", userCtrl.create);

module.exports = router;
