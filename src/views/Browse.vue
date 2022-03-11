<script setup>
import { ref, defineExpose, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useModal } from "@/composables/modal";
import ResponsiveNav from "@/components/navs/ResponsiveNav.vue";
import BrowseHeroContent from "@/components/hero/BrowseHeroContent.vue";
import VideoControls from "@/components/ui/VideoControls.vue";
import Swiper from "@/components/swiper/Swiper.vue";
import MovieModal from "@/components/ui/movie-modal/MovieModal.vue";

const store = useStore();
const { isMovieModalOpen, clickedMovie, openModal, closeModals } = useModal();

const isVideoMuted = ref(true);
const video = ref(null);

defineExpose({ video });

const movieData = computed(() => store.state.theMovieDB.movieData),
  isLoadingData = computed(() => store.state.theMovieDB.isLoadingData);

onMounted(() => {
  store.dispatch("FETCH_MOVIES");
});

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
        <Swiper
          :movieData="movieData.popular"
          heading="Popular Movies"
          @onOpenModal="openModal"
        />
        <Swiper
          :movieData="movieData.action"
          heading="Action Movies"
          @onOpenModal="openModal"
        />
        <Swiper
          :movieData="movieData.comedy"
          heading="Comedy Movies"
          @onOpenModal="openModal"
        />
        <Swiper
          :movieData="movieData.animation"
          heading="Animation Movies"
          @onOpenModal="openModal"
        />
        <Swiper
          :movieData="movieData.crime"
          heading="Crime Movies"
          @onOpenModal="openModal"
        />
        <Swiper
          :movieData="movieData.drama"
          heading="Drama Movies"
          @onOpenModal="openModal"
        />
        <Swiper
          :movieData="movieData.horror"
          heading="Horror Movies"
          @onOpenModal="openModal"
        />
        <Swiper
          :movieData="movieData.sciFi"
          heading="Sci Fi Movies"
          @onOpenModal="openModal"
        />
      </div>
    </div>
  </div>
  <MovieModal
    @onCloseModals="closeModals"
    v-if="isMovieModalOpen"
    :clickedMovie="clickedMovie"
  />
</template>

<style lang="scss" module="classes">
@use '@/sass/views/browse';
</style>
