<template>
  <v-app style="background: #050a30">
    <v-container class="pa-8">
      <v-card shaped class="pa-8">
        <v-row>
          <v-col>
            <v-img
              class="d-flex justify-center"
              src="@/assets/images/imagemLogin.png"
              max-width="400px"
              max-height="400px"
            >
            </v-img>
          </v-col>
          <v-col>
            <h1 class="titulo d-flex justify-center">Bem-vindo ao Meraki!</h1>

            <v-form v-on:sumbmit.prevent="loginSubmitUserForm()">
              <v-row class="pt-12">
                <h3 class="default">Email</h3>
              </v-row>

              <v-row>
                <v-text-field
                  :rules="rules"
                  v-model="loginForm.email"
                  placeholder="Digite seu email"
                  outlined
                  rounded
                  color="#050a30"
                >
                </v-text-field>
              </v-row>

              <v-row>
                <h3 class="default">Senha</h3>
              </v-row>
              <v-row>
                <v-text-field
                  :rules="rules"
                  type="password"
                  v-model="loginForm.password"
                  placeholder="Digite sua senha"
                  outlined
                  rounded
                  color="#050a30"
                ></v-text-field>
              </v-row>

              <v-row>
                <v-card-actions>
                  <v-btn dark color="#050a30" @click="submitLoginOng"
                    >Entrar</v-btn
                  >
                </v-card-actions>
              </v-row>

              <v-row>
                <p>
                  Não possui uma conta?
                  <a href="/cadastro-ong" class="ml-1 default">Cadastrar-se</a>
                </p>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      rules: [(v) => !!v || "Campo Obrigatório"],

      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginSubmitOngForm() {},
    async submitLoginOng() {},
  },
};
</script>

<style>
.titulo {
  color: #050a30;
  font-family: "Lato";
}

.default {
  color: #050a30;
  font-family: "Lato";
  font-size: 1.2rem;
}
</style>
