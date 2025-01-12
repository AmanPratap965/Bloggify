const JWT = require("jsonwebtoken");

const secret = "ApSinghSecretKey";

function createTokenForUser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    profileImageURL: user.profileImageURL,
    role: user.role,
    fullName:user.fullName,
  };

  const token = JWT.sign(payload, secret, { expiresIn: "1d" });
  return token;
}

function validateToken(token) {
  try {
    const decoded = JWT.verify(token, secret);
    return decoded;
  } catch {
    return null;
  }
}

module.exports = { createTokenForUser, validateToken };
