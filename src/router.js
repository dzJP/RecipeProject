import { createRouter, createWebHistory } from 'vue-router';
import RecipeView from './views/RecipeView.vue'; // Import RecipeView
import HomeView from './views/HomeView.vue'; // Import HomeView
import CategoryView from './views/CategoryView.vue'; // Import CategoryView

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView, // Change component to HomeView
  },
  {
    path: '/recipe/:recipeId',
    name: 'recipe',
    component: RecipeView,
  },
  {
    path: '/category/:categoryId', // Define route for category view
    name: 'category',
    component: CategoryView, // Use CategoryView component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
