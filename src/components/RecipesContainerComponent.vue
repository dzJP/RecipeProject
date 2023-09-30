<template>
    <div class="big-recipes-container">
        <div v-for="recipe in filteredRecipes" :key="recipe._id" class="recipe-container">
            <h2>{{ recipe.title }}</h2>
            <img :src="recipe.imageUrl" alt="Recipe Image" class="recipe-image" />
            <div>Rating: {{ recipe.avgRating || 'N/A' }}</div>
            <div>Ingredients: {{ recipe.ingredients.length }}</div>
            <div>Time: {{ recipe.timeInMins }} mins</div>
            <div>Category: {{ recipe.categories.join(', ') }}</div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: ['recipes', 'searchQuery'],
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
};
</script>
  
<style scoped>
.big-recipes-container {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 0.5rem;
}

.big-recipes-container>* {
    border-radius: 10px;
    background-color: rgb(183, 211, 207);
    border: 1px solid black;
}

.recipe-image {
    width: 250px;
    height: auto;
}
</style>

  
  