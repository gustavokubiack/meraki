<template>
  <v-container>
    <v-alert
      border="left"
      close-text="Close Alert"
      color="green accent-4"
      dark
      dismissible
      v-if="this.$route.params.message"
      >{{ this.$route.params.message }}"</v-alert
    >
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title
            ><span class="add-causa"> Adicionar causa </span></v-card-title
          >
          <v-divider></v-divider>
          <v-form
            ref="form"
            @submit.prevent="submitForm"
            class="pa-5"
            enctype="multipart/form-data"
          >
            <v-file-input
              @change="selectFile"
              :rules="rules"
              show-size
              counter
              multiple
              label="Imagem"
              color="#050a30"
            ></v-file-input>
            <v-col cols="12">
              <v-text-field
                maxlength="36"
                color="#050a30"
                label="Título"
                v-model="post.title"
                :rules="quantTitle"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-textarea
                minlength="100"
                color="#050a30"
                label="Descrição"
                v-model="post.description"
                :rules="quantDescription"
              ></v-textarea>
            </v-col>

            <v-col class="d-flex">
              <v-col>
                <v-text-field
                  color="#050a30"
                  label="Data"
                  v-model="post.dateCause"
                  :rules="rules"
                ></v-text-field>
              </v-col>

              <v-col>
                <v-select
                  id="valorCausa"
                  :items="items"
                  color="#050a30"
                  label="Causa"
                  v-model="post.chosenCause"
                  :rules="rules"
                ></v-select>
              </v-col>
            </v-col>

            <v-col class="d-flex">
              <v-col>
                <v-text-field
                  color="#050a30"
                  label="Estado"
                  v-model="post.state"
                  :rules="rules"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  color="#050a30"
                  label="Cidade"
                  v-model="post.city"
                  :rules="rules"
                ></v-text-field>
              </v-col>
            </v-col>

            <v-col class="d-flex">
              <v-col>
                <v-text-field
                  color="#050a30"
                  label="Rua"
                  v-model="post.street"
                  :rules="rules"
                ></v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                  color="#050a30"
                  label="Número"
                  v-model="post.numberHouse"
                  :rules="rules"
                ></v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                  color="#050a30"
                  label="Bairro"
                  v-model="post.neighborhood"
                  :rules="rules"
                ></v-text-field>
              </v-col>
            </v-col>

            <v-col>
              <v-text-field
                color="#050a30"
                label="Criado por"
                v-model="post.ong"
                :rules="rules"
              ></v-text-field>
            </v-col>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="#050a30">Adicionar</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "@/services/postsOng.js";
export default {
  data: () => ({
    rules: [(value) => !!value || "Campo obrigatório"],

    quantDescription: [
      (value) =>
        (value.length >= 104 && value.length <= 300) ||
        "Quantidade de caracteres inválida",
    ],

    quantTitle: [
      (value) => value.length <= 35 || "Quantidade de caracteres inválida",
    ],

    items: [
      "Animais",
      "Crianças",
      "Diversidade",
      "Educação",
      "Idosos",
      "Meio Ambiente",
    ],

    post: {
      image: "",
      title: "",
      description: "",
      dateCause: "",
      state: "",
      city: "",
      neighborhood: "",
      street: "",
      numberHouse: "",
      chosenCause: "",
      ong: "",
    },
    image: "",
  }),
  methods: {
    selectFile(file) {
      this.image = file[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("title", this.post.title);
      formData.append("description", this.post.description);
      formData.append("dateCause", this.post.dateCause);
      formData.append("state", this.post.state);
      formData.append("city", this.post.city);
      formData.append("neighborhood", this.post.neighborhood);
      formData.append("street", this.post.street);
      formData.append("numberHouse", this.post.numberHouse);
      formData.append("chosenCause", this.post.chosenCause);
      formData.append("ong", this.post.ong);
      if (this.$refs.form.validate()) {
        const response = await API.addPost(formData);
        this.$router.push({
          name: "PainelDeControle",
          params: { message: response.message },
        });

        const causa = this.post.chosenCause;
        console.log(causa);

        switch (causa) {
          case "Animais":
            this.$router.push({
              name: "CausaAnimais",
            });
            break;
          case "Crianças":
            this.$router.push({
              name: "CausaCriança",
            });
            break;
          case "Diversidade":
            this.$router.push({
              name: "CausaDiversidade",
            });
            break;
          case "Educação":
            this.$router.push({
              name: "CausaEducação",
            });
            break;
          case "Idosos":
            this.$router.push({
              name: "CausaIdosos",
            });
            break;
          case "Meio Ambiente":
            this.$router.push({
              name: "CausaMeioAmbiente",
            });
            break;
        }
      }
    },
  },
};
</script>

<style>
.titulo-admin {
  font-family: "Prata", serif;
  font-size: 40px;
  color: #f8f7f2;
  text-align: center;
}
.add-causa {
  color: #050a30;
  font-family: "Cardo", serif;
  font-size: 25px;
}
</style>
