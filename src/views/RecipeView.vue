<template>
    <div class="container">
        <header>
            <HeaderComponent />
        </header>
        <main class="content">
            <section class="recipe">
                <h1>{{ recipe.title }}</h1>
                <div class="recipe-description">
                    <p>{{ recipe.description }}</p>
                    <img :src="recipe.imageUrl" alt="Recipe Image" class="recipe-image" />
                </div>
                <div class="recipe-info">
                    <p>Rating: {{ recipe.avgRating || 'N/A' }} | Ingrendienser | {{ recipe.timeInMins }} Minuter </p>
                </div>
                <div class="recipe-ingredients">
                    <h3>Ingredienser</h3>
                    <ul>
                        <!-- <li v-for="(step, index) in recipe.instructions" :key="index">
              {{ step }}

              Ersätt med kod för att lista varje enskilt recept
            </li> -->
                    </ul>
                </div>
                <div class="recipe-instructions">
                    <h3>Gör så här</h3>
                    <ol>
                        <li v-for="(step, index) in recipe.instructions" :key="index">
                            {{ step }}
                        </li>
                    </ol>
                </div>
                <div class="recipe-rating-container">
                    <h3>Vad tyckte du om receptet?</h3>
                    <p>Klicka på en stjärna för att ge ditt betyg!</p>
                    <div>
                        <StarRatingComponent />
                        <CommentSectionComponent />
                    </div>
                        
                    <!-- Skicka in kod för att sätta ett betyg -->
                </div>
            </section>
            <section class="comment-section">
                <div class="write-comment-container">
                    <!-- Sätt in kod för att skriva en kommentar här -->

                </div>
                <div class="previous-comments-container">
                    <!-- Sätt in kod som listar tidigare kommentarer -->
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import CommentSectionComponent from '@/components/CommentSectionComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import StarRatingComponent from '@/components/StarRating.vue';

export default {
    components: {
        HeaderComponent,
        CommentSectionComponent,
        StarRatingComponent,
    },
    data() {
        return {
            loading: true,
            recipe: {},
        };
    },
    created() {
        const recipeId = this.$route.params.recipeId;
        console.log('Recipe ID:', recipeId);

        fetch(`https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes/${recipeId}`)
            .then(response => response.json())
            .then(data => {
                this.recipe = data;
                console.log('Recipe Data:', this.recipe);
                this.loading = false;
            })
            .catch(error => {
                console.error('Error fetching recipe:', error);
                this.loading = false;
            });
    },







};

</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.recipe-description {
    display: flex;
}

.recipe-description .recipe-image {
    height: 500px;
    width: 500px;
}

.recipe {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.recipe .recipe-info {
    display: flex;
    align-items: center;
}
</style>