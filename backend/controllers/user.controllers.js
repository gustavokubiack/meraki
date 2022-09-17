const User = require("../models/user.model");

// Criar novo usuário

exports.registerNewUser = async (req, res) => {
  try {
    const isUser = await User.find({ email: req.body.email });
    if (isUser.length >= 1) {
      return res.status(409).json({
        message: "Atenção! Este e-mail já possui registro!",
      });
    }
    const newUser = new User(req.body);
    const user = await newUser.save();
    const token = await newUser.generateAuthToken();
    return res.status(201).json({
      message: "Usuário cadastrado com sucesso!",
      user,
      token,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// Login usuário

exports.loginUser = async (req, res) => {
  try {
    const { email } = req.body;
    const { password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res.status(401).json({
        error: "Erro ao Logar! Verifique as suas credenciais de autenticação!",
      });
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// Retornar informações do usuário

exports.returnUserProfile = async (req, res) => {
  await res.json(req.userData);
};
