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
      path:'/login',
      name: 'Login',
      component: ()=>import('../views/Login.vue')
    },
    {
      path:'/FAQ',
      name: 'FAQ',
      component: ()=>import('../views/FAQ.vue')
    },
    {
      path:'/quemsomos',
      name: 'quemsomos',
      component: ()=>import('../views/QuemSomos.vue')
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
      path:'/causaAnimais',
      name: 'CausaAnimais',
      component: ()=>import('../views/CausaAnimais.vue')
    },
    {
      path:'/causacriancas',
      name: 'CausaCriança',
      component: ()=>import('../views/CausaCrianca.vue')
    },
    {
      path:'/causaDiversidade',
      name: 'CausaDiversidade',
      component: ()=>import('../views/CausaDiversidade.vue')
    },
    {
      path:'/causaEducacao',
      name: 'CausaEducação',
      component: ()=>import('../views/CausaEducacao.vue')
    },
    {
      path:'/causaIdosos',
      name: 'CausaIdosos',
      component: ()=>import('../views/CausaIdosos.vue')
    },
    {
      path:'/causaMeioAmbiente',
      name: 'CausaMeioAmbiente',
      component: ()=>import('../views/CausaMeioAmbiente.vue')
    },
    {
      path:'/perfil',
      name: 'Perfil',
      component: ()=>import('../views/Perfil.vue')
    },
    {
      path:'/admin',
      name: 'admin',
      component: ()=>import('../views/Admin.vue')
    },
    {
      path:'/post/:id',
      name: 'post',
      component: ()=>import('../views/Post.vue')
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