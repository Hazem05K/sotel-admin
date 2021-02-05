import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Tableau de bord',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
          },
        // users list
        {
          name: 'Utilisateurs',
          path: 'users',
          component: () => import('@/views/dashboard/component/Users'),
        },
        // event list
        {
          name: 'Evenments',
          path: 'events',
          component: () => import('@/views/dashboard/component/Events'),
        },

      ],
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import('@/views/dashboard/pages/Login'),
    },
  ],
})
