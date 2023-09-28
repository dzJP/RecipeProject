<template>
  <div>
    <!-- Search input field with two-way data binding -->
    <input v-model="searchQuery" @input="searchRecipes" placeholder="Search recipes..." />

    <!-- If categories are available, display them as links -->
    <div v-if="categories.length > 0">
      <div v-for="category in categories" :key="category.name">
        <router-link :to="'/category/' + category.name">
          {{ category.name }} ({{ category.recipeCount }} recipes)
        </router-link>
      </div>
    </div>

    <!-- Display loading message while data is being fetched -->
    <div v-if="loading">Loading...</div>

    <!-- Once data is loaded, display the list of recipes -->
    <div v-else>
      <!-- Loop through unique recipes after filtering -->
      <div v-for="recipe in filteredRecipes" :key="recipe._id">
        <!-- Display recipe details -->
        <h2>{{ recipe.title }}</h2>
        <img :src="recipe.imageUrl" alt="Recipe Image" class="recipe-image" />
        <div>Rating: {{ recipe.avgRating || 'N/A' }}</div>
        <div>Ingredients: {{ recipe.ingredients.length }}</div>
        <div>Time: {{ recipe.timeInMins }} mins</div>
        <div>Category: {{ recipe.categories.join(', ') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Flag to indicate if data is still being loaded
      loading: true,
      // Array to store the list of recipes
      recipes: [],
      // Array to store the list of categories
      categories: [],
      // Search query entered by the user
      searchQuery: '',
    };
  },

  computed: {
    // Filter out unique recipes based on title
    uniqueRecipes() {
      const uniqueTitles = [...new Set(this.recipes.map(recipe => recipe.title))];
      return uniqueTitles.map(title => this.recipes.find(recipe => recipe.title === title));
    },
    // Filter recipes based on search query
    filteredRecipes() {
      return this.uniqueRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  created() {
    // Fetch recipes data from API
    fetch('https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes')
      .then(response => response.json())
      .then(data => {
        // Update recipes data once fetched
        this.recipes = data;
        // Set loading flag to false as data is now loaded
        this.loading = false;
      })
      .catch(error => {
        // Log and handle any errors that occur during fetch
        console.error('Error fetching recipes:', error);
        // Set loading flag to false even if an error occurs
        this.loading = false;
      });

    // Fetch categories data from API
    fetch('https://jau22-recept-grupp3-j35j900nj4w3.reky.se/categories')
      .then(response => response.json())
      .then(data => {
        // Process categories data and update state
        this.categories = data.map(category => ({
          name: category.name,
          recipeCount: category.count || 0,
        }));
      })
      .catch(error => {
        // Log and handle any errors that occur during fetch
        console.error('Error fetching categories:', error);
      });
  },
};
</script>

<style scoped>
/* Add CSS styles specific to the HomeView component */
.recipe-image {
  width: 400px;
  height: auto;
}
</style>
