<script setup></script>

<template>
  <section :class="classes.homeSection">
    <div class="container">
      <div :class="classes.homeWrapper">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/home-section/home-section';
</style>
