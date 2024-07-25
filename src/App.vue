<script setup>
import MovieLanding from './components/MovieLanding.vue'
</script>

<template>
  <header>
    <!-- Logo -->
    <!-- <img alt="App logo" class="logo" src="./assets/??.svg" width="125" height="125" /> -->

    <div>Movie Data</div>
  </header>

  <main>
    <MovieLanding />
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    font-size: 2rem;
  }
}
</style>
