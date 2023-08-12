const jwt = require("jsonwebtoken");
const Users = require("../../models/user");

module.exports = {
  create,
};

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
    const user = await Users.create(req.body);
    const token = createJWT(user);

    res.json({ token });
  } catch (err) {
    res.status(400).json({ err });
  }
}
