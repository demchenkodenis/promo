import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import VModal from 'vue-js-modal'
import VueCountdownTimer from 'vuejs-countdown-timer'

Vue.use(VModal, VueCountdownTimer)

Vue.prototype.$http = Axios;

const token = localStorage.getItem('t')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false

let app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

global.vm = app