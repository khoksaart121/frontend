import { createRouter, createWebHistory } from 'vue-router'

// Import Layouts
import FrontendLayout from '@/layouts/Frontend.vue'

// Import Views
// Frontent
import Home from '@/views/frontend/Home.vue'
import About from '@/views/frontend/About.vue'
import Portfolio from '@/views/frontend/Portfolio.vue'
import Service from '@/views/frontend/Service.vue'
import Contact from '@/views/frontend/Contact.vue'
import Register from '@/views/frontend/Register.vue'
import Login from '@/views/frontend/Login.vue'
import ForgotPassword from '@/views/frontend/ForgotPassword.vue'
import NotFound404 from '@/views/frontend/NotFound404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: FrontendLayout,
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'About',
        component: About
      }
    ]
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Portfolio',
        component: Portfolio
      }
    ]
  },
  {
    path: '/service',
    name: 'service',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Service',
        component: Service
      }
    ]
  },
  {
    path: '/contact',
    name: 'contact',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Contact',
        component: Contact
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Register',
        component: Register
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Login',
        component: Login
      }
    ]
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'ForgotPassword',
        component: ForgotPassword
      }
    ]
  },

  // Error 404
  {
    path: '/:catchAll(.*)',
    component: NotFound404,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
