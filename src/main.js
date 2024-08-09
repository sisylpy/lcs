import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'font-awesome/css/font-awesome.min.css'
import '../myless/main.less'

Vue.config.productionTip = false
Vue.prototype.$ = $

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
