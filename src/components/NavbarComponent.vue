<template>
	<aside class="navbar">
		<router-link :to="'/'">
			<div :class="{ 'bold-text': isAllRecipesActive() }">
				All recipes ({{ calculateTotalRecipes() }})
			</div>
		</router-link>
		<!-- If categories are available, display them as links -->
		<div v-if="categories.length > 0">
			<div v-for="category in categories" :key="category.name">
				<router-link :to="'/category/' + category.name">
					<div :class="{ 'bold-text': category.name === getCategoryFromRoute($route.path) }">
						{{ category.name }} ({{ category.recipeCount }} recipes)
					</div>
				</router-link>
			</div>
		</div>
	</aside>
</template>

<script>
export default {
	name: 'NavbarComponent',
	props: ['categories'],
	methods: {
		calculateTotalRecipes() {
			let total = 0;
			for (const category of this.categories) {
				total += category.recipeCount;

			}
			return total;
		},


		isAllRecipesActive() {
			return this.$route.path === '/';
		},

		getCategoryFromRoute(routePath) {
			// Use JavaScript to extract the category from the route path
			const parts = routePath.split('/');
			// Assuming the category is always in the second position
			return parts[2] || 'Unknown Category';
		},
	}
};

</script>

<style scoped>
.navbar {
	grid-column: 1 / 2;
	grid-row: 2 / 4;
	/* background-color: #C4E0F3; */
	background-image: url('../assets/blurry-gradient-haikei.png');
	background-size: cover;
	background-repeat: no-repeat;
	padding: 1rem;
	border-top: 2px solid #C4E0F3;
	border-right: 2px solid #C4E0F3;
	margin-right: 5px;
}

.bold-text {
	font-weight: bold;
}
</style>
