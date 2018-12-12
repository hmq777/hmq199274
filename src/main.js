// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import config from '@/config'
import 'assets/common.scss'

import { Field, DatetimePicker, Button } from 'mint-ui'
Vue.component(Field.name, Field)
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(Button.name, Button)

// let VConsole = require('vconsole');
// // 实例化vConsole
// let vConsole = new VConsole();

axios.defaults.withCredentials = true; // 允许跨域请求携带cookie
axios.defaults.headers.common['lang'] = 'zh-CN';

axios.interceptors.response.use((res) => {
  let data = res.data
  console.log(data.respcd, 8888)
}, (err) => {
  // Do something with response error
  console.log(err)
})

Vue.prototype.$axios = axios;
Vue.prototype.$config = config;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
