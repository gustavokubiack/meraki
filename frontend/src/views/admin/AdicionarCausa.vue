<template>
  <v-container class="pa-8">
    <v-alert
      border="left"
      close-text="Close Alert"
      color="green accent-4"
      dark
      dismissible
      v-if="this.$route.params.message"
      >{{ this.$route.params.message }}"</v-alert
    >
    <v-row justify="start">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <div class="d-flex justify-end">
            <v-btn fab small color="#f8f7f2" dense v-bind="attrs" v-on="on">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </div>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Adicionar causa</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                @submit.prevent="submitForm"
                class="pa-5"
                enctype="multipart/form-data"
              >
                <v-row>
                  <v-col cols="12">
                    <v-file-input
                      @change="selectFile"
                      show-size
                      counter
                      multiple
                      label="Imagem"
                      color="#050a30"
                    ></v-file-input>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="post.title"
                      label="Título"
                      required
                      :rules="quantTitle"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="post.description"
                      :rules="quantDescription"
                      minlength="100"
                      color="#050a30"
                      label="Descrição"
                    ></v-textarea>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="post.street"
                      label="Rua"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="post.numberHouse"
                      label="Número"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="post.neighborhood"
                      label="Bairro"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="post.city"
                      label="Cidade"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="post.state"
                      label="Estado"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="post.dateCause"
                      label="Data da Causa"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      v-model="post.chosenCause"
                      :items="items"
                      label="Causa"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#050a30" text @click="dialog = false"> Fechar </v-btn>
            <v-btn color="#050a30" text @click="(dialog = false), submitForm()">
              Adicionar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import admin from "@/services/addPost";
export default {
  data: () => ({
    items: [
      "Animais",
      "Crianças",
      "Diversidade",
      "Educação",
      "Idosos",
      "Meio Ambiente",
    ],
    dialog: false,
    quantDescription: [
      (value) =>
        (value.length >= 104 && value.length <= 300) ||
        "Quantidade de caracteres inválida",
    ],
    quantTitle: [
      (value) => value.length <= 35 || "Quantidade de caracteres inválida",
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
      console.log("passou aqui 1");

      if (this.$refs.form.validate()) {
        const response = await admin.addPost(formData);
        console.log("passou aqui 2");
        this.$router.push({
          name: "PainelDeControle",
          params: { message: response.message },
        });

        //const causa = this.post.chosenCause;
        //console.log(causa);
        //
        //switch (causa) {
        //  case "Animais":
        //    this.$router.push({
        //      name: "CausaAnimais",
        //    });
        //    break;
        //  case "Crianças":
        //    this.$router.push({
        //      name: "CausaCriança",
        //    });
        //    break;
        //  case "Diversidade":
        //    this.$router.push({
        //      name: "CausaDiversidade",
        //    });
        //    break;
        //  case "Educação":
        //    this.$router.push({
        //      name: "CausaEducação",
        //    });
        //    break;
        //  case "Idosos":
        //    this.$router.push({
        //      name: "CausaIdosos",
        //    });
        //    break;
        //  case "Meio Ambiente":
        //    this.$router.push({
        //      name: "CausaMeioAmbiente",
        //    });
        //    break;
        //}
      }
    },
  },
};
</script>
