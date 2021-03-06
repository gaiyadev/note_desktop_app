import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register'
import Login from "../views/Login"
import Home from "../views/Home"
import AddNote from "../views/AddNote"
import AllNote from "../views/AllNote"
import EditNote from '../views/Edit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/add',
    name: 'AddNote',
    component: AddNote
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/allNote',
    name: 'AllNote',
    component: AllNote
  },
  {
    path: '/edit/:id',
    name: 'EditNote',
    component: EditNote
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
