<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search for a Movie..."
      class="search"
      @input="searchInput"
      @keypress.enter="search"
    />
  </div>
</template>

<script>
export default {
  name: 'MovieSearch',
  methods: {
    searchInput(e) {
      this.$emit('searchInput', e)
    },
    search(e) {
      this.$emit('search', e)
    }
  }
}
</script>

<style scoped>
.search-bar {
  margin: 20px auto;
  max-width: 400px;
}

.search {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.search:focus {
  outline: none;
  border-color: #333;
}
</style>
