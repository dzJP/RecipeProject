<template>
  <div>
    <!-- Page Title -->
    <h1>Category Page</h1>

    <!-- Display loading message while data is being fetched -->
    <div v-if="loading">Loading...</div>

    <!-- Once data is loaded, display the list of recipes -->
    <div v-else>
      <ul>
        <!-- Loop through recipes and create a list item for each -->
        <li v-for="recipe in recipes" :key="recipe.id">
          <!-- Create a clickable link to the recipe details page -->
          <router-link :to="'/recipe/' + recipe.id">
            {{ recipe.title }}
          </router-link>
        </li>
      </ul>
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
      recipes: []
    };
  },
  created() {
    // Get the category ID from the route parameters
    const categoryId = this.$route.params.categoryId;

    // Fetch recipes associated with the specified category
    fetch(`https://jau22-recept-grupp3-j35j900nj4w3.reky.se/categories/${categoryId}/recipes`)
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
  }
};
</script>

<style scoped>
/* Add CSS styles specific to the category view component */
</style>
