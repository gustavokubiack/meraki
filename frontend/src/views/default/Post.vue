<template>
  <v-container class="pa-8">
    <v-card class="pa-8" id="card">
      <v-row>
        <v-col>
          <v-img
            :src="`/${post.image}`"
            max-width="426"
            max-height="384"
            class="mt-2"
          ></v-img>

          <div class="d-flex justify-start mt-2">
            <h2 class="informationTitle">Outras Informações</h2>
          </div>

          <div class="informationText">
            <div>
              <span style="color: #050a30">Data:</span> {{ post.dateCause }}.
            </div>
            <div>
              <span style="color: #050a30">Estado:</span> {{ post.state }}.
            </div>
            <div>
              <span style="color: #050a30">Cidade:</span> {{ post.city }}.
            </div>
            <div>
              <span style="color: #050a30">Rua:</span> {{ post.street }},
              {{ post.numberHouse }}.
            </div>
          </div>
        </v-col>

        <v-col>
          <div class="d-flex justify-center">
            <div id="titleCard">{{ post.title }}</div>
          </div>

          <div class="d-flex justify-center">Criado por: {{ post.ong }}</div>

          <div id="box" class="d-flex text-justify mt-6">
            {{ post.description }}
          </div>
          <v-row class="d-flex justify-center mt-14">
            <v-btn dark color="#050a30">Voluntariar-se</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import Posts from "@/services/postsOng.js";
export default {
  data() {
    return {
      post: [],
    };
  },
  async created() {
    const response = await Posts.getPostByID(this.$route.params.id);
    this.post = response;
  },
};
</script>

<style>
#box {
  padding: 10px;
  box-sizing: border-box;
  background-color: #f8f7f2;
  border: 1px solid #050a30;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#titleCard {
  font-size: 1.5rem;
  font-weight: bold;
  color: #050a30;
  font-family: "Lato", sans-serif;
}

.informationTitle {
  margin-top: 10px;
  font-family: "Lato", sans-serif;
  color: #050a30;
}

.informationText {
  font-size: 18px;
  margin-top: 10px;
}

#card {
  background-color: #f8f7f2;
}
</style>
