const jwt = require("jsonwebtoken");
const { ROLES } = require("../utils/constantValue.helper");
const SECRET_KEY = process.env.JWT_SECRET;
function SecureAuth(req, res, next) {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({
      message:
        "Authentication Required: Please include an Authorization Header for access.",
    });
  }
  try {
    const token = authorization.split("Bearer ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Invalid Token Format",
      });
    }
    const decode = jwt.verify(token, SECRET_KEY);
    req.user = decode;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        message: "Session Expired",
        error: error.message,
      });
    }
    if (error instanceof jwt.JsonWebTokenError || error instanceof TokenError) {
      return res.status(401).json({
        message: "Invalid Token",
        error: error.message,
      });
    }
    res.status(500).json({
      message: "Internal server Error",
      error: error.message,
      stack: error.stack,
    });
  }
}

const hasAdminRole = () => {
  return (req, res, next) => {
    const userRole = req.user.role;

    ROLES.ADMIN;
    if (userRole !== ROLES.ADMIN) {
      return res.status(403).json({
        message: "Forbidden: You are not authorized to perform this action.",
      });
    }
    next();
  };
};

module.exports = { SecureAuth, hasAdminRole };
