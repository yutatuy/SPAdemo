import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import inView from 'in-view'
import router from '@/router.js'
global.jquery = $
global.$ = $
global.inView = inView
require('@/assets/scss/app.scss');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
