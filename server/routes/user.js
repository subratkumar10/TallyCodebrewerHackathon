const router = require("express").Router();
const User = require("../models/User");

//get a user
router.get("/:username", async (req, res) => {
  try {
    const user = await User.findOne({username: req.params.username});
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
