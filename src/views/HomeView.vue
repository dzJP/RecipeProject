<template>
        <main class="main-box">
            <HeaderComponent/>
            <NavbarComponent :categories="categories" />

            <div class="content">
                <SearchComponent v-model="searchQuery" @search="handleSearch" />
                <LoadingComponent v-if="loading" />

                <RecipeContainerComponent v-else :recipes="recipes" :searchQuery="searchQuery" />
                <FetchRecipesComponent @recipes-loaded="handleRecipesLoaded" />
                <FetchCategoriesComponent @categories-loaded="handleCategoriesLoaded" />
            </div>
        </main>
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
.main-box {
    display: grid;
    grid-template-columns: 180px auto;
    grid-template-rows: auto auto;
    /* grid-template-rows: 150px auto; */
}

.content {
    grid-column: 2 / 3;
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    flex-direction: column;
}

@media (max-width: 1000px) {
    .main-box {
        grid-template-columns: auto;
        grid-template-rows: auto auto;
    }

    .content {
        grid-column: 1 / 3;
    }
}
</style>

