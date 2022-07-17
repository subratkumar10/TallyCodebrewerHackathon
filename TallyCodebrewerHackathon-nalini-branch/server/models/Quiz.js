const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quiz", QuizSchema);
