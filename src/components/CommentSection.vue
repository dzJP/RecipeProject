<template>
	<div>
		<!-- Comment Form -->
		<form v-if="!commentSent" @submit.prevent="submitComment">
			<div>
				<label for="comment">Comment:</label>
				<textarea v-model="comment" id="comment"></textarea>
				<span v-if="!comment">Leave a comment</span>
			</div>
			<div>
				<label for="name">Namn:</label>
				<input v-model="name" type="text" id="name">
				<span v-if="!name">Enter</span>
			</div>
			<button :disabled="formDisabled" type="submit">Skicka</button>
		</form>

		<!-- Comment Confirmation -->
		<p v-else>Tack för din kommentar!</p>

		<!-- Display Previous Comments -->
		<div v-if="comments.length > 0">
			<h2>Tidigare kommentarer:</h2>
			<ul>
				<li v-for="comment in comments" :key="comment.id">
					<p><strong>{{ comment.name }}:</strong> {{ comment.text }}</p>
					<p><em>{{ comment.date }}</em></p>
				</li>
			</ul>
		</div>
	</div>
</template>
  
<script>
export default {
	data() {
		return {
			comment: '',
			name: '',
			commentSent: false,
			comments: []
		};
	},
	computed: {
		formDisabled() {
			return this.commentSent || !this.comment || !this.name;
		}
	},
	created() {
		this.fetchComments();
	},
	methods: {
		async fetchComments() {
			try {
				const response = await fetch('/api/comments');
				const data = await response.json();
				this.comments = data;
			} catch (error) {
				console.error('Error fetching comments:', error);
			}
		},
		submitComment() {
			if (this.comment && this.name) {
				this.comments.push({
					name: this.name,
					text: this.comment,
					date: new Date().toLocaleString(),
				});

				this.commentSent = true;
			}
		}
	}
};
</script>
  
<style scoped>
/* Add your CSS styling here */
</style>
  