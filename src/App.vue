<script setup>
import MovieLanding from './components/MovieLanding.vue'
</script>

<template>
  <header>
    <!-- Logo -->
    <!-- <img alt="App logo" class="logo" src="./assets/??.svg" width="125" height="125" /> -->

    <div className="text-lg text-primary underline">Movie Data</div>
    <div className="text-2xl text-red underline">XL Text</div>
  </header>

  <main>
    <MovieLanding />
    <TheWelcome />
  </main>
</template>

<style scoped></style>
