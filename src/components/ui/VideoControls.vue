<script setup>
const props = defineProps({
  isVideoMuted: Boolean,
});

const emits = defineEmits(['toggle-video-sound', 'replay-video']);

function toggleSound(isMuted, isSoundOn) {
  emits('toggle-video-sound', isMuted, isSoundOn);
}

function replayVideo() {
  emits('replay-video');
}
</script>

<template>
  <div :class="classes.videoControls">
    <font-awesome-icon
      v-if="isVideoMuted"
      :icon="'volume-mute'"
      :class="classes.videoControlIcon"
      @click="toggleSound(false, false)"
    />

    <font-awesome-icon
      v-if="!isVideoMuted"
      icon="volume-up"
      :class="classes.videoControlIcon"
      @click="toggleSound(true, true)"
    />

    <font-awesome-icon
      icon="history"
      :class="classes.videoControlIcon"
      @click="replayVideo"
    />
    <div :class="classes.recAge">13+</div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/ui/video-controls';
</style>
