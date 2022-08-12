<template>
  <v-container class="pa-8">
    <p class="titulo-perfil">
      Caso você tenha interesse em registrar sua instituição, realize o cadastro
      abaixo.
    </p>

    <div class="d-flex justify-center">
      <div>
        <v-btn class="mx-2" large link to="login-ong">
          <v-icon left dark>mdi-account-multiple-plus</v-icon>Login</v-btn
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
