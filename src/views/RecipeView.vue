<template>
	<div class="container">
		<header>
			<HeaderComponent />
		</header>
		<main class="content">
			<section class="recipe">
				<h1>{{ recipe.title }}</h1>
				<div class="recipe-info">
					<p>
						Rating: {{ recipe.avgRating || 'N/A' }} | Ingredienser |
						{{ recipe.timeInMins }} Minuter
					</p>
				</div>
				<div class="recipe-ingredients">
					<h3>Ingredienser</h3>
					<ul>
						<li v-for="(ingredient, index) in recipe.ingredients" :key="index">
							{{ ingredient.name }}: {{ ingredient.amount }} {{ ingredient.unit }}
						</li>
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
			</section>

			<section class="recipe-description">
				<div class="description-content">
					<p>{{ recipe.description }}</p>
				</div>
				<img :src="recipe.imageUrl" alt="Recipe Image" class="recipe-image" />
			</section>
		</main>

		<section class="recipe-rating-container">
			<h3>Vad tyckte du om receptet?</h3>
			<p>Klicka på en stjärna för att ge ditt betyg!</p>
			<div>
				<div v-if="!hasVoted">
					<RatingComponent @star-input="handleUserRating" :max-stars="5" />
				</div>
				<div v-else>
					<p>Thank you for your vote</p>
				</div>
				<CommentSectionComponent />
			</div>
		</section>
	</div>
</template>
  
<script>
import CommentSectionComponent from '@/components/CommentSectionComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import RatingComponent from '@/components/RatingComponent.vue'

export default {
	components: {
		HeaderComponent,
		CommentSectionComponent,
		RatingComponent,
	},
	data() {
		return {
			loading: true,
			recipe: {},
			userRating: 0,
			hasVoted: false,
		};
	},
	created() {
		const recipeId = this.$route.params.recipeId;

		fetch(`https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes/${recipeId}`)
			.then(response => response.json())
			.then(data => {
				if (data.avgRating !== undefined) {
					data.avgRating = parseFloat(data.avgRating.toFixed(1));
				}
				this.recipe = data;
				this.loading = false;
			})
			.catch(error => {
				console.error('Error fetching recipe:', error);
				this.loading = false;
			});
	},

	watch: {
		'userRating'() {
			this.storeRating();
		},
	},

	methods: {
		async storeRating() {
			try {
				const response = await fetch(`https://jau22-recept-grupp3-j35j900nj4w3.reky.se/recipes/${this.recipe._id}/ratings`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						rating: this.userRating,
					})
				});
				if (response.ok) {
					this.hasVoted = true;
				}
			} catch (error) {
				console.error('Error submitting comment:', error);
			}
		},

		handleUserRating(data) {
			this.userRating = data;
		},
	},
};
</script>
  
<style>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  display: flex;
  flex-direction: row;
}

.recipe {
  flex: 1;
}

.recipe-description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px; /* Adjusted the margin */
}

.recipe-description .recipe-image {
  max-width: 50%;
  height: auto;
}
</style>
  