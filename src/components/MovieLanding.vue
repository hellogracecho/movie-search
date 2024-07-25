<template>
  <div class="App">
    <main>
      <MovieSearch @searchInput="searchInput" @search="search" />

      <div class="mt-8 md:mt-10">
        <h4 v-show="this.errorMessage" class="mb-4 text-warning">
          <span class="text-3xl">😬</span> Oops! {{ this.errorMessage }}. Please try again.
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div
            v-for="movie in filteredResults"
            :key="movie.imdbID"
            class="flex flex-col border border-secondary rounded-lg shadow-sm shadow-secondary"
          >
            <div class="aspect-w-2 aspect-h-3">
              <img class="rounded-t-lg object-cover" :src="movie.Poster" alt="Movie Poster" />
            </div>
            <div class="grow flex flex-col justify-between px-3 py-2">
              <div>
                <h3 class="mb-0.5 text-lg leading-tight text-primary">{{ movie.Title }}</h3>
                <p class="mb-3 text-sm opacity-80">{{ movie.Year }}</p>
              </div>
              <!-- this button does nothing -->
              <button
                class="w-full h-10 py-2 px-3 rounded-lg focus:outline-none text-white bg-secondary hover:bg-opacity-80 focus:ring-4 focus:ring-green-300 uppercase"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
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
      apiUrl: 'http://www.omdbapi.com/?apikey=ab5f3b95',
      errorMessage: ''
    }
  },
  mounted() {
    this.fetchInitialMovies()
  },
  methods: {
    fetchInitialMovies() {
      // search parameter is required on OMDb API
      return axios(this.apiUrl + '&s=' + 'grace')
        .then((response) => {
          this.results = response.data.Search || []
        })
        .catch((error) => {
          console.log(error)
          return []
        })
    },
    searchInput(e) {
      this.searchString = e.target.value
    },
    search(e) {
      // TODO: debounce for better UX search
      axios(this.apiUrl + '&s=' + this.searchString).then(({ data }) => {
        this.results = data.Search || []
        this.errorMessage = data.Response === 'False' ? data.Error : ''
      })
      if (e.key === 'Enter') {
      }
    }
  },
  computed: {
    filteredResults() {
      return this.results
    }
  }
}
</script>
