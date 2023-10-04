<template>
	<div class="navbar">
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
	</div>
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
	background-color: rgb(145, 148, 158);
}
</style>
