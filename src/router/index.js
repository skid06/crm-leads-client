import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user-guest',
      component: () => import('@/views/pages/Index'),
      children: [
        {
          name: 'UserLogin',
          path: '',
          component: () => import('@/views/pages/Login'),
          meta: {
            requiresGuest: true,
          },
        },
        {
          path: 'register',
          name: 'Register',
          component: () => import('@/views/pages/Register'),
          meta: {
            requiresGuest: true,
          },
        },
      ],
    },
    {
      path: '/user',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          path: 'dashboard',
          name: 'UserDashboard',
          component: () => import('@/views/user/Dashboard'),
          meta: {
            requiresUserAuth: true,
          },
        },
        {
          path: 'approval-waiting',
          name: 'UserApprovalWaiting',
          component: () => import('@/views/pages/Lock'),
          meta: {
            requiresUserAuth: true,
          },
        },
      ],
    },
    {
      path: '/admin',
      component: () => import('@/views/dashboard/Index'),
      meta: {
        requiresAdminAuth: true,
      },
      children: [
        // Dashboard
        {
          path: '',
          name: 'AdminDashboard',
          component: () => import('@/views/admin/Dashboard'),
        },
      ],
    },
    {
      path: '/admin-login',
      component: () => import('@/views/pages/Index'),
      children: [
        {
          name: 'AdminLogin',
          path: '',
          component: () => import('@/views/admin/Login'),
          meta: {
            requiresGuestAdmin: true,
          },
        },
      ],
    },
  ],
})
