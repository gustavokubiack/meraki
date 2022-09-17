<template>
  <v-app style="background: #050a30">
    <v-container class="pa-8">
      <v-card shaped class="pa-8">
        <h1 class="titulo-login d-flex justify-center">
          É bom ter ver aqui novamente, voluntário!
        </h1>
        <v-row>
          <v-col>
            <v-form v-on:sumbmit.prevent="loginSubmitUserForm()">
              <v-row class="pt-12">
                <h3 class="default">Email</h3>
              </v-row>

              <v-row>
                <v-text-field
                  v-model="loginForm.email"
                  placeholder="Digite seu email"
                  outlined
                  rounded
                  color="#050a30"
                  @blur="$v.loginForm.email.$touch()"
                >
                  >
                </v-text-field>
              </v-row>

              <v-row>
                <h3 class="default">Senha</h3>
              </v-row>
              <v-row>
                <v-text-field
                  type="password"
                  v-model="loginForm.password"
                  placeholder="Digite sua senha"
                  outlined
                  rounded
                  color="#050a30"
                  @blur="$v.loginForm.password.$touch()"
                ></v-text-field>
              </v-row>

              <v-row>
                <v-card-actions>
                  <v-btn dark color="#050a30" @click="submitLoginUser"
                    >Entrar</v-btn
                  >
                </v-card-actions>
              </v-row>

              <v-row>
                <p>
                  Não possui uma conta?
                  <a href="/cadastro/user" class="ml-1 default">Cadastrar-se</a>
                </p>
              </v-row>
            </v-form>
          </v-col>
          <v-col class="d-flex justify-center">
            <v-img
              src="@/assets/images/loginUser.png"
              max-width="400px"
              max-height="400px"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import swal from "sweetalert";
import { required, email } from "vuelidate/lib/validators";
import loginUser from "@/services/loginUser.js";

export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    loginForm: {
      email: { required, email },
      password: { required },
    },
  },
  methods: {
    async submitLoginUser() {
      try {
        this.$v.$touch();
        if (this.$v.$invalid) {
          swal({
            title: "Ops!",
            text: "Preencha os campos corretamente!",
            icon: "error",
            button: "Ok",
          });
          return;
        }
        await loginUser.loginUser(this.loginForm);
        this.$router.push("/");
      } catch (err) {
        swal({
          title: "Ops!",
          text: "Email ou senha incorretos!",
          icon: "error",
          button: "Ok",
        });
        throw err;
      }
    },
  },
};
</script>

<style>
.titulo-login {
  color: #050a30;
  font-family: "Lato";
}

.default {
  color: #050a30;
  font-family: "Lato";
  font-size: 1.2rem;
}
</style>
