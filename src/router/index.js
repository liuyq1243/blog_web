import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    children: [
      {path: '/', component: ()=>import('../views/blogIndex.vue')},
      {path: '/login', component: ()=>import('../views/login/index.vue')}
    ]
  },
  {
    path: '/404',
    component: ()=>import('@/views/errorPage/404.vue')
  },
  {
    path: '/500',
    name: '500',
    component: ()=>import('../views/errorPage/500.vue')
  },
  {
    path: '/502',
    name: '502',
    component: ()=>import('../views/errorPage/502.vue')
  },
  {
    path: '/*',
    name: 'not_exist',
    component: ()=>import('../views/errorPage/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
