import { createRouter, createWebHistory } from 'vue-router'
import ClavierView from '../views/ClavierView.vue'
import ContactView from '../views/ContactView.vue'
import NewContactView from '../views/NewContactView.vue'
import JournalView from '../views/JournalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/clavier',
      name: 'clavier',
      component: ClavierView
    },
    {
      path: '/',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/newcontact',
      name: 'newcontact',
      component: NewContactView
    },
    {
      path: '/journal',
      name: 'journal',
      component: JournalView
    }

  ]
})

export default router
