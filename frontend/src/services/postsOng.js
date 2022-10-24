import axios from "axios";

const urlPost = "api/post";

export default class Posts {
  // pega post pelo id
  static async getPostByID(id) {
    const res = await axios.get(`${urlPost}/${id}`);
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
