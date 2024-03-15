import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    meta: { requiresAuth: true }, // Markiere diese Route als geschützt
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Navigation Guard, um zu überprüfen, ob der Benutzer eingeloggt ist
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('access_token'); // Annahme: Token im localStorage bedeutet, dass der Benutzer eingeloggt ist
  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
