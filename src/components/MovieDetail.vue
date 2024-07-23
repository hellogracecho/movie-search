<template>
  <div class="modal" @click.self="closeDetail">
    <div class="modal-content">
      <span class="close" @click="closeDetail">&times;</span>
      <h2>{{ selected.Title }}</h2>
      <span>{{ selected.Year }}</span>
      <p class="rating">Rating: {{ selected.imdbRating }}</p>
      <div class="about">
        <img :src="selected.Poster" alt="Movie Poster" />
        <p>{{ selected.Plot }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieDetail',
  props: {
    selected: Object
  },
  methods: {
    closeDetail() {
      this.$emit('closeDetail')
    }
  }
}
</script>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fefefe;
  border-radius: 8px;
  padding: 20px;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>
