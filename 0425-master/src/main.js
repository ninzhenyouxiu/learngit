import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
//等效于node中的const axios=require("axios")

Vue.config.productionTip = false
//让axios
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;
// axios.defaults.url = 'http://localhost:3000'
//xxx.vue中：this.axios.get(...)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
