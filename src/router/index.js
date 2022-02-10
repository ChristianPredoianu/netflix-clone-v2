import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('@/views/SignIn.vue'),
  },

  {
    path: '/browse',
    name: 'Browse',
    component: () => import('@/views/Browse.vue'),
  },

  {
    path: '/signup/step1',
    name: 'SignupStep1',
    component: () => import('@/views/signup/Step1.vue'),
  },

  {
    path: '/signup/step2',
    name: 'SignupStep2',
    component: () => import('@/views/signup/Step2.vue'),
  },

  {
    path: '/profiles',
    name: 'Profiles',
    component: () => import('@/views/Profiles.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
