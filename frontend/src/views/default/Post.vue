<template>
  <v-container class="pa-8">
    <h1 class="titulo-card text-center">{{ post.title }}</h1>
    <v-row>
      <v-col>
        <div class="d-flex justify-center pa-8">
          <v-img
            :src="post.imageLocation"
            max-width="600"
            max-height="384"
            min-width="600"
            min-height="384"
            class="pa-6"
          ></v-img>
        </div>

        <div class="d-flex justify-center">
          <v-card max-width="600" class="pa-8">
            {{ post.description }}
          </v-card>
        </div>
      </v-col>

      <v-col>
        <v-card class="info-card mt-6 pa-6">
          <h1 class="text-center">Endereço</h1>

          <h2>Estado: {{ post.state }}</h2>
          <h2>Cidade: {{ post.city }}</h2>
          <h2>Rua: {{ post.street }}, {{ post.numberHouse }}</h2>
          <h2>Bairro: {{ post.neighborhood }}</h2>
        </v-card>

        <h1 class="titulo-card">Contato - Meraki</h1>

        <v-card class="info-card mt-6 pa-6">
          <h2>Telefone: (47) 99999-9999</h2>
          <h2>Email: meraki@gmail.com</h2>
        </v-card>

        <v-row class="d-flex justify-center mt-14">
          <v-btn v-show="authUser()" @click="volunteer()">Voluntariar-se</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import admin from "@/services/returnPost.js";
import swal from "sweetalert";
import user from "@/services/chosenCause.js";
export default {
  data() {
    return {
      post: [],
    };
  },
  async created() {
    this.post = await admin.postById(this.$route.params.id);
  },

  methods: {
    authUser() {
      if (localStorage.getItem("jwtUser") != null) {
        return true;
      }
    },
    async volunteer() {
      try {
        await user.addChosenCause(this.$route.params.id);
        swal({
          title: "Voluntariado realizado com sucesso!",
          text: "Agora você faz parte dessa causa!",
          icon: "success",
        });
      } catch (error) {
        swal({
          title: "Ops!",
          text: "Algo deu errado!",
          icon: "error",
        });
      }
    },
  },
};
</script>

<style>
.titulo-card {
  color: #f8f7f2;
  font-family: Lato;
  margin-top: 20px;
}

.info-card {
  color: #050a30;
  font-family: Lato;
  font-size: 15px;
}
</style>
