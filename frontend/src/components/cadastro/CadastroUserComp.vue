<template>
  <v-app style="background: #050a30">
    <v-container class="pa-8">
      <div>
        <v-card>
          <v-row>
            <v-col>
              <v-form
                v-on:submit.prevent="registerSubmitUserForm()"
                class="pa-2"
              >
                <h1 class="titulo-user-cadastro d-flex justify-center pa-5">
                  Dados Cadastrais
                </h1>
                <h2 class="default ml-5 justify-start">Nome</h2>
                <v-text-field
                  v-model="registerForm.name"
                  :rules="rules"
                  class="pa-2"
                  placeholder="Digite seu nome completo"
                  outlined
                  dense
                  rounded
                  color="#050a30"
                >
                </v-text-field>

                <h2 class="default ml-5 justify-start">E-mail</h2>
                <v-text-field
                  v-model="registerForm.email"
                  :rules="rules"
                  class="pa-2"
                  placeholder="Digite seu e-mail"
                  outlined
                  dense
                  rounded
                  color="#050a30"
                  @blur="$v.registerForm.email.$touch()"
                >
                </v-text-field>

                <h2 class="default ml-5 justify-start">Senha</h2>
                <v-text-field
                  type="password"
                  v-model="registerForm.password"
                  :rules="rules"
                  class="pa-2"
                  placeholder="Digite sua senha"
                  outlined
                  dense
                  rounded
                  color="#050a30"
                  @blur="$v.registerForm.password.$touch()"
                >
                </v-text-field>

                <h2 class="default ml-5 justify-start">Data de Nascimento</h2>
                <v-text-field
                  v-model="registerForm.birthDate"
                  :rules="rules"
                  class="shrink pa-2"
                  placeholder="Digite sua data de nascimento"
                  outlined
                  dense
                  rounded
                  color="#050a30"
                >
                </v-text-field>

                <div class="pa-2">
                  <v-btn dense dark color="#050a30" @click="submitRegisterUser"
                    >Cadastrar</v-btn
                  >
                </div>
              </v-form>
            </v-col>
            <v-col>
              <div class="d-flex justify-center">
                <v-img
                  src="@/assets/images/registerUserImage.png"
                  max-heitgh="600px"
                  max-width="600px"
                ></v-img>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import swal from "sweetalert";
import registerUser from "@/services/registerUser";
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      rules: [(v) => !!v || "Campo obrigatório"],

      registerForm: {
        name: "",
        email: "",
        password: "",
        birthDate: "",
      },
    };
  },
  validations: {
    registerForm: {
      name: { required },
      email: { required, email },
      password: { required },
      birthDate: { required },
    },
  },
  methods: {
    registerSubmitUserForm() {},
    async submitRegisterUser() {
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
        await registerUser.registerNewUser(this.registerForm);
        this.$router.push("/login/user");
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
.titulo-user-cadastro {
  font-family: Lato;
  color: #050a30;
  font-size: 25px;
}
.default {
  color: #050a30;
  font-family: "Lato";
  font-size: 1.2rem;
}
</style>
