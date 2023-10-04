<template>
    <div class="big-recipes-container">
      <div v-for="recipe in filteredRecipes" :key="recipe._id">
        <router-link :to="'/recipe/' + recipe._id">
          <h2>{{ recipe.title }}</h2>
          <img :src="recipe.imageUrl" alt="Recipe Image" class="recipe-image" />
        </router-link>
        <div>Rating: {{ recipe.avgRating || 'N/A' }}</div>
        <div>Ingredients: {{ recipe.ingredients.length }}</div>
        <div>Time: {{ recipe.timeInMins }} mins</div>
        <div>Category: {{ recipe.categories.join(', ') }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['recipes', 'searchQuery'],
    computed: {
      filteredRecipes() {
        if (Array.isArray(this.recipes)) {
          return this.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }
        return [];
      },
    },
  };
  </script>
  
  <style scoped>
  .big-recipes-container {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 0.5rem;
  }
  
  .big-recipes-container > * {
    border-radius: 10px;
    background-color: rgb(183, 211, 207);
    border: 1px solid black;
  }
  
  .recipe-image {
    width: 250px;
    height: auto;
  }
  </style>
  