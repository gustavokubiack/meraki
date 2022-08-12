<template>
  <v-app v-app style="background: #050a30">
    <v-container class="pa-12">
      <v-card shaped class="pa-12">
        <v-form>
          <h2 class="titulo d-flex justify-center">Cadastro Institucional</h2>
          <v-row>
            <v-col>
              <h2 class="titulo d-flex justify-center mt-5">Login e Contato</h2>
              <v-row class="mt-5">
                <h3 class="default">Nome da Instituição</h3>
              </v-row>
              <v-row>
                <v-text-field
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
          </v-row>
        </v-form>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {};
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
