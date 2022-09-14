import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PublicarVagaView from '../views/PublicarVagaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
    
  },
  {
    path: "/publicar-vaga",
    name: "publicar-vaga",
    component: PublicarVagaView
  }

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
