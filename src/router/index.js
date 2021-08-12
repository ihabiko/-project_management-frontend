import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import TaskDetail from '../views/Task/TaskDetail.vue'
import Signup from '../views/Auth/Signup.vue'
import Login from '../views/Auth/Login.vue'
import Chat from '../views/Chat/index.vue'
import Room from '../views/Chat/room.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      breadcrumb: [
        { name: 'Home' }
      ]
    },
    children: [
     
    ]  
  },
  {
    path: '/task/:id',
    name: 'TaskDetail',
    component: TaskDetail,
    meta: {
      breadcrumb: [
        // {name : 'Task',link: 'About'},
        { name: 'Home',link:'/' }
      ]
    } 
  },
  {
    path: '/create-account',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path:'/chat',
    name:'Chat',
    component:Chat,
    children: [
     
    ]  
  },

  {
    path: '/chat/:id',
    name: 'room',
    component: Room,
    meta: {
      breadcrumb: [
        // {name : 'Task',link: 'About'},
        { name: 'Home',link:'/' }
      ]
    } 
   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
