const express = require("express");
const router = express.Router();
const searchPosts = require("../controllers/blogController");

router.get("/search", searchPosts);

module.exports = router;
