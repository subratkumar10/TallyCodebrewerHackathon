const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema(
  {
    name: {
        type: String,
    },
    selected: {
      type: String,
    },
    questionId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Question',
    },
    quizId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Quiz',
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Response", ResponseSchema);
