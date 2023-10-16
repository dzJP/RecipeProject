<template>
	<header class="header">
		<div class="h1-box">
			<router-link :to="'/'" class="header-router">
				<h1>Worldwide Pancakes</h1>
			</router-link>
		</div>
		<div class="text-box">
			<p>
				Don't panicake! Välkomna till våran värld av pannkakor.
				Sugen på söta eller saltiga pannkakor? Oroa dig inte, vi har alla recept samlade på en och samma hemsida för
				att göra det enkelt för just dig.
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #F3FAFF;
  background-image: url('../assets/blurry-gradient-haikei3.svg');
  border-bottom: 2px solid #F3FAFF;
  border-radius: 10px;
  background-size: cover;
  margin-bottom: 5px;
  padding: 20px;
  text-shadow: 2px 2px #000000;
}

.text-box {
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px 0;
}

.header>* {
	display: flex;
	justify-content: left;
	flex-basis: 100%;
}

.header h1 {
	font-size: 50px;
	margin: 0;
}

.header-router {
	text-decoration: none;
	/* Remove underline on the link */
	color: #F3FAFF;
	/* Set the default color for the link */
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
