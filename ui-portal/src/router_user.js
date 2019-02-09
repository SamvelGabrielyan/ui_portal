import Vue from 'vue'
import Router from 'vue-router'
import User from './UserSide/User.vue'
import UserMenue from './UserSide/UserMenue.vue'



Vue.use(Router)

export default new Router({
    mode: 'history',
  routes: [
    {
      path: '/user',
      name: 'usermenue',
      component:UserMenue
    },
  ]
})