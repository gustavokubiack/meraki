import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/default/Home.vue";
import NProgress from "nprogress";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Default"),
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },

      {
        path: "/tela-cadastro",
        name: "TelaCadastro",
        component: () => import("../views/default/TelaCadastro.vue"),
      },
      {
        path: "/FAQ",
        name: "FAQ",
        component: () => import("../views/default/FAQ.vue"),
      },
      {
        path: "/quemsomos",
        name: "quemsomos",
        component: () => import("../views/default/QuemSomos.vue"),
      },

      {
        path: "/causas",
        name: "Causas",
        component: () => import("../views/default/Causas.vue"),
      },
      {
        path: "/contato",
        name: "Contato",
        component: () => import("../views/default/Contato.vue"),
      },
      {
        path: "/causas/animais",
        name: "CausaAnimais",
        component: () => import("../views/default/CausaAnimais.vue"),
      },
      {
        path: "/causas/criancas",
        name: "CausaCriança",
        component: () => import("../views/default/CausaCrianca.vue"),
      },
      {
        path: "/causas/diversidade",
        name: "CausaDiversidade",
        component: () => import("../views/default/CausaDiversidade.vue"),
      },
      {
        path: "/causas/educacao",
        name: "CausaEducação",
        component: () => import("../views/default/CausaEducacao.vue"),
      },
      {
        path: "/causas/idosos",
        name: "CausaIdosos",
        component: () => import("../views/default/CausaIdosos.vue"),
      },
      {
        path: "/causas/meio-ambiente",
        name: "CausaMeioAmbiente",
        component: () => import("../views/default/CausaMeioAmbiente.vue"),
      },

      {
        path: "/adicionar-causa",
        name: "adicionarcausa",
        component: () => import("../views/admin/AdicionarCausa.vue"),
      },
      {
        path: "/post/:id",
        name: "post",
        component: () => import("../views/default/Post.vue"),
      },
      {
        path: "/painel-de-controle",
        name: "PainelDeControle",
        component: () => import("../views/admin/PainelDeControle.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/Blank"),
    children: [],
  },

  {
    path: "/login/ong",
    name: "LoginOng",
    component: () => import("@/components/login/LoginOngComp.vue"),
  },
  {
    path: "/cadastro/ong",
    name: "CadastroOng",
    component: () => import("@/components/cadastro/CadastroOngComp.vue"),
  },

  {
    path: "/login/user",
    name: "LoginOng",
    component: () => import("@/components/login/LoginOngComp.vue"),
  },
  {
    path: "/cadastro/user",
    name: "CadastroOng",
    component: () => import("@/components/cadastro/CadastroOngComp.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// ==> NProgress
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});
export default router;
