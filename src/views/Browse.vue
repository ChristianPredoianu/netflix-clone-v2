<script setup>
import { ref, defineExpose, computed, onMounted } from "vue";
import { useStore } from "vuex";
import ResponsiveNav from "@/components/navs/ResponsiveNav.vue";
import BrowseHeroContent from "@/components/hero/BrowseHeroContent.vue";
import VideoControls from "@/components/ui/VideoControls.vue";
import Swiper from "@/components/swiper/Swiper.vue";

const store = useStore();

const isVideoMuted = ref(true);
const video = ref(null);

defineExpose({ video });

onMounted(() => {
  store.dispatch("FETCH_MOVIES");
  store.dispatch("SET_USER_MOVIE_LIST_FROM_DB");
});

const movieData = computed(() => store.state.theMovieDB.movieData),
  isLoadingData = computed(() => store.state.theMovieDB.isLoadingData);

function toggleVideoSound(isMuted, isSoundOn) {
  isVideoMuted.value = isMuted;
  video.value.muted = isSoundOn;
}

function replayVideo() {
  if (video.value.ended) video.value.play();
}
</script>

<template>
  <div :class="classes.browse">
    <div :class="classes.hero">
      <ResponsiveNav />
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
    </div>
    <div class="container">
      <div :class="classes.swiperContainer">
        <Swiper :movieData="movieData.popular" heading="Popular Movies" />
        <Swiper :movieData="movieData.action" heading="Action Movies" />
        <Swiper :movieData="movieData.comedy" heading="Comedy Movies" />
        <Swiper :movieData="movieData.animation" heading="Animation Movies" />
        <Swiper :movieData="movieData.crime" heading="Crime Movies" />
        <Swiper :movieData="movieData.drama" heading="Drama Movies" />
        <Swiper :movieData="movieData.horror" heading="Horror Movies" />
        <Swiper :movieData="movieData.sciFi" heading="Sci Fi Movies" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/views/browse';
</style>
