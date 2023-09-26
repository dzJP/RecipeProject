<template>
  <div>
    <h1>Category Page</h1>
    <ul>
      <!-- Loop through the recipes in this category and display them -->
      <li v-for="recipe in recipes" :key="recipe.id">
        <router-link :to="'/recipe/' + recipe.id">{{ recipe.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipes: [
        { id: 1, title: 'Recipe 1' },
        { id: 2, title: 'Recipe 2' },
        // Add more recipes as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Add CSS styles specific to the category view component */
</style>
