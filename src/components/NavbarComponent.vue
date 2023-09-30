<template>
	<div class="navbar">
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
};
</script>

<style scoped>
.navbar {
	grid-column: 1 / 2;
	grid-row: 2 / 4;
	background-color: rgb(145, 148, 158);
}
</style>
