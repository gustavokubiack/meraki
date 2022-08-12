<template>
  <v-app v-app style="background: #050a30">
    <v-container class="pa-12">
      <v-card shaped class="pa-8">
        <v-form v-on:submit.prevent="RegisterNewOng()">
          <h1 class="titulo d-flex justify-center">Cadastro Institucional</h1>
          <v-row>
            <v-col>
              <h2 class="titulo d-flex justify-center mt-5">Login e Contato</h2>
              <v-row class="mt-5">
                <h3 class="default">Nome da Instituição</h3>
              </v-row>
              <v-row>
                <v-text-field
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
              <v-row class="d-flex justify-end ml-5">
                <v-btn dense dark color="#050a30" link to="/login-ong"
                  >Criar Conta</v-btn
                >
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
    };
  },
};
</script>

<style>
.default {
  color: #050a30;
  font-family: "Lato";
  font-size: 1.2rem;
  margin-left: 15px;
}
.titulo {
  color: #050a30;
  font-family: "Lato";
}
</style>
