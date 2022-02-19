<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    movieData: Object,
    heading: String,
  },

  setup(props) {
    console.log(props.heading);

    return {
      modules: [Navigation],
      props,
    };
  },
};
</script>

<template>
  <h3>{{ props.heading }}</h3>
  <swiper
    :navigation="true"
    :modules="modules"
    class="mySwiper"
    :slidesPerView="3"
  >
    <swiper-slide v-for="movie in movieData" :key="movie.id">
      <img
        :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
        :class="swiperSlideImg"
        alt="movie poster"
      />
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/swiper/swiper';
</style>
