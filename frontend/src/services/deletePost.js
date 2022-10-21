import axios from "axios";
const url = "api/ong/deletePost";

export default {
  deletePost: async (id, token) => {
    token = localStorage.getItem("jwt");
    const res = await axios.delete(url + "/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  },
};
