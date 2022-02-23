<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const selectedGenre = ref('popular');

const movieGenres = computed(() => store.getters.GET_GENRES);

function onChangeOption(event) {
  selectedGenre.value = event.target.value;
  store.dispatch('SET_USER_SELECTED_GENRE', selectedGenre.value);
}
</script>

<template>
  <div :class="classes.filter">
    <h1>Movies</h1>
    <select
      :class="classes.select"
      v-model="selectedGenre"
      @change="onChangeOption($event)"
    >
      <option
        v-for="movieGenre in movieGenres"
        :key="movieGenre.index"
        :value="movieGenre"
      >
        {{ movieGenre.charAt(0).toUpperCase() + movieGenre.slice(1) }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/filters/genres-filter';
</style>
