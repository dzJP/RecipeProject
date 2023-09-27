import { createRouter, createWebHistory } from 'vue-router'; // Import necessary functions from vue-router
import RecipesList from './views/RecipesList.vue'; // Import the RecipesList component
import RecipeView from './views/RecipeView.vue'; // Import the RecipeView component
import CategoryView from './views/CategoryView.vue'; // Import the CategoryView component
import HomeView from './views/HomeView.vue'; // Import the HomeView component

const routes = [
  {
    path: '/', // Define the path for the route
    name: 'home', // Assign a name to the route
    component: HomeView, // Specify the component to be rendered
  },
  {
    path: '/recipe/:recipeId',
    name: 'recipe',
    component: RecipeView,
  },
  {
    path: '/category/:categoryId',
    name: 'category',
    component: CategoryView,
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: RecipesList,
  },
];

const router = createRouter({
  history: createWebHistory(), // Create a web history for the router
  routes, // Pass the defined routes to the router
});

export default router; // Export the configured router
