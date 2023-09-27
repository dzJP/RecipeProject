<template>
  <div>
    <h1>Home Page</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="recipe in recipes" :key="recipe._id">
        <h2>{{ recipe.title }}</h2>
        <img :src="recipe.imageUrl" alt="Recipe Image" class="recipe-image" />
        <div>Rating: {{ recipe.avgRating || 'N/A' }}</div>
        <div>Ingredients: {{ recipe.ingredients.length }}</div>
        <div>Time: {{ recipe.timeInMins }} mins</div>
        <div>Category: {{ recipe.categories.join(', ') }}</div>
      </div>

      <!-- Display the list of categories -->
      <div v-for="category in categories" :key="category.name">
        <router-link :to="'/category/' + category.name">
          {{ category.name }} ({{ category.count }} recipes)
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      recipes: [],
      categories: [],
    };
  },

  created() {
  fetch('https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes')
    .then(response => response.json())
    .then(data => {
      // Remove duplicate entries based on recipe title
      const uniqueRecipes = Array.from(new Set(data.map(recipe => recipe.title)))
        .map(title => data.find(recipe => recipe.title === title));

      this.recipes = uniqueRecipes;
      this.loading = false;
    })
    .catch(error => {
      console.error('Error fetching recipes:', error);
      this.loading = false;
    });

  // Fetch the list of categories and the recipe count for each category
  fetch('https://jau22-recept-grupp3-j35j900nj4w3.reky.se/categories')
    .then(response => response.json())
    .then(data => {
      this.categories = data.map(category => ({
        name: category.name,
        count: category.count,
      }));
    })
    .catch(error => {
      console.error('Error fetching categories:', error);
    });
  }
};
</script>

<style scoped>
.recipe-image {
  width: 200px;
  height: auto;
}
</style>
