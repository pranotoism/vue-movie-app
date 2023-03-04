import SignUp from '../views/SignUp.vue';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Add from '../views/Add.vue';
import Update from '../views/Update.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'Home',
    component: Home,
    path: '/',
  },
  {
    name: 'Add',
    component: Add,
    path: '/add',
  },
  {
    name: 'Update',
    component: Update,
    path: '/update/:id',
  },
  {
    name: 'Login',
    component: Login,
    path: '/login',
  },
  {
    name: 'SignUp',
    component: SignUp,
    path: '/sign-up',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
