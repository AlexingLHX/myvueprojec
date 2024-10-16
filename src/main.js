import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';//引入element ui
import 'element-ui/lib/theme-chalk/index.css';//引入element ui
import axios from 'axios'
import VueAxios from 'vue-axios'
//VueAxios 与 axios 的位置不能交换 ，否则出现TypeError: Cannot read property 'protocol' of undefined

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAxios , axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
