// ==> responsável por confirmar determinado usuário pelo token
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    console.log(token);

    const decoded = jwt.verify(token, "secret");
    req.userData = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: err + "Falha na autenticação" });
  }
};
