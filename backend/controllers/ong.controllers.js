const Ong = require("../models/ong.model");

// ==> Async e await

// ==> Método responsável por Criar um novo 'User':
exports.registerNewOng = async (req, res) => {
  try {
    // => Antes vamos fazer uma verificação se o usuário já possui algum e-mail já cadastrado:
    const isOng = await Ong.find({ email: req.body.email });
    console.log(isOng);
    if (isOng.length >= 1) {
      return res
        .status(409)
        .json({ message: "Atenção! Este e-mail já possui registro!" });
    }

    const newOng = new Ong(req.body);
    const user = await newOng.save();
    const token = await newOng.generateAuthToken(); // ==> Aqui chamaremos o método que criamos no model
    return res
      .status(201)
      .json({ message: "Usuário(a) criado(a) com sucesso!", user, token });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// TODO:
exports.loginUser = async (req, res) => {};
exports.returnOngProfile = async (req, res) => {};
