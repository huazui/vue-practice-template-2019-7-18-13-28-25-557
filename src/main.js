import store from './vuex/store'
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip=false;
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
