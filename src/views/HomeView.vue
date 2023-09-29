<template>
  <div class="grid-box">

    <!-- Header box for heading and subtext -->
    <div class ="header">
        <h1>Lorem ipsum dolor</h1>
        <p>Sit amet, consectetur adipisicing elit. Dolorem cupiditate quo rerum hic adipisci, obcaecati architecto eligendi qui dolore veritatis non porro enim repellat magni delectus vero provident aperiam placeat.</p>
    </div>

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
      <!-- Search input field with two-way data binding -->
      <input v-model="searchQuery" @input="searchRecipes" id="search-field" placeholder="Search recipes..." />
    </div>

      <!-- Display loading message while data is being fetched -->
      <div v-if="loading" class="big-recipes-container">Loading...</div>

      <!-- Once data is loaded, display the list of recipes -->
      <div v-else class="big-recipes-container">
        <!-- Loop through unique recipes after filtering -->
        <div v-for="recipe in filteredRecipes" :key="recipe._id" class="recipe-container">
          <!-- Display recipe details -->
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
export default {
  data() {
    return {
      // Flag to indicate if data is still being loaded
      loading: true,
      // Array to store the list of recipes
      recipes: [],
      // Array to store the list of categories
      categories: [],
      // Search query entered by the user
      searchQuery: '',
    };
  },

  computed: {
    // Filter out unique recipes based on title
    uniqueRecipes() {
      const uniqueTitles = [...new Set(this.recipes.map(recipe => recipe.title))];
      return uniqueTitles.map(title => this.recipes.find(recipe => recipe.title === title));
    },
    // Filter recipes based on search query
    filteredRecipes() {
      return this.uniqueRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  created() {
    // Fetch recipes data from API
    fetch('https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes')
      .then(response => response.json())
      .then(data => {
        // Update recipes data once fetched
        this.recipes = data;
        // Set loading flag to false as data is now loaded
        this.loading = false;
      })
      .catch(error => {
        // Log and handle any errors that occur during fetch
        console.error('Error fetching recipes:', error);
        // Set loading flag to false even if an error occurs
        this.loading = false;
      });

    // Fetch categories data from API
    fetch('https://jau22-recept-grupp3-j35j900nj4w3.reky.se/categories')
      .then(response => response.json())
      .then(data => {
        // Process categories data and update state
        this.categories = data.map(category => ({
          name: category.name,
          recipeCount: category.count || 0,
        }));
      })
      .catch(error => {
        // Log and handle any errors that occur during fetch
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
  width:100%;
  height: 20px;
}

.header {
  text-align: center;
  background-color: grey;
  grid-row: 1/2;
  grid-column: 1/3;
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

</style>
