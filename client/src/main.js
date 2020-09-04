import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 引入全局组件
import noData from './components/common/no-data'
Vue.component('no-data', noData)

// 引入配置文件
import $conf from './common/config'
Vue.prototype.$conf = $conf
// 引入助手函数库
import $util from './common/js/util'
Vue.prototype.$util = $util

App.mpType = 'app'

const app = new Vue({
  ...App,
})
app.$mount()
