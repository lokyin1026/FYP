import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/MapView.vue')
  },
  {
    path: '/intro',
    name: 'intro',
    component: () => import('../views/IntroView.vue')
  },
  {
    path: '/stat',
    name: 'stat',
    component: () => import('../views/StatView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
