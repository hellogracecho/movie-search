<template>
  <div class="App">
    <header class="App-header">
      <h1>Search the Movie</h1>
    </header>
    <main>
      <MovieSearch @searchInput="searchInput" @search="search" />
      <div class="container">
        <div
          v-for="movie in filteredResults"
          :key="movie.imdbID"
          class="item"
          @click="openDetail(movie.imdbID)"
        >
          <img :src="movie.Poster" alt="Movie Poster" />
          <h3>{{ movie.Title }}</h3>
        </div>
      </div>
      <MovieDetail v-if="selected.Title" :selected="selected" @closeDetail="closeDetail" />
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
      apiurl: 'http://www.omdbapi.com/?i=tt3896198&apikey=ab5f3b95'
    }
  },
  mounted() {
    // Fetch initial movies based on specific keywords
    this.fetchInitialMovies()
  },
  methods: {
    fetchInitialMovies() {
      // Keywords for initial movie search
      const keywords = ['hindi', 'avengers', 'comedy']

      // Fetch movies for each keyword
      // and combine the results
      Promise.all(
        keywords.map((keyword) => {
          return axios(this.apiurl + '&s=' + keyword)
            .then(({ data }) => data.Search || [])
            .catch((error) => {
              console.error('Error fetching movies:', error)
              return []
            })
        })
      ).then((results) => {
        this.results = results.flat()
        // Combine arrays of movies
      })
    },
    searchInput(e) {
      this.s = e.target.value
    },
    search(e) {
      if (e.key === 'Enter') {
        axios(this.apiurl + '&s=' + this.s).then(({ data }) => {
          this.results = data.Search || []
        })
      }
    },
    openDetail(id) {
      axios(this.apiurl + '&i=' + id).then(({ data }) => {
        this.selected = data
      })
    },
    closeDetail() {
      this.selected = {}
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
