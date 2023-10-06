<template>
  <div class="recipe-view">
    <HeaderComponent />
    <div class="recipe-details">
      <div v-if="loading">Loading...</div>
      <div v-else>
        <h2>{{ recipe.title }}</h2>
        <img :src="recipe.imageUrl" alt="Recipe Image" class="recipe-image" />
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
        <CommentSectionComponent :recipeId="recipe.id" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import CommentSectionComponent from '../components/CommentSectionComponent.vue';

export default {
  components: {
    HeaderComponent,
    CommentSectionComponent
  },
  data() {
    return {
      loading: true,
      recipe: {},
    };
  },
  created() {
    const recipeId = this.$route.params.recipeId;
    console.log('Recipe ID:', recipeId);

    fetch(`https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes/${recipeId}`)
      .then(response => response.json())
      .then(data => {
        this.recipe = data;
        console.log('Recipe Data:', this.recipe);
        this.loading = false;
      })
      .catch(error => {
        console.error('Error fetching recipe:', error);
        this.loading = false;
      });
  },
};

</script>

<style scoped>
.recipe-view {
  height: 100vh;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 300px 30px 1fr;
  gap: 1rem;
}

.recipe-details {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  padding: 1rem;
}

.recipe-image {
  width: 250px;
  height: auto;
}
</style>