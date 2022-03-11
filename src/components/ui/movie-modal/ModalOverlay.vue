<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  clickedMovie: Object,
});

const emit = defineEmits(["onOpenMovieTrailerOverlay"]);
const store = useStore();

/* const releaseYear = props.clickedMovie.release_date.slice(0, 4); */
const clickedMovieDetails = computed(() => store.state.theMovieDB.movieDetails);

function openTrailerOverlay() {
  emit("onOpenMovieTrailerOverlay");
  store.dispatch("FETCH_MOVIE_TRAILER", props.clickedMovie.id);
}

onMounted(() => {
  store.dispatch("FETCH_MOVIE_DETAILS", props.clickedMovie.id);
});
</script>

<template>
  <div :class="classes.modal">
    <div :class="classes.modalTop">
      <div :class="classes.modalTopOverlay"></div>
      <img
        :src="`https://image.tmdb.org/t/p/w1280${props.clickedMovie.backdrop_path}`"
        alt="modal poster"
        :class="classes.modalImg"
      />
      <div :class="classes.modalTopCta">
        <h1 :class="classes.movieHeading">{{ props.clickedMovie.title }}</h1>
        <button :class="classes.playBtn" @click="openTrailerOverlay">
          <span><font-awesome-icon icon="play" :class="classes.playIcon" />Play</span>
        </button>
      </div>
    </div>

    <div :class="classes.modalInfo">
      <div :class="classes.modalInfoLeft">
        <h3 :class="classes.infoHeading">{{ releaseYear }}</h3>
        <p :class="classes.movieInfo">{{ props.clickedMovie.overview }}</p>
      </div>
      <div :class="classes.modalInfoRight">
        <div :class="classes.infoList">
          <h2 :class="classes.infoHeading">Genres</h2>
          <ul>
            <li
              v-for="genre in clickedMovieDetails.genres"
              :key="genre.index"
              :class="classes.listItem"
            >
              {{ genre.name }}
            </li>
          </ul>
        </div>
        <div :class="classes.infoList">
          <h2 :class="classes.infoHeading">Languages</h2>
          <ul>
            <li
              v-for="language in clickedMovieDetails.spoken_languages"
              :key="language.index"
              :class="classes.listItem"
            >
              {{ language.name }}
            </li>
          </ul>
        </div>
        <h2 :class="classes.ratingHeading">Rating</h2>
        <p :class="classes.rating">{{ clickedMovieDetails.vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/ui/movie-modal/modal-overlay';
</style>
