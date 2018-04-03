// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'assets/common.scss'
import { Field, DatetimePicker } from 'qfpay-ui'
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(Field.name, Field)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
