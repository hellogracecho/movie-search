<template>
  <div class="App">
    <main>
      <MovieSearch @searchInput="searchInput" @search="search" />

      <p v-show="this.errorMessage">Error: {{ this.errorMessage }}</p>

      <div class="container">
        <div v-for="movie in filteredResults" :key="movie.imdbID" class="item">
          <img :src="movie.Poster" alt="Movie Poster" />
          <h3>{{ movie.Title }}</h3>
          <p>{{ movie.Year }}</p>
          <!-- this button does nothing -->
          <button>Read More</button>
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
      return axios(this.apiUrl + '&s=' + 'canada')
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
        this.errorMessage = data.Response === 'False' ? data.Error : 'updated'
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
