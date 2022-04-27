<template>
  <v-container class="pa-8" fluid>
    <v-item-group mandatory class="mt-n1">
      <v-container>
        <h1 class="titulo-home">Ajude um causa, voluntarie-se!</h1>
        <br />
        <br />

        <v-row justify="center" class="space">
          <v-col
            cols="12"
            xs="12"
            sm="4"
            md="2"
            v-for="(cetegory, i) in categories"
            :key="i"
          >
            <v-item v-slot="{ active }">
              <v-card
                color="#f8f7f2"
                :class="active ? 'borderme' : 'borderout'"
                class="d-flex align-center rounded-lg mx-2"
                dark
                height="180"
                flat
              >
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-list-item
                      three-line
                      class="text-center"
                      link
                      :to="cetegory.to"
                    >
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

    <br /><br />
    <v-col cols="12">
      <v-carousel hide-delimiters cycle>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-col>

    
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://images.unsplash.com/photo-1590874023110-f82d4c63b599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1494005612480-90f50fd9376f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
        },
        {
          src: "https://cdn.pixabay.com/photo/2021/11/06/00/32/volunteer-6772196_960_720.jpg",
        },
        {
          src: "https://images.unsplash.com/photo-1612708474132-9c9b981c016b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1504283985083-b5c0ea827551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
      ],
      categories: [
        { img: "10.png", title: "Quiz", to: "/quiz" },
        { img: "11.png", title: "Causas", to: "/causas" },
      ],
    };
  },
};
</script>

<style>
.botao-home {
  font-family: "Cardo", serif;
  color: #f8f8f2;
}
.main {
  background-color: #f8f8f2;
  margin-left: 0%;
}

.posicao {
  display: inline-block;
}
.slogan {
  font-family: "Cardo", serif;
  text-align: center;
  color: #f8f8f2;
  font-size: 45px;
}
.titulo-home {
  color: #f8f8f2;
  font-family: "Prata", serif;
  font-size: 40px;
  margin-top: 40px;
  text-align: center;
}
.titulo-resto {
  text-align: center;
}

.texto-home {
  color: #f8f8f2;
  font-family: "Prata", serif;
}
</style>