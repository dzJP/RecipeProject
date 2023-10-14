<template>
	<header class="header">
		<div class="h1-box">
			<h1>Worldwide Pancakes</h1>
		</div>
		<div class="text-box">
			<p>
			Don't panicake! Välkomna till våran värld av pannkakor. <br/><br>
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
	display: flex;
	flex-basis: 100%;
	text-align: center;
	flex-wrap: wrap;
	height: auto;
	color: #F3FAFF;
	/* background-color: #C4E0F3; */
	background-image: url('../assets/layered-peaks-haikei.svg');
	background-size: cover;
	background-repeat: no-repeat;
	margin-bottom: 5px;
}

.text-box {
	padding: 30px;
}

.header > * {
	display: flex;
	justify-content: center;
	flex-basis: 100%;
}

</style>
