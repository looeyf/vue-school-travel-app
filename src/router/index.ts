import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/Home.vue');
const Brazil = () => import('../views/Brazil.vue');
const Hawaii = () => import('../views/Hawaii.vue');
const Jamaica = () => import('../views/Jamaica.vue');
const Panama = () => import('../views/Panama.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/brazil',
    name: 'Brazil',
    component: Brazil,
  },
  {
    path: '/hawaii',
    name: 'Hawaii',
    component: Hawaii,
  },
  {
    path: '/jamaica',
    name: 'Jamaica',
    component: Jamaica,
  },
  {
    path: '/panama',
    name: 'Panama',
    component: Panama,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
