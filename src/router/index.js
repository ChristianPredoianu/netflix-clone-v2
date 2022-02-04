import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/browse',
    name: 'Browse',
    component: () => import('../views/Browse.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
