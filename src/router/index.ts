import { createRouter, createWebHistory } from 'vue-router'
import Admin from '@/layout/Admin.vue'
import User from '@/layout/User.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: '/',
      name: 'home',
      component: User
    }
  ],
})

export default router
