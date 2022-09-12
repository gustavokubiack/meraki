<template>
  <v-card>
    <v-card-actions>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-magnify" }}</v-icon>
      </v-btn>
      <v-card-title>
        <h2 class="titulo-perguntas">
          Quem pode se voluntariar em alguma causa?
        </h2>
      </v-card-title>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text class="texto-respostas">
          Qualquer pessoa maior de 18 anos que esteja disposta a realizar o que
          foi pedido pela instituição.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>

<style>
.titulo {
  text-align: center;
  font-family: "Prata", serif;
  font-size: 40px;
  color: #f8f7f2;
}
.texto {
  color: #f8f7f2;
  font-size: 25px;
  text-align: justify;
}
.titulo-perguntas {
  font-family: "Lato", serif;
  color: #050a30;
  font-size: 20px;
  font-weight: bold;
}
.texto-respostas {
  color: #050a30;
  font-size: 18px;
  font-family: "Lato", serif;
}
.faq {
  text-align: justify;
}
</style>
