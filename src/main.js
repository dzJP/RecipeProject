import router from './router.js';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js'; // Import the router

createApp(App)
  .use(router) // Use the router
  .mount('#app');
