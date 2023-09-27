import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js'; // Make sure to import the router
import RecipesList from './views/RecipesList.vue'; // Add this line

createApp(App)
  .use(router)
  .mount('#app');

// Register the RecipesList component
createApp(App).component('RecipesList', RecipesList);
