<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    movieData: Object,
    heading: String,
  },

  emits: ["onOpenModal"],

  setup(props, context) {
    function openModal(movie) {
      console.log(movie);
      context.emit("onOpenModal", movie);
    }

    return {
      modules: [Navigation],
      props,
      openModal,
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
</template>

<style lang="scss" module="classes">
@use '@/sass/components/swiper/swiper';
</style>
