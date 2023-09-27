<!-- This component fetches a list of recipes and displays them. (parent component to RecipeView.vue)
When a user clicks on a recipe, it should navigate to the RecipeView page, passing the selected recipe as a prop. -->
<template>
  <div>
    <h1>Recipes List</h1>
    <ul>
      <li v-for="recipe in recipes" :key="recipe.id">
        <router-link :to="'/recipe/' + recipe.id">
          <div>
            <h2>{{ recipe.title }}</h2>
            {{ console.log(recipe) }}
            <img :src="recipe.imageUrl" alt="Recipe Image" />
            <div>Rating: {{ recipe.rating }}</div>
            <div>Ingredients: {{ recipe.ingredients.length }}</div>
            <div>Time: {{ recipe.timeInMins }} mins</div>
            <div>Category: {{ recipe.categories.join(', ') }}</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipes: [], // This will be populated with the list of recipes
    };
  },
  created() {
    // Make an HTTP GET request to fetch the list of recipes
    fetch('https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the response data
        this.recipes = data; // Assuming the response contains an array of recipes
        console.log(this.recipe);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  },
};
</script>

<style scoped>
/* Add CSS styles specific to RecipesList */
</style>