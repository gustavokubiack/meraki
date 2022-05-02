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
          img: "https://images.unsplash.com/photo-1471914036897-d8255336ca8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
          title: "Passear com cachorro",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          title: "Passear com cachorro",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          title: "Passear com cachorro",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
{
          img: "https://images.unsplash.com/photo-1565615833231-e8c91a38a012?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          title: "Passear com cachorro",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://images.unsplash.com/photo-1628717341663-0007b0ee2597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
          title: "Passear com cachorro",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://images.unsplash.com/photo-1565562195689-739680900319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
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