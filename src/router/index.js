import Vue from 'vue'
import VueRouter from 'vue-router'
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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/comingsoon',
    name: 'ComingSoon',
    component: () => import(/* webpackChunkName: "about" */ '../views/ComingSoon.vue')
  },
  {
    path: '/publications',
    name: 'Publications',
    component: () => import(/* webpackChunkName: "about" */ '../views/Publications.vue')
  },
  {
    path: '/achivements',
    name: 'Achivements',
    component: () => import(/* webpackChunkName: "about" */ '../views/Achivements.vue')
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs.vue')
  },

  //hanya trial
  {
    path: '/trial',
    name: 'trial',
    component: () => import(/* webpackChunkName: "about" */ '../views/trial.vue')
  },
  {
    path: '/trial2',
    name: 'trial2',
    component: () => import(/* webpackChunkName: "about" */ '../views/trial2.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
