<template>
  <v-app style="background: #050a30">
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
                  v-model="registerForm.name"
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
                  v-model="registerForm.email"
                  class="mt-3"
                  placeholder="Digite seu email"
                  outlined
                  dense
                  rounded
                  color="#050a30"
                  @blur="$v.registerForm.email.$touch()"
                >
                </v-text-field>
              </v-row>

              <v-row>
                <h3 class="default">Senha</h3>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="registerForm.password"
                  type="password"
                  class="mt-3"
                  placeholder="Digite sua senha"
                  outlined
                  dense
                  rounded
                  color="#050a30"
                  @blur="$v.registerForm.password.$touch()"
                >
                </v-text-field>
              </v-row>
              <v-row>
                <h3 class="default">Telefone</h3>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="registerForm.telephone"
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
                  v-model="registerForm.state"
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
                  v-model="registerForm.city"
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
                  v-model="registerForm.neighborhood"
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
                    v-model="registerForm.street"
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
                    v-model="registerForm.numberHouse"
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
                <v-btn dense dark color="#050a30" @click="submitRegisterOng"
                  >Criar conta</v-btn
                >
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
import swal from "sweetalert";
import registerOng from "@/services/registerOng";
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      rules: [(v) => !!v || "Campo obrigatório"],

      registerForm: {
        name: "",
        email: "",
        password: "",
        telephone: "",
        state: "",
        city: "",
        neighborhood: "",
        street: "",
        numberHouse: "",
      },
    };
  },
  validations: {
    registerForm: {
      name: { required },
      email: { required, email },
      password: { required },
      telephone: { required },
      state: { required },
      city: { required },
      neighborhood: { required },
      street: { required },
      numberHouse: { required },
    },
  },
  methods: {
    registerSubmitOngForm() {},

    async submitRegisterOng() {
      try {
        this.$v.$touch();
        if (this.$v.$invalid) {
          swal({
            title: "Ops!",
            text: "Preencha todos os campos.",
            icon: "error",
            button: "Ok",
          });
          return;
        }
        await registerOng.registerNewOng(this.registerForm);
        this.$router.push("/login/ong");
      } catch (error) {
        console.log(error);
        swal({
          title: "Ops!",
          text: "Algo deu errado.",
          icon: "error",
          button: "Ok",
        });
      }
    },
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
