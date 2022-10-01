const User = require("../models/user.model");
const Ong = require("../models/ong.model");

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
    const token = await user.generateAuthToken();
    return res
      .status(201)
      .json({ message: "Usuário(a) logado com sucesso!", user, token });
  } catch (err) {
    console.log(err);
  }
};
// Retornar informações do usuário

exports.returnUserProfile = async (req, res) => {
  await res.json(req.userData);
};

// pegar post pelo id e adicionar no perfil do usuário

exports.addPost = async (req, res) => {
  try {
    const id = req.params.id
    const ong = await Ong.findOne({
      'posts._id': id
    })
    const postOng = ong.posts.id(id)
    const user = await User.findById(req.userData._id)
    user.chosenCause.push(postOng)
    const post = user.chosenCause
    await user.save()
    return res.status(201).json({
      message: "Post adicionado com sucesso!",
      post
    });
  } catch (err) {
    return res.status(400).json({
      message: 'Erro ao adicionar post no perfil do usuário'
    })
  }
}