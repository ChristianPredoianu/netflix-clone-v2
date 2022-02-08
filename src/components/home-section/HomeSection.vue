<script setup></script>

<template>
  <section :class="classes.homeSection">
    <slot></slot>
  </section>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/home-section/home-section';
</style>
