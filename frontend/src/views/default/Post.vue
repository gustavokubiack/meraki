<template>
  <v-container class="pa-8">
    <h1 class="titulo-card text-center">{{ post.title }}</h1>
    <v-row>
      <v-col>
        <div class="d-flex justify-center pa-8">
          <v-img
            :src="`/${post.image}`"
            max-width="600"
            max-height="384"
            min-heitgh="384"
            min-width="600"
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

        <h1 class="mt-5 titulo-card">Contato</h1>

        <v-list-group>
          <v-list-item>Email: </v-list-item>
          <v-list-item>Telefone:</v-list-item>
        </v-list-group>
      </v-col>

      <v-btn @click="deletePost(post._id)">Excluir</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import deletePost from "@/services/deletePost";
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
    async deletePost(id) {
      try {
        await deletePost.deletePost(id);
        swal({
          title: "Postagem excluída com sucesso!",
          text: "Agora você pode criar uma nova postagem!",
          icon: "success",
        });
        this.$router.push("/admin");
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
}

.info-card {
  color: #050a30;
  font-family: Lato;
  font-size: 15px;
}
</style>
