<script setup>
const props = defineProps({
  heading: String,
  subHeading: String,
});
</script>

<template>
  <div :class="classes.homeSectionTextContainer">
    <h2 :class="classes.homeSectionHeading">{{ props.heading }}</h2>
    <h3 :class="classes.homeSectionSubHeading">{{ props.subHeading }}</h3>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/home-section/home-section-headings';
</style>
