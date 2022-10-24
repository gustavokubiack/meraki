// registro de ongs e tratamento de erros

import axios from "axios";
import swal from "sweetalert";

const urlOng = "api/ong";

export default {
  async registerNewOng(newOng) {
    try {
      const res = await axios.post(urlOng + "/register", newOng);
      const token = res.data;

      if (token) {
        localStorage.setItem("jwt", token);
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
