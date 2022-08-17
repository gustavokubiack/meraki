import axios from "axios";

const urlPost = "/api/post";

export default class API {
  // pega todos os posts da base de dados
  static async getAllPost() {
    const res = await axios.get(urlPost + "/all");
    return res.data;
  }

  // pega todos os posts de uma ong especifica ==> criar rota para isso na backend
  static async getAllPostByOng(id) {
    const res = await axios.get(`${urlPost}/ong/${id}`);
    return res.data;
  }

  // pega todos os posts de animal
  static async getAllAnimalsPosts() {
    const res = await axios.get(urlPost + "/animal");
    return res.data;
  }

  // pega todos os posts de crianças
  static async getAllChildrenPosts() {
    const res = await axios.get(urlPost + "/criancas");
    return res.data;
  }

  // pega todos os posts de divesidade
  static async getAllDiversityPosts() {
    const res = await axios.get(urlPost + "/diversidade");
    return res.data;
  }

  // pega todos os posts de educação
  static async getAllEducationPosts() {
    const res = await axios.get(urlPost + "/educacao");
    return res.data;
  }

  // pega todos os posts de idosos
  static async getAllSeniorsPosts() {
    const res = await axios.get(urlPost + "/idosos");
    return res.data;
  }

  // pega todos os posts de meio ambiente
  static async getAllEnvironmentPosts() {
    const res = await axios.get(urlPost + "/meio-ambiente");
    return res.data;
  }

  // pega post pelo id
  static async getPostByID(id) {
    const res = await axios.get(`${urlPost}/${id}`);
    return res.data;
  }

  // adiciona post na base de dados
  static async addPost(post) {
    const res = await axios.post(urlPost, post);
    return res.data;
  }

  // atualiza post da base de dados
  static async updatePost(id, post) {
    const res = await axios.patch(`${urlPost}/${id}`, post);
    return res.data;
  }

  // deleta post da base de dados
  static async deletePost(id) {
    const res = await axios.delete(`${urlPost}/${id}`);
    return res.data;
  }
}
