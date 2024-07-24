<template>
  <div class="App">
    <header class="App-header">
      <h1>Search the Movie</h1>
    </header>
    <main>
      <MovieSearch @searchInput="searchInput" @search="search" />
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
import MovieDetail from './MovieDetail.vue'

export default {
  name: 'MovieLanding',
  components: {
    MovieSearch,
    MovieDetail
  },
  data() {
    return {
      s: '', // Initialize search query
      results: [], // Initialize results array
      selected: {}, // Initialize selected movie object
      apiurl: 'http://www.omdbapi.com/?apikey=ab5f3b95'
      //http://www.omdbapi.com/?apikey=ab5f3b95&
    }
  },
  mounted() {
    // Fetch initial movies based on specific keywords
    this.fetchInitialMovies()
  },
  methods: {
    fetchInitialMovies() {
      return axios(this.apiurl + '&s=' + 'korean')
        .then(({ data }) => {
          this.results = data.Search || []
        })
        .catch((error) => {
          console.error('Error fetching movies:', error)
          return []
        })
    },
    searchInput(e) {
      this.s = e.target.value
    },
    search(e) {
      if (e.key === 'Enter') {
        // TODO: debounce for better UX search
        axios(this.apiurl + '&s=' + this.s).then(({ data }) => {
          console.log(data)
          this.results = data.Search || []
        })
      }
    }
  },
  computed: {
    filteredResults() {
      // Filter results based on search query
      return this.results.filter((movie) =>
        movie.Title.toLowerCase().includes(this.s.toLowerCase())
      )
    }
  }
}
</script>
