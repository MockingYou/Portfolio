import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./pages/AboutPage.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./pages/ProjectPage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./pages/ContactPage.vue')
    }
  ]
})

export default router
