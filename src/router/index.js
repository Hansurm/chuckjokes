import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from '@/views/Category.vue'
import Landing from '@/views/Landing.vue'
import Favourites from '@/views/Favourites.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Landing', component: Landing },
  { path: '/favourites', name: 'Favourites', component: Favourites },
  { path: '/category/:catVal', name: 'Category', props: true, component: Category}
]

const router = new VueRouter({
  routes
})

export default router
