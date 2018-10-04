import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddItem from '@/components/AddItem'
import EditItem from '@/components/EditItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index
    },
    {
      path: '/add-item',
      name: 'AddItem',
      component: AddItem
    },
    {
      path: '/edit-item/:item_slug', // the : colon denotes a dynamic route parameter
      name: 'EditItem',
      component: EditItem
    }
  ]
})
