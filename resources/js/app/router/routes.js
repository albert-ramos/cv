/**
 * PUBLIC
 */
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Experience from '../pages/Experience.vue'
import Company from '../pages/Company.vue'
import NotFound from '../pages/404.vue'

const titlePrefix = 'Albert Ramos';
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { 
      title: `${titlePrefix} | Home` 
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { 
      title: `${titlePrefix} | About` 
    }
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience,
    meta: { 
      title: `${titlePrefix} | Experience` 
    }
  },
  {
    path: '/company/:slug',
    name: 'Company',
    component: Company,
    meta: { 
      title: `${titlePrefix} | Company` 
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
    meta: { 
      title: `${titlePrefix} | 404 Not found` 
    }
  }
]