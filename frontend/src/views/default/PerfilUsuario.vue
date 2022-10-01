<template>
  <v-container class="pa-8">
    <v-row>
      <v-col>
        <h1 class="titulo-user d-flex justify-center">Dados cadastrais</h1>
        <v-card>
          <div class="d-flex justify-center">
            <v-img
              src="@/assets/images/profileImage.png"
              max-width="300px"
              max-heigth="300px"
            >
            </v-img>
          </div>

          <div>
            <v-list class="lista-user">
              <v-list-item>Nome: {{ user.name }}</v-list-item>
              <v-list-item>E-mail: {{ user.email }}</v-list-item>
            </v-list>
          </div>
        </v-card>
      </v-col>

      <v-col v-for="post in posts" :key="post._id">
        <h1 class="titulo-user d-flex justify-center">Voluntários</h1>
        <v-card class="mx-auto" color="#f8f7f2" max-width="400" link>
          <v-img
            class="white--text align-end"
            height="200px"
            :src="`/${post.image}`"
          ></v-img>
          <v-card-text class="text--primary">
            <h3>{{ post.title }}</h3>

            <p>{{ post.description.substring(0, 100) + "..." }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="#050a30"
              dark
              :to="{ name: 'post', params: { id: post._id } }"
            >
              Detalhes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import user from "@/services/chosenCause.js";
import VueJwtDecode from "vue-jwt-decode";
export default {
  data() {
    return {
      user: {},
      posts: [],
    };
  },
  methods: {
    getUser() {
      let token = localStorage.getItem("jwtUser");
      let tokenDecoded = VueJwtDecode.decode(token);
      this.user = tokenDecoded;
    },
  },
  async created() {
    this.getUser();
    this.posts = await user.returnChosenCause();
  },
};
</script>

<style>
.titulo-user {
  color: #f8f7f2;
  font-size: 25px;
  font-family: Lato;
  padding: 5px;
}

.lista-user {
  color: #050a30;
  font-size: 20px;
  font-family: Lato;
  padding: 5px;
}
</style>
