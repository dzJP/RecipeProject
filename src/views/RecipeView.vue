<template>
  <div>
    <!-- Page Title -->
    <h1>Recipe Page</h1>

    <!-- Display loading message while data is being fetched -->
    <div v-if="loading">Loading...</div>

    <!-- Display recipe details when data has loaded -->
    <div v-else>
      <!-- Display the recipe title -->
      <h2>{{ recipe.title }}</h2>

      <!-- Display the recipe image -->
      <img :src="recipe.imageUrl" alt="Recipe Image" />

      <!-- Display the average rating of the recipe, or 'N/A' if not available -->
      <div>Rating: {{ recipe.avgRating || 'N/A' }}</div>

      <!-- Display the number of ingredients in the recipe -->
      <div>Ingredients: {{ recipe.ingredients.length }}</div>

      <!-- Display the cooking time for the recipe -->
      <div>Time: {{ recipe.timeInMins }} mins</div>

      <!-- Display the categories the recipe belongs to -->
      <div>Category: {{ recipe.categories.join(', ') }}</div>

      <!-- Display instructions for preparing the recipe -->
      <h3>Instructions</h3>
      <ul>
        <li v-for="(step, index) in recipe.instructions" :key="index">
          {{ step }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true, // Indicates whether data is being loaded
      recipe: {} // Holds the data for the selected recipe
    };
  },
  created() {
    const recipeId = this.$route.params.recipeId;

    // Make an HTTP GET request to fetch the details of the selected recipe
    fetch(`https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes/${recipeId}`)
      .then(response => response.json())
      .then(data => {
        // Update the recipe data with the fetched data
        this.recipe = data;
        // Set loading to false since data has loaded
        this.loading = false;
      })
      .catch(error => {
        // Log and handle any errors that occur during fetch
        console.error('Error fetching recipe:', error);
        // Set loading to false in case of an error
        this.loading = false;
      });
  }
};
</script>

<style scoped>
/* Add CSS styles specific to the recipe view component */
</style>
