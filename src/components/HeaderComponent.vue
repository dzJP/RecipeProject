<template>
	<header class="header">
		<h1>Lorem ipsum dolor</h1>
		<p>
			Sit amet, consectetur adipisicing elit. Dolorem cupiditate quo rerum
			hic adipisci, obcaecati architecto eligendi qui dolore veritatis non
			porro enim repellat magni delectus vero provident aperiam placeat.
		</p>
	</header>
</template>

<script>
export default {
	name: 'HeaderView'
};
</script>

<style scoped>
.header {
	text-align: center;
	/* background-color: #C4E0F3; */
	background-image: url('../assets/blurry-gradient-haikei.png');
	background-size: cover;
	background-repeat: no-repeat;
	/* border: 1px solid #00A1F1; */
	grid-row: 1/2;
	grid-column: 1/3;
	margin-bottom: 10px;
}
</style>
