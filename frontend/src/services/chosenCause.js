import axios from "axios";
import swal from "sweetalert";
const url = "/api/user/";

export default {
  async addChosenCause(id) {
    try {
      const res = await axios.post(url + "addPost", id);
      return res.data;
    } catch (err) {
      swal({
        title: "Somente uma causa por usuário!",
        text: "Você já escolheu uma causa!",
        icon: "error",
      });
    }
  },
  async returnChosenCause() {
    const res = await axios.get(url + "returnPost");
    return res.data;
  },
};
