<template>
	<aside class="navbar">
		<router-link :to="'/'">
			<div :class="{ 'bold-text': isAllRecipesActive() }">
				Alla recept ({{ calculateTotalRecipes() }})
			</div>
		</router-link>
		<!-- If categories are available, display them as links -->
		<div v-if="categories.length > 0" class="non-bold-category">
			<div v-for="category in categories" :key="category.name">
				<router-link :to="'/category/' + category.name">
					<div :class="{ 'bold-text': category.name === getCategoryFromRoute($route.path) }" class="meme">
						{{ category.name }} ({{ category.recipeCount }})
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

a {
	text-decoration: none;
	color: #F3FAFF;
}

.navbar {
	grid-column: 1 / 2;
	display: flex;
	/* background-color: #C4E0F3; */
	flex-wrap: wrap;
	flex-direction: column;
	border-radius: 10px;
	/* background-image: url('../assets/blurry-gradient-haikei.svg'); */
	background-color: #19a413;
	background-size: cover;
	background-repeat: no-repeat;
	padding: 1rem;
	border-top: 2px solid #F3FAFF;
	border-right: 2px solid #F3FAFF;
	box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
	margin-right: 5px;
}
.navbar > * {
  display: flex;
}

.non-bold-category {
  flex-direction: column;
}

.bold-text {
	font-weight: 900;
}

@media (max-width: 1000px) {
  .navbar {
    grid-column: 1 / 3;
	height: auto;
	flex-direction: row;
	display: flex;
	justify-content: center;
	margin-bottom: 5px;
	column-gap: 20px;
  }

  .non-bold-category {
	flex-direction: row;
	column-gap: 20px;
  }
  
  .bold-text {
	flex-direction: row;
  }
}


</style>
