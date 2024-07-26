<template>
  <p class="mb-2 text-secondary">
    Search movies by typing and hit enter key or click search button.
  </p>
  <div class="flex">
    <input
      type="text"
      placeholder="Search movies..."
      class="block w-full max-w-lg h-12 p-2.5 rounded-l-lg bg-gray-50 border border-secondary focus:ring-primary focus:border-primary"
      :value="searchQuery"
      @input="updateSearchQuery"
      @keypress.enter="search"
    />
    <button
      type="button"
      @click.prevent="search"
      class="w-12 h-12 p-3 rounded-r-lg focus:outline-none text-white bg-secondary hover:bg-opacity-80 focus:ring-4 focus:ring-primary font-bold uppercase"
    >
      <span class="sr-only">Search</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="stroke-white"
          d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <button
      @click="clearInput"
      class="sm:ml-3 py-1 px-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-primary text-secondary hover:underline text-xs md:text-sm uppercase"
    >
      Clear Search
    </button>
  </div>
</template>

<script>
export default {
  name: 'MovieSearch',
  props: {
    searchQuery: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateSearchQuery(e) {
      this.$emit('update:searchQuery', e.target.value)
    },
    search() {
      this.$emit('search', this.searchQuery)
    },
    clearInput() {
      this.$emit('update:searchQuery', '')
    }
  }
}
</script>
