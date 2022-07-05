<template>
  <v-container class="pa-8">
      <h1 class="titulo-admin">Painel de controle</h1>
  <v-row justify="right" class="pa-8">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#f8f7f2"
          v-bind="attrs"
          v-on="on"
          fab
          
        >
        <v-icon dark>mdi-plus</v-icon>
          
        </v-btn>
      </template>
      <v-card>
        
        <v-card-title>
          <span class="text-h5 ">Adicionar Causa</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Título"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Descrição"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']"
                  label="Estado"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                cols="12"
                sm="6"
                md="4"
                  label="Cidade"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Bairro"
                  required
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  label="Rua"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                cols="12"
                sm="6"
                md="4"
                  label="Número"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Animais', 'Crianças', 'Diversidade', 'Educação', 'Idosos', 'Meio Ambiente']"
                  label="Tipo da Causa"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
         color="#050a30"
            text
            @click="dialog = false"
          >
            Fechar
          </v-btn>
          <v-btn
          color="#050a30"
            text
            @click="dialog = false"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>

<style>
.titulo-admin{
  font-family: 'Prata', serif;
  font-size: 40px;
  color: #f8f7f2;
  text-align: center;
}

</style>