import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home.vue'
import Test from './Test.vue'
import Features from './Features'
import Price from './Price.vue'
import Register from './Register.vue'
import Login from './Login.vue'
import Forget_Pass from './Forget_Pass.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/features',
      name: 'features',
      component: Features
    },
    {
      path: '/price',
      name: 'price',
      component: Price
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
        path: '/forget_pass',
        name: 'forget_pass',
        component: Forget_Pass
    }
  ]
})