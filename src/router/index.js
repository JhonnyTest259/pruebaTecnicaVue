import Vue from 'vue'
import VueRouter from 'vue-router'

import MoviesView from '../views/MoviesView.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MoviesView
    },
    {
      path: '/celebsAndPhotos',
      name: 'CelebsAndPhotos',
      component: () => import('../views/CelebsAndPhotos.vue')
    },
    {
      path: '/community',
      name: 'Community',
      component: () => import('../views/CommunityView.vue')
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('../views/NewsView.vue')
    },
  ]
})

export default router
