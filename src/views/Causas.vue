<template>
  <v-item-group mandatory class="mt-n1">
    <v-container>
      <h1 class="titulo-causas">Causas</h1>
      <p class="texto-causas">Aqui estão as causas que você pode se voluntariar!</p>

      <v-row justify="center" class="space">
        <v-col
          cols="12"
          xs="12"
          sm="4"
          md="2"
          v-for="(cetegory, i) in categories"
          :key="i"
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
              :color="active ? '#D5F0DB' : 'white'"
              :class="active ? 'borderme' : 'borderout'"
              class="d-flex align-center rounded-lg mx-2"
              dark
              height="180"
              @click="toggle"
              flat
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line class="text-center">
                    <v-list-item-content>
                      <div align="center" justify="center">
                        <v-img
                          :src="cetegory.img"
                          max-height="250"
                          max-width="200"
                          contain
                        ></v-img>
                      </div>
                      <v-list-item-subtitle
                        :class="active ? 'green--text' : 'black--text'"
                        class="caption mt-4"
                        >{{ cetegory.title }}</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  data: () => ({
    categories: [
      { img: "animais.png", title: "Animais" },
      { img: "crianca.png", title: "Crianças" },
      { img: "educacao.png", title: "Educação" },
      { img: "diversidade.png", title: "Diversidade" },
      { img: "idoso.png", title: "Idosos" },
      { img: "meio_ambiente.png", title: "Meio Ambiente" },
    ],
  }),
};
</script>

<style>
.texto-causas{
  color: #f8f7f2;
  font-family: "Lato", sans-serif;
  font-size: 30px;
}

.titulo-causas{
  text-align: center;
  font-size: 40px;
  color: #f8f7f2;
  font-family: "Prata", serif;
}
</style>