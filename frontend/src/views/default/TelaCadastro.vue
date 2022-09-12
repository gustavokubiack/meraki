<template>
<!-- nessa tela vai ter as duas opções de login no sistema, usuário comum e as ONGs !-->
  <v-container class="pa-8">
    <p class="titulo-perfil">
      Faça o seu login no Meraki
    </p>

    <div class="d-flex justify-center">
      <div>
        <v-btn class="mx-2" large link to="/">
          <v-icon left dark>mdi-account-multiple-plus</v-icon>usuário</v-btn
        >

       <v-btn class="mx-2" large link to="login-ong">
          <v-icon left dark>mdi-account-multiple-plus</v-icon>Ongs</v-btn
        >
      </div>
    </div>
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
