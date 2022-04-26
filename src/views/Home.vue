<template>
  <v-container class="pa-8" fluid>
    <v-row>
      <v-col>
        <p class="slogan">Ajude uma causa, voluntarie-se!</p> <br>
 
        <div class="d-flex justify-space-around">
          
          <v-btn class="botao-home" link to="/quiz" >
               Faça seu Quiz
          </v-btn> 
          

          
          <v-btn class="botao-home" link to="/causas">
              Causas  
          </v-btn>
          
          
        </div>
      <br>
      </v-col>

      <v-col cols="12">
        <v-carousel hide-delimiters cycle>
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
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
          src: "https://images.unsplash.com/photo-1577368287217-16ff9373a733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1494005612480-90f50fd9376f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1623931581557-b1e4a4502635?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=413&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1616680213846-20aef5608480?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1632932724779-8af3bdae9d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
        },
      ],
    };
  },
};
</script>

<style>
.botao-home{
  font-family: 'Cardo', serif;
  color: #f8f8f2;
}


.posicao {
  display: inline-block;
}
.slogan {
  font-family: 'Cardo', serif;
  text-align: center;
  color: #f8f8f2;
  font-size: 45px;
}
h1 {
  color: #f8f8f2;
  font-family: 'Prata', serif;
  font-size: 40px;
  margin-top: 40px;
}
.titulo-resto {
  text-align: center;
}

.texto-home{
  color: #f8f8f2;
  font-family: 'Prata', serif;

}
</style>