// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { PROGRESS_CONF } from './config'
import VueProgressBar from 'vue-progressbar'
import fly from 'flyio'

Vue.prototype.$http = fly
Vue.use(VueProgressBar, PROGRESS_CONF)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
