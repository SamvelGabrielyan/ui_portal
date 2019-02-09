import Vue from 'vue'
import Router from 'vue-router'
import Admin from './AdminSide/Admin.vue'
import AdminMenue from './AdminSide/AdminMenue.vue'



Vue.use(Router)

export default new Router({
    mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'adminmenue',
      component:AdminMenue
    },
  ]
})
