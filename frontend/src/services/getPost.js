import axios from "axios";
const urlGetPost = "/api/ong/getPosts";

// ONG pegar todos os posts dela

export default {
  async getPost(token) {
    token = localStorage.getItem("jwt");
    const res = await axios.get(`${urlGetPost}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  },
};