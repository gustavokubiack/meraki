<template>
  <v-container class="pa-8" fluid>
    <v-item-group mandatory class="mt-n1">
      <v-container>
        <h1 class="titulo-home">Ajude uma causa, voluntarie-se!</h1>

        <v-row justify="center" class="space mt-6">
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

    <v-col cols="12">
      <v-carousel hide-delimiters cycle>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-col>
    <Footer />
  </v-container>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      items: [
        {
          src: "https://images.unsplash.com/photo-1494005612480-90f50fd9376f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=8",
        },
        {
          src: "https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470",
        },
        {
          src: "https://images.unsplash.com/photo-1565615833231-e8c91a38a012?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470",
        },
        {
          src: "https://images.unsplash.com/photo-1566937863719-c6c62f9ee69a?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470",
        },
        {
          src: "https://images.unsplash.com/photo-1504283985083-b5c0ea827551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1643321611132-15f7b8a63347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
        },
      ],
      categories: [{ img: "11.png", title: "Causas", to: "/causas" }],
    };
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
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
.titulo-rodape {
  color: #f8f8f2;
  font-family: "Prata", serif;
  font-size: 30px;
  margin-top: 40px;
  margin-left: 15px;
}
</style>
