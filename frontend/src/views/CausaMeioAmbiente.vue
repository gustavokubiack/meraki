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
          img: "https://images.unsplash.com/photo-1569254982489-93e2fdf7fd45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
          title: "Mutirão de limpeza na praia",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1013&q=80",
          title: "Plante uma árvore",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://images.unsplash.com/photo-1507484467459-0c01be16726e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          title: "Horta coletiva",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
{
          img: "https://images.unsplash.com/photo-1562591970-254bc62245c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          title: "Arrecadação de materiais plásticos",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          title: "Palestras sobre educação ambiental",
          to: "/noticias",
          subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          img: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          title: "Advogados do meio ambiente",
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