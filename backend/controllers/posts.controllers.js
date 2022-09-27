const Ong = require("../models/ong.model");

// Posts de animais

exports.animalPost = async (req, res) => {
  try {
    const ongs = await Ong.find();
    const posts = ongs.map((ong) => ong.posts);
    const postsAnimais = posts.map((post) =>
      post.filter((p) => p.chosenCause === "Animais")
    );
    let resp = [];
    for (const posts of postsAnimais) {
      for (const post of posts) {
        resp.push(post);
      }
    }
    return res.status(200).json(resp);
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "Erro ao buscar todos posts de Animais",
    });
  }
};

// Posts de educação

exports.educationPost = async (req, res) => {
  try {
    const ongs = await Ong.find();
    const posts = ongs.map((ong) => ong.posts);
    const postsEducacao = posts.map((post) =>
      post.filter((p) => p.chosenCause === "Educação")
    );
    let resp = [];
    for (const posts of postsEducacao) {
      for (const post of posts) {
        resp.push(post);
      }
    }
    return res.status(200).json(resp);
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "Erro ao buscar todos posts de Educação",
    });
  }
};

// Posts de crianças

exports.childrenPost = async (req, res) => {
  try {
    const ongs = await Ong.find();
    const posts = ongs.map((ong) => ong.posts);
    const postsCriancas = posts.map((post) =>
      post.filter((p) => p.chosenCause === "Crianças")
    );
    let resp = [];
    for (const posts of postsCriancas) {
      for (const post of posts) {
        resp.push(post);
      }
    }
    return res.status(200).json(resp);
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "Erro ao buscar todos posts de Crianças",
    });
  }
};

// Posts de meio ambiente

exports.environmentPost = async (req, res) => {
  try {
    const ongs = await Ong.find();
    const posts = ongs.map((ong) => ong.posts);
    const postsAmbiente = posts.map((post) =>
      post.filter((p) => p.chosenCause === "Meio Ambiente")
    );
    let resp = [];
    for (const posts of postsAmbiente) {
      for (const post of posts) {
        resp.push(post);
      }
    }
    return res.status(200).json(resp);
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "Erro ao buscar todos posts de Meio Ambiente",
    });
  }
};

// Posts de idosos

exports.agedPost = async (req, res) => {
  try {
    const ongs = await Ong.find();
    const posts = ongs.map((ong) => ong.posts);
    const postsIdosos = posts.map((post) =>
      post.filter((p) => p.chosenCause === "Idosos")
    );
    let resp = [];
    for (const posts of postsIdosos) {
      for (const post of posts) {
        resp.push(post);
      }
    }
    return res.status(200).json(resp);
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "Erro ao buscar todos posts de Idosos",
    });
  }
};

// Posts de diversidade
exports.diversityPost = async (req, res) => {
  try {
    const ongs = await Ong.find();
    const posts = ongs.map((ong) => ong.posts);
    const postsDiversidade = posts.map((post) =>
      post.filter((p) => p.chosenCause === "Diversidade")
    );
    let resp = [];
    for (const posts of postsDiversidade) {
      for (const post of posts) {
        resp.push(post);
      }
    }
    return res.status(200).json(resp);
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "Erro ao buscar todos posts de Diversidade",
    });
  }
};
