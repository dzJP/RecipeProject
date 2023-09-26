<template>
    <div class="rating">
      <h3>Rating</h3>
      <p>Rating: {{ rating }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        rating: null, // Initialize rating to null
      };
    },
    methods: {
      fetchRating() {
        /**
         * Send a GET request to fetch rating.
         * Use the REST Client extension in your VS Code to send this request.
         *
         * Example request in REST Client:
         * 
         * @name Fetch Rating
         * @request GET https://api.example.com/rating
         */
      },
    },
    created() {
      this.fetchRating(); // Fetch rating when the component is created
    },
  };
  </script>
  
  <style scoped>
  /* Add CSS styles specific to the rating component */
  </style>
  