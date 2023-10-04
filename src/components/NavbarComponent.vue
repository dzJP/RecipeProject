<template>
	<aside class="navbar">
		<router-link :to="'/'">
			All recipes ({{ calculateTotalRecipes() }})
		</router-link>
		<!-- If categories are available, display them as links -->
		<div v-if="categories.length > 0">
			<div v-for="category in categories" :key="category.name">
				<router-link :to="'/category/' + category.name">
					{{ category.name }} ({{ category.recipeCount }} recipes)
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
		}
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
</style>
