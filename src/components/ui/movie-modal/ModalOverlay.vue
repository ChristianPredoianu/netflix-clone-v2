<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  clickedMovie: Object,
});

const emit = defineEmits(["onOpenMovieTrailerOverlay", "onCloseModals"]);
const store = useStore();

const releaseYear = props.clickedMovie.release_date.slice(0, 4);
//Additional info like spoken languages & genres that props.clickedMovie doe's not contain
const clickedMovieDetails = computed(() => store.state.theMovieDB.movieDetails);

function openTrailerOverlay() {
  emit("onOpenMovieTrailerOverlay");
  store.dispatch("FETCH_MOVIE_TRAILER", props.clickedMovie.id);
}

function closeModal() {
  emit("onCloseModals");
}

onMounted(() => {
  store.dispatch("FETCH_MOVIE_DETAILS", props.clickedMovie.id);
});
</script>

<template>
  <div :class="classes.modal">
    <font-awesome-icon icon="times" :class="classes.close" @click="closeModal" />
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

    <div :class="classes.movieInfo">
      <div :class="classes.movieInfoLeft">
        <div :class="classes.infoLists">
          <h2 :class="classes.releaseYear">{{ releaseYear }}</h2>
          <p :class="classes.overview">{{ props.clickedMovie.overview }}</p>
          <h3 :class="classes.infoHeading">Runtime</h3>
          <p :class="classes.listItem">{{ clickedMovieDetails.runtime }} minutes</p>
        </div>
      </div>
      <div :class="classes.movieInfoRight">
        <div :class="classes.infoLists">
          <h3 :class="classes.infoHeading">Genres</h3>
          <ul>
            <li
              v-for="genre in clickedMovieDetails.genres"
              :key="genre.index"
              :class="classes.listItem"
            >
              {{ genre.name }}
            </li>
          </ul>
          <h3 :class="classes.infoHeading">Spoken languages</h3>
          <ul>
            <li
              v-for="language in clickedMovieDetails.spoken_languages"
              :key="language.index"
              :class="classes.listItem"
            >
              {{ language.name }}
            </li>
          </ul>
          <h3 :class="classes.infoHeading">IMDB rating:</h3>
          <p :class="classes.listItem">
            {{ clickedMovieDetails.vote_average }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/ui/movie-modal/modal-overlay';
</style>
