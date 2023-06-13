import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImageView from '../views/ImageView.vue'
import CardView from '../views/CardView.vue'
import YoutubeView from '../views/YoutubeView.vue'
import UnsplashView from '../views/UnsplashView.vue'
import MovieView from '../views/MovieView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/image',
    name: 'image',
    component: ImageView
  }, {
    path: '/card',
    name: 'card',
    component: CardView
  }, {
    path: '/youtube',
    name: 'youtube',
    component: YoutubeView
  }, {
    path: '/unsplash',
    name: 'unsplash',
    component: UnsplashView
  }, {
    path: '/movie',
    name: 'movie',
    component: MovieView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
