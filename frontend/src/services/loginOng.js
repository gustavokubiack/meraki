import axios from "axios";
import swal from "sweetalert";

const urlOng = "/api/ong";

export default {
  async loginOng(user) {
    try {
      const res = await axios.post(urlOng + "/login", user);
      const { token } = res.data;

      localStorage.setItem("jwt", token);

      if (token) {
        swal({
          title: "Bem-vindo ao Meraki Voluntariado",
          text: "Login efetuado com sucesso!",
          icon: "success",
        });
      }
    } catch (err) {
      swal({
        title: "Algo deu errado",
        text: "Erro ao logar usuário!",
        icon: "error",
      });
      throw err;
    }
  },
};
