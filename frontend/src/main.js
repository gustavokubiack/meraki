import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import "../node_modules/nprogress/nprogress.css";

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

// Install the authentication plugin here

Vue.use(Vuelidate);

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
