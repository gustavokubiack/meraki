<template>
  <v-app style="background: #050a30">
    <v-container class="pa-8">
      <div>
        <v-card>
          <v-row>
            <v-col>
              <v-form class="pa-2">
                <h1 class="titulo-user-cadastro d-flex justify-center pa-5">
                  Dados Cadastrais
                </h1>
                <h2 class="default ml-5 justify-start mt-5">Nome</h2>
                <v-text-field
                  :rules="rules"
                  class="pa-2"
                  placeholder="Digite seu nome completo"
                  outlined
                  dense
                  rounded
                  color="#050a30"
                >
                </v-text-field>

                <h2 class="default ml-5 justify-start mt-5">E-mail</h2>
                <v-text-field
                  :rules="rules"
                  class="pa-2"
                  placeholder="Digite seu e-mail"
                  outlined
                  dense
                  rounded
                  color="#050a30"
                >
                </v-text-field>

                <h2 class="default ml-5 justify-start mt-5">Senha</h2>
                <v-text-field
                  :rules="rules"
                  class="pa-2"
                  placeholder="Digite sua senha"
                  outlined
                  dense
                  rounded
                  color="#050a30"
                >
                </v-text-field>

                <h2 class="default ml-5 justify-start mt-5">
                  Data de Nascimento
                </h2>
                <v-text-field
                  :rules="rules"
                  class="shrink pa-2"
                  placeholder=" / /"
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
export default {};
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
