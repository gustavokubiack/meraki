// fazer integração com o backend para fazer o cadastro do usuário
import axios from "axios";
import swal from "sweetalert";

const urlUser = "/api/user";

export default {
  async registerNewUser(newUser) {
    try {
      const res = await axios.post(urlUser + "/register", newUser);
      const token = res.data;

      if (token) {
        localStorage.setItem("jwtUser", token);
        swal({
          title: "Excelente",
          text: "Usuário cadastrado com sucesso!",
          icon: "success",
        });
      } else {
        swal({
          title: "Algo deu errado",
          text: "Erro ao cadastrar usuário!",
          icon: "error",
        });
      }

      return res.data;
    } catch (err) {
      swal({
        title: "Algo deu errado",
        text: "Erro ao cadastrar usuário!",
        icon: "error",
      });
      throw err;
    }
  },
};
