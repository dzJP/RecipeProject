<template>
  <div>
    <!-- Page Title -->
    <h1>Recipes List</h1>

    <!-- Unordered list to display recipes -->
    <ul>
      <!-- Loop through the recipes and create a list item for each -->
      <li v-for="recipe in recipes" :key="recipe.id">
        <!-- Use router-link to create a clickable link to the recipe details -->
        <router-link :to="'/recipe/' + recipe.id">
          <div>
            <!-- Display the recipe title -->
            <h2>{{ recipe.title }}</h2>

            <!-- Log recipe data to the console (for debugging) -->
            {{ console.log(recipe) }}

            <!-- Display the recipe image -->
            <img :src="recipe.imageUrl" alt="Recipe Image" />

            <!-- Display the recipe rating -->
            <div>Rating: {{ recipe.rating }}</div>

            <!-- Display the number of ingredients in the recipe -->
            <div>Ingredients: {{ recipe.ingredients.length }}</div>

            <!-- Display the cooking time for the recipe -->
            <div>Time: {{ recipe.timeInMins }} mins</div>

            <!-- Display the categories the recipe belongs to -->
            <div>Category: {{ recipe.categories.join(', ') }}</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipes: [], // This will be populated with the list of recipes
    };
  },
  created() {
    // Make an HTTP GET request to fetch the list of recipes
    fetch('https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes')
      .then(response => response.json())
      .then(data => {
        // Log the response data for debugging
        console.log(data);
        // Update the recipes data with the fetched data
        this.recipes = data;
        // Log the recipes data (for debugging)
        console.log(this.recipe);
      })
      .catch(error => {
        // Log and handle any errors that occur during fetch
        console.error('Error fetching recipes:', error);
      });
  },
};
</script>

<style scoped>
/* Add CSS styles specific to RecipesList */
</style>
