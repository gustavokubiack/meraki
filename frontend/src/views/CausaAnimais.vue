<template>
  <v-container class="pa-8">
    <v-row class="space" align="center">
      <v-col cols="12" xs="12" sm="4" v-for="(item, i) in items" :key="i">
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" height="200px" :src="item.img">
          </v-img>
          <v-card-text class="text--primary">
            <h3>{{ item.title }}</h3>

            <div>{{ item.subtitle }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn link :to="item.to" color="#050a30" text> Detalhes </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          img: "https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          title: "Passear com cachorros",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
          title: "Banho e Tosa em ONG ",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 ",
          title: "Lar temporário para gatos",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
{
          img: "https://images.unsplash.com/photo-1587599140470-acf5dc34e4cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          title: "Arrecadar ração para hamsters",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://images.unsplash.com/photo-1583301286816-f4f05e1e8b25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          title: "Cuidados em coelhos resgatados",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://images.unsplash.com/photo-1553688738-a278b9f063e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          title: "Carona solidária (clínica de resgate)",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
    };
  },
};
</script>

<style>
</style>