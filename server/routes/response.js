const router = require("express").Router();
const Response = require("../models/Response");

//save new response
router.post("/", async (req, res) => {
  const newResponse = new Response({name: req.body.name, selected: req.body.selected, questionId: req.body.questionId, quizId: req.body.quizId});
  try {
    const savedResponse = await newResponse.save();
    res.status(200).json(savedResponse);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all responses by question id
router.get("/:questionId", async (req, res) => {
    try {
      const responses = await Response.find({questionId: req.params.questionId});
      res.status(200).json(responses);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
