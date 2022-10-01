<template>
  <v-container class="pa-8">
    <v-row>
      <v-col>
        <h1 class="text-center">{{ post.title }}</h1>
        <div class="d-flex justify-center pa-8">
          <v-img
            :src="`/${post.image}`"
            max-width="600"
            max-height="384"
            min-heitgh="384"
            min-width="600"
            class="pa-6"
          ></v-img>
        </div>

        <div class="d-flex justify-center">
          <v-card max-width="600" class="pa-8">
            {{ post.description }}
          </v-card>
        </div>

        <div class="d-flex justify-center pa-2">
          <h1>Endereço</h1>
        </div>

        <v-row class="d-flex justify-center mt-14">
          <v-btn v-show="authUser()" @click="volunteer()" dark color="#050a30"
            >Voluntariar-se</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import admin from "@/services/returnPost.js";
import swal from "sweetalert";
import user from "@/services/chosenCause.js";
export default {
  data() {
    return {
      post: [],
    };
  },
  async created() {
    this.post = await admin.postById(this.$route.params.id);
  },

  methods: {
    authUser() {
      if (localStorage.getItem("jwtUser") != null) {
        return true;
      }
    },
    async volunteer() {
      try {
        await user.addChosenCause(this.$route.params.id);
        swal({
          title: "Voluntariado realizado com sucesso!",
          text: "Agora você faz parte dessa causa!",
          icon: "success",
        });
      } catch (error) {
        swal({
          title: "Ops!",
          text: "Algo deu errado!",
          icon: "error",
        });
      }
    },
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
