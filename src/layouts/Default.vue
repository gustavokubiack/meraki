<template>
  <v-app>
    <v-app-bar app color="#F8F7F2" dark height="100" >
          
 <v-btn icon min-width="250px" link to="/">
      <v-img
        src="@/assets/imagens/logo1.png"
        max-height="90  px"
        max-width="250px"
      >
      </v-img>
      </v-btn>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon color="#050a30" large @click.stop="sidebar = !sidebar"></v-app-bar-nav-icon>

    </v-app-bar>
    <v-navigation-drawer color="#f8f8f2" right app v-model="sidebar" :mini-variant.sync="mini">
      <v-list dense color="#F8F7F2" dark height="100">
        <v-list-item>
          <v-list-item-action>
            <v-icon color="#050a30" @click.stop="sidebar = !sidebar">mdi-chevron-right</v-icon>
          </v-list-item-action>
          <v-list-item-title>
            <h3 class="conta" >Minha Conta</h3>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list-item class="px=2"  @click="mini = !mini">
        <v-list-item-avatar>
          <v-icon  standard>mdi-account</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>Usuário</v-list-item-content>
        <v-btn icon small><v-icon>mdi-chevron-right</v-icon></v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="item of items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
          </v-navigation-drawer>
    <v-main class="fundo">
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sidebar: true,
      mini: false,
      items: [
        { title: "Home", icon: "mdi-home", to: "/" },
        { title: "Notícias", icon: "mdi-newspaper-variant-multiple-outline", to: "/noticias" },
        { title: "Quem somos", icon: "mdi-account-group", to: "/quemsomos" },
        { title: "Contato", icon: "mdi-contacts", to: "/contato" },
        { title: "Causas", icon: "mdi-book-open-page-variant", to: "/causas" },
        { title: "Doação", icon: "mdi-currency-usd", to: "/doacao" },
        { title: "FAQ", icon: "mdi-help-circle", to: "/faq" },
      ],
    };
  },
};
</script>

<style>
.logo{
  margin-top: 5px;
  margin-left: 40%;
}
.fundo{
    background-color:#050a30 ;
}
.conta{
  padding: auto 9px;
  color: #050a30;
}
.v-list-item__content {
  color: #050a30;
}
.v-list-item__icon {
  color: #050a30;
}
</style>