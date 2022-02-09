<script setup></script>

<template>
  <div>
    <button type="submit" :class="classes.continueBtn"><slot></slot></button>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/buttons/continue-btn';
</style>
