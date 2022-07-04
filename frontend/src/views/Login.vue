<template>
  <v-container class="pa-8">
      <h1 class="titulo-perfil">Login</h1>
  <p class="texto-perfil">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
  </p>
  
  <div class="d-flex justify-center"> 
      <div>
        <v-btn class="mx-2" large link to="">Pessoal</v-btn>
        <v-btn class="mx-2" large link to="">Institucional</v-btn>
      </div>
  </div>
  
  </v-container>
</template>

<script>
export default {
}
</script>

<style>
.titulo-perfil {
  text-align: center;
  font-family: 'Prata', serif;
  font-size: 40px;
  color: #f8f7f2;
}
.texto-perfil{
  color: #f8f7f2;
  font-family: "Lato", sans-serif;
  font-size: 30px;
  text-align: justify;
}
</style>