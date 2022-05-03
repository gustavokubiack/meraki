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
          img: "https://images.unsplash.com/photo-1575473301724-e655a40bf431?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          title: "Oficina de Dança",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://images.unsplash.com/photo-1591200687746-73cfd588ea5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          title: "Aula de Artesanato",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://images.unsplash.com/photo-1579594837651-d9f894395cce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
          title: "Carta de idosos",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
{
          img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          title: "Professor para aula de violão",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://images.unsplash.com/photo-1609131257008-a5436a6238da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80",
          title: "Aulas de Informática",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80",
          title: "Professor de Yoga",
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