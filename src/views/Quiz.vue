<template>
  <v-container class="pa-8">
    <h1 class="titulo-perfil">Quiz</h1>

    <v-col v-for="(item, i) in items" :key="i">
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Pergunta 1",
          alternative1: "oi",
          alternative2: "testando",
          alternative3: "pergunta 1",
          alternative4: "sucesso",
        },
        {
          title: "Pergunta 2",
          alternative1: "oi",
          alternative2: "Alternativa 2",
          alternative3: "Alternativa 3",
          alternative4: "Alternativa 4",
        },
        {
          title: "Pergunta 3",
          alternative1: "cabeçucdo",
          alternative2: "Alternativa 2",
          alternative3: "Alternativa 3",
          alternative4: "Alternativa 4",
        },
        {
          title: "Pergunta 4",
          alternative1: "Alternativa 1",
          alternative2: "Alternativa 2",
          alternative3: "Alternativa 3",
          alternative4: "Alternativa 4",
        },
        {
          title: "Pergunta 5",
          alternative1: "Alternativa 1",
          alternative2: "Alternativa 2",
          alternative3: "Alternativa 3",
          alternative4: "Alternativa 4",
        },
        {
          title: "Pergunta 6",
          alternative1: "Alternativa 1",
          alternative2: "Alternativa 2",
          alternative3: "Alternativa 3",
          alternative4: "Alternativa 4",
        },
      ],
    };
  },
};
</script>

<style>
.titulo-perfil {
  text-align: center;
  font-family: "Prata", serif;
  font-size: 40px;
  color: #f8f7f2;
}
.texto-perfil {
  color: #f8f7f2;
  font-family: "Cardo";
  font-size: 25px;
  text-align: justify;
}

.perguntas {
  text-align: center;
}

.h1 {
  color: #050a30;
}
</style>