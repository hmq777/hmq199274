import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import table from '@/components/table'
import parent from '@/components/parent'
import flex from '@/components/flex'
import suanfa from '@/components/suanfa'
import extend from '@/components/extend'
import sass from '@/components/sass'
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
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/parent',
      name: 'parent',
      component: parent
    },
    {
      path: '/suanfa',
      name: 'suanfa',
      component: suanfa
    },
    {
      path: '/extend',
      name: 'extend',
      component: extend
    },
    {
      path: '/flex',
      name: 'flex',
      component: flex
    },
    {
      path: '/sass',
      name: 'sass',
      component: sass
    },
    {
      path: '/clone',
      name: 'clone',
      component: clone
    }
  ]
})
