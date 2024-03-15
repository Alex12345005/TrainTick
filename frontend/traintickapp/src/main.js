import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Stelle sicher, dass der Pfad zu deiner Router-Konfigurationsdatei korrekt ist

createApp(App)
  .use(router) // Den Router verwenden
  .mount('#app');
