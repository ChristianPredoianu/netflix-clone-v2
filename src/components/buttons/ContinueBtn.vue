<script setup></script>

<template>
  <button type="submit" :class="classes.continueBtn"><slot></slot></button>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/buttons/continue-btn';
</style>
