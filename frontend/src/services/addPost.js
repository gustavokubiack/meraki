import axios from "axios";
const urlAddPost = "api/ong/addPost";

// ONG adicionar post
export default {
  addPost: async (post, token) => {
    token = localStorage.getItem("jwt");
    const res = await axios.post(`${urlAddPost}`, post, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  },
};
