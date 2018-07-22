import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddItem from '@/components/AddItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-item',
      name: 'AddItem',
      component: AddItem
    }
  ]
})
