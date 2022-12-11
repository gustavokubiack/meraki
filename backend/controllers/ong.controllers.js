const Ong = require("../models/ong.model");
const Post = require("../models/post");
// ==> Método responsável por criar uma nova ong
exports.registerNewOng = async (req, res) => {
  try {
    // => Verificação se a ong já está cadastrada
    const isOng = await Ong.find({
      email: req.body.email,
    });
    console.log(isOng);
    if (isOng.length >= 1) {
      return res.status(409).json({
        message: "Atenção! Este e-mail já possui registro!",
      });
    }

    const newOng = new Ong(req.body);
    const ong = await newOng.save();
    const token = await newOng.generateAuthToken(); // ==> chamando o método que criado no model
    return res.status(201).json({
      message: "Ong cadastrada com sucesso!",
      ong,
      token,
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

// ==> Método responsável para fazer o login de uma ong
exports.loginOng = async (req, res) => {
  try {
    const { email } = req.body;
    const { password } = req.body;
    const ong = await Ong.findByCredentials(email, password);
    if (!ong) {
      return res.status(401).json({
        error: "Erro ao Logar! Verifique as suas credenciais de autenticação!",
      });
    }
    const token = await ong.generateAuthToken();
    return res.status(201).json({
      message: "Usuário(a) logado com sucesso!",
      ong,
      token,
    });
  } catch (err) {
    console.log(err);
  }
};

// ==> Método responsável por retornar os dados de uma ong
exports.returnOngProfile = async (req, res) => {
  await res.json(req.userData);
};


exports.addPost = async (req, res) => {
  const { location: url = "" } = req.file
  try {
    const id = req.userData._id;
    const ong = await Ong.findById(id);
    ong.posts.push(req.body);
    const post = ong.posts[ong.posts.length - 1];
    post.imageLocation = url;
    await ong.save();
    return res.status(201).json({
      message: "Post adicionado com sucesso!", 
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: err.message,
    });
  }
}





// Método responsável para ong EXCLUIR um post
exports.ongDeletePost = async (req, res) => {
  try {
    const id = req.userData._id;
    const ong = await Ong.findById(id);
    const postId = req.params.id;
    const post = ong.posts.id(postId);
    post.remove();
    await ong.save();
    try {
      // excluir a imagem do post
      // fs.unlinkSync(`./uploads/${post.image}`);
    } catch (err) {
      console.log(err);
    }
    return res.status(200).json({
      message: "Post excluído com sucesso!",
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: err.message,
    });
  }
};

// ==> Método responsável para retornar todos os posts de uma ong
exports.allPostsByOng = async (req, res) => {
  try {
    const id = req.userData._id;
    const ong = await Ong.findById(id);
    return res.status(200).json(ong.posts);
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "Erro ao pegar todos os posts de uma ONG",
    });
  }
};

// ==> Buscar port por id
exports.findPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const ong = await Ong.findOne({
      "posts._id": id,
    });
    const post = ong.posts.id(id);
    return res.status(200).json(post);
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "Erro ao pegar o post de uma ONG",
    });
  }
};
