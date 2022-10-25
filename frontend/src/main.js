import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import "../node_modules/nprogress/nprogress.css";
import "./plugins/axios"


Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
