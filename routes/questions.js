const express = require("express");
const router = express.Router();

const questionController = require("../controllers/questionController");

router.post("/questions", questionController.createQuestion);
router.get("/questions", questionController.getQuestion);

module.exports = router;
