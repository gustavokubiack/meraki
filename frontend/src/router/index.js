import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default'),
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path:'/quiz',
        name: 'Quiz',
        component: ()=>import('../views/Quiz.vue')
      },
      {
      path:'/noticias',
      name: 'Notícias',
      component: ()=>import('../views/Noticias.vue')
    },
    {
      path:'/FAQ',
      name: 'FAQ',
      component: ()=>import('../views/FAQ.vue')
    },
    {
      path:'/quemsomos',
      name: 'quemsomos',
      component: ()=>import('../views/quemSomos.vue')
    },
 

    {
      path:'/causas',
      name: 'Causas',
      component: ()=>import('../views/Causas.vue')
    },
    {
      path:'/contato',
      name: 'Contato',
      component: ()=>import('../views/Contato.vue')
    },
    {
      path:'/doacao',
      name: 'Doação',
      component: ()=>import('../views/Doação.vue')
    },
    {
      path:'/causa-animais',
      name: 'CausaAnimais',
      component: ()=>import('../views/CausaAnimais.vue')
    },
    {
      path:'/causa-criancas',
      name: 'CausaCriança',
      component: ()=>import('../views/CausaCrianca.vue')
    },
    {
      path:'/causa-diversidade',
      name: 'CausaDiversidade',
      component: ()=>import('../views/CausaDiversidade.vue')
    },
    {
      path:'/causa-educacao',
      name: 'CausaEducação',
      component: ()=>import('../views/CausaEducacao.vue')
    },
    {
      path:'/causa-idosos',
      name: 'CausaIdosos',
      component: ()=>import('../views/CausaIdosos.vue')
    },
    {
      path:'/causa-meioambiente',
      name: 'CausaMeioAmbiente',
      component: ()=>import('../views/CausaMeioAmbiente.vue')
    },
    {
      path:'/perfil',
      name: 'Perfil',
      component: ()=>import('../views/Perfil.vue')
    },
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/Blank'),
    children: [
      
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router