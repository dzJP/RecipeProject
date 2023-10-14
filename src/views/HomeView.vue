<template>
    <div class="grid-box">
        <HeaderComponent />
        <div class="content">
            <NavbarComponent :categories="categories" />
            <div class="recipes-container">
                <SearchComponent v-model="searchQuery" @search="handleSearch" />
                <LoadingComponent v-if="loading" />
                <RecipeContainerComponent v-else :recipes="recipes" :searchQuery="searchQuery" />
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

export default {
    components: {
        HeaderComponent,
        NavbarComponent,
        SearchComponent,
        RecipeContainerComponent,
        LoadingComponent,
        FetchRecipesComponent,
        FetchCategoriesComponent,
    },
    data() {
        return {
            loading: true,
            recipes: [],
            categories: [],
            searchQuery: '',
        };
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
