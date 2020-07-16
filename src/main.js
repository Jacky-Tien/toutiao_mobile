import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant' // 导入Vant组件库
import 'vant/lib/index.css' // Vant组件库样式

import 'amfe-flexible'

import '@/styles/index.less' // 导入全局样式表

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
