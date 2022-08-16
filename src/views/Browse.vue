<script setup>
import { ref, defineExpose, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useSearchMovie } from '@/composables/searchMovie';
import ResponsiveNav from '@/components/navs/ResponsiveNav.vue';
import BrowseHeroContent from '@/components/hero/BrowseHeroContent.vue';
import VideoControls from '@/components/ui/VideoControls.vue';
import Swiper from '@/components/swiper/Swiper.vue';
import NetflixBorder from '@/components/ui/NetflixBorder.vue';
import Footer from '@/components/footer/Footer.vue';

const store = useStore();

const isVideoMuted = ref(true);

const video = ref(null);

const movieData = computed(() => store.state.theMovieDB.movieData);

const { searchTerm, setSearchTerm, searchMovie } = useSearchMovie();

defineExpose({ video });

function toggleVideoSound(isMuted, isSoundOn) {
  isVideoMuted.value = isMuted;
  video.value.muted = isSoundOn;
}

function replayVideo() {
  if (video.value.ended) video.value.play();
}
console.log(movieData.value);
onMounted(() => {
  store.dispatch('FETCH_MOVIES');
  store.dispatch('SET_USER_MOVIE_LIST_FROM_DB');
});
</script>

<template>
  <div :class="classes.browse">
    <section :class="classes.hero">
      <ResponsiveNav @search="setSearchTerm" />
      <video :class="classes.video" ref="video" muted autoplay>
        <source src="@/assets/videos/showcase.mp4" type="video/mp4" />
      </video>
      <div :class="classes.overlay"></div>
      <div class="container">
        <BrowseHeroContent />
        <VideoControls
          @toggle-video-sound="toggleVideoSound"
          @replay-video="replayVideo"
          :isVideoMuted="isVideoMuted"
        />
      </div>
    </section>
    <div class="container">
      <section>
        <Swiper
          v-for="category in movieData"
          :key="category.category"
          :movieData="
            !searchTerm ? category.movies : searchMovie(category.movies)
          "
          :heading="
            !searchTerm
              ? category.category
              : `${searchMovie(category.movies).length} movies found in ${
                  category.category
                }`
          "
        />
      </section>
    </div>
  </div>
  <NetflixBorder />
  <Footer />
</template>

<style lang="scss" module="classes">
@use '@/sass/views/browse';
</style>
