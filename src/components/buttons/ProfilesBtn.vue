<script setup></script>
<template>
  <button :class="classes.profilesBtn"><slot></slot></button>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/buttons/profiles-btn';
</style>
