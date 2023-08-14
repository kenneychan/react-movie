const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/user");

module.exports = {
  create,
  login,
};

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json("Bad Credentials");
  }
}

// Helper functions
function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    process.env.SECRET_KEY,
    { expiresIn: "24h" }
  );
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);

    res.json(token);
  } catch (err) {
    res.status(400).json({ err });
  }
}
