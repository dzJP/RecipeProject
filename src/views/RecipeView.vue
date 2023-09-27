<template>
  <div>
    <h1>Recipe Page</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <h2>{{ recipe.title }}</h2>
      <img :src="recipe.imageUrl" alt="Recipe Image" />
      <div>Rating: {{ recipe.avgRating || 'N/A' }}</div>
      <div>Ingredients: {{ recipe.ingredients.length }}</div>
      <div>Time: {{ recipe.timeInMins }} mins</div>
      <div>Category: {{ recipe.categories.join(', ') }}</div>
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
      loading: true,
      recipe: {}
    };
  },
  created() {
    const recipeId = this.$route.params.recipeId;

    fetch(`https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes/${recipeId}`)
      .then(response => response.json())
      .then(data => {
        this.recipe = data;
        this.loading = false;
      })
      .catch(error => {
        console.error('Error fetching recipe:', error);
        this.loading = false;
      });
  }
};
</script>

<style scoped>
/* Add CSS styles specific to the recipe view component */
</style>
