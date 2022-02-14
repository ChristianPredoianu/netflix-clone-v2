<script setup>
import ResponsiveNav from '@/components/navs/ResponsiveNav.vue';
import VideoBackground from '@/components/ui/VideoBackground.vue';
import { ref, defineExpose } from 'vue';

const isVideoMuted = ref(true);

const video = ref(null);

defineExpose({ video });

console.log(video);
</script>

<template>
  <div :class="classes.hero">
    <ResponsiveNav />
    <VideoBackground ref="video" />
    <div :class="classes.overlay"></div>
    <div class="container">
      <div :class="classes.heroContent">
        <div :class="classes.heroHeadings">
          <h1 :class="classes.heroPrimaryHeading" ref="target">
            The Jack in the box: Awakening
          </h1>
          <h2 :class="classes.heroSecondaryHeading">
            When a vintage Jack-in-the-box is opened by a dying woman, she
            enters into a deal with the demon within that would see her illness
            cured in return for helping it claim six innocent victims.
          </h2>
        </div>
        <div :class="classes.heroCta">
          <button :class="[classes['btn'], classes['btn--play']]">
            <span :class="classes.btnSpan"
              ><font-awesome-icon icon="play" /></span
            >Play
          </button>
          <button :class="[classes['btn'], classes['btn--info']]">
            <span :class="classes.btnSpan"
              ><font-awesome-icon icon="info-circle" /></span
            >MoreInfo
          </button>
        </div>
      </div>
      <div :class="classes.videoControls">
        <font-awesome-icon
          :icon="isVideoMuted ? 'volume-mute' : 'volume-up'"
          :class="classes.videoControlIcon"
        />

        <!-- <font-awesome-icon icon="volume-up" :class="classes.videoControlIcon" /> -->

        <font-awesome-icon icon="history" :class="classes.videoControlIcon" />
        <div :class="classes.recAge">13+</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/views/browse';
</style>
