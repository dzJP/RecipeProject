import { createRouter, createWebHistory } from 'vue-router';

// Import your components/views here
import Home from './views/HomeView.vue';
import Recipe from './views/RecipeView.vue';
import Category from './views/CategoryView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/recipe/:recipeId', component: Recipe }, // Add dynamic route parameter for recipeId
  { path: '/category/:categoryId', component: Category }, // Add dynamic route parameter for categoryId
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
