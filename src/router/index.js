import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Prizes from '../views/Prizes.vue'
import Rules from '../views/Rules.vue'
import Faq from '../views/Faq.vue'
import Winners from '../views/Winners.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/prizes',
        name: 'prizes',
        component: Prizes
    },
    {
      path: '/rules',
      name: 'rules',
      component: Rules
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/winners',
      name: 'winners',
      component: Winners
    },
]

const router = new VueRouter({
    routes
})

export default router