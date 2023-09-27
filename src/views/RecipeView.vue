<!-- This component is responsible for displaying detailed information about a single recipe. (Child component to RecipesList.vue)
It receives the selected recipe as a prop and displays its title, description, comments, and rating. -->
<template>
  <div class="recipe-view">
    <h2>{{ recipe.title }}</h2>
    <p>{{ recipe.description }}</p>
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
    recipe: Object,
  },
};
</script>

<style scoped>
/* Add any specific styles for RecipeView */
</style>
