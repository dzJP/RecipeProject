<template>
    <div class="grid-box">
        <HeaderComponent />
        <div class="content">
            <NavbarComponent :categories="categories" />
            <div class="recipes-container">
                <SearchComponent v-model="searchQuery" @search="handleSearch" />
                <LoadingComponent v-if="loading" />
                <RecipeContainerComponent v-else :recipes="recipes" :searchQuery="searchQuery" />
                <RatingComponent :value="recipe?.avgRating" :max-stars="5" :is-interactive="false" />
            </div>
        </div>
        <FetchRecipesComponent @recipes-loaded="handleRecipesLoaded" />
        <FetchCategoriesComponent @categories-loaded="handleCategoriesLoaded" />
    </div>
</template>
  
<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import SearchComponent from '../components/SearchComponent.vue';
import RecipeContainerComponent from '../components/RecipesContainerComponent.vue';
import LoadingComponent from '../components/LoadingComponent.vue';
import FetchRecipesComponent from '../components/FetchRecipesComponent.vue';
import FetchCategoriesComponent from '../components/FetchCategoriesComponent.vue';
import RatingComponent from '../components/RatingComponent.vue';

export default {
    components: {
        HeaderComponent,
        NavbarComponent,
        SearchComponent,
        RecipeContainerComponent,
        LoadingComponent,
        FetchRecipesComponent,
        FetchCategoriesComponent,
        RatingComponent,
    },
    data() {
        return {
            loading: true,
            recipes: [],
            categories: [],
            searchQuery: '',
        };
    },
    computed: {
        recipe() {
            return this.recipes[0]; // Assuming you want the first recipe
        },
        isRatingInteractive() {
            return !this.recipe; // Set this based on your actual condition
        }
    },
    methods: {
        handleSearch(query) {
            this.searchQuery = query;
        },
        handleRecipesLoaded(data) {
            this.recipes = data;
            this.loading = false;
        },
        handleCategoriesLoaded(data) {
            this.categories = data.map(category => ({
                name: category.name,
                recipeCount: category.count || 0,
            }));
        },
    },
};
</script>
  
<style scoped>
.grid-box {
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.content {
    display: flex;
}

.recipes-container {
    margin-left: 20px;
}

.recipe-image {
    width: 250px;
    height: auto;
}
</style>
  