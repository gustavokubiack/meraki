<template>
  <v-app v-app style="background: #050a30">
    <v-container class="pa-12">
      <v-card shaped class="pa-8">
        <v-form v-on:submit.prevent="registerSubmitOngForm()">
          <h1 class="titulo d-flex justify-center">Cadastro Institucional</h1>
          <v-row>
            <v-col>
              <h2 class="titulo d-flex justify-center mt-5">Login e Contato</h2>
              <v-row class="mt-5">
                <h3 class="default">Nome da Instituição</h3>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="registerForm.nameOng"
                  :rules="rules"
                  class="mt-3"
                  placeholder="Digite o nome da instituição"
                  outlined
                  dense
                  rounded
                  color="#050a30"
                >
                </v-text-field>
              </v-row>
              <v-row>
                <h3 class="default">Email</h3>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="registerForm.emailOng"
                  :rules="rules"
                  class="mt-3"
                  placeholder="Digite seu email"
                  outlined
                  dense
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
                  v-model="registerForm.passwordOng"
                  :rules="rules"
                  type="password"
                  class="mt-3"
                  placeholder="Digite sua senha"
                  outlined
                  dense
                  rounded
                  color="#050a30"
                >
                </v-text-field>
              </v-row>
              <v-row>
                <h3 class="default">Telefone</h3>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="registerForm.telephoneOng"
                  :rules="rules"
                  class="mt-3"
                  placeholder="Digite seu telefone"
                  outlined
                  dense
                  rounded
                  color="#050a30"
                >
                </v-text-field>
              </v-row>
            </v-col>

            <v-col class="ml-3"
              ><h2 class="titulo d-flex justify-center mt-5">Endereço</h2>
              <v-row class="mt-5">
                <h3 class="default">Estado</h3>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="registerForm.stateOng"
                  :rules="rules"
                  class="mt-3"
                  placeholder="Estado da instituição"
                  outlined
                  dense
                  rounded
                  color="#050a30"
                >
                </v-text-field>
              </v-row>
              <v-row>
                <h3 class="default">Cidade</h3>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="registerForm.cityOng"
                  :rules="rules"
                  class="mt-3"
                  placeholder="Cidade da instituição"
                  outlined
                  dense
                  rounded
                  color="#050a30"
                >
                </v-text-field>
              </v-row>

              <v-row>
                <h3 class="default">Bairro</h3>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="registerForm.neighborhoodOng"
                  :rules="rules"
                  class="mt-3"
                  placeholder="Bairro da instituição"
                  outlined
                  dense
                  rounded
                  color="#050a30"
                >
                </v-text-field>
              </v-row>
              <v-row>
                <h3 class="default">Rua</h3>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="registerForm.streetOng"
                    :rules="rules"
                    placeholder="Rua "
                    outlined
                    dense
                    rounded
                    color="#050a30"
                  >
                  </v-text-field>
                </v-col>

                <v-col>
                  <v-text-field
                    v-model="registerForm.numberHouseOng"
                    :rules="rules"
                    placeholder="***"
                    outlined
                    dense
                    rounded
                    color="#050a30"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row class="d-flex justify-end mr-5">
                <v-btn dense dark color="#050a30">Criar conta</v-btn>
              </v-row>

              <v-row class="d-flex justify-end mt-5 mr-5">
                <p>
                  Possui uma conta?
                  <a href="/login-ong" class="default">Entrar</a>
                </p>
              </v-row>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      rules: [(v) => !!v || "Campo obrigatório"],

      registerForm: {
        nameOng: "",
        emailOng: "",
        passwordOng: "",
        telephoneOng: "",
        stateOng: "",
        cityOng: "",
        neighborhoodOng: "",
        streetOng: "",
        numberHouseOng: "",
      },
    };
  },
  methods: {
    registerSubmitOngForm() {},
    async submitRegisterUser() {},
  },
};
</script>

<style>
.default {
  color: #050a30;
  font-family: "Lato";
  font-size: 1.2rem;
}
.titulo {
  color: #050a30;
  font-family: "Lato";
}
</style>
