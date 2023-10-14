<template>
	<div class="star-rating">
		<i v-for="index in maxStars" :key="index" @click="clickable && rate(index)"
			:class="['star', { 'filled': index <= value }]">
			&#9733; <!-- Unicode star character -->
		</i>
	</div>
</template>
  
<script>
export default {
	props: {
		value: {
			type: Number,
			default: 0,
		},
		maxStars: {
			type: Number,
			default: 5,
		},
		clickable: {
			type: Boolean,
			default: true,
		},
	},
	methods: {
		rate(index) {
			this.$emit('star-input', index);
		},
	},
};
</script>
  
<style scoped>
/* Your existing styles here */
</style>
  
  
<style scoped>
.star-rating {
	font-size: 0;
	/* Remove whitespace between inline-block stars */
}

.star {
	display: inline-block;
	cursor: pointer;
	font-size: 24px;
	/* Adjust the size of the stars as needed */
	color: #ccc;
	/* Default star color (empty) */
}

.star.filled {
	color: #fdd835;
	/* Filled star color (e.g., yellow) */
}
</style>