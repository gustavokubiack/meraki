import Vue from "vue";
import VueRouter from "vue-router";
import loginOng from "../services/loginOng";
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
        path: "/post/:id",
        name: "post",
        component: () => import("../views/default/Post.vue"),
      },

      // Rotas que precisam de autenticação - ONG
      {
        path: "/adicionar-causa",
        name: "adicionarcausa",
        component: () => import("../views/admin/AdicionarCausa.vue"),
        meta: {
          requiresAuthOng: true,
        },
      },
      {
        path: "/admin",
        name: "PainelDeControle",
        component: () => import("../views/admin/PainelDeControle.vue"),
        meta: {
          requiresAuthOng: true,
        },
      },

      // Rotas que precisam de autenticação - Usuário

      {
        path: "/perfil/user",
        name: "PerfilUser",
        component: () => import("../views/default/PerfilUsuario.vue"),
        meta: {
          requiresAuthUser: true,
        },
      },
    ],
  },

  // Rotas de login e cadastro
  {
    path: "/",
    component: () => import("@/layouts/Blank"),
    children: [
      {
        path: "/login/ong",
        name: "LoginOng",
        component: () => import("@/views/admin/LoginOng.vue"),
      },

      {
        path: "/cadastro/ong",
        name: "CadastroOng",
        component: () => import("@/views/admin/CadastroOng.vue"),
      },

      {
        path: "/login/user",
        name: "LoginOng",
        component: () => import("@/views/default/LoginUser.vue"),
      },

      {
        path: "/cadastro/user",
        name: "CadastroOng",
        component: () => import("@/views/default/CadastroUser.vue"),
      },
    ],
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Função que bloqueia o acesso a rotas que precisam de autenticação - ONG
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuthOng)) {
    if (loginOng.token == null) {
      next({
        path: "/login/ong",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
// Função que bloqueia o acesso a rotas que precisam de autenticação - Usuário

// ==> Animação - Barra de progresso
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
