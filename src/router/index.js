import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import Main from '../views/Main.vue'
import Prizes from '../views/Prizes.vue'
import Stats from '../views/dba3b523660d42d18441c0161e8431a8.vue'
import Faq from '../views/Faq.vue'
import Winners from '../views/Winners.vue'
import Secure from '../components/Secure.vue'
import checkMail from '../components/checkMail.vue'

Vue.use(VueRouter)

const routes = [{
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
        path: '/dba3b523660d42d18441c0161e8431a8',
        name: 'dba3b523660d42d18441c0161e8431a8',
        component: Stats
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
    {
        path: '/checkMail',
        name: 'checkMail',
        component: checkMail
    },
    {
        path: '/secure',
        name: 'secure',
        component: Secure,
        meta: {
            requiresAuth: true
        }
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/') 
  } else {
    next() 
  }
})

export default router