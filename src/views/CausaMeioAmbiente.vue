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
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Passear com cachorro",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Passear com cachorro",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Passear com cachorro",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
{
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Passear com cachorro",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Passear com cachorro",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Passear com cachorro",
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