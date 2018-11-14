import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import parent from '@/components/parent'
import clone from '@/components/clone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/parent',
      name: 'parent',
      component: parent
    },
    {
      path: '/clone',
      name: 'clone',
      component: clone
    }
  ]
})
