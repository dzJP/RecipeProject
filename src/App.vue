<template>
  <div id="app">
    <header>
      <h1>Recipe Website</h1>
    </header>

    <main>
      <div>
        <input v-model="searchQuery" type="text" placeholder="Search for recipes" />
        <button @click="searchRecipes">Search</button>
      </div>

      <div>
        <h2>Categories</h2>
        <ul>
          <li v-for="category in categories" :key="category.name">
            <router-link :to="'/category/' + category.name">
              {{ category.name }} ({{ category.recipeCount }})
            </router-link>
          </li>
        </ul>
      </div>

      <router-view></router-view>
    </main>

    <footer>
      <p>&copy; 2023 Recipe Website</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      categories: [], // This will be populated with the list of categories
    };
  },
  created() {
    // Make an HTTP GET request to fetch the list of categories
    fetch('https://jau22-recept-grupp3-j35j900nj4w3.reky.se/categories')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the response data
        this.categories = data.map(category => ({
          name: category.name,
          recipeCount: category.recipes ? category.recipes.length : 0,
        }));
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  },
  methods: {
    searchRecipes() {
      // Make an HTTP GET request to fetch filtered recipes based on searchQuery
      fetch(`https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes?query=${this.searchQuery}`)
        .then(response => response.json())
        .then(data => {
          this.$router.push({ name: 'home' }); // Navigate to the homepage
          this.$nextTick(() => {
            this.$refs.recipesList.recipes = data; // Update RecipesList component
          });
        })
        .catch(error => {
          console.error('Error fetching filtered recipes:', error);
        });
    },
  },
};
</script>

<style>
/* Add your CSS styles here */
</style>
