const jwt = require("jsonwebtoken");

const generateAccessToken = async (data) => {
  return jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

module.exports = {
  generateAccessToken,
};
