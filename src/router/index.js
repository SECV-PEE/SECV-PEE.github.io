import Vue from 'vue'
import Router from 'vue-router'
import SectionHome from '@/components/SectionHome.vue'
import SectionTableau from '@/components/SectionTableau.vue'

Vue.use(Router)
export default new Router({ 
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: SectionHome,
      },
      {
        path: '/tableau-de-bord',
        name: 'tdb',
        component: SectionTableau
      }
    ]
 })