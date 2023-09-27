<template>
  <div>
    <h1>Home Page</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="recipe in recipes" :key="recipe._id">
        <h2>{{ recipe.title }}</h2>
        <img :src="recipe.imageUrl" alt="Recipe Image" />
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
      loading: true,
      recipes: []
    };
  },
  created() {
    fetch('https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes')
      .then(response => response.json())
      .then(data => {
        this.recipes = data;
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
