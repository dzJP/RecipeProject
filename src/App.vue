<!-- App.vue -->
<template>
  <div id="app">
    <header>
      <h1>Recipe Website</h1>
      <router-link to="/">Home</router-link>
      <router-link to="/recipe">Recipe</router-link>
      <router-link to="/category">Category</router-link>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <p>&copy; 2023 Recipe Website</p>
    </footer>
  </div>
</template>
