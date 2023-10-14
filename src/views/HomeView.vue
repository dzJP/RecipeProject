<template>
    <div class="grid-box">
        <HeaderComponent />
        <div class="content">
            <NavbarComponent :categories="categories" />
            <div class="recipes-container">
                <FetchRecipesComponent @recipes-loaded="handleRecipesLoaded" />
                <FetchCategoriesComponent @categories-loaded="handleCategoriesLoaded" />
                <SearchComponent v-model="searchQuery" @search="handleSearch" />
                <LoadingComponent v-if="loading" />
                <RecipesContainerComponent :recipes="recipes" :searchQuery="searchQuery" />
                <RatingComponent :value="recipe?.avgRating" :max-stars="5" :is-interactive="false" />
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import SearchComponent from '../components/SearchComponent.vue';
import RecipesContainerComponent from '../components/RecipesContainerComponent.vue'; // Import the component
import LoadingComponent from '../components/LoadingComponent.vue';
import FetchRecipesComponent from '../components/FetchRecipesComponent.vue';
import FetchCategoriesComponent from '../components/FetchCategoriesComponent.vue';
import RatingComponent from '../components/RatingComponent.vue';

export default {
    components: {
        HeaderComponent,
        NavbarComponent,
        SearchComponent,
        RecipesContainerComponent, 
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
            return this.recipes[0]; 
        },
        isRatingInteractive() {
            return !this.recipe; 
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
</style>
