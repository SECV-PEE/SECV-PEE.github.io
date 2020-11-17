import Vue from 'vue'
import App from './App.vue'
import VS2 from 'vue-script2'
import router from './router'

Vue.use(VS2)
Vue.use(require('vue-script2'))
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')