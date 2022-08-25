import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: () => import('@/views/home.vue')
}]

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes
})

export default router
