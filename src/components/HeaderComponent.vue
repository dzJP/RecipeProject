<template>
	<header class="header">
		<div class="h1-box">
			<h1>Lorem ipsum dolor</h1>
		</div>
		<div class="text-box">
			<p>
			Sit amet, consectetur adipisicing elit. Dolorem cupiditate quo rerum
			hic adipisci, obcaecati architecto eligendi qui dolore veritatis non
			porro enim repellat magni delectus vero provident aperiam placeat.
			Sit amet, consectetur adipisicing elit. Dolorem cupiditate quo rerum
			hic adipisci, obcaecati architecto eligendi qui dolore veritatis non
			porro enim repellat magni delectus vero provident aperiam placeat.
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
	/* background-color: #C4E0F3; */
	background-image: url('../assets/blurry-gradient-haikei.png');
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
