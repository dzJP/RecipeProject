<template>
    <div class="comments">
      <h3>Comments</h3>
      <ul>
        <li v-for="comment in comments" :key="comment.id">{{ comment.text }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        comments: [], // Initialize an empty array to hold comments
      };
    },
    methods: {
      fetchComments() {
        /**
         * Send a GET request to fetch comments.
         * Use the REST Client extension in your VS Code to send this request.
         *
         * Example request in REST Client:
         * 
         * @name Fetch Comments
         * @request GET https://api.example.com/comments
         */
      },
    },
    created() {
      this.fetchComments(); // Fetch comments when the component is created
    },
  };
  </script>
  
  <style scoped>
  /* Add CSS styles specific to the comments component */
  </style>
  