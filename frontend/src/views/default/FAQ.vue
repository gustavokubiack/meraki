<template>
<v-container class="pa-8">
  <h1 class="titulo-faq">Perguntas Frequentes</h1>

  <p class="texto-faq mt-4">Ficou um alguma dúvida relacionada ao Meraki? Essa página contém as perguntas mais recorrentes que recebemos sobre a plataforma. Caso sua dúvida não esteja repondida aqui, sinta-se a vontade para nos contactar via e-mail ou redes sociais.</p>

  <v-card class="flex-column mt-8"  v-for="(question, i) in questions" :key="i" >
    <v-card-actions >
      <v-btn icon @click="question.show = ! question.show">
        <v-icon>{{question.show  ? "mdi-chevron-up" : "mdi-magnify"  }}</v-icon>
      </v-btn>
      <v-card-title>
        <h2 class="titulo-perguntas">
          {{question.title}}
        </h2>
      </v-card-title>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="question.show">
        <v-divider></v-divider>
        <v-card-text class="texto-respostas">
          {{question.answer}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    questions: [
      {title: 'Quem pode se voluntariar em alguma causa?', 
      answer: 'Qualquer pessoa maior de 18 anos que esteja disposta a realizar o que foi pedido pela instituição.', 
      show: false},

      {title: 'Qual a documentação necessária para me voluntariar?', 
      answer: 'É necessário estar cadastrado no site, logo, será preciso do CPF para realizar o voluntariado. Quaisquer outros documentos necessários serão posteriormente requisitados pela instituição escolhida.', 
      show: false},

      {title: 'As ONGs e Instituições Sociais disponíveis para trabalho voluntário são confiáveis?',
      answer: 'Pode ter certeza que sim! O Meraki tem como base a segurança de nossos colaboradores e futuros voluntários. Todas as instituições disponíveis foram passadas por um longo processo seletivo até serem escolhidas para participar de nosso projeto.', 
      show: false},
      
      {title:'Tenho uma Instituição e preciso de voluntários, posso usar o site como meio de consegui-los?', 
      answer: 'Pode sim! Como dito anteriormente, todos os órgãos que fazem parte do Meraki passam por um processo seletivo até serem escolhidos. Caso tenha interesse em colaborar conosco, é só nos contatar pelo e-mail merakivvoluntariado@gmail.com ou pelo nosso telefone, 0800-1234.', 
      show: false},

      {title: 'Preciso desembolsar algum valor para poder me voluntariar?', 
      answer: 'Não! Quaisquer possíveis gastos que possam vir a ocorrer durante o voluntariado serão pagos pela instituição de sua escolha.', 
      show: false},
      
      {title: 'Posso me voluntariar em mais de uma causa ao mesmo tempo?', 
      answer: 'Apesar da ajuda sempre ser bem-vinda, cada voluntário pode escolher apenas uma causa por vez para contribuir. Após completar sua missão de voluntariado, sinta-se livre para escolher outra causa e contribuir ainda mais com o mundo em que vivemos!', 
      show: false}
    ]
  }),
};
</script>

<style>
.titulo-faq {
  font-family: "Prata", serif;
  font-size: 40px;
  color: #f8f7f2;
  text-align: center;
}
.texto-faq {
  font-family: "Lato", sans-serif;
  font-size: 25px;
  color: #f8f7f2;
  text-align: justify;
}
.titulo-perguntas {
  font-family: "Lato", serif;
  color: #050a30;
  font-size: 20px;
  font-weight: bold;
}
.texto-respostas {
  color: #050a30;
  font-size: 18px;
  font-family: "Lato", serif;
}
.faq {
  text-align: justify;
}
</style>
