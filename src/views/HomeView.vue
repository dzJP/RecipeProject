<template>
  <div>
    <h1>Home Page</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <input v-model="searchQuery" @input="searchRecipes" placeholder="Search recipes..." />
      <div v-for="recipe in filteredRecipes" :key="recipe._id">
        <h2>{{ recipe.title }}</h2>
        <img :src="recipe.imageUrl" alt="Recipe Image" class="recipe-image" />
        <div>Rating: {{ recipe.avgRating || 'N/A' }}</div>
        <div>Ingredients: {{ recipe.ingredients.length }}</div>
        <div>Time: {{ recipe.timeInMins }} mins</div>
        <div>Category: {{ recipe.categories.join(', ') }}</div>
      </div>
      <div v-if="categories.length > 0">
        <div v-for="category in categories" :key="category.name">
          <router-link :to="'/category/' + category.name">
            {{ category.name }} ({{ category.recipeCount }} recipes)
          </router-link>
        </div>
      </div>
      <div v-else>
        No categories available.
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
      searchQuery: '',
    };
  },

  computed: {
    uniqueRecipes() {
      const uniqueTitles = [...new Set(this.recipes.map(recipe => recipe.title))];
      return uniqueTitles.map(title => this.recipes.find(recipe => recipe.title === title));
    },
    filteredRecipes() {
      return this.uniqueRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
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

    fetch('https://jau22-recept-grupp3-j35j900nj4w3.reky.se/categories')
      .then(response => response.json())
      .then(data => {
        this.categories = data.map(category => ({
          name: category.name,
          recipeCount: category.count || 0,
        }));
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  },
};
</script>

<style scoped>
.recipe-image {
  width: 200px;
  height: auto;
}
</style>
