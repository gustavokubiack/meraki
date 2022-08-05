import axios from "axios";

const url = "/api/post";

export default class API {
  // to get all the posts from the database
  static async getAllPost() {
    const res = await axios.get(url);
    return res.data;
  }

  // to get all animal posts from the database
  static async getAllAnimalsPosts() {
    const res = await axios.get(url + "/animal");
    return res.data;
  }

  // to get all children posts from the database
  static async getAllChildrenPosts() {
    const res = await axios.get(url + "/criancas");
    return res.data;
  }

  // to get all diversity posts from the database
  static async getAllDiversityPosts() {
    const res = await axios.get(url + "/diversidade");
    return res.data;
  }

  // to get all education posts from the database
  static async getAllEducationPosts() {
    const res = await axios.get(url + "/educacao");
    return res.data;
  }

  // to get all seniors posts from the database
  static async getAllSeniorsPosts() {
    const res = await axios.get(url + "/idosos");
    return res.data;
  }

  // to get all environment posts from the database
  static async getAllEnvironmentPosts() {
    const res = await axios.get(url + "/meio-ambiente");
    return res.data;
  }

  // to get single post by id
  static async getPostByID(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }

  // to insert post into the database
  static async addPost(post) {
    const res = await axios.post(url, post);
    return res.data;
  }

  // to update post into the database
  static async updatePost(id, post) {
    const res = await axios.patch(`${url}/${id}`, post);
    return res.data;
  }

  // to delete post into the database
  static async deletePost(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
}
