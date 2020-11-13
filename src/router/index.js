import Vue from 'vue'
import Router from 'vue-router'
import SectionTableau from '@/components/SectionTableau.vue'
import SectionConso from '@/components/SectionConso.vue'
import SectionEmiss from '@/components/SectionEmiss.vue'
import SectionPreca from "@/components/SectionPreca.vue"
import SectionBatiment from "@/components/SectionBatiment.vue"
import SectionMobilite from "@/components/SectionMobilite.vue"
import SectionChaleur from "@/components/SectionChaleur.vue"
import SectionEnr from "@/components/SectionEnr.vue"

Vue.use(Router)
export default new Router({ 
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: SectionTableau,
      },
      {
        path: '/conso',
        name: 'conso',
        component: SectionConso
      },
      {
        path: '/emiss',
        name: 'emiss',
        component: SectionEmiss
      },
      {
        path: '/air',
        name: 'air',
        component: SectionEmiss
      },
      {
        path: '/reno',
        name: 'reno',
        component: SectionBatiment
      },
      {
        path: '/preca',
        name: 'preca',
        component: SectionPreca
      },
      {
        path: '/mobi',
        name: 'mobi',
        component: SectionMobilite
      },
      {
        path: '/chal',
        name: 'chal',
        component: SectionChaleur
      },
      {
        path: '/enr',
        name: 'enr',
        component: SectionEnr
      },
    ]
 })