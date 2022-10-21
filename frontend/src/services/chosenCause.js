import axios from "axios";
const url = "/api/user/";

export default {
  async addChosenCause(id, token) {
    token = localStorage.getItem("jwtUser");
    const res = await axios.post(
      url + "addPost/" + id,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return res.data;
  },
  async returnChosenCause(token) {
    token = localStorage.getItem("jwtUser");
    const res = await axios.get(url + "returnPost", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  },

  async deleteChosenCause(id, token) {
    token = localStorage.getItem("jwtUser");
    const res = await axios.delete(url + "deletePost/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
};
