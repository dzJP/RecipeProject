<template>
    <div class="recipes-container">
        <div v-for="recipe in filteredRecipes" :key="recipe._id" class="recipe-card">
            <div class="recipe-image">
                <img :src="recipe.imageUrl" alt="Recipe Image" />
            </div>
            <div class="recipe-details">
                <h3 class="recipe-title">{{ recipe.title }}</h3>
                <p class="recipe-description">{{ recipe.description }}</p>
                <div class="recipe-info">
                    <p class="recipe-info-item">Ingredients: {{ recipe.ingredients.length }}</p>
                    <p class="recipe-info-item">Time: {{ recipe.timeInMins }} mins</p>
                </div>
                <CustomButton :to="'/recipe/' + recipe._id">Läs mer</CustomButton>
                <div class="rating-wrapper">
                    <RatingComponent :value="recipe.avgRating" :max-stars="5" :is-interactive="false" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RatingComponent from '../components/RatingComponent.vue';
import CustomButton from '../components/CustomButton.vue';

export default {
    props: ['recipes', 'searchQuery'],
    components: {
        RatingComponent,
        CustomButton,
    },
    computed: {
        filteredRecipes() {
            if (Array.isArray(this.recipes)) {
                return this.recipes.filter(recipe =>
                    recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            }
            return [];
        },
    },
};
</script>

<style scoped>
.recipes-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
}

.recipe-card {
    flex: 0 1 calc(33.33% - 20px);
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    max-height: 500px;
    width: 100%;
    box-sizing: border-box;
}

.recipe-image img {
    width: 100%;
    max-height: 200px;
    height: auto;
    border-radius: 8px;
}

.recipe-title {
    font-size: 1.2rem;
    margin: 10px 0;
}

.recipe-description {
    font-size: 1rem;
    margin: 10px 0;
}

.recipe-info {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.recipe-info-item {
    font-size: 0.9rem;
    color: #555;
}

.rating-wrapper {
    margin-top: 20px;
}

body, h1, h2, h3, h4, h5, h6, p {
    font-family: Cambria, sans-serif;
}
</style>
