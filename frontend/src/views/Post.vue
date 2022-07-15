<template>
  <v-container class="pa-8">
    <v-row class="pa-8">
      <v-col>
        <v-card class="mx-auto" max-width="800">
          <v-card-title class="d-flex justify-center">{{
            post.title
          }}</v-card-title>

          <v-img
            :src="`/${post.image}`"
            max-width="1200"
            class="d-flex justify-center"
          ></v-img>
          <v-card-text class="text-justify">{{ post.description }}</v-card-text>
          <v-card-text>Data: {{ post.dateCause }}</v-card-text>
          <v-card-text>Estado: {{ post.state }}</v-card-text>
          <v-card-text>Cidade: {{ post.city }}</v-card-text>
          <v-card-text
            >Rua: {{ post.street }}, {{ post.numberHouse }} -
            {{ post.neighborhood }}</v-card-text
          >
          <v-card-text>Criado em: {{ post.created }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../api";
export default {
  data() {
    return {
      post: [],
    };
  },
  async created() {
    const response = await API.getPostByID(this.$route.params.id);
    this.post = response;
  },
};
</script>

<style>
.titulo-post {
  color: #f8f7f2;
}

.texto-post {
  color: #f8f7f2;
}
</style>
