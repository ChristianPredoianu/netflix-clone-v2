<script>
import { onMounted } from "vue";
import { useModal } from "@/composables/modal";
import { useMovieTrailer } from "@/composables/movieTrailer";
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
    const { isMovieModalOpen, clickedMovie, openModal, closeModals } = useModal();

    const {
      openMovieTrailerModal,
      closeMovieTrailerModal,
      isBackdropOpen,
    } = useMovieTrailer();

    const {
      addToProfileList,
      deleteFromProfileList,
      isMovieInUserList,
    } = useProfileMovieList();

    return {
      modules: [Navigation],
      props,
      addToProfileList,
      deleteFromProfileList,
      isMovieInUserList,
      openModal,
      isMovieModalOpen,
      clickedMovie,
      openMovieTrailerModal,
      closeMovieTrailerModal,
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
        '630': {
          slidesPerView: 3,
          spaceBetween: 50,
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
            <font-awesome-icon icon="play" @click="openMovieTrailerModal(movie)" />
            <font-awesome-icon
              icon="plus-square"
              @click="addToProfileList(movie)"
              v-if="!isMovieInUserList(movie)"
            />
            <font-awesome-icon
              icon="times-circle"
              v-else
              @click="deleteFromProfileList(movie)"
            />
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
  <teleport to="#backdrop-root">
    <Backdrop v-if="isBackdropOpen" @onCloseModals="closeMovieTrailerModal" />
  </teleport>
  <teleport to="#overlay-root">
    <MovieTrailerOverlay
      v-if="isBackdropOpen"
      @onCloseMovieTrailerOverlay="closeMovieTrailerModal"
  /></teleport>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/swiper/swiper';
</style>
