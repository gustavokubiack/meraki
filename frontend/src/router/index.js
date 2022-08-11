import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Default"),
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },

      {
        path: "/cadastro-ong",
        name: "CadastroOng",
        component: () => import("../views/CadastroOng.vue"),
      },
      {
        path: "/tela-cadastro",
        name: "TelaCadastro",
        component: () => import("../views/TelaCadastro.vue"),
      },
      {
        path: "/FAQ",
        name: "FAQ",
        component: () => import("../views/FAQ.vue"),
      },
      {
        path: "/quemsomos",
        name: "quemsomos",
        component: () => import("../views/QuemSomos.vue"),
      },

      {
        path: "/causas",
        name: "Causas",
        component: () => import("../views/Causas.vue"),
      },
      {
        path: "/contato",
        name: "Contato",
        component: () => import("../views/Contato.vue"),
      },
      {
        path: "/doacao",
        name: "Doação",
        component: () => import("../views/Doação.vue"),
      },
      {
        path: "/causas/animais",
        name: "CausaAnimais",
        component: () => import("../views/CausaAnimais.vue"),
      },
      {
        path: "/causas/criancas",
        name: "CausaCriança",
        component: () => import("../views/CausaCrianca.vue"),
      },
      {
        path: "/causas/diversidade",
        name: "CausaDiversidade",
        component: () => import("../views/CausaDiversidade.vue"),
      },
      {
        path: "/causas/educacao",
        name: "CausaEducação",
        component: () => import("../views/CausaEducacao.vue"),
      },
      {
        path: "/causas/idosos",
        name: "CausaIdosos",
        component: () => import("../views/CausaIdosos.vue"),
      },
      {
        path: "/causas/meio-ambiente",
        name: "CausaMeioAmbiente",
        component: () => import("../views/CausaMeioAmbiente.vue"),
      },
      {
        path: "/perfil",
        name: "Perfil",
        component: () => import("../views/Perfil.vue"),
      },
      {
        path: "/adicionar-causa",
        name: "adicionarcausa",
        component: () => import("../views/AdicionarCausa.vue"),
      },
      {
        path: "/post/:id",
        name: "post",
        component: () => import("../views/Post.vue"),
      },
      {
        path: "/painel-de-controle",
        name: "PainelDeControle",
        component: () => import("../views/PainelDeControle.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/Blank"),
    children: [],
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
