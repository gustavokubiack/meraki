<template>
  <v-container class="pa-8">
      <p class="texto-contato">
        Um dos maiores princípios do Meraki Voluntariado é atender a todos que
        precisam, o mais rápido possível. Dessa maneira, possuímos os mais
        diversos meios de comunicação e redes sociais, os quais podem ser
        utilizadas tanto pelos que desejam se voluntariar por algum projeto,
        quanto por ONGs e Instituições que querem ter um contato direto com a
        equipe. Além disso, por meio de nossas redes sociais, todos podem
        acompanhar o andar das causas que temos disponíveis e ter acesso a
        diversas imagens e depoimentos de quem já se voluntariou com o Meraki.
        Seja você o nosso próximo voluntário!
      </p>
      <v-list color="#f8f7f2" class="teste">
      <v-list-item v-for="item of items" :key="item.title" link :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>{{ item.title }}</v-list-item-content>
      </v-list-item>
      </v-list>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: "mdi-email-edit-outline",
        title: "ajudemeraki@gmail.com",
      },
      { icon: "mdi-phone-classic", 
        title: "(47) 0000-0000" },
      {
        icon: "mdi-facebook",
        title: "Meraki Voluntariado",
        to: "https://m.facebook.com/merakivoluntariadoo/",
      },
      {
        icon: "mdi-instagram",
        title: "@merakivoluntariado",
        to: "https://www.instagram.com/merakivoluntariado/",
      },
    ],
  }),
};
</script>

<style>
.titulo-contato {
  text-align: center;
  font-family: "Prata", serif;
  font-size: 40px;
  color: #f8f7f2;
}
.texto-contato {
  color: #f8f7f2;
  font-family: "Lato", serif;
  font-size: 30px;
  text-align: justify;
  padding-top: 50px;

}
.teste{
  color: #f8f7f2;
  
}

</style>