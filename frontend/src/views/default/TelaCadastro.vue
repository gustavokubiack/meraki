<template>
  <!-- nessa tela vai ter as duas opções de login no sistema, usuário comum e as ONGs !-->
  <v-container class="pa-8">
    <p class="titulo-perfil">Deseja entrar no Meraki como:</p>

    <!--    <div class="d-flex justify-center pa-8">

        <v-btn class="mx-2" large link to="/">
          <v-icon left dark>mdi-account-multiple-plus</v-icon>usuário</v-btn
        >

       <v-btn class="mx-2" large link to="login/ong">
          <v-icon left dark>mdi-account-multiple-plus</v-icon>Ongs</v-btn
        >
      </div>
    </div>
!-->

    <v-card color="#f8f7f2" class="pa-8">
      <v-row>
        <v-col>
          <div class="d-flex justify-center">
            <v-img
              src="@/assets/images/ongImage.png"
              max-height="200px"
              max-width="200px"
            ></v-img>
          </div>

          <div class="d-flex justify-center">
            <v-btn dark color="#050a30" link to="/login/ong">ONGs</v-btn>
          </div>
        </v-col>

        <v-col>
          <div class="d-flex justify-center">
            <v-img
              src="@/assets/images/userImage.png"
              max-height="200px"
              max-width="200px"
            ></v-img>
          </div>
          <div class="d-flex justify-center">
            <v-btn dark color="#050a30" link to="/login/user">VOLUNTÁRIO</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.titulo-perfil {
  text-align: center;
  color: #f8f7f2;
  font-family: "Lato", sans-serif;
  font-size: 30px;
}
</style>
