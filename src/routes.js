import home from './components/home.vue'
import signUp from './components/signUp.vue'
import login from './components/login.vue'
import addRest from './components/addRest.vue'
import update from './components/update.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes= [
  {
    name:'home',
    component:home,
    path:'/'
  },
  {
    name:'signUp',
    component:signUp,
    path:'/signUp',
  },
  {
    name:'login',
    component:login,
    path:'/login',
  },
  {
    name:'addRest',
    component:addRest,
    path:'/addRest',
  },
  {
    name:'update',
    component:update,
    path:'/update/:id',
  }
]

const router=createRouter({
  history:createWebHistory(),
  routes
})

export default router
