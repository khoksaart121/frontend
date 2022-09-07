import { createRouter, createWebHistory } from 'vue-router'

// Import Layouts
import FrontendLayout from '@/layouts/Frontend.vue'
import BackendLayout from '@/layouts/Backend.vue'

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

// Backend
import Dashboard from '@/views/backend/Dashboard.vue'


const routes = [

  /** Frontend */
  {
    path: '/',
    name: 'home',
    component: FrontendLayout,
    children: [
      {
        path: '/',
        component: Home
      }
    ],
    meta: {
      title: 'หน้าหลัก',
      description: 'หน้าหลักระบบคลังสินค้า'
    }
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
    ],
    meta: {
      title: 'เกี่ยวกับเรา',
      description: 'รายละเอียดหน้าเกี่ยวกับเรา'
    }
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
    ],
    meta: {
      title: 'ผลงานของเรา',
      description: 'รายละเอียดหน้าผลงานของเรา'
    }
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
    ],
    meta: {
      title: 'บริการของเรา',
      description: 'รายละเอียดหน้าบริการของเรา'
    }
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
    ],
    meta: {
      title: 'ติดต่อเรา',
      description: 'รายละเอียดหน้าติดต่อเรา'
    }
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
    ],
    meta: {
      title: 'สมัครสมาชิกใหม่',
      description: 'รายละเอียดหน้าสมัครสมาชิกใหม่'
    }
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
    ],
    meta: {
      title: 'เข้าสู่ระบบ',
      description: 'รายละเอียดหน้าเข้าสู่ระบบ'
    }
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
    ],
    meta: {
      title: 'ลืมรหัสผ่าน',
      description: 'รายละเอียดหน้าลืมรหัสผ่าน'
    }
  },

  // Error 404
  {
    path: '/:catchAll(.*)',
    component: NotFound404,
    meta: {
      title: '404 ไม่พบหน้านี้',
      description: 'รายละเอียดหน้า 404'
    }
  },

  /** Frontend Route */
  {
    path: '/backend',
    name: 'Dashboard',
    component: BackendLayout,
    children: [
      {
        path: '',
        component: Dashboard
      }
    ],
    meta: {
      title: 'Dashboard'
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
