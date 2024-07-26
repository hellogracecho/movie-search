<template>
  <div class="App">
    <main class="grid grid-cols-1 lg:grid-cols-5 gap-12">
      <section class="lg:col-span-4">
        <MovieSearch
          :searchQuery="searchString"
          @update:searchQuery="searchInput"
          @search="search"
        />
        <div class="mt-8 md:mt-10">
          <h4 v-show="this.errorMessage" class="mb-4 text-warning">
            <span class="text-3xl">😬</span> Oops! {{ this.errorMessage }}. Please try again.
          </h4>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8"
          >
            <div
              v-for="movie in filteredResults"
              :key="movie.imdbID"
              class="flex flex-col border border-secondary rounded-lg shadow-sm shadow-secondary"
            >
              <div class="aspect-w-2 aspect-h-3">
                <img
                  class="rounded-t-lg object-cover"
                  :src="movie.Poster !== 'N/A' ? movie.Poster : placeholderImage"
                  alt="Movie Poster"
                />
              </div>
              <div class="grow flex flex-col justify-between px-3 py-2">
                <div>
                  <h2 class="mb-0.5 text-lg leading-tight text-primary">{{ movie.Title }}</h2>
                  <p class="mb-3 text-sm opacity-80">{{ movie.Year }}</p>
                </div>
                <!-- this button does nothing -->
                <button
                  class="w-full h-10 py-2 px-3 rounded-lg focus:outline-none text-white bg-secondary hover:bg-opacity-80 focus:ring-4 focus:ring-primary uppercase"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="hidden lg:block lg:col-span-1">
        <h3 class="mb-2">Suggested Keywords:</h3>
        <div class="flex gap-2 flex-wrap">
          <div v-for="keyword in suggestedKeywords" :key="keyword">
            <button
              @click.prevent="search(keyword)"
              class="h-8 py-1 px-2 rounded-lg focus:outline-none border border-primary text-primary hover:bg-primary hover:bg-opacity-10 focus:ring-4 focus:ring-secondary text-sm uppercase"
            >
              {{ keyword }}
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import MovieSearch from './MovieSearch.vue'

export default {
  name: 'MovieLanding',
  components: {
    MovieSearch
  },
  data() {
    return {
      results: [],
      searchString: '',
      apiUrl: 'https://www.omdbapi.com/?apikey=ab5f3b95',
      errorMessage: '',
      placeholderImage: '/placeholder.png',
      suggestedKeywords: ['paris', 'olympic', '2024', 'vancouver', 'kimchi', 'bbq']
    }
  },
  mounted() {
    this.fetchInitialMovies()
  },
  methods: {
    fetchInitialMovies() {
      return axios(this.apiUrl + '&s=' + 'grace')
        .then((response) => {
          this.results = response.data.Search || []
        })
        .catch((error) => {
          console.log(error)
          return []
        })
    },
    searchInput(query) {
      this.searchString = query
    },
    search(query) {
      if (typeof query === 'string') {
        // when clicking suggested keywords
        this.searchString = query
      }

      axios(this.apiUrl + '&s=' + this.searchString).then(({ data }) => {
        this.results = data.Search || []
        this.errorMessage = data.Response === 'False' ? data.Error : ''
      })
    }
  },
  computed: {
    filteredResults() {
      return this.results
    }
  }
}
</script>
