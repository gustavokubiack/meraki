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

      <v-col>
        <h1 class="titulo-user d-flex justify-center">Voluntariados</h1>
        <v-card></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUser() {
      let token = localStorage.getItem("jwtUser");
      let tokenDecoded = VueJwtDecode.decode(token);
      this.user = tokenDecoded;
    },
  },
  created() {
    this.getUser();
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
