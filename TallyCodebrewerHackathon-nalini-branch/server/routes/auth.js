const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register user
router.post("/register", async (req, res) => {
  try {
    let success = false;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    const authtoken = jwt.sign(user, JWT_SECRET);
    success = true;
    res.status(200).json({authtoken, success});
  } catch (err) {
    res.status(500).json({err, success});
  }
});

//login user
router.post("/login", async (req, res) => {
  try {
    let success = false;
    const user = await User.findOne({ username: req.body.username });
    if(!user) {
      res.status(400).json({error: "Wrong credentials!", success});
    } 
    const validated = await bcrypt.compare(req.body.password, user.password);
    if(!validated){
      res.status(400).json({error: "Wrong credentials!", success});
    } else {
      const { password, ...others } = user._doc;
      success = true;
      res.status(200).json({others, success});
    }
  } catch (err) {
    res.status(500).json({err, success});
  }
});

module.exports = router;
