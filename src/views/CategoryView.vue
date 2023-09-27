<template>
  <div>
    <h1>Category Page</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="recipe in recipes" :key="recipe.id">
          <router-link :to="'/recipe/' + recipe.id">
            {{ recipe.title }}
          </router-link>
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
      recipes: []
    };
  },
  created() {
    const categoryId = this.$route.params.categoryId;

    fetch(`https://jau22-recept-grupp3-j35j900nj4w3.reky.se/categories/${categoryId}/recipes`)
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
/* Add CSS styles specific to the category view component */
</style>