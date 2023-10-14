<template>
    <div class="big-recipes-container">
        <section v-for="recipe in filteredRecipes" :key="recipe._id" class="recipe-container">
            <div class="img-container">
                <img :src="recipe.imageUrl" alt="Recipe Image" class="recipe-image" />
            </div>
            <h2>{{ recipe.title }}</h2>
            <div class="recipe-heading">
                <div>
                    <p>{{ recipe.description }}</p>
                </div>
                <div>
                    <CustomButton :to="'/recipe/' + recipe._id">Läs mer</CustomButton>
                </div>
            </div>
            <div class="rating-container">
                <RatingComponent :value="recipe.avgRating" :maxStars="5" />
            </div>
            <div class="information-container">
                <div>
                    <p>Ingredients: {{ recipe.ingredients.length }}</p>
                </div>
                <div>
                    <p>Time: {{ recipe.timeInMins }} mins</p>
                </div>
                <div>
                    <p>Category: {{ recipe.categories.join(', ') }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import CustomButton from '../components/CustomButton.vue';
import RatingComponent from '../components/RatingComponent.vue';

export default {
    props: ['recipes', 'searchQuery'],
    components: {
        CustomButton,
        RatingComponent,
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
.big-recipes-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    row-gap: 1rem;
}

.recipe-container {
    display: flex;
    flex-wrap: wrap;
}

.recipe-heading {
    padding: 5px;
    flex-grow: 1;
}

.rating-container {
    flex-grow: 1;
}

.information-container {
    flex-grow: 1;
}

.recipe-image {
    border: 1px solid #6D94BC;
    width: 250px;
    height: 250px;
}
</style>
