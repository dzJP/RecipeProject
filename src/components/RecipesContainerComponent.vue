<template>
    <div class="big-recipes-container">
        <section v-for="recipe in filteredRecipes" :key="recipe._id" class="recipe-container">
            <div class="img-container">
                <img :src="recipe.imageUrl" alt="Recipe Image" class="recipe-image"  />
            </div>
            <div class="recipe-heading">
                <div>
                    <h2>{{ recipe.title }}</h2>
                </div>
                <div>
                    <p class="text">{{ recipe.description }}</p>
                </div>
            </div>
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
                <div>
                    <CustomButton :to="'/recipe/' + recipe._id">Läs mer</CustomButton>
                </div>
        </section>
    </div>
</template>
  
<script>
import CustomButton from '../components/CustomButton.vue';

export default {
    props: ['recipes', 'searchQuery'],
    components: {
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
.big-recipes-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    row-gap: 1rem;
}

.recipe-container {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
}

.recipe-content {
    display: flex;
}

.recipe-heading {
    flex-direction: column;
    max-width: 20%;
}

.button {
    display: block;
}

.recipe-heading p {
    margin-bottom: 20px;
}

.rating-container {
    text-align: center;
    flex-grow: 1;
}

.information-container {
    flex-direction: column;
    flex-grow: 1;
}


.recipe-image {
    border: 1px solid #FFD786;
    box-shadow: 5px 5px 5px black;
    width: 200px;
    height: 200px;
}

.recipe-image {
    transition: transform 0.3s ease-in-out;
    border-radius: 9999px;
}

.recipe-image:hover {
    transform: scale(1.1);
}

.img-container {
    padding: 15px;
    margin: 10px;
    overflow: hidden;
}

.recipe-image {
    max-width: 100%;
    transition: transform 0.3s ease-in-out;
}

.recipe-image:hover {
    transform: scale(1.1);
}


@media (max-width : 1000px) {
    .text {
        display: none;
    }
    
    .rating-container {
        display: none;
    }

    .information-container {
        display: none;
        flex-direction: row;
        flex-grow: 0;
        flex-wrap: wrap;
    }

    .recipe-container {
        
    }
}

</style>
  