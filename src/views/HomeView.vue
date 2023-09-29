<template>
  <div class="grid-box">
    <HeaderView />

    <div class="navbar">
      <!-- If categories are available, display them as links -->
      <div v-if="categories.length > 0">
        <div v-for="category in categories" :key="category.name">
          <router-link :to="'/category/' + category.name">
            {{ category.name }} ({{ category.recipeCount }} recipes)
          </router-link>
        </div>
      </div>
    </div>

    <div class="searchbar">
      <input v-model="searchQuery" @input="searchRecipes" id="search-field" placeholder="Search recipes..." />
    </div>

    <div v-if="loading" class="big-recipes-container">Loading...</div>

    <div v-else class="big-recipes-container">
      <div v-for="recipe in filteredRecipes" :key="recipe._id" class="recipe-container">
        <h2>{{ recipe.title }}</h2>
        <img :src="recipe.imageUrl" alt="Recipe Image" class="recipe-image" />
        <div>Rating: {{ recipe.avgRating || 'N/A' }}</div>
        <div>Ingredients: {{ recipe.ingredients.length }}</div>
        <div>Time: {{ recipe.timeInMins }} mins</div>
        <div>Category: {{ recipe.categories.join(', ') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderView from './HeaderView.vue';

export default {
  components: {
    HeaderView,
  },

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
/* Add CSS styles specific to the HomeView component */
.grid-box {
  height: 100vh;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 300px 30px 1fr;
  gap: 1rem;
}

.grid-box > * {
  border-radius: 10px;
}

.recipe-image {
  width: 250px;
  height: auto;
}

.searchbar {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.searchbar input {
  width: 100%;
  height: 20px;
}

.navbar {
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  background-color: rgb(145, 148, 158);
}

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

.header {
  text-align: center;
  background-color: grey;
  grid-row: 1/2;
  grid-column: 1/3;
}

</style>
