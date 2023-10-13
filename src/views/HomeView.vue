<template>
    <div class="flex-box">
        <HeaderComponent />

        <main class="main-box">
            <NavbarComponent :categories="categories" />

            <div class="test">
                <SearchComponent v-model="searchQuery" @search="handleSearch" />
                <LoadingComponent v-if="loading" />

                <RecipeContainerComponent v-else :recipes="recipes" :searchQuery="searchQuery" />
                <FetchRecipesComponent @recipes-loaded="handleRecipesLoaded" />
                <FetchCategoriesComponent @categories-loaded="handleCategoriesLoaded" />
            </div>
        </main>
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
.flex-box {
    display: flex;
    flex-wrap: wrap;
    /* gap: 1rem; */
}

.main-box {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
}

.test {
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    flex-direction: column;
}
</style>

