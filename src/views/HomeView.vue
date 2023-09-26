<template>
  <div>
    <h1>Home Page</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <!-- Display the list of recipes here -->
      <div v-for="recipe in recipes" :key="recipe.id">
        {{ recipe.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      recipes: []
    };
  },
  created() {
    // Make an HTTP GET request to fetch the list of recipes
    fetch('https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes')
      .then(response => response.json())
      .then(data => {
        this.recipes = data; // Assuming the response contains an array of recipes
        this.loading = false;
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
        this.loading = false;
      });
  }
};
</script>

<style scoped>
/* Add CSS styles specific to the home view component */
</style>
