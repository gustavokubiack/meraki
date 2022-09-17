<template>
  <v-app>
    <v-app-bar app color="#F8F7F2" dark height="100">
      <v-btn icon min-width="250px" link to="/">
        <v-img
          src="@/assets/images/logo.png"
          max-height="90px"
          max-width="250px"
        >
        </v-img>
      </v-btn>

      <v-spacer></v-spacer>

      <!-- botão área restrita - adicionar causa -->

      <v-btn
        to="/adicionar-causa"
        icon
        elevation="4"
        color="#f8f7f2"
        depressed
        fab
        small
        v-show="authOng()"
      >
        <v-icon color="#050a30">mdi-plus</v-icon>
      </v-btn>

      <v-app-bar-nav-icon
        color="#050a30"
        large
        @click.stop="sidebar = !sidebar"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      color="#f8f7f2"
      right
      app
      v-model="sidebar"
      :mini-variant.sync="mini"
    >
      <v-list dense color="#F8F7F2" dark height="100">
        <v-list-item class="btn-layout">
          <v-list-item-action>
            <v-icon color="#050a30" large @click.stop="sidebar = !sidebar"
              >mdi-chevron-double-right</v-icon
            >
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-list color="#f8f7f2">
        <v-list-item v-for="item of items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>

        <div v-show="authOng()" @click="logoutOng()">
          <v-list-item link to="/login-ong">
            <v-list-item-icon><v-icon>mdi-logout</v-icon></v-list-item-icon>
            <v-list-item-content>Sair</v-list-item-content>
          </v-list-item>
        </div>
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
      isAuthenticated: false,
      sidebar: true,
      mini: false,
      items: [
        { title: "Home", icon: "mdi-home", to: "/" },
        { title: "Login", icon: "mdi-home-plus", to: "/tela-cadastro" },
        { title: "Quem somos", icon: "mdi-account-group", to: "/quemsomos" },
        { title: "Contato", icon: "mdi-at", to: "/contato" },
        { title: "Causas", icon: "mdi-book-open-page-variant", to: "/causas" },
        { title: "FAQ", icon: "mdi-help-circle", to: "/faq" },
      ],
    };
  },
  methods: {
    logoutOng() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
    authOng() {
      if (localStorage.getItem("jwt")) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
      return this.isAuthenticated;
    },
  },
};
</script>

<style>
.logo {
  margin-top: 5px;
  margin-left: 40%;
}
.fundo {
  background-color: #050a30;
}
.conta {
  padding: auto 9px;
  color: #050a30;
}
.v-list-item__content {
  color: #050a30;
}
.v-list-item__icon {
  color: #050a30;
}

.btn-layout {
  padding-top: 13px;
}
</style>
