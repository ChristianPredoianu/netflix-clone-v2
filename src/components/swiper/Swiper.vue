<script>
import { useModal } from "@/composables/modal";
import MovieModal from "@/components/ui/movie-modal/MovieModal.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
    MovieModal,
  },

  props: {
    movieData: Object,
    heading: String,
  },

  setup(props) {
    const { isMovieModalOpen, clickedMovie, openModal, closeModals } = useModal();

    return {
      modules: [Navigation],
      props,
      openModal,
      isMovieModalOpen,
      clickedMovie,
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
            <font-awesome-icon icon="play" />
            <font-awesome-icon icon="plus-square" />
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
</template>

<style lang="scss" module="classes">
@use '@/sass/components/swiper/swiper';
</style>
