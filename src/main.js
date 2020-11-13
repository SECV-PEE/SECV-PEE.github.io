import Vue from 'vue'
import App from './App.vue'
import VS2 from 'vue-script2'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VS2)
Vue.use(require('vue-script2'))
Vue.use(BootstrapVue)
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './TDB_DRIEE_CSS.css';

new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')