import axios from "axios";
const url = "api/ong/deletePost";

export default {
  deletePost: async (post, token) => {
    token = localStorage.getItem("jwt");
    const res = await axios.delete(`${url}`, post, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  },
};
