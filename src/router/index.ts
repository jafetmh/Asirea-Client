import { createRouter, createWebHistory } from 'vue-router'
import Admin from '@/layout/Admin.vue'
import User from '@/layout/UserLayout.vue'
import Home from '@/views/HomeView.vue'
import DirectorsBoard from '@/views/DirectorsBoard.vue'
import Services from '@/views/Services.vue'
import Announcements from '@/views/Announcements.vue'
import UserProfile from '@/views/Admin/UserProfile.vue'
import Login from '@/views/Admin/Login.vue'
import AdminHome from '@/views/Admin/AdminHome.vue'
import useAuthStore from '@/store/authStore'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/admin',
      name: 'admin',
      meta: { requireAuth: true },
      component: Admin,
      children: [
        {
          path: '/profile/:id',
          name: 'profile',
          props: true,
          meta: { requiresAuth: true },
          component: UserProfile
        },
        {
          path: '/sing-up',
          name: 'sing-up',
          meta: { requiresAuth: true },
          component: UserProfile
        },
        {
          path: '/init',
          name: 'init',
          meta: { requiresAuth: true },
          component: AdminHome
        }

      ]
    },
    {
      path: '/',
      component: User,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/directorsboard',
          name: 'directorsboard',
          component: DirectorsBoard
        },
        {
          path: '/services',
          name: 'services',
          component: Services
        },
        {
          path: '/announcements',
          name: 'announcements',
          component: Announcements
        },
      ]
    }
  ],
})

router.beforeEach(async (to, formToJSON, next) => {
  const auth = useAuthStore();
  if(to.meta.requiresAuth && !auth.isAuthenticated){
    next('/login');
  }else{
    next();
  } 
})

export default router
