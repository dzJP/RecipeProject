<template>
  <div class="recipe-view">
    <h2>{{ recipe.title }}</h2>
    <p>{{ recipe.description }}</p>
    <!-- Add more details about the recipe as needed -->
    <CommentSection :comments="recipe.comments" />
    <RatingComponent :rating="recipe.rating" />
  </div>
</template>

<script>
import CommentSection from '@/components/CommentSection.vue';
import RatingComponent from '@/components/RatingComponent.vue';

export default {
  components: {
    CommentSection,
    RatingComponent,
  },
  props: {
    recipe: Object, // Assuming you'll pass a recipe object to this component
  },
};
</script>

<style scoped>
/* Add any specific styles for RecipeView */
</style>
