<template>
    <div class="star-rating">
      <!-- Render stars based on the 'rating' data property -->
      <i
        v-for="index in maxStars"
        :key="index"
        @click="rate(index)"
        :class="['star', { 'filled': index <= rating }]"
      >
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
    },
    data() {
      return {
        rating: '',
      };
    },
    methods: {
      rate(index) {
        // Emit a custom event to update the parent component's 'value' prop
        this.rating = index;
        this.$emit('star-input', this.rating);
      },
    },
  };
  </script>
  

  
  <style scoped>
  .star-rating {
    font-size: 0; /* Remove whitespace between inline-block stars */
  }
  
  .star {
    display: inline-block;
    cursor: pointer;
    font-size: 24px; /* Adjust the size of the stars as needed */
    color: #ccc; /* Default star color (empty) */
  }
  
  .star.filled {
    color: #fdd835; /* Filled star color (e.g., yellow) */
  }
  </style>