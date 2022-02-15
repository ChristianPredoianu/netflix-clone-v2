<script setup>
import ResponsiveNav from '@/components/navs/ResponsiveNav.vue';
import BrowseHeroContent from '@/components/hero/BrowseHeroContent.vue';
import VideoControls from '@/components/ui/VideoControls.vue';
import { ref, defineExpose } from 'vue';

const isVideoMuted = ref(true);
const video = ref(null);

defineExpose({ video });

function toggleVideoSound(isMuted, isSoundOn) {
  isVideoMuted.value = isMuted;
  video.value.muted = isSoundOn;
}

function replayVideo() {
  if (video.value.ended) video.value.play();
}
</script>

<template>
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
</template>

<style lang="scss" module="classes">
@use '@/sass/views/browse';
</style>
