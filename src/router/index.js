import Vue from 'vue'
import VueRouter from 'vue-router'
import authGuard from '@/router/auth-guard'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () => import('../views/Guide.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import('../views/ResetPassword.vue')
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import('../views/Success.vue')
  },
  {
    path: '/subscriptions',
    name: 'Subscriptions',
    component: () => import('../views/Subscriptions.vue')
  },
  {
    path: '/add-subscription',
    name: 'AddSubscription',
    component: () => import('../views/AddSubscription.vue')
  },
  {
    path: '/subscription/:subId',
    name: 'SubscriptionInfo',
    component: () => import('../views/SubscriptionInfo.vue')
  },
  {
    path: '/edit-subscription/:subId',
    name: 'EditSubscription',
    component: () => import('../views/EditSubscription.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/edit-profile',
    name: 'EditProfile',
    component: () => import('../views/EditProfile.vue')
  },
  {
    path: '/coming-soon',
    name: 'ComingSoon',
    component: () => import('../views/ComingSoon.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(authGuard)

export default router
