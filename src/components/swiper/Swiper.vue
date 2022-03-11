<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useModal } from "@/composables/modal";
import { useProfileMovieList } from "@/composables/profileMovieList";
import MovieModal from "@/components/ui/movie-modal/MovieModal.vue";
import MovieTrailerOverlay from "@/components/ui/movie-modal/ModalTrailerOverlay.vue";
import Backdrop from "@/components/ui/movie-modal/Backdrop.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
    MovieModal,
    Backdrop,
    MovieTrailerOverlay,
  },

  props: {
    movieData: Object,
    heading: String,
  },

  setup(props) {
    const store = useStore();

    const { isMovieModalOpen, clickedMovie, openModal, closeModals } = useModal();
    const { addToProfileList } = useProfileMovieList();

    const isBackdropOpen = ref(false);
    const isMovieTrailerOpen = ref(false);

    function openMovieTrailer(movie) {
      store.dispatch("FETCH_MOVIE_TRAILER", movie.id);
      isBackdropOpen.value = true;
      isMovieTrailerOpen.value = true;
    }

    function closeTrailerModal(bool) {
      isBackdropOpen.value = bool;
      isMovieTrailerOpen.value = bool;
    }

    return {
      modules: [Navigation],
      props,
      addToProfileList,
      openModal,
      isMovieModalOpen,
      clickedMovie,
      closeTrailerModal,
      openMovieTrailer,
      isBackdropOpen,
      closeModals,
    };
  },
};
</script>

<template>
  <div :class="classes.swiper">
    <h3 :class="classes.swiperHeading">{{ props.heading }}</h3>
    <swiper
      :navigation="true"
      :modules="modules"
      class="mySwiper"
      :slidesPerView="2"
      :space-between="20"
      :breakpoints="{
        '900': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        '1280': {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }"
    >
      <swiper-slide v-for="movie in movieData" :key="movie.id">
        <img
          :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
          alt="movie poster"
        />
        <div :class="classes.swiperOverlay">
          <h4 :class="classes.movieHeading">{{ movie.original_title }}</h4>
          <h5>Release: {{ movie.release_date }}</h5>
          <div :class="classes.overlayIcons">
            <font-awesome-icon icon="play" @click="openMovieTrailer(movie)" />
            <font-awesome-icon icon="plus-square" @click="addToProfileList(movie)" />
            <font-awesome-icon icon="info-circle" @click="openModal(movie)" />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <MovieModal
    @onCloseModals="closeModals"
    v-if="isMovieModalOpen"
    :clickedMovie="clickedMovie"
  />
  <Backdrop v-if="isBackdropOpen" @onCloseModals="closeTrailerModal" />
  <MovieTrailerOverlay
    v-if="isBackdropOpen"
    @onCloseMovieTrailerOverlay="closeTrailerModal"
  />
</template>

<style lang="scss" module="classes">
@use '@/sass/components/swiper/swiper';
</style>
