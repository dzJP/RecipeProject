<template>
	<header class="header">
		<div class="h1-box">
			<h1>Worldwide Pancakes</h1>
		</div>
		<div class="text-box">
			<p>
			Don't panicake! Välkomna till våran värld av pannkakor. 
			Sugen på söta eller saltiga pannkakor? Oroa dig inte, vi har alla recept samlade på en och samma hemsida för att göra det enkelt för just dig.
			</p>
		</div>
	</header>
</template>

<script>
export default {
	name: 'HeaderView'
};
</script>

<style scoped>
.header {
	grid-row: 1 / 2;
	grid-column: 1 / 3;
	display: flex;
	width: 100%;
	text-align: left;
	flex-wrap: wrap;
	height: auto;
	color: #F3FAFF;
	/* background-color: #C4E0F3; */
	background-image: url('../assets/blurry-gradient-haikei3.svg');
	border-bottom: 2px solid #F3FAFF;
	border-radius: 10px;
	background-size: cover;
	margin-bottom: 5px;
}

.text-box {
	padding: 30px;
}

.header > * {
	display: flex;
	justify-content: left;
	flex-basis: 100%;
}

.header h1 {
	margin-left: 30px;
}

</style>
