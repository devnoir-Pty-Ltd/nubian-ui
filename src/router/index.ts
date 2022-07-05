import { createRouter, createWebHistory, Router } from 'vue-router'
import AppLayout from '../layout/AppLayout.vue'
import DefaultLayout from '../layout/DefaultLayout.vue'
import LandingPage from '../pages/LandingPage.vue'
import Dashboard from '../pages/Dashboard.vue'
import NotFound from '../pages/NotFound.vue'

const router: Router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '',
      component: DefaultLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: LandingPage
        }
      ]
    },
    {
      path: '',
      component: AppLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        }
      ]
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
  ]
})
export default router
