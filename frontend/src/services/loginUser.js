// fazer integração com o backend para fazer o login do usuário
import axios from "axios";
import swal from "sweetalert";

const urlUser = "/api/user";

export default {
  async loginUser(user) {
    try {
      const res = await axios.post(urlUser + "/loginUser", user);
      const { token } = res.data;

      localStorage.setItem("jwtUser", token);

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
