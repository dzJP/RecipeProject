<template>
    <main class="big-recipes-container">
        <section v-for="recipe in filteredRecipes" :key="recipe._id" class="recipe-container">
            <router-link :to="'/recipe/' + recipe._id" class="img-container">
                <img :src="recipe.imageUrl" alt="Recipe Image" class="recipe-image" />
            <div class="recipe-heading">
                <div>
                    <h2>{{ recipe.title }}</h2>
                </div>
                <div>
                    <button class="button">Läs mer</button>
                </div>
            </div>
        </router-link>
            <div class="rating-container">
                <p>Rating: {{ recipe.avgRating || 'N/A' }}</p>
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
    </main>
</template>
  
  
<script>
export default {
    props: ['recipes', 'searchQuery'],
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
    flex-direction: column;
    row-gap: 1rem;
    /* grid-column: 2 / 3;
    grid-row: 3 / 4;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 0.5rem; */
}

/* .big-recipes-container > * {
    display: flex;
    column-gap: 1rem;
} */

.recipe-container {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
}

.recipe-container>* {
    flex-grow: 1;
    display: flex;
}

.recipe-heading>* {
    flex-grow: 1;
}

.rating-container>* {
    flex-grow: 1;
}

.information-container>* {
    flex-grow: 1;
}

.img-container {
    display: flex;
    flex-grow: 0;
}


.recipe-image {
    border: 1px solid #6D94BC;
    width: 250px;
    height: 250px;
}

.button {
    background-color: #00A1F1;
    color: #F3FAFF;
    border-radius: 10px;
    border: none;
    padding: 15px;

}
</style>
  