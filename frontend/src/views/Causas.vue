<template>
  <v-item-group mandatory class="mt-n1">
    <v-container>
     
      
      <br><br>

      <p class="texto-causas text-center">Selecione a categoria que mais combine com você!</p> <br> 
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
              color= '#f8f7f2'
              
              class="d-flex align-center rounded-lg mx-2"
              dark
              height="180"
              @click="toggle"
              flat
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line class="text-center"  link :to="cetegory.to">
                    <v-list-item-content>
                      <div align="center" justify="center">
                        <v-img
                          :src="cetegory.img"
                          max-height="100"
                          max-width="100"
                          contain
                        ></v-img>
                      </div>
                      <v-list-item-subtitle
                        :class="active ? 'black--text' : 'black--text'"
                        
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
      { img: "animais.png", title: "Animais", to:"/causaAnimais"},
      { img: "crianca.png", title: "Crianças", to:"/causaCriancas"},
      { img: "educacao.png", title: "Educação",to:"/causaEducacao" },
      { img: "diversidade.png", title: "Diversidade e Inclusão",to:"/causaDiversidade" },
      { img: "idoso.png", title: "Idosos",to:"/causaIdosos" },
      { img: "meio_ambiente.png", title: "Meio Ambiente",to:"/causaMeioAmbiente" },
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
  font-size: 35px;
  color: #f8f7f2;
  font-family: "Prata", serif;
}


</style>