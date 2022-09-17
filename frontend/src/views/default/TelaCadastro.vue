<template>
  <!-- nessa tela vai ter as duas opções de login no sistema, usuário comum e as ONGs !-->
  <v-container class="pa-8">
    <v-row justify="center" class="space mt-6">
      <v-col v-for="(cetegory, i) in categories" :key="i">
        <v-item>
          <v-card
            color="#f8f7f2"
            class="d-flex align-center rounded-lg mx-2"
            dark
            height="300"
            flat
          >
            <v-row>
              <v-col cols="12" sm="12">
                <v-list-item
                  three-line
                  class="text-center"
                  link
                  :to="cetegory.to"
                >
                  <v-list-item-content>
                    <div align="center" justify="center">
                      <v-img
                        :src="cetegory.img"
                        max-height="300"
                        max-width="200"
                        contain
                      ></v-img>
                    </div>
                    <v-list-item-subtitle id="titulo">{{
                      cetegory.title
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-card>
        </v-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        title: "ONGs",
        img: require("@/assets/images/ongImage.png"),
        to: "/login/ong",
      },
      {
        title: "Usuário",
        img: require("@/assets/images/userImage.png"),
        to: "/login/user",
      },
    ],
  }),
};
</script>

<style>
.titulo-perfil {
  text-align: center;
  color: #f8f7f2;
  font-family: "Lato", sans-serif;
  font-size: 30px;
}
#titulo {
  text-align: center;
  color: #050a30;
  font-family: "Lato", sans-serif;
  font-size: 25px;
}
</style>
