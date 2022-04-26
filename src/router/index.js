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
      path:'/perfil',
      name: 'Perfil',
      component: ()=>import('../views/Perfil.vue')
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
      path:'/quiz',
      name: 'Quiz',
      component: ()=>import('../views/Quiz.vue')
    },
    {
      path:'/quiz',
      name: 'Quiz',
      component: ()=>import('../views/Quiz.vue')
    },
    {
      path:'/quiz',
      name: 'Quiz',
      component: ()=>import('../views/Quiz.vue')
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