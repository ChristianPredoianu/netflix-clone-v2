import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

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
    meta: {
      requiresAuth: true,
    },
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
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: '/movies',
    name: 'Movies',
    component: () => import('@/views/Movies.vue'),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: '/popular',
    name: 'Popular',
    component: () => import('@/views/Popular.vue'),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: '/mylist',
    name: 'MyList',
    component: () => import('@/views/MyList.vue'),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: '/loading-profile',
    name: 'LoadingProfile',
    component: () => import('@/views/LoadingProfile.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next('/signin');
  } else {
    next();
  }
});

export default router;
