// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import common from "./components/common/common"
import iView from 'iview'
import 'iview/dist/styles/iview.css' 

Vue.use(iView)
Vue.prototype.common=common

Vue.config.productionTip = false
/*公共方法*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
