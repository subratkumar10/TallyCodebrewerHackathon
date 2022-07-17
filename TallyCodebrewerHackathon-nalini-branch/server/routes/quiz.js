const router = require("express").Router();
const Quiz = require("../models/Quiz");

//create quiz
router.post("/", async (req, res) => {
  const newQuiz = new Quiz({tiele: req.body.title, userId: req.body.userId})
  try {
    const savedQuiz = await newQuiz.save()
    res.status(200).json(savedQuiz)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
