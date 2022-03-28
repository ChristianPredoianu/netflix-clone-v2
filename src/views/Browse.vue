<script setup>
import { ref, defineExpose, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useSearchMovie } from "@/composables/searchMovie";
import ResponsiveNav from "@/components/navs/ResponsiveNav.vue";
import BrowseHeroContent from "@/components/hero/BrowseHeroContent.vue";
import VideoControls from "@/components/ui/VideoControls.vue";
import Swiper from "@/components/swiper/Swiper.vue";
import NetflixBorder from "@/components/ui/NetflixBorder.vue";
import Footer from "@/components/footer/Footer.vue";

const store = useStore();

const isVideoMuted = ref(true),
  video = ref(null);

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

onMounted(() => {
  store.dispatch("FETCH_MOVIES");
  store.dispatch("SET_USER_MOVIE_LIST_FROM_DB");
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
          :movieData="!searchTerm ? movieData.popular : searchMovie(movieData.popular)"
          :heading="
            !searchTerm
              ? `Popular Movies`
              : `${searchMovie(movieData.popular).length} movies found in popular`
          "
        />
        <Swiper
          :movieData="!searchTerm ? movieData.action : searchMovie(movieData.action)"
          :heading="
            !searchTerm
              ? `Action Movies`
              : `${searchMovie(movieData.action).length} movies found in action`
          "
        />
        <Swiper
          :movieData="!searchTerm ? movieData.comedy : searchMovie(movieData.comedy)"
          :heading="
            !searchTerm
              ? `Action Movies`
              : `${searchMovie(movieData.comedy).length} movies found in comedy`
          "
        />
        <Swiper
          :movieData="
            !searchTerm ? movieData.animation : searchMovie(movieData.animation)
          "
          :heading="
            !searchTerm
              ? `Animation Movies`
              : `${searchMovie(movieData.animation).length} movies found in animation`
          "
        />
        <Swiper
          :movieData="!searchTerm ? movieData.crime : searchMovie(movieData.crime)"
          :heading="
            !searchTerm
              ? `Crime Movies`
              : `${searchMovie(movieData.crime).length} movies found in crime`
          "
        />
        <Swiper
          :movieData="!searchTerm ? movieData.drama : searchMovie(movieData.drama)"
          :heading="
            !searchTerm
              ? `Drama Movies`
              : `${searchMovie(movieData.drama).length} movies found in drama`
          "
        />
        <Swiper
          :movieData="!searchTerm ? movieData.horror : searchMovie(movieData.horror)"
          :heading="
            !searchTerm
              ? `Horror Movies`
              : `${searchMovie(movieData.horror).length} movies found in horror`
          "
        />
        <Swiper
          :movieData="!searchTerm ? movieData.sciFi : searchMovie(movieData.sciFi)"
          :heading="
            !searchTerm
              ? `SciFi Movies`
              : `${searchMovie(movieData.sciFi).length} movies found in SciFi`
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
